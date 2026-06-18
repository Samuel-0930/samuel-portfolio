import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "손삼열 포트폴리오",
  description: "업무 자동화, 협업 개발, AI 프로젝트를 경험한 초급 IT/데이터 운영 지원자 손삼열의 포트폴리오입니다.",
  openGraph: {
    title: "손삼열 포트폴리오",
    description: "반복되는 업무 문제를 발견하고 IT 도구로 개선하는 지원자",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="ko"
      className={`${geistSans.variable} ${geistMono.variable} h-full scroll-smooth antialiased`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
