import { cookies } from "next/headers"
import Image from "next/image"
import Link from "next/link"
import hero from "@/assets/images/hero.svg"

import { siteConfig } from "@/config/site"
import { checkAuth } from "@/lib/utils"
import { buttonVariants } from "@/components/ui/button"

const IndexPage = async () => {
  const isLoggedIn = await checkAuth(cookies)

  return (
    <section>
      <div className="mx-auto flex max-w-7xl flex-col items-center px-5 py-24 md:flex-row">
        <div className="mb-10 flex flex-col items-center text-center md:w-1/2 md:items-start md:text-left lg:grow">
          <h1 className="text-4xl font-extrabold leading-tight tracking-tighter md:text-5xl">
            Memudahkan autentikasi dengan <em>Passkey</em>
          </h1>
          <p className="my-4 text-lg text-gray-600 xl:w-3/4">
            Website ini dibuat untuk memenuhi tugas besar mata kuliah Keamanan
            Sistem Informasi
          </p>

          {!isLoggedIn && (
            <Link
              href={siteConfig.rightNavs[0].href}
              className={buttonVariants()}
            >
              Mulai
            </Link>
          )}
        </div>

        <div className="mb-10 flex flex-col items-center text-center md:w-1/2 md:items-start md:text-left lg:grow">
          <Image src={hero} alt="Hero image" width={800} height={800} />
        </div>
      </div>
    </section>
  )
}

export default IndexPage
