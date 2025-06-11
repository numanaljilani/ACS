"use client"
import { useTranslations } from 'next-intl';
import Link from 'next/link';

export default function About() {
  const t = useTranslations('About');

  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-green-900/60 text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 animate__animated animate__fadeIn animate__delay-1s">
            {t('heroTitle')}
          </h1>
          <p className="text-lg md:text-xl mb-8 animate__animated animate__slideInUp animate__delay-2s">
            {t('heroSubtitle')}
          </p>
        </div>
      </section>

      {/* Company Overview */}
      <section className="py-16 bg-gray-100">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12 animate__animated animate__fadeIn animate__delay-1s">
            {t('overviewTitle')}
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="animate__animated animate__fadeInLeft animate__delay-2s">
              <h3 className="text-xl font-semibold mb-4">{t('missionTitle')}</h3>
              <p>{t('missionDescription')}</p>
            </div>
            <div className="animate__animated animate__fadeInRight animate__delay-2s">
              <h3 className="text-xl font-semibold mb-4">{t('visionTitle')}</h3>
              <p>{t('visionDescription')}</p>
            </div>
          </div>
        </div>
      </section>

      {/* Our Work */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12 animate__animated animate__fadeIn animate__delay-1s">
            {t('workTitle')}
          </h2>
          <p className="text-lg text-center mb-8 animate__animated animate__slideInUp animate__delay-2s">
            {t('workDescription')}
          </p>
          <div className="flex justify-center">
            <img
              src="/automation-bg1.jpg"
              alt={t('workImageAlt')}
              className="w-full md:w-1/2 rounded-lg shadow-lg animate__animated animate__zoomIn animate__delay-3s"
            />
          </div>
        </div>
      </section>

      {/* Our Team */}
      <section className="py-16 bg-gray-100">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12 animate__animated animate__fadeIn animate__delay-1s">
            {t('teamTitle')}
          </h2>
          <p className="text-lg text-center mb-8 animate__animated animate__slideInUp animate__delay-2s">
            {t('teamDescription')}
          </p>
        </div>
      </section>

      {/* PLC Expertise */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12 animate__animated animate__fadeIn animate__delay-1s">
            {t('plcTitle')}
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {['Siemens', 'Allen-Bradley', 'Mitsubishi', 'Schneider Electric'].map((brand, index) => (
              <div
                key={brand}
                className="bg-white p-4 rounded-lg shadow-lg text-center animate__animated animate__zoomIn animate__delay-2s"
              >
                <p className="font-semibold">{brand}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="bg-acsDark text-white py-12">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-2xl font-bold mb-4 animate__animated animate__fadeIn animate__delay-1s">
            {t('ctaTitle')}
          </h2>
          <Link
            href="/contact"
            className="inline-block bg-acsGreen text-white py-2 px-4 rounded hover:bg-green-700 animate__animated animate__bounceIn animate__delay-2s"
          >
            {t('ctaButton')}
          </Link>
        </div>
      </section>
    </main>
  );
}