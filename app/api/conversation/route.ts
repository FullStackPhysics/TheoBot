import { CreateConversationResponse } from '@/types/conversation'
import { CustomGPTError, CustomGPTResponse } from '@/types/custom-gpt'
import axios from 'axios'
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

  const response = await axios.post<
    CustomGPTResponse<CreateConversationResponse>
  >(
    `https://app.customgpt.ai/api/v1/projects/${process.env.CustomGPTProjectKey}/conversations`,
    { name: name },
    {
      headers: {
        Authorization: `Bearer ${process.env.CustomGPTApiKey}`,
        Accept: 'application/json',
        'Content-Type': 'application/json'
      }
    }
  )

  return Response.json(response.data)
}
