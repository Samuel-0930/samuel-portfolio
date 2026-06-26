# 배포 / PR 워크플로우

## GitHub 원격 저장소

- Repository: https://github.com/Samuel-0930/samuel-portfolio
- Default branch: `main`
- 로컬 작업 경로: `/Users/samuelson/Desktop/Projects/samuel-portfolio`

## 기본 작업 흐름

1. 최신 `main` 받기

   ```bash
   git checkout main
   git pull --ff-only origin main
   ```

2. 작업 브랜치 만들기

   ```bash
   git checkout -b feat/<작업-이름>
   ```

3. 로컬 검증

   ```bash
   npm run lint
   npm run build
   ```

4. 커밋

   ```bash
   git add <변경 파일>
   git commit -m "feat(portfolio): add project proof section"
   ```

5. 원격 브랜치 push

   ```bash
   git push -u origin feat/<작업-이름>
   ```

6. Pull Request 생성

   ```bash
   gh pr create --base main --head feat/<작업-이름> --fill
   ```

## PR 체크 규칙

- PR마다 GitHub Actions `CI`가 자동으로 실행됩니다.
- CI 내용:
  - `npm ci`
  - `npm run lint`
  - `npm run build`
- PR 본문에는 변경 요약, 검증 결과, Vercel Preview URL을 남깁니다.
- CI 통과 + Preview 확인 후 `main`에 merge합니다.

## Vercel 배포 연결

1. Vercel에서 `Add New Project`를 선택합니다.
2. GitHub 저장소 `Samuel-0930/samuel-portfolio`를 Import합니다.
3. Framework Preset은 `Next.js`를 사용합니다.
4. Build 설정은 기본값을 사용합니다.
   - Install Command: `npm ci`
   - Build Command: `npm run build`
   - Output Directory: Next.js 기본값
5. Production Branch는 `main`으로 둡니다.

## 배포 흐름

- `main`에 merge되면 Vercel Production 배포가 자동으로 실행됩니다.
- PR을 열면 Vercel Preview 배포가 생성됩니다.
- PR 리뷰 때 Preview URL로 모바일/데스크톱 화면을 확인합니다.

## 운영 체크리스트

- [ ] `/` 메인 포트폴리오가 정상 표시된다.
- [ ] `/resume` 웹 이력서가 정상 표시된다.
- [ ] `/samuel-son-resume.pdf` PDF 이력서가 열린다.
- [ ] 프로젝트 상세 페이지 3개가 404 없이 열린다.
- [ ] 모바일 화면에서 카드/버튼이 깨지지 않는다.
- [ ] 민감정보가 포함된 스크린샷은 업로드하지 않는다.
