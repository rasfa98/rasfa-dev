import Footer from "@/components/footer";
import Header from "@/components/header";
import cn from "classnames";
import { Roboto } from "next/font/google";

import "./globals.scss";

const roboto = Roboto({
  subsets: ["latin"],
  weight: ["400", "700"],
  display: "swap",
  style: ["normal", "italic"],
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `
          if (localStorage.theme === 'dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
            document.documentElement.classList.add('dark')
          } else {
            document.documentElement.classList.remove('dark')
          }`,
          }}
        />
      </head>
      <body className={cn(roboto.className, "dark:bg-black dark:text-white")}>
        <div className="max-w-3xl mx-auto flex flex-col h-screen justify-between px-4">
          <Header />
          <main className="mb-auto">{children}</main>
          <Footer />
        </div>
      </body>
    </html>
  );
}
