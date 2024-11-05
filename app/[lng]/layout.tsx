import { dir } from 'i18next';
import { ResolvingMetadata } from 'next';
import { Manrope } from 'next/font/google';
import { availableLocales } from '@/i18n/settings';
import { getDefaultMetaData } from '@/lib/utils';
import { SharedPageProps } from '@/types/shared';
import { LenisWrapper } from '@/components/lenis-wrapper';

const manrope = Manrope({
  subsets: ['latin'],
  display: 'swap',
});

type LocaleRouteLayout = SharedPageProps & {
  children: React.ReactNode;
};

export default async function Layout({ children, params: { lng } }: LocaleRouteLayout) {
  return (
    <html lang={lng} dir={lng ? dir(lng) : 'ltr'} className='scroll-smooth'>
      <body className={`${manrope.className}`}>
        <LenisWrapper>{children}</LenisWrapper>
      </body>
    </html>
  );
}

export async function generateMetadata({ params }: SharedPageProps, parent: ResolvingMetadata) {
  return getDefaultMetaData(params.lng, parent);
}

export async function generateStaticParams() {
  // generates default paths for each locale domain/locale1, domain/locale2, etc.
  return availableLocales.map((lng) => ({ lng }));
}
