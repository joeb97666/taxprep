'use cient'

import { Button } from "@/components/ui/button"
import { SheetTrigger, SheetContent, Sheet } from "@/components/ui/sheet"
import Link from "next/link"
import { CollapsibleTrigger, CollapsibleContent, Collapsible } from "@/components/ui/collapsible"
import { NavigationMenuLink, NavigationMenuTrigger, NavigationMenuContent, NavigationMenuItem, NavigationMenuList, NavigationMenu } from "@/components/ui/navigation-menu"

export function V0Navigatior() {
  return (
    <>
      <header className="flex h-20 w-full shrink-0 items-center px-3 md:px-6">
        <Sheet>
          <SheetTrigger asChild>
            <Button className="lg:hidden" size="icon" variant="outline">
              <MenuIcon className="h-6 w-6" />
              <span className="sr-only">Toggle navigation menu</span>
            </Button>
          </SheetTrigger>
          <SheetContent side="left">
            <Link href="./#">
              <HomeIcon className="h-6 w-6" />
              <span className="sr-only">DB TAX</span>
            </Link>
            <div className="grid gap-2 py-6">
              <Link className="group inline-flex h-s w-max items-center justify-center rounded-md bg-white px-4 py-2 text-sm font-medium 
                    transition-colors hover:bg-gray-100 hover:text-gray-900 focus:bg-gray-100 focus:text-gray-900 focus:outline-none 
                    disabled:pointer-events-none disabled:opacity-50 data-[active]:bg-gray-100/50 data-[state=open]:bg-gray-100/50 
                    dark:bg-gray-600 dark:hover:bg-gray-800 dark:hover:text-gray-50 dark:focus:bg-gray-800 dark:focus:text-gray-50 
                    dark:data-[active]:bg-gray-800/50 dark:data-[state=open]:bg-gray-800/50" href="./#">
                Home
              </Link>

              {/* COLLAPSIBLE CONTENT // MOBILE //  */}



              <Collapsible className="grid gap-4 h-s">
                <CollapsibleTrigger className="flex w-full items-center text-lg font-semibold [&[data-state=open]>svg]:rotate-90">
                  <Link
                    className=" mt-1 group inline-flex h-xs w-max items-center justify-center rounded-md bg-white px-4 py-2 text-sm font-medium 
                    transition-colors hover:bg-gray-100 hover:text-gray-900 focus:bg-gray-100 focus:text-gray-900 focus:outline-none 
                    disabled:pointer-events-none disabled:opacity-50 data-[active]:bg-gray-100/50 data-[state=open]:bg-gray-100/50 
                    dark:bg-gray-600 dark:hover:bg-gray-800 dark:hover:text-gray-50 dark:focus:bg-gray-800 dark:focus:text-gray-50 
                    dark:data-[active]:bg-gray-800/50 dark:data-[state=open]:bg-gray-800/50"
                    href="./Services">
                    Services

                  </Link>
                  <ChevronRightIcon className="ml-auto h-5 w-5 transition-all" />
                </CollapsibleTrigger>
                <CollapsibleContent>
                  <div className="-mx-6 grid gap-4 bg-gray-100 p-6 dark:bg-gray-800">
                    <Link className="group grid h-s w-full justify-start gap-1" href="./TaxPricing">
                      <div className="text-sm font-medium leading-none group-hover:underline">Tax Pricing</div>
                      <div className="line-clamp-2 text-sm leading-snug text-gray-500 dark:text-gray-400">
                        Easily select a tax preparation service package.
                      </div>
                    </Link>
                    <Link className="group grid h-s w-full justify-start gap-1" href="./TaxPrep">
                      <div className="text-sm font-medium leading-none group-hover:underline">Per Form Pricing</div>
                      <div className="line-clamp-2 text-sm leading-snug text-gray-500 dark:text-gray-400">
                        Transparent pricing.
                      </div>
                    </Link>
                  </div>
                </CollapsibleContent>
                </Collapsible>



                <Link className="mt-1 group inline-flex h-xs w-max items-center justify-center
                rounded-md bg-white px-4 py-2 text-sm font-medium transition-colors hover:bg-gray-100
                hover:text-gray-900 focus:bg-gray-100 focus:text-gray-900 focus:outline-none 
                disabled:pointer-events-none disabled:opacity-50 data-[active]:bg-gray-100/50 
                data-[state=open]:bg-gray-100/50 dark:bg-gray-800 dark:hover:bg-gray-800 
                dark:hover:text-gray-50 dark:focus:bg-gray-800 dark:focus:text-gray-50 
                dark:data-[active]:bg-gray-800/50 dark:data-[state=open]:bg-gray-800/50"
                href="./About">About
              </Link>
                
              
              
              <Link className="mt-1 group inline-flex h-9 w-max items-center justify-center rounded-md bg-white px-4 py-2 text-sm font-medium 
                    transition-colors hover:bg-gray-100 hover:text-gray-900 focus:bg-gray-100 focus:text-gray-900 focus:outline-none 
                    disabled:pointer-events-none disabled:opacity-50 data-[active]:bg-gray-100/50 data-[state=open]:bg-gray-100/50 
                    dark:bg-gray-600 dark:hover:bg-gray-800 dark:hover:text-gray-50 dark:focus:bg-gray-800 dark:focus:text-gray-50 
                    dark:data-[active]:bg-gray-800/50 dark:data-[state=open]:bg-gray-800/50"
               href="./Contact">
                Contact
              </Link>
            </div>

          </SheetContent>
        </Sheet>
        <Link className="mr-6 hidden lg:flex" href="./#">
          <HomeIcon className="h-6 w-6 ml-auto" />
          <span className="sr-only">DB MARKETING</span>
        </Link>

        {/* NAVIGATION // FOR WEB // */}


        <NavigationMenu className="ml-auto hidden lg:flex">
          <NavigationMenuList>
            <NavigationMenuLink asChild>
              <Link
                className="group inline-flex h-9 w-max items-center justify-center rounded-md bg-white px-4 py-2 text-sm font-medium 
                transition-colors hover:bg-gray-100 hover:text-gray-900 focus:bg-gray-100 focus:text-gray-900 focus:outline-none 
                disabled:pointer-events-none disabled:opacity-50 data-[active]:bg-gray-100/50 data-[state=open]:bg-gray-100/50 
                dark:bg-gray-600 dark:hover:bg-gray-800 dark:hover:text-gray-50 dark:focus:bg-gray-800 dark:focus:text-gray-50 
                dark:data-[active]:bg-gray-800/50 dark:data-[state=open]:bg-gray-800/50"
                href="./#"
              >
                Home
              </Link>
            </NavigationMenuLink>
            <NavigationMenuItem>
              <NavigationMenuTrigger>
                <Link
                  className="group inline-flex h-9 w-max items-center justify-center rounded-md bg-white px-4 py-2 text-sm font-medium 
                  transition-colors hover:bg-gray-100 hover:text-gray-900 focus:bg-gray-100 focus:text-gray-900 focus:outline-none 
                  disabled:pointer-events-none disabled:opacity-50 data-[active]:bg-gray-100/50 data-[state=open]:bg-gray-100/50 
                  dark:bg-gray-600 dark:hover:bg-gray-800 dark:hover:text-gray-50 dark:focus:bg-gray-800 dark:focus:text-gray-50 
                  dark:data-[active]:bg-gray-800/50 dark:data-[state=open]:bg-gray-800/50"
                  href="./Services"
                >
                  Services
                </Link>
              </NavigationMenuTrigger>
              <NavigationMenuContent>
                <div className="grid w-[400px] p-2">
                  <NavigationMenuLink asChild>
                    <Link
                      className="group grid h-auto w-full items-center justify-start gap-1 rounded-md bg-white p-4 text-sm font-medium 
                      transition-colors hover:bg-gray-100 hover:text-gray-900 focus:bg-gray-100 focus:text-gray-900 focus:outline-none 
                      disabled:pointer-events-none disabled:opacity-50 data-[active]:bg-gray-100/50 data-[state=open]:bg-gray-100/50 
                      dark:bg-gray-600 dark:hover:bg-gray-800 dark:hover:text-gray-50 dark:focus:bg-gray-800 dark:focus:text-gray-50 
                      dark:data-[active]:bg-gray-800/50 dark:data-[state=open]:bg-gray-800/50"
                      href="./TaxPricing"
                    >
                      <div className="text-sm font-medium leading-none group-hover:underline">Tax Packages</div>
                      <div className="line-clamp-2 text-sm leading-snug text-gray-500 dark:text-gray-400">
                      Easily select a tax preparation tier for your individual, business or more complex return.
                      </div>
                    </Link>
                  </NavigationMenuLink>
                  <NavigationMenuLink asChild>
                    <Link
                      className="group grid h-auto w-full items-center justify-start gap-1 rounded-md bg-white p-4 text-sm font-medium
                       transition-colors hover:bg-gray-100 hover:text-gray-900 focus:bg-gray-100 focus:text-gray-900 focus:outline-none
                        disabled:pointer-events-none disabled:opacity-50 data-[active]:bg-gray-100/50 data-[state=open]:bg-gray-100/50 
                        dark:bg-gray-600 dark:hover:bg-gray-800 dark:hover:text-gray-50 dark:focus:bg-gray-800 dark:focus:text-gray-50 
                        dark:data-[active]:bg-gray-800/50 dark:data-[state=open]:bg-gray-800/50"
                      href="./TaxPrep"
                    >
                      <div className="text-sm font-medium leading-none group-hover:underline">Per Form Pricing</div>
                      <div className="line-clamp-2 text-sm leading-snug text-gray-500 dark:text-gray-400">
                      Tax Preparation for all situations: Individual, Families, Sole Proprieter, LLC, Corporations.
                      </div>
                    </Link>
                  </NavigationMenuLink>
                
                </div>
              </NavigationMenuContent>
            </NavigationMenuItem>

            <NavigationMenuItem>
                <Link
                  className="group mr-6 inline-flex p-10 h-9 w-max items-center justify-center rounded-md bg-white px-4 py-2 text-sm font-medium
                  transition-colors hover:bg-gray-100 hover:text-gray-900 focus:bg-gray-100 focus:text-gray-900 focus:outline-none
                  disabled:pointer-events-none disabled:opacity-50 data-[active]:bg-gray-100/50 data-[state=open]:bg-gray-100/50 dark:bg-gray-600 
                  dark:hover:bg-gray-800 dark:hover:text-gray-50 dark:focus:bg-gray-800 dark:focus:text-gray-50 dark:data-[active]:bg-gray-800/50 
                  dark:data-[state=open]:bg-gray-800/50"
                  href="./About">
 
                  About
                </Link>
             
            </NavigationMenuItem>
            <NavigationMenuLink asChild>
              <Link
                className="group inline-flex h-9 w-max items-center justify-center rounded-md bg-white px-4 py-2 text-sm font-medium transition-colors hover:bg-gray-100 hover:text-gray-900 focus:bg-gray-100 focus:text-gray-900 focus:outline-none disabled:pointer-events-none disabled:opacity-50 data-[active]:bg-gray-100/50 data-[state=open]:bg-gray-100/50 dark:bg-gray-600 dark:hover:bg-gray-800 dark:hover:text-gray-50 dark:focus:bg-gray-800 dark:focus:text-gray-50 dark:data-[active]:bg-gray-800/50 dark:data-[state=open]:bg-gray-800/50"
                href="./Contact"
              >
                Contact
              </Link>
            </NavigationMenuLink>
          </NavigationMenuList>
        </NavigationMenu>
      </header>
      {/* <main className="w-full py-12 md:py-24 lg:py-32" /> */}
    </>
  )
}


function MenuIcon(props:any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <line x1="4" x2="20" y1="12" y2="12" />
      <line x1="4" x2="20" y1="6" y2="6" />
      <line x1="4" x2="20" y1="18" y2="18" />
    </svg>
  )
}


function HomeIcon(props:any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
      <polyline points="9 22 9 12 15 12 15 22" />
    </svg>
  )
}


function ChevronRightIcon(props:any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="white"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="m9 18 6-6-6-6" />
    </svg>
  )
}
