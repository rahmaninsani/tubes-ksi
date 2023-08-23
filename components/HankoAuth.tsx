"use client"

import { useCallback, useEffect, useState } from "react"
import { useRouter } from "next/navigation"
import { Hanko, register } from "@teamhanko/hanko-elements"

import { hankoApiUrl } from "@/config/hanko"

const HankoAuth = () => {
  const router = useRouter()
  const [hanko, setHanko] = useState<Hanko>()

  useEffect(() => {
    import("@teamhanko/hanko-elements").then(({ Hanko }) =>
      setHanko(new Hanko(hankoApiUrl))
    )
  }, [])

  const redirectAfterLogin = useCallback(() => {
    router.push("/profil")
    router.refresh()
  }, [router])

  useEffect(
    () =>
      hanko?.onAuthFlowCompleted(() => {
        redirectAfterLogin()
      }),
    [hanko, redirectAfterLogin]
  )

  useEffect(() => {
    register(hankoApiUrl).catch((error) => {
      console.error(error)
    })
  }, [])

  return <hanko-auth />
}

export default HankoAuth
