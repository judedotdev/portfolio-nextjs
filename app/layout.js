import { Russo_One, Sora, Roboto, Roboto_Slab } from "next/font/google";
import "./globals.css";

// Google Fonts
const russoOne = Russo_One({
  weight: "400",
  subsets: ["latin"],
  display: "swap",
  variable: "--font-russo-one",
});

const sora = Sora({
  weight: ["300", "400", "500", "700"],
  subsets: ["latin"],
  display: "swap",
  variable: "--font-sora",
});

const roboto = Roboto({
  weight: [
    "100",
    "300",
    "400",
    "500",
    "700",
    "900",
  ],
  style: ["normal", "italic"],
  subsets: ["latin"],
  display: "swap",
  variable: "--font-roboto",
});

const robotoSlab = Roboto_Slab({
  weight: [
    "100",
    "200",
    "300",
    "400",
    "500",
    "600",
    "700",
    "800",
    "900",
  ],
  subsets: ["latin"],
  display: "swap",
  variable: "--font-roboto-slab",
});

export const metadata = {
  title: "Jude's Portfolio",
  description: "Web Developer, Blockchain Developer, Python Programmer",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${russoOne.variable} ${sora.variable} ${roboto.variable} ${robotoSlab.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
