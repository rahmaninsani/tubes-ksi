"use client"

import { useEffect, useState } from "react"
import { useRouter } from "next/navigation"
import { Hanko } from "@teamhanko/hanko-elements"

import { hankoApiUrl } from "@/config/hanko"
import { buttonVariants } from "@/components/ui/button"

const LogoutButton = () => {
  const router = useRouter()
  const [hanko, setHanko] = useState<Hanko>()

  useEffect(() => {
    import("@teamhanko/hanko-elements").then(({ Hanko }) =>
      setHanko(new Hanko(hankoApiUrl))
    )
  }, [])

  const logout = async () => {
    try {
      await hanko?.user.logout()
      router.push("/")
      router.refresh()
      return
    } catch (error) {
      console.error(error)
    }
  }

  return (
    <button onClick={logout} className={buttonVariants({ variant: "outline" })}>
      Logout
    </button>
  )
}

export default LogoutButton
