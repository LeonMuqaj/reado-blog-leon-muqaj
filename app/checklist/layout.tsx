import "../globals.css";

export const metadata = {
  title: "Tetbit Blog - Intern Checklist",
  description: "Next.js TypeScript Blog Development Checklist",
};

type Props = {
  children: React.ReactNode;
};

export default function ChecklistLayout({ children }: Props) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
