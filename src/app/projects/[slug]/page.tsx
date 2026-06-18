import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, ArrowUpRight } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { getProject, projects } from "@/lib/portfolio-data";

export function generateStaticParams() {
  return projects.map((project) => ({ slug: project.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const project = getProject(slug);
  if (!project) return {};
  return {
    title: `${project.title} | 손삼열 포트폴리오`,
    description: project.summary,
  };
}

export default async function ProjectPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const project = getProject(slug);

  if (!project) notFound();

  return (
    <main className="min-h-screen bg-white text-neutral-950">
      <header className="border-b border-neutral-200 bg-white/85 backdrop-blur-xl">
        <div className="mx-auto flex h-16 max-w-5xl items-center justify-between px-5">
          <Button asChild variant="ghost" className="rounded-full">
            <Link href="/"><ArrowLeft className="mr-2 size-4" />돌아가기</Link>
          </Button>
          <Link href="/resume" className="text-sm text-neutral-500 hover:text-neutral-950">이력서</Link>
        </div>
      </header>

      <section className="border-b border-neutral-200 bg-neutral-50/70">
        <div className="mx-auto max-w-5xl px-5 py-14 md:py-20">
          <Badge variant="outline" className="mb-5 rounded-full bg-white px-3 py-1 text-neutral-600">{project.eyebrow}</Badge>
          <h1 className="max-w-4xl text-4xl font-semibold leading-tight tracking-[-0.055em] md:text-6xl">{project.title}</h1>
          <p className="mt-6 max-w-3xl text-lg leading-8 text-neutral-600">{project.summary}</p>
          <div className="mt-8 flex flex-wrap gap-3">
            {project.links?.map((link) => (
              <Button key={link.href} asChild variant="outline" className="rounded-full bg-white">
                <Link href={link.href} target="_blank" rel="noreferrer">
                  {link.label} <ArrowUpRight className="ml-1 size-4" />
                </Link>
              </Button>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto grid max-w-5xl gap-8 px-5 py-12 md:grid-cols-[0.78fr_1.22fr] md:py-16">
        <aside className="space-y-4">
          <Card className="rounded-3xl border-neutral-200">
            <CardHeader>
              <CardTitle className="text-lg">프로젝트 정보</CardTitle>
            </CardHeader>
            <CardContent className="space-y-5 text-sm">
              <div>
                <p className="text-neutral-500">기간</p>
                <p className="mt-1 font-medium">{project.period}</p>
              </div>
              <div>
                <p className="text-neutral-500">역할</p>
                <p className="mt-1 leading-6 font-medium">{project.role}</p>
              </div>
              <Separator />
              <div className="flex flex-wrap gap-2">
                {project.stack.map((item) => (
                  <span key={item} className="rounded-full bg-neutral-100 px-3 py-1 text-xs text-neutral-600">{item}</span>
                ))}
              </div>
            </CardContent>
          </Card>

          <Card className="rounded-3xl border-neutral-200 bg-neutral-950 text-white">
            <CardHeader>
              <CardTitle className="text-lg">핵심 지표</CardTitle>
            </CardHeader>
            <CardContent className="grid gap-3">
              {project.metrics.map((metric) => (
                <div key={metric.label} className="rounded-2xl border border-white/10 bg-white/[0.03] p-4">
                  <p className="text-xs text-neutral-400">{metric.label}</p>
                  <p className="mt-1 text-xl font-semibold">{metric.value}</p>
                </div>
              ))}
            </CardContent>
          </Card>
        </aside>

        <div className="space-y-8">
          <Card className="rounded-3xl border-neutral-200">
            <CardHeader>
              <CardTitle>문제 상황</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="leading-8 text-neutral-600">{project.problem}</p>
            </CardContent>
          </Card>

          <DetailList title="내가 한 일" items={project.actions} />
          <DetailList title="결과" items={project.results} />
          <DetailList title="배운 점" items={project.learnings} />

          <Card className="rounded-3xl border-neutral-200 bg-blue-50/70">
            <CardHeader>
              <CardTitle>이력서용 요약</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-3">
                {project.resumeBullets.map((bullet) => (
                  <li key={bullet} className="flex gap-3 leading-7 text-neutral-700">
                    <span className="mt-3 size-1.5 shrink-0 rounded-full bg-blue-600" />
                    <span>{bullet}</span>
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>
        </div>
      </section>
    </main>
  );
}

function DetailList({ title, items }: { title: string; items: string[] }) {
  return (
    <Card className="rounded-3xl border-neutral-200">
      <CardHeader>
        <CardTitle>{title}</CardTitle>
      </CardHeader>
      <CardContent>
        <ul className="space-y-3">
          {items.map((item) => (
            <li key={item} className="flex gap-3 leading-7 text-neutral-600">
              <span className="mt-3 size-1.5 shrink-0 rounded-full bg-neutral-950" />
              <span>{item}</span>
            </li>
          ))}
        </ul>
      </CardContent>
    </Card>
  );
}
