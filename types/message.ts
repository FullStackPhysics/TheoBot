export interface AddMessageRequest {
  prompt: string
  custom_persona: string
  chatbot_model: 'gpt-4' | 'gpt-3.5-turbo' | null
  response_source: 'default' | 'own_content' | 'openai_content' | null
  sessionId: string
  projectId: number
}

export interface MessageMetaData {
  projectId: number
  sessionId: number
  stream: boolean
  lang: 'en'
  external_id: string
}

export interface ChatBotMessage {
  id: number
  created_at: Date
  updated_at: Date
  user_id: number
  user_query: string
  openai_response: string
  citations: string[]
  metadata: {
    user_ip: string
    user_agent: string
    external_id: string
    request_source: string
  }
}
