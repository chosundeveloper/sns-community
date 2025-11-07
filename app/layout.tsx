import './globals.css'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'SNS 커뮤니티',
  description: '디시인사이드 스타일 커뮤니티',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="ko">
      <body>
        <header className="bg-blue-600 text-white p-4">
          <div className="container mx-auto">
            <h1 className="text-2xl font-bold">
              <a href="/">SNS 커뮤니티</a>
            </h1>
          </div>
        </header>
        <main className="container mx-auto p-4">
          {children}
        </main>
        <footer className="bg-gray-800 text-white p-4 mt-8">
          <div className="container mx-auto text-center">
            <p>&copy; 2025 SNS 커뮤니티. All rights reserved.</p>
          </div>
        </footer>
      </body>
    </html>
  )
}
