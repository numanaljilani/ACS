import { NextIntlClientProvider } from 'next-intl';
import { notFound } from 'next/navigation';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import '../globals.css';
import { ReactNode } from 'react';

type Props = {
  children: ReactNode;
  params: Promise <any>;
};

export default async function LocaleLayout({
  children,
  params,
}: Props) {
 const  { locale } = await params
  let messages;
  try {
    messages = (await import(`../../messages/${locale}.json`)).default;
  } catch (error) {
    console.error(`Could not load messages for locale "${locale}"`);
    return notFound(); // ✅ FIX: return it
  }

  return (
    <html lang={locale} dir={locale === 'ar' ? 'rtl' : 'ltr'}>
      <body>
        <NextIntlClientProvider locale={locale} messages={messages}>
          <Header locale={locale}/>
          {children}
          <Footer />
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
