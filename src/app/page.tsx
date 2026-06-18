import Link from "next/link";
import { ArrowUpRight, GitBranch, Mail, MapPin } from "lucide-react";
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
        <div className="mx-auto grid max-w-6xl gap-12 px-5 py-20 md:grid-cols-[1.15fr_0.85fr] md:py-28">
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

          <Card className="overflow-hidden rounded-[2rem] border-neutral-200 bg-neutral-950 text-white shadow-2xl shadow-neutral-950/10">
            <CardHeader className="space-y-4 p-6 md:p-8">
              <Badge className="w-fit rounded-full bg-blue-500/15 text-blue-200 hover:bg-blue-500/15">대표 사례</Badge>
              <CardTitle className="text-2xl leading-tight tracking-[-0.04em] md:text-3xl">{primaryProject.title}</CardTitle>
            </CardHeader>
            <CardContent className="space-y-7 p-6 pt-0 md:p-8 md:pt-0">
              <p className="leading-7 text-neutral-300">{primaryProject.summary}</p>
              <div className="grid gap-3 sm:grid-cols-3">
                {primaryProject.metrics.map((metric) => (
                  <div key={metric.label} className="rounded-2xl border border-white/10 bg-white/[0.03] p-4">
                    <p className="text-xs text-neutral-400">{metric.label}</p>
                    <p className="mt-2 text-lg font-semibold">{metric.value}</p>
                  </div>
                ))}
              </div>
              <Button asChild variant="secondary" className="rounded-full">
                <Link href={`/projects/${primaryProject.slug}`}>자세히 보기</Link>
              </Button>
            </CardContent>
          </Card>
        </div>
      </section>

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
