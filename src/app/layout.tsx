import type { Metadata } from 'next';
import { Space_Grotesk, Inter } from 'next/font/google';
import './globals.css';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import SmoothScrollProvider from '@/components/layout/SmoothScrollProvider';
import CustomCursor from '@/components/ui/CustomCursor';
import ThemeSwitcher from '@/components/ui/ThemeSwitcher';
import { SITE_CONFIG } from '@/lib/data/siteConfig';

const spaceGrotesk = Space_Grotesk({
  subsets: ['latin'],
  variable: '--font-heading',
  display: 'swap',
});

const inter = Inter({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700', '800'],
  variable: '--font-body',
  display: 'swap',
});

export const metadata: Metadata = {
  title: {
    default: `${SITE_CONFIG.brandName} ${SITE_CONFIG.brandSuffix} | ${SITE_CONFIG.tagline}`,
    template: `%s | ${SITE_CONFIG.brandName} ${SITE_CONFIG.brandSuffix}`,
  },
  description: SITE_CONFIG.metaDescription,
  keywords: [
    'NAVYORA.TECH',
    'NAVYORA TECH',
    'Digital Technology Studio',
    'Web Development Agency',
    'Full-Stack Web Applications',
    'Cybersecurity Audits',
    'UI/UX Design Studio',
    'Custom Software Automation',
  ],
  authors: [{ name: `${SITE_CONFIG.brandName} ${SITE_CONFIG.brandSuffix}` }],
  creator: `${SITE_CONFIG.brandName} ${SITE_CONFIG.brandSuffix}`,
  metadataBase: new URL(SITE_CONFIG.domain),
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: SITE_CONFIG.domain,
    title: SITE_CONFIG.metaTitle,
    description: SITE_CONFIG.metaDescription,
    siteName: `${SITE_CONFIG.brandName} ${SITE_CONFIG.brandSuffix}`,
  },
  twitter: {
    card: 'summary_large_image',
    title: SITE_CONFIG.metaTitle,
    description: SITE_CONFIG.metaDescription,
    creator: '@navyora.tech',
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: `${SITE_CONFIG.brandName} ${SITE_CONFIG.brandSuffix}`,
    url: SITE_CONFIG.domain,
    logo: `${SITE_CONFIG.domain}/logo.png`,
    description: SITE_CONFIG.metaDescription,
    contactPoint: {
      '@type': 'ContactPoint',
      email: SITE_CONFIG.contact.email,
      contactType: 'customer service',
    },
    sameAs: SITE_CONFIG.socials.map((s) => s.url),
  };

  return (
    <html lang="en" data-scroll-behavior="smooth" className={`${spaceGrotesk.variable} ${inter.variable} dark`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className={`${inter.className} bg-[#08080C] text-[#E2E8F0] antialiased selection:bg-blue-600 selection:text-white transition-colors duration-300`}>
        <SmoothScrollProvider>
          <CustomCursor />
          <Navbar />
          <main className="min-h-screen pt-20">{children}</main>
          <ThemeSwitcher />
          <Footer />
        </SmoothScrollProvider>
      </body>
    </html>
  );
}
