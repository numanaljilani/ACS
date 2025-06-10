'use client';

import Link from 'next/link';
import { useTranslations } from 'next-intl';
import { useRouter } from 'next/navigation';
import { useState }  from 'react';

export default function Header() {
  const t = useTranslations('Header');
  const router = useRouter();
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header className="bg-green-800 text-white sticky top-0 z-50 shadow-md">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <Link href="/" className="text-2xl font-bold">
          {t('logo')}
        </Link>
        <nav className="hidden md:flex space-x-4">
          <Link href="/" className="hover:text-gray-200">{t('home')}</Link>
          <Link href="/about" className="hover:text-gray-200">{t('about')}</Link>
          <Link href="/services" className="hover:text-gray-200">{t('services')}</Link>
          <Link href="/contact" className="hover:text-gray-200">{t('contact')}</Link>
        </nav>
        <div className="flex items-center space-x-4">
          <select
            onChange={(e) => router.push(`/${e.target.value}`)}
            className="bg-[#1b5e20] text-white border-none rounded p-1"
          >
            <option value="en">English</option>
            <option value="ar">العربية</option>
          </select>
          <button className="md:hidden" onClick={toggleMenu}>
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>
      </div>
      {isOpen && (
        <nav className="md:hidden bg-[#1b5e20] py-4">
          <div className="container mx-auto px-4 flex flex-col space-y-2">
            <Link href="/" className="hover:text-gray-200" onClick={toggleMenu}>{t('home')}</Link>
            <Link href="/about" className="hover:text-gray-200" onClick={toggleMenu}>{t('about')}</Link>
            <Link href="/services" className="hover:text-gray-200" onClick={toggleMenu}>{t('services')}</Link>
            <Link href="/contact" className="hover:text-gray-200" onClick={toggleMenu}>{t('contact')}</Link>
          </div>
        </nav>
      )}
    </header>
  );
}