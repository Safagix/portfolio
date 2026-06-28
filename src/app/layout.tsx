import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "safagix — AI systems & bold product engineering",
  description: "Ingeniero de producto para agentes, apps internas y automatizaciones en producción.",
  openGraph: {
    title: "safagix — AI systems & bold product engineering",
    description: "Ingeniero de producto para agentes, apps internas y automatizaciones en producción.",
    type: "website",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es">
      <body>{children}</body>
    </html>
  );
}
