# Samuel Portfolio Design System

## Direction

문제 해결형 주니어 IT/데이터 지원자를 위한 포트폴리오 웹사이트다. 목표는 화려함보다 신뢰감, 읽기 쉬움, 실무 문제 해결력을 전달하는 것이다.

## References

- Vercel: Geist 기반의 미니멀 개발자 포트폴리오 감성
- Linear: 정돈된 카드, 절제된 색상, 제품형 정보 구조
- Toss: 한국 채용 담당자도 빠르게 이해할 수 있는 설명형 문장
- shadcn/ui: 접근성 있는 Radix 기반 컴포넌트와 Tailwind 토큰

## Tone

- 차분함
- 신뢰감
- 실무형
- 문제 해결 중심
- 과장 없는 자신감

## Visual Tokens

### Colors

- Background: `#ffffff`
- Surface: `#fafafa`
- Primary Text: `#171717`
- Secondary Text: `#525252`
- Muted Text: `#737373`
- Border: `#e5e5e5`
- Accent Blue: `#2563eb`
- Accent Green: `#16a34a`
- Warm Highlight: `#f5f2ea`

### Typography

- Primary: Geist Sans
- Mono: Geist Mono
- Hero: tight, confident, not overly large on mobile
- Body: readable Korean line-height, 1.65+

### Layout

- Max width: 1120px
- Section padding: desktop 96px, mobile 56px
- Card radius: 16px
- Button radius: 999px or 10px depending on context
- Grid: 1 column mobile, 2~3 columns desktop

## Components

- Hero with CTA buttons
- Project cards with problem/action/result summary
- Timeline/experience block
- Skills grouped by category
- Detail pages for each project
- Resume download button

## Anti-patterns

- 과한 보라색 그라데이션 금지
- 의미 없는 애니메이션 금지
- 카드 안에 카드 과다 사용 금지
- 학력/실패 서사를 메인에 과하게 노출하지 않기
- 프로젝트 성과 과장 금지

## Content Principle

Each project uses this structure:

1. Problem
2. Action
3. Result
4. Tools
5. What I Learned

## Initial Projects

1. Loa Store discontinued item automation
2. Book-Kong React/Vite team project
3. Care Vision YOLOv8 smart home monitoring
