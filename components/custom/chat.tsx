import { ChatHeader } from "@/components/custom/chat-header";
import { Message } from "ai";

export function Chat({
    id,
    initialMessages,
    selectedModelId,
}: {
    id: string;
    initialMessages: Array<Message>;
    selectedModelId: string;
}) {
    return (
        <>
            <div>
                <ChatHeader selectedModelId={selectedModelId} />
            </div>
        </>
    )
}