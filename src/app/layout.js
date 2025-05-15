import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Header from "../components/header/Header";
import Footer from "../components/Footer";

export const metadata = {
  title: "삼송빵집",
  description: "삼송빵집 클론 코딩 팀 프로젝트",
  icons: {
    icon: "/favicon.png",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="ko">
      <body>
        <div id="wrap">
          <Header />
          {children}
          <Footer />
        </div>
      </body>
    </html>
  );
}
