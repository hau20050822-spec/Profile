import type { Metadata } from "next";
import { Roboto } from "next/font/google";
import "./globals.css";
import '@coreui/coreui/dist/css/coreui.min.css'
import Footer from "@/components/layout/Footer";
import Header from "@/components/layout/Header";

const roboto = Roboto({
  subsets: ["latin"],
  weight: ["300", "400", "500", "700"],
  variable: "--font-roboto",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Lê Hậu - Profile",
  description: "Trang cá nhân của Lê Hậu",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="vi">
      <body className={`${roboto.variable} font-sans antialiased`}>
        <Header/>
        <main className="min-h-screen">
          {children}
        </main>
        <Footer/>
      </body>
    </html>
  );
}
