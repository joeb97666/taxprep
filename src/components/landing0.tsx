'use client'

import { Button } from "@/components/ui/button"
import Link from "next/link"

export function Landing0() {
  return (
    <>
      <section className="w-full py-12 md:py-24 lg:py-32 bg-green-100 dark:bg-green-900">
        <div className="container px-4 md:px-6">
          <div className="grid gap-6 lg:grid-cols-[1fr_500px] lg:gap-12 xl:grid-cols-[1fr_550px]">
            <div className="flex flex-col justify-center space-y-4">
              <div className="space-y-2">
                <h1 className="text-5xl font-bold tracking-tighter text-green-800 dark:text-green-200 sm:text-4xl">
                  Optimize your return;
                  <br></br>
                  Simplify your experience.
                </h1>
                <p className="max-w-[800px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
                 We provide expert advice, efficient filing, and dedicated support to help you navigate 
                  the tax season with ease.
                </p>
              </div>
              <div className="w-full max-w-sm space-y-2">
            
                <div className="flex space-x-4">
                 
                    <Link className="text-center center mt-4 w-1/2 space-x-2.5 bg-green-600 text-white rounded-xl" href="https://calendly.com/davidb88/45-minute-to-1-hour-free-coonsultation-clone">
                       <Button className="-ml-2 rounded-xl"> Make an Appointment</Button>
                    </Link>
                
                  <Link className="text-center center mt-4 w-1/2 space-x-2.5 bg-green-600 text-white rounded-xl" href="./TaxPricing">
                     <Button className="rounded-xl">Get Started</Button>
                  </Link>
                </div>
                <div className="flex space-x-4">
                  <div className="ml-4 w-1/2 space-x-2.5 text-xs text-grey-500 dark:text-gray-400">
                    <p className="center">Make an appointment;</p><p>Online or in person.</p>
                  </div>
                  
                  <div className="ml-4 w-1/2 space-x-2.5 text-xs text-grey-500 dark:text-gray-400"> 
                 <p className="justify-text-center">No time for an appointment? </p><p className="justify-text-center"></p>
                  </div>
                </div>
              </div>
            </div>
            <img
  alt="Tax Preparation"
  className="mx-auto aspect-video overflow-hidden rounded-xl object-cover object-center sm:w-full lg:order-last"
  height="500"
  src='/istockphoto-1266907705-1024x1024.jpg'
  width="1000"
/>
          </div>
        </div>
      </section>
      <section className="w-full py-12 md:py-24 lg:py-32 bg-green-200 dark:bg-green-800">
        <div className="container px-4 md:px-6">
          <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 xl:grid-cols-3 align-top">
            <div className="flex flex-col justify-left space-y-4">
              <h2 className="text-2xl font-bold tracking-tighter text-green-800 dark:text-green-200 sm:text-4xl">
                What Separates Us
              </h2>
              <p className="max-w-[800px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
                A comprehensive, tailored approach to tax preparation. We are dedicated to understanding, and helping you understand, your unique financial situation.
              </p>
            </div>
            <div className="flex flex-col justify-center space-y-4">
              <h3 className="text-xl font-bold tracking-tighter text-green-800 dark:text-green-200 sm:text-2xl">
                Expert Advice
              </h3>
              <p className="max-w-[800px] text-gray-500 md:text-lg/relaxed lg:text-base/relaxed xl:text-lg/relaxed dark:text-gray-400">
                Our team will take the time to investigate your unique tax situation and meticulously ensure the best ways to get you the max refund or otherwise best outcome.
              </p>
              <div className="flex flex-col justify-center space-y-4">
                <h3 className="text-xl font-bold tracking-tighter text-green-800 dark:text-green-200 sm:text-2xl">
                  Personalized Service
              </h3>
                  <p className="max-w-[800px] text-gray-500 md:text-lg/relaxed lg:text-base/relaxed xl:text-lg/relaxed dark:text-gray-400">
                    We understand that every client is unique. That is why we offer personalized service to meet your
                    specific needs and financial goals. 
                  </p>
              </div>
              
              <div className="flex space-x-4">
                <Link className="mt-4 w-1/2 space-x-2.5 bg-green-600 rounded text-center text-white rounded-xl" href="./OurStory">
                    <Button className='round'> About us </Button>
                </Link>
                  
                <Link className="mt-4 w-1/2 space-x-2.5 bg-green-600 rounded text-center text-white rounded-xl" href="./#">
                    <Button className='round'> Back to Top </Button>
                </Link>
             </div>
            
                <div className="flex space-x-5">
                  <Link className="mt-4 w-1/2 space-x-2.5 bg-black rounded text-center text-white rounded-xl" href="https://calendly.com/davidb88/45-minute-to-1-hour-free-coonsultation-clone">
                     <Button className='round'>Book an Appointment</Button>
                  </Link>
                  <Link className="mt-4 w-1/2 space-x-2.5 bg-black rounded text-center text-white rounded-xl" href="tel:(206-280-6291)">
                     <Button className='round'> Call Us</Button>
                  </Link>
                </div>
          
                
              
            </div>
           
          </div>
        </div>
      </section>
      <footer className="w-full py-6 bg-green-200 dark:bg-green-800">
        <div className="container px-4 md:px-6 text-left">
          <p className="text-gray-600 text-justify dark:text-gray-300">© 2024 DB Tax Services. All rights reserved.</p>
        </div>
      </footer>
    </> 
  )
}
