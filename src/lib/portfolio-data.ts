export type Project = {
  slug: string;
  title: string;
  eyebrow: string;
  period: string;
  summary: string;
  role: string;
  stack: string[];
  links?: { label: string; href: string }[];
  metrics: { label: string; value: string }[];
  problem: string;
  actions: string[];
  results: string[];
  learnings: string[];
  resumeBullets: string[];
};

export const profile = {
  name: "손삼열",
  headline: "반복되는 업무 문제를 발견하고, IT 도구로 작게라도 개선하는 지원자",
  subtitle:
    "Google Sheets Apps Script 업무 자동화, React 기반 팀 프로젝트, YOLOv8 Computer Vision 프로토타입을 경험했습니다. 현재 포항·경주·대구권에서 IT지원, 데이터관리, 운영지원, 사무자동화 직무를 준비하고 있습니다.",
  location: "Pohang · Gyeongju · Daegu",
  email: "이메일 입력 예정",
  github: "https://github.com/Samuel-0930",
  targetRoles: ["IT지원", "데이터관리", "운영지원", "사무자동화", "커머스 운영"],
};

export const strengths = [
  {
    title: "업무 자동화",
    description: "반복되는 수작업과 휴먼에러를 발견하고 Google Sheets, Apps Script, AI 도구로 개선합니다.",
  },
  {
    title: "협업 개발",
    description: "React/Vite 팀 프로젝트에서 스크럼 마스터로 GitHub Issues, PR, Milestones 기반 협업을 경험했습니다.",
  },
  {
    title: "AI·데이터 활용",
    description: "Python, OpenCV, YOLOv8, Firebase를 활용해 실제 서비스 흐름을 가진 프로토타입을 구현했습니다.",
  },
];

export const projects: Project[] = [
  {
    slug: "roastore-automation",
    title: "로아스토어 단종 상품 자동 표기 시스템 개선",
    eyebrow: "실무 자동화 · Google Sheets · Apps Script",
    period: "업무 개선 프로젝트",
    summary:
      "카페24 재고 데이터를 입고 요청 시트에 복사하는 과정에서 단종 상품 정보가 누락되어 협력사에 잘못된 입고 요청이 반복되는 문제를 자동화로 개선했습니다.",
    role: "문제 발견, 개선안 제안, Apps Script 구현, 대표/협력사 커뮤니케이션",
    stack: ["Google Sheets", "Google Apps Script", "Cafe24", "Excel", "업무 자동화"],
    metrics: [
      { label: "확인 시간", value: "5분 → 10초" },
      { label: "휴먼에러", value: "사실상 제거" },
      { label: "업무 성격", value: "실제 운영 개선" },
    ],
    problem:
      "카페24에서 엑셀 파일로 현재 스토어 재고를 복사해 입고 요청 시트에 붙여넣는 과정에서, 신제품 추가나 복사 누락으로 기존 단종 상품 정보가 밀리거나 빠졌습니다. 그 결과 단종된 제품을 다시 입고 요청하는 일이 반복되어 협력사 신뢰에도 영향을 줄 수 있었습니다.",
    actions: [
      "단종 상품 누락을 단순 실수가 아니라 반복 가능한 업무 리스크로 정의했습니다.",
      "대표님께 먼저 개선 필요성을 제안하고, 타 협력사 대표들과도 직접 소통했습니다.",
      "Google Sheets Apps Script를 작성해 시트가 덮어쓰기 되더라도 입고 가능 수량 영역에 단종 여부가 자동 표기되도록 만들었습니다.",
      "민감한 상품·협력사 정보 없이도 한 화면에서 단종 상태를 계속 추적할 수 있게 구조를 정리했습니다.",
    ],
    results: [
      "단종 여부 재확인 시간을 업체당 약 5분에서 10초 수준으로 줄였습니다.",
      "여러 업체 입고 요청 시 반복 확인 시간을 크게 줄일 수 있는 구조를 만들었습니다.",
      "단종 상품을 잘못 요청하는 휴먼에러를 사실상 제거했습니다.",
      "작은 자동화가 협력사 커뮤니케이션 품질과 신뢰를 지키는 데 기여할 수 있음을 확인했습니다.",
    ],
    learnings: [
      "작은 불편도 반복되면 조직의 시간과 신뢰를 손상시킬 수 있습니다.",
      "업무를 그대로 수행하는 것보다 먼저 문제를 발견하고 제안하는 태도가 중요합니다.",
      "초기 세팅에 시간이 들더라도 자동화 구조를 만들면 이후 반복 업무가 훨씬 편해집니다.",
    ],
    resumeBullets: [
      "카페24 재고 데이터를 입고 요청 시트에 복사하는 과정에서 단종 상품 정보가 누락되어 협력사에 잘못된 입고 요청이 반복되는 문제 발견",
      "Google Sheets Apps Script를 활용해 데이터 덮어쓰기 이후에도 입고 가능 수량 영역에 단종 여부가 자동 표기되도록 개선",
      "단종 상품 재확인 시간을 약 5분에서 10초로 단축하고, 반복 입고 요청 과정의 휴먼에러를 사실상 제거",
    ],
  },
  {
    slug: "book-kong",
    title: "Book-Kong 독서 기록 웹앱",
    eyebrow: "React/Vite · Team Project · Scrum Master",
    period: "2024.02 - 2024.03",
    summary:
      "독서 습관 형성을 돕는 모바일 반응형 SPA 웹앱입니다. 5인 팀 프로젝트에서 스크럼 마스터 및 프론트엔드 개발자로 참여했습니다.",
    role: "스크럼 마스터 / 프론트엔드 개발",
    stack: ["React", "Vite", "React Router", "TanStack React Query", "PocketBase", "Tailwind CSS", "Storybook", "Netlify", "GitHub"],
    links: [
      { label: "GitHub", href: "https://github.com/FRONTENDSCHOOL8/Book-Kong" },
      { label: "Deploy", href: "https://bookong.netlify.app" },
    ],
    metrics: [
      { label: "팀 규모", value: "5명" },
      { label: "GitHub 기여", value: "146 contributions" },
      { label: "작성 PR", value: "34개" },
    ],
    problem:
      "기존 독서 정보 기록 앱의 디자인과 기능을 개선해, 사용자가 독서 습관을 지속할 수 있도록 돕는 모바일 반응형 웹앱을 기획부터 배포까지 구현해야 했습니다.",
    actions: [
      "GitHub Issues, Milestones, Pull Requests, Projects, Wiki를 활용해 백로그와 작업 흐름을 관리했습니다.",
      "React/Vite 기반 SPA 구조에서 책 검색, 책장, 독서 기록, 피드 등 주요 기능 개발에 참여했습니다.",
      "알라딘 도서 검색 API 연동, 검색/필터링, 무한 스크롤, 반응형 UI 구현 과정에 기여했습니다.",
      "PR Template과 협업 규칙을 적용해 팀 내 작업 품질과 커뮤니케이션을 정리했습니다.",
    ],
    results: [
      "기획, 디자인, 개발, 배포까지 전체 서비스 제작 흐름을 경험했습니다.",
      "Netlify로 실제 접근 가능한 서비스 형태로 배포했습니다.",
      "스크럼 마스터 역할을 통해 일정 관리와 협업 조율 경험을 쌓았습니다.",
    ],
    learnings: [
      "코드 구현뿐 아니라 일정, 역할, 커뮤니케이션이 프로젝트 완성도에 큰 영향을 준다는 것을 배웠습니다.",
      "GitHub 기반 협업은 작업의 투명성과 회고 가능성을 높입니다.",
      "사용자 흐름을 고려한 반응형 UI와 데이터 요청 상태 관리의 중요성을 경험했습니다.",
    ],
    resumeBullets: [
      "5인 팀 프로젝트에서 스크럼 마스터 및 프론트엔드 개발자로 참여하여 GitHub Issues, PR, Milestones 기반 협업 진행",
      "React, Vite, React Router, TanStack React Query, PocketBase, Tailwind CSS를 활용해 독서 기록/책장/피드/검색 기능이 포함된 SPA 웹앱 개발",
      "알라딘 도서 검색 API 연동, 무한 스크롤, 책장 검색/필터링, 독서 상태 관리 등 사용자 중심 기능 구현에 기여",
    ],
  },
  {
    slug: "care-vision",
    title: "Care Vision 스마트홈 안전 모니터링",
    eyebrow: "YOLOv8 · OpenCV · Firebase · Flutter Web",
    period: "프로토타입 프로젝트",
    summary:
      "YOLOv8과 OpenCV를 활용해 낙상 및 화재 위험을 감지하고, Firebase Firestore와 Flutter Web 대시보드를 통해 보호자에게 알림을 제공하는 스마트홈 모니터링 프로토타입입니다.",
    role: "Computer Vision 프로토타입 구현 및 서비스 흐름 설계",
    stack: ["Python", "OpenCV", "YOLOv8", "Ultralytics", "Firebase Firestore", "Flutter Web"],
    links: [
      {
        label: "Notion",
        href: "https://app.notion.com/p/Care-Vision-YOLOv8-Based-Smart-Home-Monitoring-for-Fall-Detection-and-Emergency-Response-2036f7e3d82880d69541e2fe6b927983?source=copy_link",
      },
    ],
    metrics: [
      { label: "사용자 테스트", value: "20명" },
      { label: "감지 대상", value: "낙상·화재" },
      { label: "동기화", value: "실시간" },
    ],
    problem:
      "고령자, 아동, 장애인 등 돌봄이 필요한 가족 구성원이 혼자 있을 때 낙상이나 화재 위험을 빠르게 파악하고 보호자에게 전달할 수 있는 모니터링 흐름이 필요했습니다.",
    actions: [
      "Python과 OpenCV로 카메라 프레임을 처리하고 YOLOv8 모델로 사람과 화재 객체를 감지했습니다.",
      "사람 bounding box의 가로/세로 비율을 기반으로 낙상 가능성을 추정했습니다.",
      "일시적인 오탐을 줄이기 위해 일정 프레임 이상 위험 상황이 지속될 때만 Firestore에 상태를 업데이트했습니다.",
      "Flutter Web 대시보드에서 방별 상태를 색상으로 표시하고 알림을 제공하는 흐름을 구성했습니다.",
    ],
    results: [
      "실시간 영상 감지 → Firebase 상태 업데이트 → 보호자 대시보드 알림까지 이어지는 프로토타입 흐름을 구현했습니다.",
      "20명 사용자 테스트를 통해 색상 기반 위험 표시, 실시간 알림, 홈 레이아웃 커스터마이징에 대한 피드백을 수집했습니다.",
      "오탐 가능성, 프라이버시, 실제 환경 다양성 등 한계를 분석하고 개선 방향을 정리했습니다.",
    ],
    learnings: [
      "AI 모델 구현만큼 실제 사용자에게 전달되는 서비스 흐름이 중요합니다.",
      "Computer Vision 서비스는 정확도뿐 아니라 오탐 관리, 프라이버시, 환경 다양성을 함께 고려해야 합니다.",
      "프로토타입 단계에서는 기술 가능성과 한계를 정직하게 분리해 설명하는 것이 중요합니다.",
    ],
    resumeBullets: [
      "YOLOv8과 OpenCV를 활용해 실시간 영상에서 사람 및 화재 객체를 감지하는 Computer Vision 프로토타입 구현",
      "사람 bounding box 비율과 threshold 로직으로 낙상 상태를 추정하고, Firebase Firestore에 위험 상태를 실시간 반영",
      "20명 사용자 테스트를 통해 알림 방식, 색상 기반 위험 표시, 홈 레이아웃 커스터마이징 등 개선 의견 수집",
    ],
  },
];

export const experiences = [
  {
    title: "상장회사진흥원",
    subtitle: "기업 관련 영상 검수 · 1년",
    description: "기준에 따라 기업 관련 영상 콘텐츠를 확인하고 오류·누락·품질 이슈를 검수했습니다.",
  },
  {
    title: "로아스토어",
    subtitle: "입고 요청 및 운영 업무 개선",
    description: "반복되는 입고 요청 업무에서 단종 상품 누락 문제를 발견하고 Google Sheets 자동화로 개선했습니다.",
  },
  {
    title: "교회 청년부",
    subtitle: "회장 및 회계 담당",
    description: "공동체 운영, 일정 조율, 예산 관리, 회계 처리 경험을 쌓았습니다.",
  },
];

export const skills = [
  { group: "Frontend", items: ["React", "Vite", "Next.js", "TypeScript", "JavaScript", "Tailwind CSS"] },
  { group: "Data / AI", items: ["Python", "Pandas", "OpenCV", "YOLOv8", "Firebase"] },
  { group: "Automation", items: ["Google Sheets", "Apps Script", "Excel", "AI-assisted workflow"] },
  { group: "Collaboration", items: ["Git", "GitHub", "Issues", "Pull Requests", "Scrum"] },
];

export function getProject(slug: string) {
  return projects.find((project) => project.slug === slug);
}
