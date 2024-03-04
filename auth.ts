import { PrismaAdapter } from '@auth/prisma-adapter'
import NextAuth, { type DefaultSession } from 'next-auth'
import { prisma } from './app/config/prisma'
import Github from 'next-auth/providers/github'
import Google from 'next-auth/providers/google'

declare module 'next-auth' {
  interface Session {
    user: {
      /** The user's id. */
      id: string
      isSubscriber: boolean
    } & DefaultSession['user']
  }
}

export const {
  handlers: { GET, POST },
  auth
} = NextAuth({
  adapter: PrismaAdapter(prisma),
  providers: [Github, Google],
  callbacks: {
    jwt({ token, profile, account }) {
      if (profile) {
        token.id = profile.id
        token.image = profile.avatar_url || profile.picture
      }
      return token
    },
    session: async ({ session, token, user }) => {
      if (session?.user && token?.id) {
        session.user.id = String(token.id)
        const userSubscription = await prisma.subscription.findFirst({
          where: { userId: session.user.id }
        })
        session.user.isSubscriber =
          userSubscription &&
          userSubscription.status === 'active' &&
          !userSubscription.isPaused &&
          userSubscription.endsAt > new Date(Date.now())
            ? true
            : false
      }
      return session
    },
    authorized({ auth }) {
      return !!auth?.user // this ensures there is a logged in user for -every- request
    }
  },
  pages: {
    signIn: '/sign-in' // overrides the next-auth default signin page https://authjs.dev/guides/basics/pages
  }
})
