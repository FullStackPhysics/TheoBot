import { Plan } from '@/types/lemon-squeezy/plan'
import { VercelKV, createClient } from '@vercel/kv'

export async function getAllPlans() {
  const client = createClient({
    url: `${process.env.KV_REST_API_URL}`,
    token: `${process.env.KV_REST_API_TOKEN}`
  })
  const plans: Plan[] = []
  const set = await client.smembers('plan')
  console.log(set)
  set.forEach(async hash => {
    const plan: Plan | null = await client.get(hash)
    if (plan !== null) plans.push(plan)
  })
  return plans
}
