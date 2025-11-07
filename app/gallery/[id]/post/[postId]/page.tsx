'use client'

import { useState } from 'react'
import Link from 'next/link'
import { useParams } from 'next/navigation'
import { posts, comments, galleries } from '@/data/mockData'

export default function PostDetailPage() {
  const params = useParams()
  const id = params.id as string
  const postId = params.postId as string

  const post = posts.find((p) => p.id === postId)
  const gallery = galleries.find((g) => g.id === id)
  const postComments = comments.filter((c) => c.postId === postId)

  const [newComment, setNewComment] = useState('')
  const [commentAuthor, setCommentAuthor] = useState('')

  if (!post || !gallery) {
    return <div>게시글을 찾을 수 없습니다.</div>
  }

  const handleSubmitComment = (e: React.FormEvent) => {
    e.preventDefault()
    alert('댓글 작성 기능은 데모 버전입니다.')
    setNewComment('')
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

      {/* 게시글 */}
      <div className="bg-white border border-gray-200 rounded-xl p-6 md:p-8 mb-6 shadow-sm">
        <h1 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">{post.title}</h1>

        <div className="flex items-center gap-4 text-xs text-gray-500 mb-6 pb-6 border-b border-gray-200">
          <div className="flex items-center gap-1">
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
            </svg>
            <span>{post.author}</span>
          </div>
          <div className="flex items-center gap-1">
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            <span>{post.createdAt}</span>
          </div>
          <div className="flex items-center gap-1">
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
            </svg>
            <span>{post.views}</span>
          </div>
        </div>

        <div className="mb-8 text-gray-700 leading-relaxed whitespace-pre-wrap">{post.content}</div>

        <div className="flex items-center gap-3">
          <button className="inline-flex items-center gap-2 px-6 py-3 bg-blue-50 text-blue-600 rounded-lg hover:bg-blue-100 transition-colors font-medium">
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 10h4.764a2 2 0 011.789 2.894l-3.5 7A2 2 0 0115.263 21h-4.017c-.163 0-.326-.02-.485-.06L7 20m7-10V5a2 2 0 00-2-2h-.095c-.5 0-.905.405-.905.905 0 .714-.211 1.412-.608 2.006L7 11v9m7-10h-2M7 20H5a2 2 0 01-2-2v-6a2 2 0 012-2h2.5" />
            </svg>
            추천 {post.likes}
          </button>
          <button className="inline-flex items-center gap-2 px-6 py-3 bg-gray-100 text-gray-600 rounded-lg hover:bg-gray-200 transition-colors font-medium">
            <svg className="w-5 h-5 transform rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 10h4.764a2 2 0 011.789 2.894l-3.5 7A2 2 0 0115.263 21h-4.017c-.163 0-.326-.02-.485-.06L7 20m7-10V5a2 2 0 00-2-2h-.095c-.5 0-.905.405-.905.905 0 .714-.211 1.412-.608 2.006L7 11v9m7-10h-2M7 20H5a2 2 0 01-2-2v-6a2 2 0 012-2h2.5" />
            </svg>
            비추천 {post.dislikes}
          </button>
        </div>
      </div>

      {/* 댓글 섹션 */}
      <div className="bg-white border border-gray-200 rounded-xl p-6 md:p-8 shadow-sm">
        <h2 className="text-xl font-bold text-gray-900 mb-6">
          댓글 <span className="text-blue-600">{postComments.length}</span>
        </h2>

        {/* 댓글 목록 */}
        <div className="space-y-6 mb-8">
          {postComments.length === 0 ? (
            <div className="text-center py-12">
              <svg className="w-16 h-16 text-gray-300 mx-auto mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
              </svg>
              <p className="text-gray-500">첫 댓글을 작성해보세요!</p>
            </div>
          ) : (
            postComments.map((comment) => (
              <div key={comment.id} className="border-b border-gray-100 pb-6 last:border-0">
                <div className="flex items-center gap-2 mb-3">
                  <div className="w-8 h-8 bg-gradient-to-br from-purple-400 to-pink-400 rounded-full"></div>
                  <div>
                    <span className="font-semibold text-gray-900">{comment.author}</span>
                    <span className="text-xs text-gray-500 ml-2">{comment.createdAt}</span>
                  </div>
                </div>
                <p className="text-gray-700 mb-3 ml-10">{comment.content}</p>
                <div className="flex items-center gap-3 text-sm ml-10">
                  <button className="text-blue-600 hover:text-blue-700 font-medium">
                    👍 {comment.likes}
                  </button>
                  <button className="text-gray-600 hover:text-gray-700 font-medium">
                    👎 {comment.dislikes}
                  </button>
                </div>
              </div>
            ))
          )}
        </div>

        {/* 댓글 작성 폼 */}
        <form onSubmit={handleSubmitComment} className="space-y-4 border-t border-gray-200 pt-6">
          <div>
            <input
              type="text"
              placeholder="닉네임"
              value={commentAuthor}
              onChange={(e) => setCommentAuthor(e.target.value)}
              className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              required
            />
          </div>
          <div>
            <textarea
              placeholder="댓글을 입력하세요..."
              value={newComment}
              onChange={(e) => setNewComment(e.target.value)}
              rows={4}
              className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              required
            />
          </div>
          <button
            type="submit"
            className="bg-blue-600 text-white px-6 py-2.5 rounded-lg hover:bg-blue-700 transition-colors font-medium"
          >
            댓글 작성
          </button>
        </form>
      </div>
    </div>
  )
}
