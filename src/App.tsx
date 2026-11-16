import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { StatsBar } from './components/StatsBar';
import { AboutSection } from './components/AboutSection';
import { RoomSection } from './components/RoomSection';
import { FacilitiesSection } from './components/FacilitiesSection';
import { CostCalculator } from './components/CostCalculator';
import { LocationSection } from './components/LocationSection';
import { RulesSection } from './components/RulesSection';
import { TestimonialsSection } from './components/TestimonialsSection';
import { FAQSection } from './components/FAQSection';
import { Footer } from './components/Footer';
import { FloatingWhatsApp } from './components/FloatingWhatsApp';
import { SurveyBookingModal } from './components/SurveyBookingModal';

export const App: React.FC = () => {
  const [surveyModalOpen, setSurveyModalOpen] = useState(false);
  const [surveyDefaultRoom, setSurveyDefaultRoom] = useState<string | undefined>(undefined);

  const handleOpenSurvey = (roomName?: string) => {
    setSurveyDefaultRoom(roomName);
    setSurveyModalOpen(true);
  };

  const handleScrollToRooms = () => {
    const el = document.getElementById('kamar');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-stone-50 text-stone-800 antialiased selection:bg-brand-500 selection:text-white">
      {/* Sticky Navigation */}
      <Navbar onOpenSurvey={() => handleOpenSurvey()} />

      <main className="flex-1">
        {/* Hero Section */}
        <Hero 
          onOpenSurvey={() => handleOpenSurvey()} 
          onExploreRooms={handleScrollToRooms} 
        />

        {/* Stats Counter Bar */}
        <StatsBar />

        {/* About & Values */}
        <AboutSection />

        {/* Room Types & Pricing */}
        <RoomSection onOpenSurvey={handleOpenSurvey} />

        {/* Shared Facilities */}
        <FacilitiesSection />

        {/* Interactive Cost Calculator */}
        <CostCalculator />

        {/* Location, Distance & Maps */}
        <LocationSection />

        {/* Rules & Etiquette */}
        <RulesSection />

        {/* Resident Testimonials */}
        <TestimonialsSection />

        {/* FAQs */}
        <FAQSection />
      </main>

      {/* Footer */}
      <Footer />

      {/* Floating WhatsApp Quick Action Button */}
      <FloatingWhatsApp />

      {/* Survey & Booking Modal */}
      <SurveyBookingModal
        isOpen={surveyModalOpen}
        onClose={() => setSurveyModalOpen(false)}
        defaultRoomName={surveyDefaultRoom}
      />
    </div>
  );
};

export default App;
