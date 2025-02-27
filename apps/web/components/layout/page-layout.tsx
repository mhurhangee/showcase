'use client'

import { SidebarTrigger, SidebarInset } from "@workspace/ui/components/sidebar"
import { NavSidebar } from "./nav-sidebar"
import { SettingsSidebar } from "./settings-sidebar"
import { Header } from "./header"

interface PageLayoutProps {
  children: React.ReactNode
  breadcrumbs: {
    title: string
    href?: string
  }[]
  description?: string
  settings?: React.ReactNode
}

export function PageLayout({ 
  children,
  breadcrumbs,
  description,
  settings 
}: PageLayoutProps) {
  return (
    <div className="grid min-h-screen w-full grid-cols-[auto_1fr_auto]">
      <NavSidebar />
      <div className="flex flex-col w-full">
        <Header 
          breadcrumbs={breadcrumbs}
          description={description}
          leftSlot={<SidebarTrigger side="left" />}
          rightSlot={settings && <SidebarTrigger side="right" />}
        />
        <main className="flex-1 overflow-auto p-6">
        <SidebarInset>
          {children}
        </SidebarInset>
        
        </main>
      </div>
      {settings && <SettingsSidebar>{settings}</SettingsSidebar>}
    </div>
  )
}
