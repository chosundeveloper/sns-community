# 게임 커뮤니티 사이트

디시인사이드 스타일의 게임 커뮤니티 사이트입니다.

## 주요 기능

- 🎮 게임별 갤러리 (LoL, 배그, 오버워치, 발로란트 등)
- 📝 게시글 작성 및 조회
- 💬 댓글 시스템
- 👍 추천/비추천 기능
- 💭 실시간 채팅 기능

## 기술 스택

- Next.js 16
- TypeScript
- Tailwind CSS
- Supabase (실시간 기능)

## 로컬 실행 방법

```bash
# 의존성 설치
npm install

# 개발 서버 실행
npm run dev
```

http://localhost:3000 에서 확인하세요.

## 무료 배포 방법 (Vercel)

### 1. Vercel 가입 및 배포

1. https://vercel.com 접속
2. **"Continue with GitHub"** 클릭 (GitHub 계정으로 로그인)
3. **"Add New..."** → **"Project"** 클릭
4. **"Import Git Repository"** 에서 `sns-community` 검색 후 선택
5. **"Deploy"** 버튼 클릭
6. 완료! 자동으로 배포 URL 생성됩니다

### 2. 자동 배포 설정

GitHub에 push할 때마다 자동으로 배포됩니다:

```bash
git add .
git commit -m "업데이트"
git push origin main
```

→ Vercel이 자동으로 감지하고 재배포합니다!

## 배포 URL

배포 후 다음과 같은 URL을 받게 됩니다:
- https://sns-community.vercel.app
- 또는 https://sns-community-your-username.vercel.app

## 다른 무료 배포 옵션

### Netlify
1. https://netlify.com 접속
2. GitHub 연동
3. sns-community 선택
4. Build command: `npm run build`
5. Publish directory: `.next`
6. Deploy 클릭

### Railway
1. https://railway.app 접속
2. GitHub 연동
3. sns-community 선택
4. 자동 배포

## 문제 해결

### 빌드 에러가 나는 경우
```bash
npm run build
```
로컬에서 빌드 테스트 후 에러 수정

### 환경 변수 설정
Vercel Dashboard → Settings → Environment Variables에서 추가

## 라이선스

ISC

## 제작

🤖 Generated with [Claude Code](https://claude.com/claude-code)
