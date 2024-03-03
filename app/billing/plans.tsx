/* /app/billing/page.tsx */
'use client'

import { IntervalUnit, SubscriptionData } from '@/types/lemon-squeezy/general'
import { Plan } from '@/types/lemon-squeezy/plan'
import { Subscription } from '@lemonsqueezy/lemonsqueezy.js'
import { Dispatch, SetStateAction, useState } from 'react'

export const metadata = {
  title: 'Billing'
}

function createMarkup(html: any) {
  return { __html: html }
}

function formatPrice(price: number) {
  return price / 100
}

function formatInterval(interval: IntervalUnit, intervalCount: number) {
  return intervalCount > 1 ? `${intervalCount} ${interval}s` : interval
}

function IntervalSwitcher({
  intervalValue,
  changeInterval
}: {
  intervalValue: IntervalUnit
  changeInterval: Dispatch<SetStateAction<IntervalUnit>>
}) {
  return (
    <div className="mt-6 flex justify-center items-center gap-4 text-sm text-gray-500">
      <div data-plan-toggle="month">Monthly</div>
      <div>
        <label className="toggle relative inline-block">
          <input
            type="checkbox"
            checked={intervalValue == 'year'}
            onChange={e => changeInterval(e.target.checked ? 'year' : 'month')}
          />
          <span className="slider absolute rounded-full bg-gray-300 shadow-md"></span>
        </label>
      </div>
      <div data-plan-toggle="year">Yearly</div>
    </div>
  )
}

function PlanElement({
  plan,
  subscription,
  intervalValue
}: {
  plan: Plan
  subscription: any
  intervalValue: IntervalUnit
}) {
  return (
    <div
      className={
        'flex flex-col p-4 rounded-md border-solid border-2 border-gray-200' +
        (subscription?.status !== 'expired' &&
        subscription?.variantId == plan.variantId
          ? ' opacity-50'
          : '')
      }
    >
      <div className="grow">
        <h1 className="font-bold text-lg mb-1">{plan.variantName}</h1>
        <div dangerouslySetInnerHTML={createMarkup(plan.description)}></div>
        <div className="my-4">
          <span className="text-2xl">${formatPrice(plan.price)}</span>
          &nbsp;
          <span className="text-gray-500">
            /{formatInterval(plan.interval, plan.intervalCount)}
          </span>
        </div>
      </div>

      <div className="mt-4">
        <a
          href="#"
          className="block text-center py-2 px-5 bg-amber-200 rounded-full font-bold text-amber-800 shadow-md shadow-gray-300/30 select-none"
        >
          Sign up
        </a>
      </div>
    </div>
  )
}

export default function Plans({
  plans,
  subscription
}: {
  plans: Plan[]
  subscription: Subscription | null
}) {
  const [intervalValue, setIntervalValue] = useState<IntervalUnit>('month')

  return (
    <>
      <div className="w-50 mt-5 grid gap-6 sm:grid-cols-2">
        {plans.map(plan => (
          <PlanElement
            plan={plan}
            subscription={subscription}
            intervalValue={intervalValue}
            key={plan.variantId}
          />
        ))}
      </div>

      <p className="mt-8 text-gray-400 text-sm text-center">
        Payments are processed securely by Lemon Squeezy.
      </p>
    </>
  )
}
