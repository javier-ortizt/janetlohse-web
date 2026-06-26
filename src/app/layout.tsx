import type { Metadata } from 'next';
import '@/styles/globals.css';

export const metadata: Metadata = {
  title: 'Janet Lohse — Autora, Diseñadora, Oradora',
  description: 'Charlas, servicios y conversaciones sobre diseño, sensorialidad y bienestar. Autora de Una mesa para uno.',
  openGraph: {
    title: 'Janet Lohse',
    description: 'Charlas, servicios y conversaciones sobre diseño, sensorialidad y bienestar.',
    url: 'https://janetlohse.com',
    siteName: 'Janet Lohse',
    locale: 'es_CL',
    type: 'website',
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es">
      <body>{children}</body>
    </html>
  );
}
