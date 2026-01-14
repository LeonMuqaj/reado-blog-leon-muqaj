import { Montserrat, Playfair_Display } from "next/font/google"; // 1
import "../styles/globals.scss";
import "./globals.css";
import { Analytics } from "@vercel/analytics/next";

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
});

const playfair = Playfair_Display({
  subsets: ["latin"],
  weight: ["400", "600", "700"],
  display: "swap",
  variable: "--font-playfair",
});

import type { Metadata } from "next";

export const metadata: Metadata = {
  metadataBase: new URL("https://tetbit-blog.com"),
  icons: {
    icon: [
      {
        url: "data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='black'><path d='M21 4H3a1 1 0 0 0-1 1v14a1 1 0 0 0 1 1h18a1 1 0 0 0 1-1V5a1 1 0 0 0-1-1zM4 18V6h7v12H4zm16 0h-7V6h7v12z'/></svg>",
        type: "image/svg+xml",
      },
    ],
  },
  title: {
    default: "Reado Blog",
    template: "%s | Reado Blog",
  },
  description:
    "Discover insightful articles on technology, tutorials, news, and opinions. Your go-to resource for web development and tech industry insights.",
  keywords: [
    "blog",
    "technology",
    "web development",
    "tutorials",
    "news",
    "opinions",
    "Next.js",
    "TypeScript",
    "React",
  ],
  authors: [{ name: "Reado Team" }],
  creator: "Reado",
  publisher: "Reado",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "/",
    siteName: "Reado Blog",
    title: "Reado Blog",
    description:
      "Discover insightful articles on technology, tutorials, news, and opinions. Your go-to resource for web development and tech industry insights.",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Reado Blog",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Reado Blog",
    description:
      "Discover insightful articles on technology, tutorials, news, and opinions.",
    images: ["/og-image.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

type Props = {
  children: React.ReactNode;
};

export default function RootLayout({ children }: Props) {
  return (
    <html lang="en">
      <body className={`${montserrat.className} ${playfair.variable}`}>
        {children}
        <Analytics />
      </body>
    </html>
  );
}
