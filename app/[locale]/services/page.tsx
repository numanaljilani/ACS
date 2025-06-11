"use client"

import { useTranslations } from 'next-intl';
import Link from 'next/link';

export default function Services() {
  const t = useTranslations('Services');

  const services = [
    { id: 1, image: '/automation-bg1.jpg', title: t('service1Title'), description: t('service1Description') },
    { id: 2, image: '/automation-bg2.jpg', title: t('service2Title'), description: t('service2Description') },
    { id: 3, image: '/automation-bg3.jpg', title: t('service3Title'), description: t('service3Description') },
    { id: 4, image: '/automation-bg1.jpg', title: t('service4Title'), description: t('service4Description') },
    { id: 5, image: '/automation-bg2.jpg', title: t('service5Title'), description: t('service5Description') },
    { id: 6, image: '/automation-bg3.jpg', title: t('service6Title'), description: t('service6Description') },
    { id: 7, image: '/automation-bg1.jpg', title: t('service7Title'), description: t('service7Description') },
    { id: 8, image: '/automation-bg2.jpg', title: t('service8Title'), description: t('service8Description') },
    { id: 9, image: '/automation-bg3.jpg', title: t('service9Title'), description: t('service9Description') },
    { id: 10, image: '/automation-bg1.jpg', title: t('service10Title'), description: t('service10Description') },
  ];

  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-green-800/50 text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 animate__animated animate__fadeIn animate__delay-1s">
            {t('heroTitle')}
          </h1>
          <p className="text-lg md:text-xl mb-8 animate__animated animate__slideInUp animate__delay-2s">
            {t('heroSubtitle')}
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12 animate__animated animate__fadeIn animate__delay-1s">
            {t('servicesTitle')}
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div
                key={service.id}
                className="bg-white shadow-lg rounded-lg overflow-hidden animate__animated animate__fadeInUp hover:scale-110 duration-500"
                style={{ animationDelay: `${(index % 6) * 0.2 + 1}s` }}
              >
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-4">{service.title}</h3>
                  <p className="text-gray-600">{service.description}</p>
                </div>
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