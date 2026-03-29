"use client"
import Link from 'next/link' // Importante para navegar entre páginas
import styles from './resgister.module.css'
import { supabase } from '@/lib/supabase'
import { useState } from 'react'
import { useRouter } from "next/navigation"

export default function RegisterPage() {
    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState('')                 //tem que ser um estado, e o valor do input tem que ser o estado,
    const [showPassword, setShowPassword] = useState(false)     //  e o onChange tem que atualizar o estado 
    const router = useRouter() // Para redirecionar o usuário após o login




    
    async function handleRegister(e: React.FormEvent) {
        e.preventDefault()

        const { data, error } = await supabase.auth.signUp({
            email,
            password,
        })

        if (error) {
            alert(error.message)
            return
        }

        // 🚨 garante que tem usuário
        const user = data.user

        if (!user) {
            alert("Erro ao criar usuário")
            return
        }

        // 🔥 salvar no banco
        const { error: profileError } = await supabase
            .from("profiles")
            .insert({
                id: user.id,
                email: email,
                role: "user",
            })

        if (profileError) {
            console.log(profileError)
            alert("Erro ao salvar perfil")
            return
        }

        alert('User registered successfully!')
        router.push('/login')

    }



        return (
            <main className={styles.container}>

                <h1 className={styles.createNewUser}>Create New User</h1>

                <form onSubmit={handleRegister} className={styles.form}>

                    <i className={`bi ${showPassword ? 'bi-eye' : 'bi-eye-slash'} ${styles.iconEye}`}
                        onClick={() => setShowPassword(!showPassword)}></i>

                    <input value={name} onChange={(e) => setName(e.target.value)}
                        className={styles.input} type="text" placeholder="Your Name" />

                    <input value={email} onChange={(e) => setEmail(e.target.value)}
                        className={styles.input} type="email" placeholder="Email" />

                    <input value={password} onChange={(e) => setPassword(e.target.value)}
                        className={styles.input} type={showPassword ? "text" : "password"} placeholder="Password" />


                    <button type="submit" className={styles.button}>
                        Register
                    </button>

                </form>

                {/* Botão para voltar ao Login */}
                <Link href="/login" className={styles.link}>
                    Back to Login
                </Link>
            </main>
        )
    }