import { createServerComponentClient } from "@supabase/auth-helpers-nextjs"
import { cookies } from "next/headers"
import AuthButton from "./auth-button-client"

import React from 'react'

const AuthButtonServer = async () => {
  const supabase = createServerComponentClient({ cookies })

  const { data: { session } } = await supabase.auth.getSession()

  return (
    <AuthButton session={session} />
  )
}

export default AuthButtonServer
