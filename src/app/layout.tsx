import type { Metadata } from "next";
import { Noto_Serif_Bengali } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Marquee from "@/components/Marquee";
import ToastProvider from "@/components/ToastProvider";

const notoSerifBengali = Noto_Serif_Bengali({
  subsets: ["latin", "bengali"],
});



export const metadata: Metadata = {
  title: "Bangla News 24",
  description: "Bangla News 24 - সর্বশেষ বাংলা সংবাদ",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      data-theme="light"
      className={`${notoSerifBengali.className}  h-full antialiased`}
    >
      <body className="min-h-full">
        <Header/>
           <Marquee />
        <main className="max-w-7xl mx-auto">{children}</main>
        <div>Footer</div>
        <ToastProvider />
      </body>
    </html>
  );
}
