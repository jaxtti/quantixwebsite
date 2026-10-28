// app/layout.tsx
import type { Metadata } from 'next';
import './globals.css';
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: 'Best Minecraft & VPS Hosting Provider - Height',
  description: 'HeightNodes offers reliable and affordable DDoS Protected servers to people across the globe with multiple locations worldwide.',
  openGraph: {
    title: 'Best Minecraft & VPS Hosting Provider - Height',
    description: 'HeightNodes offers reliable and affordable DDoS Protected servers to people across the globe with multiple locations worldwide.',
    url: 'https://heightnodes.com',
    images: ['/embed.png'],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Best Minecraft & VPS Hosting Provider - Height',
    description: 'HeightNodes offers reliable and affordable DDoS Protected servers to people across the globe with multiple locations worldwide.',
    images: ['/embed.png'],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="preconnect" href="https://api.fontshare.com" />
        <link
          rel="stylesheet"
          href="https://api.fontshare.com/v2/css?f[]=satoshi@400,500,700,900&display=swap"
        />
      </head>
      <body className="bg-slate-950 transition-colors duration-300">
        <Header />
        <main className="min-h-[calc(100vh-140px)]">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
