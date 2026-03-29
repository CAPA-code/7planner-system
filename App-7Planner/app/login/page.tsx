"use client" // Obrigatório para formulários que o usuário clica
import Link from 'next/link' // Importante para navegar entre páginas
import styles from './login.module.css'// Importa o CSS específico para a página de login
import { useState } from 'react'// Importa o hook useState para gerenciar os estados dos inputs
import { useRouter } from "next/navigation"// Importa o hook useRouter para redirecionar o usuário após o login
import { supabase } from '@/lib/supabase'// Importa a instância do Supabase para autenticação

// A função LoginPage é o componente principal da página de login
export default function LoginPage() {

  // Estados para armazenar o email, senha e controle de exibição da senha
  const [email, setEmail] = useState('')                        //para o next saber oq foi digitado no input, 
  const [password, setPassword] = useState('')                 //tem que ser um estado, e o valor do input tem que ser o estado,
  const [showPassword, setShowPassword] = useState(false)     //  e o onChange tem que atualizar o estado 
  const router = useRouter() // Para redirecionar o usuário após o login



  // Função para lidar com o login
  async function handleLogin(e: React.FormEvent) {
  e.preventDefault()

  const { error } = await supabase.auth.signInWithPassword({
    email,
    password,
  })

  if (error) {
    alert(error.message)
    return
  }

  router.push("/dashboard") // Redireciona para a página de dashboard após o login bem-sucedido
}







  // O JSX abaixo é a estrutura da página de login, utilizando as classes do CSS para estilização
  return (
    <main className={styles.container}>

      <img className={styles['logo-7planner']} src="/assets/7planner.png" alt="Logo do 7Planner" />

      <form onSubmit={handleLogin} className={styles['container-login']}>
        <div className={styles.inputs}>
          <input
            id="email"
            type="text"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />

          <div className={styles.passwordWrapper}>

            <i className={`bi ${showPassword ? 'bi-eye' : 'bi-eye-slash'} ${styles.iconEye}`}
              onClick={() => setShowPassword(!showPassword)}></i>

            <input
              id="password"
              type={showPassword ? "text" : "password"}
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
        </div>


        <p className={styles.helpText}>
          Having trouble logging in? Go to the IT Department.
        </p>


        <Link href="/register" className={styles.link}>
          Create New User
        </Link>

        <button type='submit' id={styles['button-login']}>Login</button>
      </form>

      <div className={styles.divisor}>
        <img className={styles['logo-7code']} src="/assets/7code.png" alt="Logo do 7Code" />
        <p className={styles['text-7code']}>®</p>
      </div>

      <footer className={styles.footer}>
        <p className={styles['text-footer']}>© 2026 7 SevenCode. All rights reserved.</p>
      </footer>

    </main>


  )

}
