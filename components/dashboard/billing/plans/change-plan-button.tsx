import { Button } from '@lemonsqueezy/wedges'
import Link from 'next/link'

export function ChangePlanButton({ planId }: { planId: string }) {
  return (
    <Button size="sm" variant="outline" asChild>
      <Link href={`/dashboard/billing/change-plans/${planId}`}>
        Change plan
      </Link>
    </Button>
  )
}
