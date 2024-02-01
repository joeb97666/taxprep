'use client'
import Image from 'next/image'
import { V0Navigatior } from '@/components/v0-navigator'
import Link from 'next/link'
import { Button } from '@/components/ui/button'

export default function Services() {
  return (
    <> 

    <V0Navigatior/>

    <section className='w-full py-12 lg:py-32 bg-green-100 dark:bg-green-900'>
      <div className='container px-4 md:px-6'>

         
            <h1 className='xl:text-6xl sm:text-l md:text-xl lg:text-3xl  font-bold tracking-tighter justify-center text-green-800 dark:text-green-200 sm:text-4xl'>
            We offer tax advice, strategic tax planning and tax returns.
            </h1>
           
        <div className='grid gap-6 lg:gap-12'>
         <div className="flex flex-col justify-center space-y-4">
            <div className="flex justify-center space-x-4 xl:text-xl sm:text-sm md:text-md lg:text-lg  justify-center">
              <Link className="mt-4 w-1/3 space-x-2.5 bg-green-600 text-center text-white rounded-xl" href="./Appointment">
                  <Button className="rounded-l"> Make an Appointment</Button>
              </Link>
              <Link className="mt-4 w-1/3 space-x-2.5 bg-green-600 rounded text-center text-white rounded-xl" href="./TaxPricing">
                <Button className="rounded-l">Get Started</Button>
              </Link>
              <Link className="mt-4 w-1/3 space-x-2.5 bg-green-600 rounded text-center text-white rounded-xl" href="./TaxPrep">
                <Button className="rounded-l">Transparent Pricing</Button>
              </Link>
            </div>

          

          </div>
       </div>
      </div>



    </section>

    </>

  )
}