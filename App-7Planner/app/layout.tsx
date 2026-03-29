
import './globals.css'
/* No topo do globals.css */
export const metadata = {
  title: '7Planner - Marketing System',
  description: 'Sistema de planejamento de marketing',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt-br">
      <body>
        {/* O 'children' é onde as suas páginas (como o login) vão aparecer */}
        {children}
      </body>
    </html>
  )
}