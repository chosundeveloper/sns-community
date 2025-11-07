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
      <body className="bg-gray-50">
        <header className="bg-white border-b border-gray-200 shadow-sm sticky top-0 z-50">
          <div className="max-w-7xl mx-auto px-4 py-3">
            <div className="flex items-center justify-between">
              <a href="/" className="flex items-center gap-2">
                <div className="w-8 h-8 bg-gradient-to-br from-blue-500 to-purple-600 rounded-lg"></div>
                <h1 className="text-xl font-bold text-gray-900">디시 커뮤니티</h1>
              </a>
              <nav className="flex gap-4 text-sm">
                <a href="/" className="text-gray-600 hover:text-gray-900 font-medium">갤러리</a>
                <a href="#" className="text-gray-600 hover:text-gray-900 font-medium">인기글</a>
              </nav>
            </div>
          </div>
        </header>
        <main className="max-w-7xl mx-auto px-4 py-6 min-h-screen">
          {children}
        </main>
        <footer className="bg-white border-t border-gray-200 py-8 mt-12">
          <div className="max-w-7xl mx-auto px-4 text-center text-sm text-gray-500">
            <p>&copy; 2025 디시 커뮤니티. All rights reserved.</p>
          </div>
        </footer>
      </body>
    </html>
  )
}
