import Link from "next/link";
import Image from "next/image";
import { ArrowUpRight, Camera, CheckCircle2, GitBranch, Mail, MapPin, Table2, UsersRound } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { experiences, profile, projects, skills, strengths } from "@/lib/portfolio-data";

function SectionHeader({ eyebrow, title, description }: { eyebrow: string; title: string; description?: string }) {
  return (
    <div className="mx-auto mb-10 max-w-3xl text-center md:mb-14">
      <p className="mb-3 font-mono text-xs font-medium uppercase tracking-[0.25em] text-blue-600">{eyebrow}</p>
      <h2 className="text-3xl font-semibold tracking-[-0.04em] text-neutral-950 md:text-5xl">{title}</h2>
      {description ? <p className="mt-4 text-base leading-8 text-neutral-600 md:text-lg">{description}</p> : null}
    </div>
  );
}

const proofCards = [
  {
    icon: Table2,
    label: "업무 자동화",
    title: "시트에서 바로 보이는 개선",
    description: "단종 상품 누락을 자동 표기해 확인 시간을 줄였습니다.",
    tone: "border-blue-100 bg-blue-50 text-blue-700",
  },
  {
    icon: UsersRound,
    label: "협업",
    title: "이슈·PR 기반 작업 관리",
    description: "5인 팀 프로젝트에서 작업 흐름과 커뮤니케이션을 정리했습니다.",
    tone: "border-slate-200 bg-slate-50 text-slate-700",
  },
  {
    icon: CheckCircle2,
    label: "검증",
    title: "프로토타입의 가능성과 한계 기록",
    description: "AI 감지 흐름을 구현하고 오탐·프라이버시 한계를 분리했습니다.",
    tone: "border-cyan-100 bg-cyan-50 text-cyan-700",
  },
];

function ProfileProofCard() {
  return (
    <div className="relative mx-auto w-full max-w-[430px]">
      <div className="absolute -left-8 top-10 hidden h-28 w-28 rounded-full bg-blue-200/50 blur-3xl md:block" />
      <div className="absolute -bottom-8 right-4 hidden h-32 w-32 rounded-full bg-cyan-200/40 blur-3xl md:block" />
      <div className="relative overflow-hidden rounded-[2.25rem] border border-neutral-200 bg-white p-3 shadow-2xl shadow-blue-950/10">
        <div className="relative overflow-hidden rounded-[1.75rem] bg-neutral-950">
          <Image
            src="/profile-photo.png"
            alt="손삼열 프로필 사진"
            width={912}
            height={1173}
            priority
            className="aspect-[4/5] w-full object-cover"
          />
          <div className="absolute inset-x-4 bottom-4 rounded-3xl border border-white/15 bg-white/12 p-4 text-white shadow-2xl backdrop-blur-md">
            <div className="flex items-center gap-2 text-xs font-medium text-blue-100">
              <Camera className="size-3.5" />
              <span>Portfolio Identity</span>
            </div>
            <p className="mt-1 text-lg font-semibold tracking-[-0.03em]">손삼열 · 운영형 IT 지원자</p>
            <p className="mt-2 text-sm leading-6 text-white/72">실제 문제를 발견하고, 작게 개선하며, 끝까지 정리합니다.</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function VisualProofSection() {
  return (
    <section className="mx-auto max-w-6xl px-5 py-16 md:py-24">
      <SectionHeader
        eyebrow="시각 증거"
        title="말보다 먼저 보이는 작업 방식"
      />
      <div className="grid gap-5 lg:grid-cols-3">
        {proofCards.map((item) => {
          const Icon = item.icon;
          return (
            <Card key={item.title} className="overflow-hidden rounded-[2rem] border-neutral-200 bg-white shadow-[0_16px_48px_rgba(15,23,42,0.06)]">
              <CardHeader className="space-y-4">
                <div className={`flex size-12 items-center justify-center rounded-2xl border ${item.tone}`}>
                  <Icon className="size-5" />
                </div>
                <div>
                  <p className="text-sm font-medium text-blue-600">{item.label}</p>
                  <CardTitle className="mt-2 text-2xl tracking-[-0.04em]">{item.title}</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <p className="leading-7 text-neutral-600">{item.description}</p>
              </CardContent>
            </Card>
          );
        })}
      </div>
    </section>
  );
}

export default function Home() {
  const primaryProject = projects[0];

  return (
    <main className="min-h-screen bg-white text-neutral-950">
      <header className="sticky top-0 z-40 border-b border-neutral-200/70 bg-white/85 backdrop-blur-xl">
        <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-5">
          <Link href="/" className="font-semibold tracking-[-0.03em]">손삼열</Link>
          <nav className="hidden items-center gap-6 text-sm text-neutral-600 md:flex">
            <a href="#projects" className="transition hover:text-neutral-950">프로젝트</a>
            <a href="#experience" className="transition hover:text-neutral-950">경험</a>
            <a href="#skills" className="transition hover:text-neutral-950">역량</a>
          </nav>
          <Button asChild size="sm" className="rounded-full">
            <Link href="/resume">이력서 보기</Link>
          </Button>
        </div>
      </header>

      <section className="relative overflow-hidden border-b border-neutral-200 bg-[radial-gradient(circle_at_20%_10%,#eff6ff_0,#ffffff_34%,#ffffff_100%)]">
        <div className="mx-auto grid max-w-6xl gap-12 px-5 py-16 md:grid-cols-[1.05fr_0.95fr] md:py-24">
          <div className="flex flex-col justify-center">
            <div className="mb-6 flex flex-wrap gap-2">
              {profile.targetRoles.map((role) => (
                <Badge key={role} variant="secondary" className="rounded-full px-3 py-1 text-neutral-700">
                  {role}
                </Badge>
              ))}
            </div>
            <h1 className="max-w-4xl text-5xl font-semibold leading-[0.98] tracking-[-0.065em] text-neutral-950 md:text-7xl">
              {profile.headline}
            </h1>
            <p className="mt-7 max-w-2xl text-lg leading-8 text-neutral-600 md:text-xl md:leading-9">{profile.subtitle}</p>
            <div className="mt-9 flex flex-col gap-3 sm:flex-row">
              <Button asChild size="lg" className="rounded-full px-6">
                <Link href="/resume">웹 이력서 보기</Link>
              </Button>
              <Button asChild variant="outline" size="lg" className="rounded-full px-6">
                <Link href="/samuel-son-resume.pdf" target="_blank" rel="noreferrer">
                  PDF 이력서 <ArrowUpRight className="ml-1 size-4" />
                </Link>
              </Button>
              <Button asChild variant="ghost" size="lg" className="rounded-full px-6">
                <Link href={profile.github} target="_blank" rel="noreferrer">
                  GitHub <ArrowUpRight className="ml-1 size-4" />
                </Link>
              </Button>
            </div>
            <div className="mt-8 flex flex-wrap items-center gap-4 text-sm text-neutral-500">
              <span className="inline-flex items-center gap-2"><MapPin className="size-4" />{profile.location}</span>
              <Link href={profile.github} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 transition hover:text-neutral-950">
                <GitBranch className="size-4" />{profile.githubLabel}
              </Link>
              <Link href={profile.emailHref} className="inline-flex items-center gap-2 transition hover:text-neutral-950">
                <Mail className="size-4" />{profile.email}
              </Link>
            </div>
          </div>

          <ProfileProofCard />
        </div>
      </section>

      <section className="border-b border-neutral-200 bg-neutral-950 text-white">
        <div className="mx-auto grid max-w-6xl gap-8 px-5 py-12 md:grid-cols-[0.9fr_1.1fr] md:py-16">
          <div>
            <Badge className="rounded-full bg-blue-500/15 text-blue-200 hover:bg-blue-500/15">대표 사례</Badge>
            <h2 className="mt-5 text-3xl font-semibold tracking-[-0.045em] md:text-5xl">{primaryProject.title}</h2>
            <p className="mt-5 max-w-xl leading-8 text-neutral-300">{primaryProject.summary}</p>
            <Button asChild variant="secondary" className="mt-8 rounded-full">
              <Link href={`/projects/${primaryProject.slug}`}>자세히 보기</Link>
            </Button>
          </div>
          <div className="grid gap-3 sm:grid-cols-3 md:self-end">
            {primaryProject.metrics.map((metric) => (
              <div key={metric.label} className="rounded-[1.5rem] border border-white/10 bg-white/[0.04] p-5 shadow-2xl shadow-black/10">
                <p className="text-sm text-neutral-400">{metric.label}</p>
                <p className="mt-3 text-2xl font-semibold tracking-[-0.04em]">{metric.value}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <VisualProofSection />

      <section className="mx-auto max-w-6xl px-5 py-16 md:py-24">
        <SectionHeader
          eyebrow="강점"
          title="화려한 말보다, 실제 문제를 작게 해결한 증거"
          description="지원 직무는 IT지원·운영지원·데이터관리이지만, 보여줄 증거는 개발·자동화·AI 프로젝트로 준비했습니다."
        />
        <div className="grid gap-4 md:grid-cols-3">
          {strengths.map((strength) => (
            <Card key={strength.title} className="rounded-3xl border-neutral-200 bg-white shadow-[0_0_0_1px_rgba(0,0,0,0.03),0_10px_30px_rgba(0,0,0,0.04)]">
              <CardHeader>
                <CardTitle className="tracking-[-0.03em]">{strength.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="leading-7 text-neutral-600">{strength.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      <section id="projects" className="border-y border-neutral-200 bg-neutral-50/80">
        <div className="mx-auto max-w-6xl px-5 py-16 md:py-24">
          <SectionHeader eyebrow="프로젝트" title="문제 → 행동 → 결과가 보이는 프로젝트" />
          <div className="grid gap-5 lg:grid-cols-3">
            {projects.map((project) => (
              <Card key={project.slug} className="group flex flex-col overflow-hidden rounded-[1.75rem] border-neutral-200 bg-white transition duration-200 hover:-translate-y-1 hover:shadow-xl hover:shadow-neutral-900/7">
                <CardHeader className="space-y-4">
                  <div className="flex items-start justify-between gap-4">
                    <Badge variant="outline" className="rounded-full text-[11px] text-neutral-600">{project.eyebrow}</Badge>
                    <ArrowUpRight className="size-5 text-neutral-400 transition group-hover:text-blue-600" />
                  </div>
                  <CardTitle className="text-2xl tracking-[-0.04em]">{project.title}</CardTitle>
                </CardHeader>
                <CardContent className="flex flex-1 flex-col gap-6">
                  <p className="leading-7 text-neutral-600">{project.summary}</p>
                  <div className="mt-auto flex flex-wrap gap-2">
                    {project.stack.slice(0, 4).map((item) => (
                      <span key={item} className="rounded-full bg-neutral-100 px-3 py-1 text-xs text-neutral-600">{item}</span>
                    ))}
                  </div>
                  <Button asChild variant="outline" className="rounded-full">
                    <Link href={`/projects/${project.slug}`}>상세 보기</Link>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="experience" className="mx-auto max-w-6xl px-5 py-16 md:py-24">
        <SectionHeader eyebrow="경험" title="운영·검수·리더십 경험" />
        <div className="mx-auto max-w-3xl rounded-[2rem] border border-neutral-200 bg-white p-6 shadow-[0_0_0_1px_rgba(0,0,0,0.03)] md:p-8">
          {experiences.map((experience, index) => (
            <div key={experience.title}>
              <div className="grid gap-3 py-5 md:grid-cols-[180px_1fr]">
                <div>
                  <h3 className="font-semibold tracking-[-0.02em]">{experience.title}</h3>
                  <p className="mt-1 text-sm text-neutral-500">{experience.subtitle}</p>
                </div>
                <p className="leading-7 text-neutral-600">{experience.description}</p>
              </div>
              {index < experiences.length - 1 ? <Separator /> : null}
            </div>
          ))}
        </div>
      </section>

      <section id="skills" className="border-t border-neutral-200 bg-neutral-950 text-white">
        <div className="mx-auto max-w-6xl px-5 py-16 md:py-24">
          <div className="mb-10 max-w-3xl">
            <p className="mb-3 font-mono text-xs font-medium uppercase tracking-[0.25em] text-blue-300">역량</p>
            <h2 className="text-3xl font-semibold tracking-[-0.04em] md:text-5xl">바로 업무에 연결할 수 있는 도구들</h2>
          </div>
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
            {skills.map((skill) => (
              <div key={skill.group} className="rounded-3xl border border-white/10 bg-white/[0.03] p-5">
                <h3 className="font-semibold">{skill.group}</h3>
                <div className="mt-4 flex flex-wrap gap-2">
                  {skill.items.map((item) => (
                    <span key={item} className="rounded-full border border-white/10 px-3 py-1 text-xs text-neutral-300">{item}</span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <footer className="border-t border-neutral-200 bg-white">
        <div className="mx-auto flex max-w-6xl flex-col gap-4 px-5 py-8 text-sm text-neutral-500 md:flex-row md:items-center md:justify-between">
          <p>© 2026 손삼열. Built with Next.js, Tailwind CSS, shadcn/ui.</p>
          <div className="flex gap-4">
            <Link href={profile.github} target="_blank" rel="noreferrer" className="hover:text-neutral-950">GitHub</Link>
            <Link href="/resume" className="hover:text-neutral-950">이력서</Link>
          </div>
        </div>
      </footer>
    </main>
  );
}
