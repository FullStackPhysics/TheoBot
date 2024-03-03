'use client'

import { lemonSqueezySetup } from '@lemonsqueezy/lemonsqueezy.js'
import { VercelKV, createClient } from '@vercel/kv'
import { ReactNode, createContext } from 'react'

interface Props {
  url: string
  token: string
  children: ReactNode
}
export const PlanContext = createContext<VercelKV | null>(null)

export default function KVProvider({ url, token, children }: Props) {
  const client = createClient({ url: url, token: token })

  return <PlanContext.Provider value={client}>{children}</PlanContext.Provider>
}
