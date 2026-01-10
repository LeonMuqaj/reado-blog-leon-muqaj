import { Montserrat, Playfair_Display } from "next/font/google"; // 1
import "../styles/globals.scss";
import "./globals.css";

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
  title: {
    default: "Tetbit Blog - Intern Checklist",
    template: "%s | Tetbit Blog",
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
  authors: [{ name: "Tetbit Team" }],
  creator: "Tetbit",
  publisher: "Tetbit",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "/",
    siteName: "Tetbit Blog",
    title: "Tetbit Blog - Intern Checklist",
    description:
      "Discover insightful articles on technology, tutorials, news, and opinions. Your go-to resource for web development and tech industry insights.",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Tetbit Blog",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Tetbit Blog - Intern Checklist",
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
      </body>
    </html>
  );
}
