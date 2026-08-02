import type { Metadata } from "next";
import { IBM_Plex_Sans, IBM_Plex_Mono } from "next/font/google";
import SiteNav from "@/components/SiteNav";
import SiteFooter from "@/components/SiteFooter";
import "./globals.css";
import "@/styles/components.css";

const plexSans = IBM_Plex_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  style: ["normal", "italic"],
  variable: "--font-plex-sans",
});

const plexMono = IBM_Plex_Mono({
  subsets: ["latin"],
  weight: ["400", "500"],
  variable: "--font-plex-mono",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://manapool-audit.vercel.app"),
  title: {
    default: "Mana Pool · Product & UX Audit",
    template: "%s · Mana Pool Audit",
  },
  description:
    "I used Mana Pool for the first time and wrote down what I found: one real bug, four things that lose new buyers, and what I'd fix first.",
  openGraph: {
    title: "I used Mana Pool for the first time. Here's what I found.",
    description:
      "An independent audit: one real bug with a working fix, four things that lose new buyers, and a four-move plan.",
    url: "/",
    siteName: "Mana Pool · Independent audit",
    images: [{ url: "/og.png", width: 1200, height: 630 }],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "I used Mana Pool for the first time. Here's what I found.",
    description:
      "An independent audit: one real bug with a working fix, four things that lose new buyers, and a four-move plan.",
    images: ["/og.png"],
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html
      lang="en"
      data-theme="light"
      suppressHydrationWarning
      className={`${plexSans.variable} ${plexMono.variable}`}
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
