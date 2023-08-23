import { NextRequest, NextResponse } from "next/server"
import { createRemoteJWKSet, jwtVerify } from "jose"

import { hankoApiUrl } from "@/config/hanko"

export async function middleware(req: NextRequest) {
  const hankoCookies = req.cookies.get("hanko")?.value

  const JWKS = createRemoteJWKSet(
    new URL(`${hankoApiUrl}/.well-known/jwks.json`)
  )

  try {
    await jwtVerify(hankoCookies ?? "", JWKS)
  } catch {
    return NextResponse.redirect(new URL("/login", req.url))
  }
}

export const config = {
  matcher: ["/mahasiswa", "/profil"],
}
