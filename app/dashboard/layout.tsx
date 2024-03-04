import { SidebarDesktop } from '@/components/sidebar-desktop'
import Script from 'next/script'
import { Toaster } from 'react-hot-toast'

interface ChatLayoutProps {
  children: React.ReactNode
}

export default async function BillingLayout({ children }: ChatLayoutProps) {
  return (
    <>
      {/* Load the Lemon Squeezy's Lemon.js script before the page is interactive. */}

      <SidebarDesktop />
      <div className="group w-full overflow-auto pl-0 animate-in duration-300 ease-in-out peer-[[data-state=open]]:lg:pl-[250px] peer-[[data-state=open]]:xl:pl-[300px]">
        {children}
        <Script src="https://app.lemonsqueezy.com/js/lemon.js" />
      </div>
      <Toaster position="bottom-right" />
    </>
  )
}
