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

      
      <HeroSection />

      
      <FeaturedProducts />

      
      <VideoSection />


     <SuccessStoriesSection />

      
     <PartnersSection />


    </main>
  );
}