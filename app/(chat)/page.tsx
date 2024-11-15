import { Chat } from "@/components/custom/chat";
import { models, DEFAULT_MODEL_NAME } from "@/ai/models";
import { cookies } from "next/headers";
import { generateUUID } from "@/lib/utils";

export default async function Page() {
  const id = generateUUID();

  const cookiesStore = await cookies();
  const modelIdFromCookies = cookiesStore.get('modelId')?.value;

  const selectedModelId = models.find((model) => model.id === modelIdFromCookies)?.id || DEFAULT_MODEL_NAME;


  return (
    <Chat key={id} id={id} initialMessages={[]} selectedModelId={selectedModelId} />
  )
}
