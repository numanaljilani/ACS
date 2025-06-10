"use client"
import { useTranslations } from 'next-intl';
import Link from 'next/link';

export default function Footer() {
  const t = useTranslations('Footer');

  return (
    <footer className="bg-green-800 text-white py-8">
      <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-8">
        <div>
          <h3 className="text-lg font-bold mb-4">{t('company')}</h3>
          <p>{t('description')}</p>
        </div>
        <div>
          <h3 className="text-lg font-bold mb-4">{t('quickLinks')}</h3>
          <ul className="space-y-2">
            <li><Link href="/" className="hover:text-gray-200">{t('home')}</Link></li>
            <li><Link href="/about" className="hover:text-gray-200">{t('about')}</Link></li>
            <li><Link href="/services" className="hover:text-gray-200">{t('services')}</Link></li>
            <li><Link href="/contact" className="hover:text-gray-200">{t('contact')}</Link></li>
          </ul>
        </div>
        <div>
          <h3 className="text-lg font-bold mb-4">{t('contact')}</h3>
          <p>{t('address')}</p>
          <p>{t('phone')}</p>
          <p>{t('email')}</p>
        </div>
      </div>
      <div className="mt-8 text-center text-gray-400">
        <p>&copy; {2025} ACS Automations. {t('rights')}</p>
      </div>
    </footer>
  );
}