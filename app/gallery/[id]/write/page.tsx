'use client'

import { useState } from 'react'
import Link from 'next/link'
import { useParams, useRouter } from 'next/navigation'
import { galleries } from '@/data/mockData'

export default function WritePage() {
  const params = useParams()
  const router = useRouter()
  const id = params.id as string

  const gallery = galleries.find((g) => g.id === id)

  const [title, setTitle] = useState('')
  const [author, setAuthor] = useState('')
  const [content, setContent] = useState('')

  if (!gallery) {
    return <div>갤러리를 찾을 수 없습니다.</div>
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()

    // 실제로는 서버에 데이터를 전송하는 로직이 들어갑니다
    alert('게시글이 작성되었습니다! (데모 버전)')
    router.push(`/gallery/${id}`)
  }

  return (
    <div>
      <div className="mb-6">
        <Link href={`/gallery/${id}`} className="inline-flex items-center text-sm text-gray-600 hover:text-gray-900 transition-colors">
          <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
          {gallery.name}
        </Link>
      </div>

      <div className="bg-white border border-gray-200 rounded-xl p-6 md:p-8 shadow-sm">
        <h1 className="text-2xl font-bold text-gray-900 mb-6">글쓰기</h1>

        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-2">
              제목 <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors"
              placeholder="제목을 입력하세요"
              required
            />
          </div>

          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-2">
              닉네임 <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              value={author}
              onChange={(e) => setAuthor(e.target.value)}
              className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors"
              placeholder="닉네임을 입력하세요"
              required
            />
          </div>

          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-2">
              내용 <span className="text-red-500">*</span>
            </label>
            <textarea
              value={content}
              onChange={(e) => setContent(e.target.value)}
              rows={15}
              className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors resize-none"
              placeholder="내용을 입력하세요"
              required
            />
          </div>

          <div className="flex gap-3 pt-4">
            <button
              type="submit"
              className="bg-blue-600 text-white px-8 py-2.5 rounded-lg hover:bg-blue-700 transition-colors font-medium"
            >
              작성하기
            </button>
            <Link
              href={`/gallery/${id}`}
              className="bg-gray-100 text-gray-700 px-8 py-2.5 rounded-lg hover:bg-gray-200 transition-colors font-medium inline-flex items-center justify-center"
            >
              취소
            </Link>
          </div>
        </form>
      </div>
    </div>
  )
}
