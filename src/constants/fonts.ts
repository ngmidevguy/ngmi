import { Courier_Prime, Fira_Code, EB_Garamond } from 'next/font/google';
import localFont from 'next/font/local'

export const displace_kc = localFont({
  src: [
    {
      path: '../../public/font/displacekc/displace_kc_webfont.woff',
      weight: '400',
      style: 'normal',
    },
    {
      path: '../../public/font/displacekc/displace_kc_webfont.woff2',
      weight: '400',
      style: 'normal',
    },
    {
      path: '../../public/font/displacekc/displace_kc_webfont.ttf',
      weight: '400',
      style: 'normal',
    },
  ],
})

export const fira = Fira_Code({
  weight: 'variable',
  subsets: ['latin'],
  style: ['normal'],
  display: 'swap'
});

export const courier = Courier_Prime({
  subsets: ['latin'],
  weight: ['400', '700'],
  style: ['italic', 'normal'],
  display: 'swap'
});

export const garamond = EB_Garamond({
  subsets: ['latin'],
  variable: '--font-garamond',
  weight: 'variable',
  style: ['italic', 'normal'],
  display: 'swap'
})