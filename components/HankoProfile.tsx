"use client"

import { useEffect } from "react"
import { register } from "@teamhanko/hanko-elements"

import { hankoApiUrl } from "@/config/hanko"

const HankoProfile = () => {
  useEffect(() => {
    register(hankoApiUrl).catch((error) => {
      console.error(error)
    })
  }, [])

  return <hanko-profile />
}

export default HankoProfile
