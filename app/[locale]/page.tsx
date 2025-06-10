"use client"
import { useTranslations } from 'next-intl';
import Stats from '../../components/Stats';
import Link from 'next/link';

export default function Home() {
  const t = useTranslations('Home');

  return (
    <main className="min-h-screen">
      <section className="hero-section text-white py-20">
        <div className="hero-content container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 animate__animated animate__fadeIn animate__delay-1s">
            {t('heroTitle')}
          </h1>
          <p className="text-lg md:text-xl mb-8 animate__animated animate__slideInUp animate__delay-2s">
            {t('heroSubtitle')}
          </p>
          <Stats />
          <Link
            href="/contact"
            className="mt-8 inline-block bg-acsDark text-white py-2 px-4 rounded hover:bg-green-800 animate__animated animate__bounceIn animate__delay-5s"
          >
            {t('contactUs')}
          </Link>
        </div>
      </section>
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">{t('servicesTitle')}</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="p-6 bg-white shadow-lg rounded-lg">
              <h3 className="text-xl font-bold mb-4">{t('service1Title')}</h3>
              <p>{t('service1Description')}</p>
            </div>
            <div className="p-6 bg-white shadow-lg rounded-lg">
              <h3 className="text-xl font-bold mb-4">{t('service2Title')}</h3>
              <p>{t('service2Description')}</p>
            </div>
            <div className="p-6 bg-white shadow-lg rounded-lg">
              <h3 className="text-xl font-bold mb-4">{t('service3Title')}</h3>
              <p>{t('service3Description')}</p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}