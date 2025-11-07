import { Gallery, Post, Comment } from '@/types'

// 더미 갤러리 데이터
export const galleries: Gallery[] = [
  {
    id: '1',
    name: '자유 갤러리',
    description: '자유롭게 이야기하는 공간',
    postCount: 1523
  },
  {
    id: '2',
    name: '유머 갤러리',
    description: '웃긴 이야기를 공유하는 공간',
    postCount: 823
  },
  {
    id: '3',
    name: '게임 갤러리',
    description: '게임 관련 이야기',
    postCount: 2341
  },
  {
    id: '4',
    name: '연예 갤러리',
    description: '연예인, 방송 이야기',
    postCount: 1034
  },
  {
    id: '5',
    name: '스포츠 갤러리',
    description: '각종 스포츠 이야기',
    postCount: 567
  }
]

// 더미 게시글 데이터
export const posts: Post[] = [
  {
    id: '1',
    galleryId: '1',
    title: '첫 번째 게시글입니다',
    content: '안녕하세요. 첫 번째 게시글입니다.',
    author: '익명123',
    createdAt: '2025-01-08 10:30:00',
    views: 152,
    likes: 15,
    dislikes: 2,
    commentCount: 5
  },
  {
    id: '2',
    galleryId: '1',
    title: '오늘 날씨 진짜 좋네요',
    content: '밖에 나가고 싶다...',
    author: '날씨맨',
    createdAt: '2025-01-08 11:20:00',
    views: 89,
    likes: 8,
    dislikes: 1,
    commentCount: 3
  },
  {
    id: '3',
    galleryId: '1',
    title: '점심 뭐 먹을까요?',
    content: '추천 좀 해주세요',
    author: '배고픈이',
    createdAt: '2025-01-08 12:00:00',
    views: 234,
    likes: 23,
    dislikes: 0,
    commentCount: 18
  },
  {
    id: '4',
    galleryId: '2',
    title: 'ㅋㅋㅋㅋ 이거 봐라',
    content: '진짜 웃기네 ㅋㅋㅋㅋ',
    author: '웃음폭탄',
    createdAt: '2025-01-08 09:15:00',
    views: 456,
    likes: 67,
    dislikes: 3,
    commentCount: 34
  },
  {
    id: '5',
    galleryId: '3',
    title: '이 게임 추천합니다',
    content: '요즘 이거 하는데 진짜 재밌어요',
    author: '게이머',
    createdAt: '2025-01-08 14:30:00',
    views: 321,
    likes: 45,
    dislikes: 5,
    commentCount: 21
  }
]

// 더미 댓글 데이터
export const comments: Comment[] = [
  {
    id: '1',
    postId: '1',
    author: '댓글러1',
    content: '첫 댓글!',
    createdAt: '2025-01-08 10:35:00',
    likes: 3,
    dislikes: 0
  },
  {
    id: '2',
    postId: '1',
    author: '댓글러2',
    content: '환영합니다~',
    createdAt: '2025-01-08 10:40:00',
    likes: 2,
    dislikes: 0
  },
  {
    id: '3',
    postId: '1',
    author: '댓글러3',
    content: '잘 부탁드려요',
    createdAt: '2025-01-08 11:00:00',
    likes: 1,
    dislikes: 0
  }
]
