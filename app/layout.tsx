import "./globals.css";
import { Figtree } from "next/font/google";

const figtree = Figtree({
  weight: ["500", "800"],
  subsets: ["latin"],
  variable: "--font-figtree",
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-full">
      <body className={`${figtree.variable} h-full antialiased`}>
        {children}
      </body>
    </html>
  );
}
