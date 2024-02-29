import { kv } from '@vercel/kv'
import {
  AIStream,
  AIStreamParser,
  OpenAIStream,
  StreamingTextResponse
} from 'ai'
import OpenAI from 'openai'

import { auth } from '@/auth'
import { nanoid } from '@/lib/utils'
import { CustomGPTError, CustomGPTResponse } from '@/types/custom-gpt'

export const runtime = 'edge'

function parseCustomGptResponse(): AIStreamParser {
  let previous = ''

  return data => {
    const json = JSON.parse(data) as { status: string; message: string }

    const text = json.message

    previous = text

    return text
  }
}
export async function POST(req: Request) {
  const json = await req.json()

  const {
    messages,
    custom_persona,
    chatbot_model,
    response_source,
    sessionId
  } = json
  //const userId = (await auth())?.user.id

  /* if (!userId) {
    return new Response('Unauthorized', {
      status: 401
    })
  } */
  if (sessionId === undefined) {
    return Response.json(
      {
        data: { message: 'Session ID not included.', code: 400 },
        status: 'error'
      } as CustomGPTResponse<CustomGPTError>,
      {
        status: 400
      }
    )
  }

  const response = await fetch(
    `https://app.customgpt.ai/api/v1/projects/${process.env.CustomGPTProjectKey}/conversations/${sessionId}/messages?stream=true&lang=en`,
    {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${process.env.CustomGPTApiKey}`,
        Accept: 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        chatbot_model: chatbot_model,
        custom_persona: custom_persona,
        response_source: response_source,
        prompt: messages[0].content
      })
    }
  )

  /* const stream = OpenAIStream(res, {
    async onCompletion(completion) {
      const title = json.messages[0].content.substring(0, 100)
      const id = json.id ?? nanoid()
      const createdAt = Date.now()
      const path = `/chat/${id}`
      const payload = {
        id,
        title,
        userId,
        createdAt,
        path,
        messages: [
          ...messages,
          {
            content: completion,
            role: 'assistant'
          }
        ]
      }
      await kv.hmset(`chat:${id}`, payload)
      await kv.zadd(`user:chat:${userId}`, {
        score: createdAt,
        member: `chat:${id}`
      })
    }
  }) */

  const stream = AIStream(response, parseCustomGptResponse(), {
    onStart: async () => {
      console.log('Stream started')
    },
    onCompletion: async completion => {
      console.log('Completion completed', completion)
    },
    onFinal: async completion => {
      console.log('Stream completed', completion)
    },
    onToken: async token => {
      console.log('Token received', token)
    }
  })

  return new StreamingTextResponse(stream)
}
