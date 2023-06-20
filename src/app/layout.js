import "./globals.css";
import { Oswald } from "next/font/google";

import TopNavigation from "@/componenets/NavigationTop/TopNavigation";
import Footer from "@/componenets/Footer/Footer";

const oswald = Oswald({ subsets: ["latin"] });

export const metadata = {
  title: "Paragliding",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={oswald.className}>
        <TopNavigation />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
