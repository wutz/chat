'use client';

import { Sidebar, SidebarContent, SidebarHeader, SidebarGroup, SidebarFooter, SidebarMenu } from "@/components/ui/sidebar";

export function AppSidebar() {
    return (
        <Sidebar>
            <SidebarHeader>
                <SidebarMenu>
                    <div>
                        <span className="text-lg font-semibold px-2 hover:bg-muted rounded-md cursor-pointer">Chatbot</span>
                    </div>
                </SidebarMenu>
            </SidebarHeader>
            <SidebarContent >
                <SidebarGroup />
                <SidebarGroup />
            </SidebarContent>
            <SidebarFooter />
        </Sidebar>
    )
}