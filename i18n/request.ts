// import { createRequestConfig } from 'next-intl/server';

// export default createRequestConfig({
//   // Define supported locales
//   locales: ['en', 'ar'],
//   // Set default locale
//   defaultLocale: 'en',
//   // Load messages dynamically based on locale
//   localeResolver: async ({ locale } : any) => {
//     try {
//       return (await import(`../messages/${locale}.json`)).default;
//     } catch (error) {
//       console.error(`Failed to load messages for locale: ${locale}`, error);
//       throw new Error(`Could not load translations for ${locale}`);
//     }
//   },
// });

import {getRequestConfig} from 'next-intl/server';
 
export default getRequestConfig(async () => {
  // Provide a static locale, fetch a user setting,
  // read from `cookies()`, `headers()`, etc.
  const locale = 'en';
 
  return {
    locale,
    messages: (await import(`../messages/${locale}.json`)).default
  };
});