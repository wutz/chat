import { SidebarTrigger } from "@/components/ui/sidebar";

export function ChatHeader() {
    return (
        <header className="flex sticky top-0 bg-background py-1.5 items-center px-2 gap-2">
            <SidebarTrigger className="-ml-1" />
        </header>
    )
}