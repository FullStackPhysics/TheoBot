import { formatDate } from '@/lib/utils'
import { SubscriptionStatusType } from '@/types/lemon-squeezy/subscription'

export function SubscriptionDate({
  endsAt,
  renewsAt,
  trialEndsAt
}: {
  endsAt?: Date | null
  renewsAt?: Date | null
  status: SubscriptionStatusType
  trialEndsAt?: Date | null
}) {
  const now = new Date()
  const trialEndDate = trialEndsAt ? new Date(trialEndsAt) : null
  const endsAtDate = endsAt ? new Date(endsAt) : null
  let message = `Renews on ${formatDate(renewsAt ? renewsAt : 'unknown')}`

  if (!trialEndsAt && !renewsAt) return null

  if (trialEndDate && trialEndDate > now) {
    message = `Ends on ${formatDate(trialEndsAt ? trialEndsAt : 'unknown')}`
  }

  if (endsAt) {
    message =
      endsAtDate && endsAtDate < now
        ? `Expired on ${formatDate(endsAt)}`
        : `Expires on ${formatDate(endsAt)}`
  }

  return (
    <>
      {<span className="text-surface-200">&bull;</span>}
      <p>{message}</p>
    </>
  )
}
