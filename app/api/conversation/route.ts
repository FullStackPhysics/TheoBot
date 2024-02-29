import { CreateConversationResponse } from '@/types/conversation'
import { CustomGPTError, CustomGPTResponse } from '@/types/custom-gpt'
import { NextRequest } from 'next/server'

export async function POST(req: NextRequest) {
  const body: CreateConversationResponse = await req.json()

  if (body.name === undefined) {
    return Response.json(
      {
        data: { message: 'No Project name included.', code: 400 },
        status: 'error'
      } as CustomGPTResponse<CustomGPTError>,
      {
        status: 400
      }
    )
  }

  const name = body.name

  const response = await fetch(
    `https://app.customgpt.ai/api/v1/projects/${process.env.CustomGPTProjectKey}/conversations`,
    {
      method: 'POST',
      body: JSON.stringify({ name: name }),
      headers: {
        Authorization: `Bearer ${process.env.CustomGPTApiKey}`,
        Accept: 'application/json',
        'Content-Type': 'application/json'
      }
    }
  )
  const json =
    (await response.json()) as CustomGPTResponse<CreateConversationResponse>
  return Response.json(json)
}
