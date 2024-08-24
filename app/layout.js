import { Manrope } from "next/font/google";
import "./globals.css";

const inter = Manrope({ subsets: ["latin"] });

export const metadata = {
  title: "ByPay - Introducing The New PaaS",
  description:
    "An all-in-one platform offering Cloud infrastructure (ByAtlas), Blogging  (ByNews), Trading bot (ByTrade), and much more.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
