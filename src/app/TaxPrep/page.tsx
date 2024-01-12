'use client'
import Image from 'next/image'
import { V0Navigatior } from '@/components/v0-navigator'
import { TaxPricing } from '@/components/TaxPricing'
import { PriceList } from '@/components/PriceList'

export default function WebDev() {
  return (
    <div>
      <V0Navigatior/>
      <PriceList/>
      </div>
  )
}