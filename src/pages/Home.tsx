import React from 'react';
import Hero from '../components/home/Hero';
import SearchHub from '../components/home/SearchHub';
import AboutUs from '../components/home/AboutUs';
import OurServices from '../components/home/OurServices';
import WhyChoose from '../components/home/WhyChoose';
import StatsBand from '../components/home/StatsBand';
import EcosystemOnboarding from '../components/home/EcosystemOnboarding';
import FAQ from '../components/home/FAQ';

function Home() {
  return (
    <div className="bg-white text-zinc-900 antialiased">
      <Hero />
      <SearchHub />
      <AboutUs />
      <OurServices />
      <WhyChoose />
      <StatsBand />
      <EcosystemOnboarding />
      <FAQ />
    </div>
  );
}

export default Home;
