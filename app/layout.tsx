import "./globals.css";
import { Figtree } from "next/font/google";

const figtree = Figtree({
  weight: ['500', '800'],
  subsets: ["latin"],
  variable: "--font-figtree"
})

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${figtree.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}
