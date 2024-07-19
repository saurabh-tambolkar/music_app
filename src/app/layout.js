import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Music app",
  description: "This is a music app generated by  next.js",
};

export default function RootLayout({ children }) {
  return (
    // <html lang="en" className="dark">
    <html lang="en" >
      <body className={inter.className}>
        <div className="relative w-full flex items-center justify-center">
          <Navbar/>
        </div>
        {children}
      </body>
    </html>
  );
}
