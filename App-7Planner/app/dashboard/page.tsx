"use client"

import { useEffect, useState } from "react"
import { useRouter } from "next/navigation"
import { supabase } from "@/lib/supabase"

export default function Dashboard() {
  const router = useRouter()
  const [role, setRole] = useState("")

  useEffect(() => {
    async function loadUser() {
      const { data: { user } } = await supabase.auth.getUser()

      if (!user) {
        router.push("/login")
        return
      }

      const { data, error } = await supabase
        .from("profiles")
        .select("role")
        .eq("id", user.id)
        .single()

      if (error) {
        console.log(error)
        return
      }

      setRole(data.role)
    }

    loadUser()
  }, [])

  return (
    <main>
      <h1>Bem-vindo ao 7planner 🚀</h1>

      {role === "admin" && (
        <button>Painel Admin 👑</button>
      )}

      <p>Dashboard inicial</p>
    </main>
  )
}