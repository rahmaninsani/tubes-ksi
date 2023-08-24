import Image from "next/image"
import Link from "next/link"
import dynamic from "next/dynamic"

import { buttonVariants } from "@/components/ui/button"

export default function LoginPage ()  {
  const HankoAuth = dynamic(() => import("@/components/HankoAuth"), {
    ssr: false,
  })

  return (
    <>
      <section className="flex flex-row">
        <div className="flex w-1/2 flex-col items-center justify-center">
          <Image
            src="https://images.unsplash.com/photo-1564981797816-1043664bf78d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1674&q=80"
            alt="Library photo"
            width={0}
            height={0}
            sizes="100vw"
            className="h-screen w-full object-cover"
          />
          <Link
            href="/"
            className={`${buttonVariants()} absolute left-0 top-0 m-4`}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M10 19l-7-7m0 0l7-7m-7 7h18"
              />
            </svg>
          </Link>
        </div>

        <div className="flex w-1/2 flex-col items-center justify-center">
          <HankoAuth />
        </div>
      </section>
    </>
  )
}

