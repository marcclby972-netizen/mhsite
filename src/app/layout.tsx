import type { Metadata } from 'next';
import { Montserrat } from 'next/font/google';
import './globals.css';
import { CartProvider } from '@/context/CartContext';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import ShoppingCart from '@/components/ShoppingCart';
import CookieConsent from '@/components/CookieConsent';
import ChatWidget from '@/components/ChatWidget';
import { SpeedInsights } from '@vercel/speed-insights/next';
import { Analytics } from '@vercel/analytics/react';


const montserrat = Montserrat({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700', '800'],
  variable: '--font-montserrat',
});

export const metadata: Metadata = {
  title: 'MH Advisory - Agence de Stratégie Digitale',
  description: 'Agence de Stratégie Digitale spécialisée dans l\'accompagnement des entreprises vers une transformation digitale réussie. Augmentez votre CA de 180% en 6 mois.',
  keywords: 'stratégie digitale, transformation digitale, conseil, marketing digital, développement web, design',
  authors: [{ name: 'MH Advisory' }],
  creator: 'MH Advisory',
  publisher: 'MH Advisory',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL('https://mhadvisory.fr'),
  openGraph: {
    title: 'MH Advisory - Agence de Stratégie Digitale',
    description: 'Agence de Stratégie Digitale spécialisée dans l\'accompagnement des entreprises vers une transformation digitale réussie.',
    url: 'https://mhadvisory.fr',
    siteName: 'MH Advisory',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'MH Advisory - Agence de Stratégie Digitale',
      },
    ],
    locale: 'fr_FR',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'MH Advisory - Agence de Stratégie Digitale',
    description: 'Agence de Stratégie Digitale spécialisée dans l\'accompagnement des entreprises vers une transformation digitale réussie.',
    images: ['/og-image.jpg'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: 'your-google-verification-code',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="fr" className={montserrat.variable}>
      <body className="min-h-screen bg-[#151514] text-[#EAEAEA] antialiased">
        <CartProvider>
          <Header />

          <main className="pt-20">
            {children}
          </main>
          <Footer />
          <ShoppingCart />
          <CookieConsent />
          <ChatWidget />
          <SpeedInsights />
          <Analytics />
        </CartProvider>
      </body>
    </html>
  );
}

