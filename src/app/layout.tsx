import { Suspense } from 'react';
import type { Metadata, Viewport } from 'next';

import '@/styles/globals.css';

import { EmailProvider } from '@/context/EmailContext';

import { siteConfig } from '@/config/site';
import { inter } from '@/lib/fonts';
import { TopBar } from '@/components/emails/TopBar';

export const metadata: Metadata = {
  title: {
    default: siteConfig.name,
    template: `%s - ${siteConfig.name}`,
  },
  description: siteConfig.description,
  icons: siteConfig.icons,
};

export const viewport: Viewport = {
  themeColor: siteConfig.themeColor,
};

type RootLayoutProps = Readonly<{
  children: React.ReactNode;
}>;

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="en">
      <body
        className={`min-h-screen bg-background antialiased ${inter.className}`}
      >
        <EmailProvider>
          <Suspense fallback={<div>Loading...</div>}>
            <TopBar />
            {children}
          </Suspense>
        </EmailProvider>
      </body>
    </html>
  );
}
