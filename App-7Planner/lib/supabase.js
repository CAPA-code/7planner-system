import { createClient } from '@supabase/supabase-js'

// O Next.js identifica automaticamente variáveis que começam com NEXT_PUBLIC_
const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY

if (!supabaseUrl || !supabaseAnonKey) {
  console.error("Erro: As variáveis do Supabase não foram encontradas no .env.local")
}

export const supabase = createClient(supabaseUrl, supabaseAnonKey)

console.log("Supabase Client criado com sucesso")