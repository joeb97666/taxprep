/**
 * This code was generated by v0 by Vercel.
 * @see https://v0.dev/t/omG2pZHzH3u
 */
import Link from "next/link"

export function page() {
  return (
    <div className="flex flex-col min-h-screen">
      <header className="flex items-center justify-between px-6 py-4 bg-white dark:bg-gray-800">
        <Link className="text-2xl font-bold text-gray-800 dark:text-white" href="#">
          MyCompany
        </Link>
        <nav className="space-x-4">
          <Link className="text-gray-600 dark:text-gray-200 hover:text-gray-800 dark:hover:text-gray-50" href="#">
            Services
          </Link>
          <Link className="text-gray-600 dark:text-gray-200 hover:text-gray-800 dark:hover:text-gray-50" href="#">
            Contact
          </Link>
        </nav>
      </header>
      <main className="flex flex-1 items-center justify-center bg-gray-100 dark:bg-gray-900">
        <div className="text-center space-y-6">
          <h1 className="text-5xl font-bold text-gray-800 dark:text-white">Welcome to MyCompany</h1>
          <p className="text-xl text-gray-600 dark:text-gray-300">
            We provide high quality services that meet your needs.
          </p>
          <div className="space-x-4">
            <Link
              className="inline-flex h-10 items-center justify-center rounded-md bg-gray-800 px-8 text-sm font-medium text-white shadow transition-colors hover:bg-gray-700 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-900 disabled:pointer-events-none disabled:opacity-50 dark:bg-gray-50 dark:text-gray-900 dark:hover:bg-gray-100 dark:focus-visible:ring-gray-300"
              href="#"
            >
              Get Started
            </Link>
            <Link
              className="inline-flex h-10 items-center justify-center rounded-md border border-gray-200 bg-white px-8 text-sm font-medium shadow-sm transition-colors hover:bg-gray-100 hover:text-gray-900 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-950 disabled:pointer-events-none disabled:opacity-50 dark:border-gray-800 dark:border-gray-800 dark:bg-gray-950 dark:hover:bg-gray-800 dark:hover:text-gray-50 dark:focus-visible:ring-gray-300"
              href="#"
            >
              Contact
            </Link>
          </div>
        </div>
      </main>
      <footer className="flex items-center justify-center py-4 bg-white dark:bg-gray-800">
        <p className="text-gray-600 dark:text-gray-200">© MyCompany. All rights reserved.</p>
      </footer>
    </div>
  )
}