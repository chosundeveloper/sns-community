// 갤러리 (게시판) 타입
export interface Gallery {
  id: string
  name: string
  description: string
  postCount: number
}

// 게시글 타입
export interface Post {
  id: string
  galleryId: string
  title: string
  content: string
  author: string
  createdAt: string
  views: number
  likes: number
  dislikes: number
  commentCount: number
}

// 댓글 타입
export interface Comment {
  id: string
  postId: string
  author: string
  content: string
  createdAt: string
  likes: number
  dislikes: number
}
