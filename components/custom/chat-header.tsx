import { SidebarTrigger } from "@/components/ui/sidebar";
import { ModelSelector } from "@/components/custom/model-selector";
import { Separator } from "@/components/ui/separator";

export function ChatHeader({
    selectedModelId,
}: {
    selectedModelId: string;
}) {
    return (
        <header className="flex sticky top-0 bg-background py-1.5 items-center px-2 gap-2">
            <SidebarTrigger className="-ml-1" />
            <Separator orientation="vertical" className="h-4" />
            <ModelSelector selectedModelId={selectedModelId} />
        </header>
    )
}