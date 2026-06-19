# 손삼열 포트폴리오

Next.js + TypeScript + Tailwind CSS + shadcn/ui 기반 반응형 포트폴리오입니다.

## 확인 방법

```bash
cd /Users/samuelson/Desktop/projects/samuel-portfolio
npm run dev -- --port 3100
```

브라우저에서 열기:

```text
http://127.0.0.1:3100
```

## 주요 페이지

- `/` — 메인 포트폴리오
- `/projects/roastore-automation` — 로아스토어 단종 상품 자동 표기 시스템
- `/projects/book-kong` — Book-Kong 독서 기록 웹앱
- `/projects/care-vision` — Care Vision 스마트홈 안전 모니터링
- `/resume` — 웹 이력서
- `/samuel-son-resume.pdf` — PDF 이력서

## 디자인 방향

- Vercel: 미니멀하고 개발자다운 타이포그래피
- Linear: 정돈된 제품형 카드와 정보 구조
- Toss: 한국어 설명 중심의 읽기 쉬운 문장

## 검증 결과

```bash
npm run build
```

빌드 성공 및 모든 주요 페이지 200 응답 확인 완료.

## 이미지 교체 방법

메인 히어로의 프로필 이미지는 아래 파일을 사용합니다.

```text
public/profile-photo.png
```

더 좋은 증명사진이나 자연스러운 프로필 사진으로 바꾸고 싶으면 같은 경로/파일명으로 덮어쓰면 됩니다.

## 다음에 수정할 것

- 로아스토어 민감정보 가림 처리된 스크린샷 추가
- Book-Kong 실제 화면 캡처 추가
- Care Vision 결과 이미지/스크린샷 추가
- Vercel 배포 및 도메인 연결
