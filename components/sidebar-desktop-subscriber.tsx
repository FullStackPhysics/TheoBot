import { Sidebar } from '@/components/sidebar'

import { auth } from '@/auth'
import { ChatHistory } from '@/components/chat-history'
import { redirect } from 'next/navigation'

export async function SidebarDesktopSubscriber() {
  const session = await auth()

  if (!session?.user?.id) {
    return null
  }

  if (!session.user.isSubscriber) {
    redirect('/dashboard/billing')
  }

  return (
    <Sidebar className="peer absolute inset-y-0 z-30 hidden -translate-x-full border-r bg-muted duration-300 ease-in-out data-[state=open]:translate-x-0 lg:flex lg:w-[250px] xl:w-[300px]">
      {/* @ts-ignore */}
      <ChatHistory userId={session.user.id} />
    </Sidebar>
  )
}
