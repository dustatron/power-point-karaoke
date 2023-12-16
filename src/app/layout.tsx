import type { Metadata } from "next";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Powerpoint Karaoke",
  description: "Random Powerpoint Game",
};

import { Providers } from "./providers";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body style={{ height: "100%" }}>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
