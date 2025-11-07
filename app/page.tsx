import Link from 'next/link'
import { galleries } from '@/data/mockData'

export default function Home() {
  return (
    <div>
      <h1 className="text-3xl font-bold mb-6">갤러리 목록</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {galleries.map((gallery) => (
          <Link
            href={`/gallery/${gallery.id}`}
            key={gallery.id}
            className="block"
          >
            <div className="border border-gray-300 rounded-lg p-6 hover:bg-gray-50 transition-colors">
              <h2 className="text-xl font-bold mb-2">{gallery.name}</h2>
              <p className="text-gray-600 mb-4">{gallery.description}</p>
              <div className="text-sm text-gray-500">
                게시글 수: {gallery.postCount.toLocaleString()}
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  )
}
