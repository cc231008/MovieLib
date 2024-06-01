import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({ children }) {
  return (
    <html lang="en" data-theme="dark">
      <head>
          <link rel="icon" type="image/x-svg" href="/favicon.svg" />
          <title>MovieLib</title>
      </head>
      <body className={inter.className}>
        {children}
      </body>
    </html>
  );
}
