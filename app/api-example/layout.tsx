import "../globals.css";

export const metadata = {
  title: "Tetbit Blog - API Example",
  description: "Next.js TypeScript Blog Development",
};

type Props = {
  children: React.ReactNode;
};

export default function ApiExampleLayout({ children }: Props) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
