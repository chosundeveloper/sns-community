import { Gallery, Post, Comment } from '@/types'

// 게임 갤러리 데이터
export const galleries: Gallery[] = [
  {
    id: '1',
    name: '리그 오브 레전드',
    description: 'LoL 게임 정보, 팁, 공략 공유',
    postCount: 3521
  },
  {
    id: '2',
    name: '배틀그라운드',
    description: 'PUBG 전술, 업데이트, 토론',
    postCount: 2143
  },
  {
    id: '3',
    name: '오버워치',
    description: '오버워치 소식, 전략, 영웅 토론',
    postCount: 1876
  },
  {
    id: '4',
    name: '발로란트',
    description: '발로란트 팁, 에이전트 공략',
    postCount: 2945
  },
  {
    id: '5',
    name: '스팀 게임',
    description: '스팀 신작, 세일, 추천 게임',
    postCount: 1567
  },
  {
    id: '6',
    name: '모바일 게임',
    description: '모바일 게임 정보 및 공략',
    postCount: 989
  }
]

// 게임 게시글 데이터
export const posts: Post[] = [
  {
    id: '1',
    galleryId: '1',
    title: '시즌14 티어 올리기 팁',
    content: '브론즈에서 골드까지 빠르게 올라가는 방법 공유합니다. 첫째, 챔피언 풀을 3개 이하로 줄이세요...',
    author: '다이아간다',
    createdAt: '2025-01-08 10:30:00',
    views: 1523,
    likes: 234,
    dislikes: 12,
    commentCount: 45
  },
  {
    id: '2',
    galleryId: '1',
    title: '요즘 원딜 메타 어떤가요?',
    content: '징크스 너프 이후로 뭐가 좋은지 모르겠네요',
    author: '봇라이너',
    createdAt: '2025-01-08 11:20:00',
    views: 892,
    likes: 56,
    dislikes: 3,
    commentCount: 78
  },
  {
    id: '3',
    galleryId: '1',
    title: '탑 베인 상대법 좀 알려주세요',
    content: '진짜 너무 힘듭니다 ㅠㅠ',
    author: '탑고인물',
    createdAt: '2025-01-08 12:00:00',
    views: 656,
    likes: 89,
    dislikes: 2,
    commentCount: 92
  },
  {
    id: '4',
    galleryId: '2',
    title: '에란겔 핫드랍 추천 장소',
    content: '여러분들은 어디서 핫드랍 하시나요? 저는 포치키 파밍이 제일 좋더라구요',
    author: '핫드랍마스터',
    createdAt: '2025-01-08 09:15:00',
    views: 1245,
    likes: 167,
    dislikes: 8,
    commentCount: 134
  },
  {
    id: '5',
    galleryId: '4',
    title: '발로란트 레이즈 너프 심각하네요',
    content: '메인으로 쓰던 레이즈가 너무 약해졌어요. 다른 듀얼리스트 추천 부탁드립니다',
    author: '레이즈장인',
    createdAt: '2025-01-08 14:30:00',
    views: 2103,
    likes: 298,
    dislikes: 45,
    commentCount: 187
  },
  {
    id: '6',
    galleryId: '4',
    title: '플래티넘 찍는법',
    content: '골드에서 계속 정체중인데 탈출 팁 좀 주세요',
    author: '티어올리고파',
    createdAt: '2025-01-08 13:15:00',
    views: 876,
    likes: 123,
    dislikes: 7,
    commentCount: 56
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
