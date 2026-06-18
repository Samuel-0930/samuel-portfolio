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

## 다음에 수정할 것

- 실제 이메일 입력
- 로아스토어 민감정보 가림 처리된 스크린샷 추가
- Book-Kong 담당 기능을 더 정확히 좁혀서 문장 보강
- Care Vision 결과 이미지/스크린샷 추가
- Vercel 배포 및 도메인 연결
