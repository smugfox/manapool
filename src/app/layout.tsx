import type { Metadata } from "next";
import { Newsreader, Geist } from "next/font/google";
import SiteNav from "@/components/SiteNav";
import SiteFooter from "@/components/SiteFooter";
import "./globals.css";
import "@/styles/components.css";

const newsreader = Newsreader({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  style: ["normal", "italic"],
  variable: "--font-newsreader",
});

const geist = Geist({
  subsets: ["latin"],
  variable: "--font-geist",
});

export const metadata: Metadata = {
  title: {
    default: "Mana Pool · Product & UX Audit",
    template: "%s · Mana Pool Audit",
  },
  description:
    "An independent product and UX audit of manapool.com: one reproducible defect, four conversion levers, four craft items, and what a design hire would build first.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html
      lang="en"
      data-theme="light"
      suppressHydrationWarning
      className={`${newsreader.variable} ${geist.variable}`}
    >
      <body>
        <script
          // apply the persisted theme before first paint so there is no flash
          dangerouslySetInnerHTML={{
            __html: `try{if(localStorage.getItem('mp-audit-theme')==='dark')document.documentElement.dataset.theme='dark'}catch(e){}`,
          }}
        />
        <SiteNav />
        <main>{children}</main>
        <SiteFooter />
      </body>
    </html>
  );
}
