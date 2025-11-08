'use client'

import Link from 'next/link'
import { useParams } from 'next/navigation'
import { galleries, posts } from '@/data/mockData'
import LiveChat from '@/components/LiveChat'

export default function GalleryPage() {
  const params = useParams()
  const id = params.id as string
  const gallery = galleries.find((g) => g.id === id)
  const galleryPosts = posts.filter((p) => p.galleryId === id)

  if (!gallery) {
    return <div>갤러리를 찾을 수 없습니다.</div>
  }

  return (
    <div>
      <div className="mb-6">
        <Link href="/" className="inline-flex items-center text-sm text-gray-600 hover:text-gray-900 transition-colors">
          <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
          갤러리 목록
        </Link>
      </div>

      <div className="bg-white border border-gray-200 rounded-xl p-6 mb-6">
        <h1 className="text-2xl font-bold text-gray-900 mb-2">{gallery.name}</h1>
        <p className="text-gray-600 text-sm mb-4">{gallery.description}</p>
        <div className="flex items-center justify-between">
          <div className="text-sm text-gray-500">
            총 <span className="font-semibold text-gray-900">{galleryPosts.length}</span>개의 게시글
          </div>
          <Link
            href={`/gallery/${id}/write`}
            className="inline-flex items-center gap-2 bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors text-sm font-medium"
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
            </svg>
            글쓰기
          </Link>
        </div>
      </div>

      <div className="bg-white border border-gray-200 rounded-xl overflow-hidden">
        <table className="w-full">
          <thead className="bg-gray-50 border-b border-gray-200">
            <tr>
              <th className="px-6 py-3 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider">제목</th>
              <th className="px-4 py-3 text-center text-xs font-semibold text-gray-700 uppercase tracking-wider w-32">작성자</th>
              <th className="px-4 py-3 text-center text-xs font-semibold text-gray-700 uppercase tracking-wider w-32">작성일</th>
              <th className="px-4 py-3 text-center text-xs font-semibold text-gray-700 uppercase tracking-wider w-20">조회</th>
              <th className="px-4 py-3 text-center text-xs font-semibold text-gray-700 uppercase tracking-wider w-20">추천</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-200">
            {galleryPosts.length === 0 ? (
              <tr>
                <td colSpan={5} className="px-6 py-12 text-center">
                  <div className="flex flex-col items-center">
                    <svg className="w-12 h-12 text-gray-300 mb-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                    </svg>
                    <p className="text-gray-500">게시글이 없습니다</p>
                  </div>
                </td>
              </tr>
            ) : (
              galleryPosts.map((post) => (
                <tr key={post.id} className="hover:bg-gray-50 transition-colors">
                  <td className="px-6 py-4">
                    <Link
                      href={`/gallery/${id}/post/${post.id}`}
                      className="text-gray-900 hover:text-blue-600 font-medium transition-colors"
                    >
                      {post.title}
                      {post.commentCount > 0 && (
                        <span className="text-blue-600 ml-2 font-semibold">
                          [{post.commentCount}]
                        </span>
                      )}
                    </Link>
                  </td>
                  <td className="px-4 py-4 text-center text-sm text-gray-600">{post.author}</td>
                  <td className="px-4 py-4 text-center text-sm text-gray-500">
                    {post.createdAt.split(' ')[0]}
                  </td>
                  <td className="px-4 py-4 text-center text-sm text-gray-600">{post.views}</td>
                  <td className="px-4 py-4 text-center">
                    <span className="inline-flex items-center text-sm font-medium text-blue-600">
                      {post.likes}
                    </span>
                  </td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>

      {/* 실시간 채팅 */}
      <LiveChat galleryId={id} galleryName={gallery.name} />
    </div>
  )
}
