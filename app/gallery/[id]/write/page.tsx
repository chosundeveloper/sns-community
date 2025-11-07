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
        <Link href={`/gallery/${id}`} className="text-blue-600 hover:underline">
          ← {gallery.name}로 돌아가기
        </Link>
      </div>

      <h1 className="text-3xl font-bold mb-6">글쓰기</h1>

      <form onSubmit={handleSubmit} className="space-y-6">
        <div>
          <label className="block text-sm font-medium mb-2">
            제목 *
          </label>
          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="제목을 입력하세요"
            required
          />
        </div>

        <div>
          <label className="block text-sm font-medium mb-2">
            닉네임 *
          </label>
          <input
            type="text"
            value={author}
            onChange={(e) => setAuthor(e.target.value)}
            className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="닉네임을 입력하세요"
            required
          />
        </div>

        <div>
          <label className="block text-sm font-medium mb-2">
            내용 *
          </label>
          <textarea
            value={content}
            onChange={(e) => setContent(e.target.value)}
            rows={15}
            className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="내용을 입력하세요"
            required
          />
        </div>

        <div className="flex gap-4">
          <button
            type="submit"
            className="bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700"
          >
            작성하기
          </button>
          <Link
            href={`/gallery/${id}`}
            className="bg-gray-500 text-white px-6 py-2 rounded hover:bg-gray-600"
          >
            취소
          </Link>
        </div>
      </form>
    </div>
  )
}
