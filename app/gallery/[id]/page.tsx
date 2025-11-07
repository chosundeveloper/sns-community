import Link from 'next/link'
import { galleries, posts } from '@/data/mockData'

interface PageProps {
  params: Promise<{ id: string }>
}

export default async function GalleryPage({ params }: PageProps) {
  const { id } = await params
  const gallery = galleries.find((g) => g.id === id)
  const galleryPosts = posts.filter((p) => p.galleryId === id)

  if (!gallery) {
    return <div>갤러리를 찾을 수 없습니다.</div>
  }

  return (
    <div>
      <div className="mb-6">
        <Link href="/" className="text-blue-600 hover:underline">
          ← 갤러리 목록으로
        </Link>
      </div>

      <div className="mb-6">
        <h1 className="text-3xl font-bold mb-2">{gallery.name}</h1>
        <p className="text-gray-600">{gallery.description}</p>
      </div>

      <div className="mb-4 flex justify-end">
        <Link
          href={`/gallery/${id}/write`}
          className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
        >
          글쓰기
        </Link>
      </div>

      <div className="border border-gray-300 rounded-lg overflow-hidden">
        <table className="w-full">
          <thead className="bg-gray-100">
            <tr>
              <th className="px-4 py-3 text-left">제목</th>
              <th className="px-4 py-3 text-center w-24">작성자</th>
              <th className="px-4 py-3 text-center w-32">작성일</th>
              <th className="px-4 py-3 text-center w-20">조회</th>
              <th className="px-4 py-3 text-center w-20">추천</th>
            </tr>
          </thead>
          <tbody>
            {galleryPosts.length === 0 ? (
              <tr>
                <td colSpan={5} className="px-4 py-8 text-center text-gray-500">
                  게시글이 없습니다.
                </td>
              </tr>
            ) : (
              galleryPosts.map((post) => (
                <tr key={post.id} className="border-t border-gray-200 hover:bg-gray-50">
                  <td className="px-4 py-3">
                    <Link
                      href={`/gallery/${id}/post/${post.id}`}
                      className="text-blue-600 hover:underline"
                    >
                      {post.title}
                      {post.commentCount > 0 && (
                        <span className="text-red-500 ml-1">
                          [{post.commentCount}]
                        </span>
                      )}
                    </Link>
                  </td>
                  <td className="px-4 py-3 text-center text-sm">{post.author}</td>
                  <td className="px-4 py-3 text-center text-sm text-gray-600">
                    {post.createdAt.split(' ')[0]}
                  </td>
                  <td className="px-4 py-3 text-center text-sm">{post.views}</td>
                  <td className="px-4 py-3 text-center text-sm">{post.likes}</td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>
    </div>
  )
}
