import "@/styles/globals.css"

import React, { useEffect } from "react"
import type { AppProps } from "next/app"
import Head from "next/head"

import { siteConfig } from "@/config/site"
import { fontSans } from "@/lib/fonts"
import { cn } from "@/lib/utils"

function MyApp({ Component, pageProps }: AppProps) {
  useEffect(() => {
    document.body.className = cn(
      "min-h-screen bg-background font-sans antialiased",
      fontSans.variable
    )
  })

  return (
    <>
      <Head>
        <title>{siteConfig.name}</title>
        <link rel="icon" href="/static/favicon.ico" />
      </Head>
      <div className="relative flex min-h-screen flex-col">
        <div className="flex-1">
          <Component {...pageProps} />
        </div>
      </div>
    </>
  )
}

export default MyApp
