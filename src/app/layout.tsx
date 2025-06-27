import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Pulsate - Your judgment, scaled.",
  description: "Pulsate is a decision intelligence platform that learns your investment thesis.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        {children}
      </body>
    </html>
  );
}
