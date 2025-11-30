import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "DARVYN DIGITAL | Real estate marketing agency",
  description:
    "We help Realtors & Developers build a predictable Lead → Nurture → Site Visit → Sales engine using AI & Performance Marketing.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="min-h-screen bg-slate-50 text-slate-900 antialiased">
        {children}
      </body>
    </html>
  );
}
