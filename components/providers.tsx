'use client'

import * as React from 'react'
import { ThemeProvider as NextThemesProvider } from 'next-themes'
import { ThemeProviderProps } from 'next-themes/dist/types'
import { SidebarProvider } from '@/lib/hooks/use-sidebar'
import { TooltipProvider } from '@/components/ui/tooltip'
import KVProvider from './providers/kv-provider'

interface Props extends ThemeProviderProps {
  url: string
  token: string
}
export function Providers({ url, token, children, ...props }: Props) {
  return (
    <NextThemesProvider {...props}>
      <KVProvider url={url} token={token}>
        <SidebarProvider>
          <TooltipProvider>{children}</TooltipProvider>
        </SidebarProvider>
      </KVProvider>
    </NextThemesProvider>
  )
}
