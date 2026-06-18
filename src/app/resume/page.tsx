import Link from "next/link";
import { ArrowLeft, GitBranch, Mail, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { experiences, profile, projects, skills } from "@/lib/portfolio-data";

export const metadata = {
  title: "이력서 | 손삼열",
  description: "손삼열 이력서 - IT지원, 데이터관리, 운영지원, 사무자동화",
};

export default function ResumePage() {
  return (
    <main className="min-h-screen bg-neutral-100 py-6 text-neutral-950 print:bg-white print:py-0">
      <div className="mx-auto mb-4 flex max-w-4xl justify-between px-4 print:hidden">
        <Button asChild variant="ghost" className="rounded-full bg-white">
          <Link href="/"><ArrowLeft className="mr-2 size-4" />포트폴리오</Link>
        </Button>
        <Button asChild className="rounded-full">
          <Link href="/samuel-son-resume.pdf" target="_blank" rel="noreferrer">PDF 다운로드</Link>
        </Button>
      </div>

      <article className="mx-auto max-w-4xl bg-white p-8 shadow-xl shadow-neutral-900/10 print:shadow-none md:p-12">
        <header className="grid gap-6 md:grid-cols-[1fr_auto]">
          <div>
            <p className="font-mono text-xs uppercase tracking-[0.24em] text-blue-600">Resume</p>
            <h1 className="mt-2 text-4xl font-semibold tracking-[-0.05em]">{profile.name}</h1>
            <p className="mt-3 max-w-2xl text-lg leading-8 text-neutral-600">{profile.headline}</p>
          </div>
          <div className="space-y-2 text-sm text-neutral-600">
            <p className="flex items-center gap-2"><MapPin className="size-4" /> 포항 · 경주 · 대구</p>
            <p className="flex items-center gap-2"><GitBranch className="size-4" /> github.com/Samuel-0930</p>
            <p className="flex items-center gap-2"><Mail className="size-4" /> 이메일 입력 예정</p>
          </div>
        </header>

        <Separator className="my-8" />

        <section>
          <h2 className="resume-heading">핵심 역량</h2>
          <div className="mt-4 grid gap-3 md:grid-cols-2">
            <div className="resume-box"><strong>업무 자동화</strong><br />Google Sheets Apps Script로 반복 업무와 휴먼에러 개선</div>
            <div className="resume-box"><strong>협업 개발</strong><br />React/Vite 팀 프로젝트, GitHub Issues/PR 기반 협업</div>
            <div className="resume-box"><strong>AI·데이터 활용</strong><br />Python, OpenCV, YOLOv8 기반 프로토타입 경험</div>
            <div className="resume-box"><strong>운영 커뮤니케이션</strong><br />대표·협력사와 직접 소통하며 실제 업무 흐름 개선</div>
          </div>
        </section>

        <section className="mt-8">
          <h2 className="resume-heading">프로젝트</h2>
          <div className="mt-4 space-y-6">
            {projects.map((project) => (
              <div key={project.slug}>
                <div className="flex flex-col gap-1 md:flex-row md:items-baseline md:justify-between">
                  <h3 className="text-lg font-semibold tracking-[-0.02em]">{project.title}</h3>
                  <p className="text-sm text-neutral-500">{project.period}</p>
                </div>
                <p className="mt-1 text-sm text-blue-700">{project.eyebrow}</p>
                <ul className="mt-3 space-y-1.5 text-sm leading-6 text-neutral-700">
                  {project.resumeBullets.map((bullet) => (
                    <li key={bullet}>• {bullet}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>

        <section className="mt-8">
          <h2 className="resume-heading">경험</h2>
          <div className="mt-4 space-y-4">
            {experiences.map((experience) => (
              <div key={experience.title}>
                <div className="flex flex-col gap-1 md:flex-row md:items-baseline md:justify-between">
                  <h3 className="font-semibold">{experience.title}</h3>
                  <p className="text-sm text-neutral-500">{experience.subtitle}</p>
                </div>
                <p className="mt-1 text-sm leading-6 text-neutral-700">{experience.description}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="mt-8">
          <h2 className="resume-heading">기술 스택</h2>
          <div className="mt-4 grid gap-3 md:grid-cols-2">
            {skills.map((skill) => (
              <div key={skill.group} className="text-sm leading-6">
                <strong>{skill.group}</strong>: {skill.items.join(", ")}
              </div>
            ))}
          </div>
        </section>

        <section className="mt-8">
          <h2 className="resume-heading">학력 및 자격</h2>
          <ul className="mt-4 space-y-2 text-sm leading-6 text-neutral-700">
            <li>• 대학교 컴퓨터공학과 중퇴 예정 / 학점은행제 컴퓨터공학 학위 취득 예정</li>
            <li>• 해병대 만기전역</li>
            <li>• ADsP, Microsoft Azure Fundamentals</li>
          </ul>
        </section>
      </article>
    </main>
  );
}
