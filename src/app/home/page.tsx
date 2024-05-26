import React from 'react';

import HeroFitness from '@/components/common/hero/HeroFitness';
import HeroFooter from '@/components/common/hero/HeroFooter';
import HeroNutrition from '@/components/common/hero/HeroNutrition';
import { Header } from '@/components/common/navigation/Header';

export default function Home() {
  return (
    <div style={{ minHeight: '100vh' }}>
      <Header />
      <HeroNutrition />
      <HeroFitness />
      <HeroFooter />
    </div>
  );
}
