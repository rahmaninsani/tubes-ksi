import { cookies } from "next/headers"
import Link from "next/link"

import { siteConfig } from "@/config/site"
import { checkAuth } from "@/lib/utils"
import { buttonVariants } from "@/components/ui/button"
import LogoutButton from "@/components/LogoutButton"
import MainNav from "@/components/main-nav"

const SiteHeader = async () => {
  const isLoggedIn = await checkAuth(cookies)

  return (
    <header className="sticky top-0 z-40 w-full border-b">
      <div className="container flex h-16 items-center space-x-4 bg-background sm:justify-between sm:space-x-0">
        <MainNav isLoggedIn={isLoggedIn} items={siteConfig.leftNavs} />
        <div className="flex flex-1 items-center justify-end space-x-4">
          <nav className="flex items-center space-x-1">
            {isLoggedIn ? (
              <LogoutButton />
            ) : (
              <Link
                href={siteConfig.rightNavs[0].href}
                className={buttonVariants({ variant: "outline" })}
              >
                {siteConfig.rightNavs[0].title}
              </Link>
            )}
          </nav>
        </div>
      </div>
    </header>
  )
}

export default SiteHeader
