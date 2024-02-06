import StyledComponentsRegistry from './registry';
import type { Metadata } from 'next'
import { config } from '@fortawesome/fontawesome-svg-core'
import '@fortawesome/fontawesome-svg-core/styles.css'

import { Header, Footer } from '@/components';

config.autoAddCss = false

export const metadata: Metadata = {
  metadataBase: new URL('https://ngmi.dev'),
  title: 'ngmi.dev',
  description: 'don\'t be ngmi bro',
  referrer: 'origin-when-cross-origin',
  keywords: ['ngmi', 'thoughts', 'elite'],
  authors: [{ name: 'ngmidevguy', url: 'https://ngmi.dev' }],
  viewport: {
    width: 'device-width',
    initialScale: 1,
    maximumScale: 1,
  },
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    title: 'ngmi.dev',
    description: 'don\'t be ngmi bro',
    url: 'https://ngmi.dev',
    siteName: 'ngmi.dev',
    images: [
      {
        url: '/img/bs.jpg',
        width: 800,
        height: 600,
        alt: 'Uhh yeah, we will get a pic soon bro.',
      },
      // {
      //   url: '/img/og-alt.jpg',
      //   width: 1800,
      //   height: 1600,
      //   alt: 'Me cuddling my girlfriend Nanditha\'s dog, Mowgli. 1800x1600.',
      // },
    ],
    locale: 'en_US',
    type: 'website',
  },
  // twitter: {
  //   card: 'summary_large_image',
  //   title: 'Next.js',
  //   description: 'The React Framework for the Web',
  //   siteId: '1467726470533754880',
  //   creator: '@nextjs',
  //   creatorId: '1467726470533754880',
  //   images: ['https://nextjs.org/og.png'],
  // },
  // themeColor: [
  //   { media: '(prefers-color-scheme: light)', color: 'cyan' },
  //   { media: '(prefers-color-scheme: dark)', color: 'black' },
  // ],
}

const RootLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <html lang="en">
      <body>
        <StyledComponentsRegistry>
          <Header></Header>
          {children}
          <Footer></Footer>
        </StyledComponentsRegistry>
      </body>
    </html>
  )
}

export default RootLayout;
