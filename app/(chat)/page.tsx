import { nanoid } from '@/lib/utils'
import { Chat } from '@/components/chat'
import { CustomGPTResponse } from '@/types/custom-gpt'
import { CreateConversationResponse } from '@/types/conversation'

export default function IndexPage() {
  const id = nanoid()

  return <Chat id={id} />
}
