'use client'
import Image from 'next/image'
import Link from "next/link"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { V0Navigatior } from '@/components/v0-navigator'

export default function OurStory() {
  return (
<>
  <div>
    <header className="px-4 lg:px-6 h-14 flex items-center">
      
   
       <V0Navigatior/>
     </header>
     
    <div className="w-full py-12 md:py-24 lg:py-32">
      <header className="px-4 lg:px-6 h-14 flex items-center">
      
      </header>
      <main className="flex-1">
        <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="space-y-4">
              <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">About Us</h1>
              <p className="max-w-[700px] text-gray-500 md:text-xl dark:text-gray-400">
                We are a team of passionate developers committed to delivering the best digital experiences.
              </p>
            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="space-y-4">
              <h2 className="text-2xl font-bold tracking-tighter sm:text-3xl md:text-4xl">Our History</h2>
              <p className="max-w-[700px] text-gray-500 md:text-xl dark:text-gray-400">
                Founded in 2010, we have helped hundreds of companies deliver digital products that delight their
                customers.
              </p>
            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="space-y-4">
              <h2 className="text-2xl font-bold tracking-tighter sm:text-3xl md:text-4xl">Our Mission</h2>
              <p className="max-w-[700px] text-gray-500 md:text-xl dark:text-gray-400">
                To empower teams to build and scale digital products that make a difference.
              </p>
            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="space-y-4">
              <h2 className="text-2xl font-bold tracking-tighter sm:text-3xl md:text-4xl">Our Values</h2>
              <p className="max-w-[700px] text-gray-500 md:text-xl dark:text-gray-400">
                We value quality, innovation, and customer service.
              </p>
            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="space-y-4">
              <h2 className="text-2xl font-bold tracking-tighter sm:text-3xl md:text-4xl">Meet the Team</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                <div className="flex flex-col space-y-2">
                  <img
                    alt="Profile Picture"
                    className="rounded-full aspect-square object-cover"
                    height="100"
                    src="/placeholder.svg"
                    width="100"
                  />
                  <h3 className="text-lg font-bold">John Doe</h3>
                  <p className="text-sm text-gray-500 dark:text-gray-400">CEO</p>
                </div>
                <div className="flex flex-col space-y-2">
                  <img
                    alt="Profile Picture"
                    className="rounded-full aspect-square object-cover"
                    height="100"
                    src="/placeholder.svg"
                    width="100"
                  />
                  <h3 className="text-lg font-bold">Jane Smith</h3>
                  <p className="text-sm text-gray-500 dark:text-gray-400">CTO</p>
                </div>
                <div className="flex flex-col space-y-2">
                  <img
                    alt="Profile Picture"
                    className="rounded-full aspect-square object-cover"
                    height="100"
                    src="/placeholder.svg"
                    width="100"
                  />
                  <h3 className="text-lg font-bold">Bob Johnson</h3>
                  <p className="text-sm text-gray-500 dark:text-gray-400">CFO</p>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="space-y-4">
              <h2 className="text-2xl font-bold tracking-tighter sm:text-3xl md:text-4xl">Contact Us</h2>
              <form className="flex space-x-4">
                <Input className="max-w-lg flex-1" placeholder="Name" type="text" />
                <Input className="max-w-lg flex-1" placeholder="Email" type="email" />
                <Input className="max-w-lg flex-1" placeholder="Message" type="text" />
                <Button type="submit">Send Message</Button>
              </form>
            </div>
          </div>
        </section>
      </main>
      <footer className="flex flex-col gap-2 sm:flex-row py-6 w-full shrink-0 items-center px-4 md:px-6 border-t">
        <p className="text-xs text-gray-500 dark:text-gray-400">© 2024 Acme Inc. All rights reserved.</p>
        <nav className="sm:ml-auto flex gap-4 sm:gap-6">
          <Link className="text-xs hover:underline underline-offset-4" href="#">
            Terms of Service
          </Link>
          <Link className="text-xs hover:underline underline-offset-4" href="#">
            Privacy
          </Link>
        </nav>
      </footer>
    </div>
  </div>
  </> 

  )
}
