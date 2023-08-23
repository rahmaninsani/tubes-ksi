import { clsx, type ClassValue } from "clsx"
import { createRemoteJWKSet, jwtVerify } from "jose"
import { twMerge } from "tailwind-merge"

import { hankoApiUrl } from "@/config/hanko"

const cn = (...inputs: ClassValue[]) => {
  return twMerge(clsx(inputs))
}
const checkAuth = async (cookies: any) => {
  const cookiesStore = cookies()
  const hankoCookie = cookiesStore.get("hanko")?.value

  const JWKS = createRemoteJWKSet(
    new URL(`${hankoApiUrl}/.well-known/jwks.json`)
  )

  try {
    await jwtVerify(hankoCookie ?? "", JWKS)
    return true
  } catch {
    return false
  }
}

export { cn, checkAuth }
