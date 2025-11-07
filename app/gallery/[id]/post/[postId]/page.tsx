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
        <Link href={`/gallery/${id}`} className="text-blue-600 hover:underline">
          ← {gallery.name}로 돌아가기
        </Link>
      </div>

      {/* 게시글 */}
      <div className="border border-gray-300 rounded-lg p-6 mb-6">
        <h1 className="text-2xl font-bold mb-4">{post.title}</h1>

        <div className="flex items-center gap-4 text-sm text-gray-600 mb-4 pb-4 border-b">
          <span>작성자: {post.author}</span>
          <span>작성일: {post.createdAt}</span>
          <span>조회: {post.views}</span>
        </div>

        <div className="mb-6 whitespace-pre-wrap">{post.content}</div>

        <div className="flex items-center gap-4">
          <button className="flex items-center gap-1 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600">
            👍 추천 ({post.likes})
          </button>
          <button className="flex items-center gap-1 px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600">
            👎 비추천 ({post.dislikes})
          </button>
        </div>
      </div>

      {/* 댓글 섹션 */}
      <div className="border border-gray-300 rounded-lg p-6">
        <h2 className="text-xl font-bold mb-4">
          댓글 ({postComments.length})
        </h2>

        {/* 댓글 목록 */}
        <div className="space-y-4 mb-6">
          {postComments.length === 0 ? (
            <p className="text-gray-500 text-center py-4">
              첫 댓글을 작성해보세요!
            </p>
          ) : (
            postComments.map((comment) => (
              <div key={comment.id} className="border-b pb-4">
                <div className="flex items-center gap-2 mb-2">
                  <span className="font-semibold">{comment.author}</span>
                  <span className="text-sm text-gray-500">{comment.createdAt}</span>
                </div>
                <p className="mb-2">{comment.content}</p>
                <div className="flex items-center gap-2 text-sm">
                  <button className="text-blue-600 hover:underline">
                    👍 {comment.likes}
                  </button>
                  <button className="text-red-600 hover:underline">
                    👎 {comment.dislikes}
                  </button>
                </div>
              </div>
            ))
          )}
        </div>

        {/* 댓글 작성 폼 */}
        <form onSubmit={handleSubmitComment} className="space-y-4">
          <div>
            <input
              type="text"
              placeholder="닉네임"
              value={commentAuthor}
              onChange={(e) => setCommentAuthor(e.target.value)}
              className="w-full px-3 py-2 border border-gray-300 rounded"
              required
            />
          </div>
          <div>
            <textarea
              placeholder="댓글을 입력하세요..."
              value={newComment}
              onChange={(e) => setNewComment(e.target.value)}
              rows={4}
              className="w-full px-3 py-2 border border-gray-300 rounded"
              required
            />
          </div>
          <button
            type="submit"
            className="bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700"
          >
            댓글 작성
          </button>
        </form>
      </div>
    </div>
  )
}
