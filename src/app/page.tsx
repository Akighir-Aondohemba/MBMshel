// src/app/page.tsx


import HeroSection from './components/HeroSection'; 
import PartnersSection from './components/PartnersSection';
import SuccessStoriesSection from './components/SuccessStoriesSection';
import VideoSection from './components/VideoSection';
import FeaturedProducts from './components/FeaturedProducts';



// --- Home Page Component ---
export default function Home() {
  return (
    <main className="rhbv-home bg-white">

      {/* 1. Hero Section */}
      
      <HeroSection />

      {/* 3 Featured Products Section */}

      <FeaturedProducts />

      {/* 2. Video Section */}
      
      <VideoSection />


      {/* 4. Success Stories Section */}
      
      <SuccessStoriesSection />

      {/* 5. Partners Section */}
     
      <PartnersSection />


    </main>
  );
}