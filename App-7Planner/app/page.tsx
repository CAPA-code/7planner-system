"use client"

import { useEffect, useState } from "react"
import  styles  from "./page.module.css"
import { useRouter } from "next/navigation"

export default function firstPage() {
     const router = useRouter()
    return (
        <main>
            <img className={styles['logo-7code']} src="./assets/7code.png" alt="Logo do 7code" />
            <h1 className={styles['title']}>Wellcome to 7 SevenCode Systems</h1>

            <div className={styles['containerButton']}>
                <img className={styles['logo-7planner']} src="/assets/7planner.png" onClick={() => router.push("/login")} />
            <button className={styles.loginButton} onClick={() => router.push("/login")}></button>
            </div>

        </main>
        
    )
}