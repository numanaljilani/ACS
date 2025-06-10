'use client';

import { useTranslations } from 'next-intl';
import { useEffect, useState } from 'react';

export default function Stats() {
  const t = useTranslations('Home');
  const [projects, setProjects] = useState(0);
  const [partners, setPartners] = useState(0);
  const [clients, setClients] = useState(0);

  useEffect(() => {
    const animateCounter = (setCounter: (value: number) => void, target: number, duration: number) => {
      let start = 0;
      const increment = target / (duration / 50);
      const timer = setInterval(() => {
        start += increment;
        if (start >= target) {
          start = target;
          clearInterval(timer);
        }
        setCounter(Math.floor(start));
      }, 50);
    };

    animateCounter(setProjects, 150, 2000); // 150 projects
    animateCounter(setPartners, 20, 2000); // 20 partners
    animateCounter(setClients, 50, 2000); // 50 clients
  }, []);

  return (
    <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mt-8">
      <div className="stats-card animate__animated animate__fadeInUp animate__delay-2s">
        <h3 className="text-3xl font-bold">{projects}+</h3>
        <p>{t('projectsDone')}</p>
      </div>
      <div className="stats-card animate__animated animate__fadeInUp animate__delay-3s">
        <h3 className="text-3xl font-bold">{partners}+</h3>
        <p>{t('partners')}</p>
      </div>
      <div className="stats-card animate__animated animate__fadeInUp animate__delay-4s">
        <h3 className="text-3xl font-bold">{clients}+</h3>
        <p>{t('clients')}</p>
      </div>
    </div>
  );
}