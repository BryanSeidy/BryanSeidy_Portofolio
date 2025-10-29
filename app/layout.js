import './globals.css'

export const metadata = {
  title: 'ABOMBA Raphaël  - Portfolio',
  description: 'Software Engineering Student Portfolio',
}

export default function RootLayout({ children }) {
  return (
    <html lang="fr">
      <body className="antialiased">{children}</body>
    </html>
  )
}