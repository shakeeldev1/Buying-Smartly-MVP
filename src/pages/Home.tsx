import React from 'react';
import Hero from '../components/home/Hero';
import SearchHub from '../components/home/SearchHub';             // New: Search & Preview Engine Grid
import AboutUs from '../components/home/AboutUs';
import OurServices from '../components/home/OurServices';
import RequestSubmission from '../components/home/RequestSubmission'; // New: User Opportunity Intake Form
import WhyChoose from '../components/home/WhyChoose';
import EcosystemOnboarding from '../components/home/EcosystemOnboarding'; // New: Split Provider/User Sign-up
import MediaShowcase from '../components/home/MediaShowcase';       // New: 3-5 Launch Explainer Videos
import FAQ from '../components/home/FAQ';

function Home() {
  return (
    <div className="bg-white text-black min-h-screen">
      
     
      <Hero />
      
    
      <SearchHub />
      
      
      <AboutUs />
      
    
      <OurServices />
      
     
      <RequestSubmission />
      
      
      <WhyChoose />
      
      
      <MediaShowcase />
      
      <EcosystemOnboarding />
      
     
      <FAQ />

    </div>
  );
}

export default Home;