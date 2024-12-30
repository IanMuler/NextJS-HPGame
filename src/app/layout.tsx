// src/app/layout.tsx
import type { Metadata } from "next";
import { GameProvider } from "@/context/game_context";
import Header from "@/components/header";
import "./globals.css";

export const metadata: Metadata = {
  title: "Harry Potter game",
  description: "Harry Potter game",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <Header />
        <GameProvider>
          {children}
        </GameProvider>
      </body>
    </html>
  );
}
