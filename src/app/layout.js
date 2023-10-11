import "./globals.css";

import { Oswald } from "next/font/google";

import TopNavigation from "@/componenets/NavigationTop/TopNavigation";
import Menu from "@/componenets/menu/Menu";
import Footer from "@/componenets/Footer/Footer";

// FIXED ICONS BUYME COFFE/CONATC
import BuyMeACoffee from "@/componenets/buyMeACoffe/BuyMeACoffee";
import HeroSocMediaIcons from "@/componenets/contactIcons/HeroSocMediaIcons";

// CONTEXT PROVIDER
import MenuContextProvider from "@/context/MenuContextProvider";

const oswald = Oswald({ subsets: ["latin"] });

export const metadata = {
  title: "Paragliding",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${oswald.className}`}>
        <MenuContextProvider>
          <TopNavigation />
          <Menu />
        </MenuContextProvider>
        {/* <BuyMeACoffee /> */}
        <HeroSocMediaIcons />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
