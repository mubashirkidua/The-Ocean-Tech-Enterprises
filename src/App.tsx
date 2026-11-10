import React, { useState } from 'react';
import { OceanCanvas3D } from './components/OceanCanvas3D.tsx';
import { Navbar } from './components/Navbar.tsx';
import { Hero } from './components/Hero.tsx';
import { ServicesSection } from './components/ServicesSection.tsx';
import { AiPlayground } from './components/AiPlayground.tsx';
import { ProjectEstimator } from './components/ProjectEstimator.tsx';
import { PortfolioSection } from './components/PortfolioSection.tsx';
import { WebDeploymentsSection } from './components/WebDeploymentsSection.tsx';
import { CeoSpotlight } from './components/CeoSpotlight.tsx';
import { TechStackSection } from './components/TechStackSection.tsx';
import { ContactSection } from './components/ContactSection.tsx';
import { Footer } from './components/Footer.tsx';
import { ConsultationModal } from './components/ConsultationModal.tsx';
import { ProductLabModal } from './components/products/ProductLabModal.tsx';

export default function App() {
  const [isConsultationOpen, setIsConsultationOpen] = useState(false);
  const [selectedServiceForConsultation, setSelectedServiceForConsultation] = useState<string | undefined>();
  const [isProductLabOpen, setIsProductLabOpen] = useState(false);
  const [selectedProductForLab, setSelectedProductForLab] = useState<string>('copygenesis-engine');

  const handleOpenConsultation = (serviceTitle?: string) => {
    setSelectedServiceForConsultation(serviceTitle);
    setIsConsultationOpen(true);
  };

  const handleServiceSelect = (serviceTitle: string) => {
    setSelectedServiceForConsultation(serviceTitle);
    // Smooth scroll to contact or open modal
    const contactElem = document.getElementById('contact');
    if (contactElem) {
      contactElem.scrollIntoView({ behavior: 'smooth' });
    } else {
      setIsConsultationOpen(true);
    }
  };

  const handleLaunchProductDemo = (productId: string) => {
    setSelectedProductForLab(productId);
    setIsProductLabOpen(true);
  };

  return (
    <div className="relative min-h-screen bg-[#040812] text-slate-100 flex flex-col selection:bg-cyan-500/30 selection:text-cyan-200 w-full max-w-full overflow-x-hidden">
      {/* 3D WebGL Oceanic Wave Background */}
      <OceanCanvas3D interactive={true} />

      {/* Top Bar Navigation */}
      <Navbar onOpenConsultation={() => handleOpenConsultation()} />

      {/* Main Page Flow */}
      <main className="flex-1 relative z-10 w-full max-w-full overflow-x-hidden">
        <Hero onOpenConsultation={() => handleOpenConsultation()} />

        <ServicesSection onSelectService={handleServiceSelect} />

        <AiPlayground />

        <ProjectEstimator />

        <PortfolioSection
          onSelectSolution={handleServiceSelect}
          onLaunchDemo={handleLaunchProductDemo}
        />

        <WebDeploymentsSection onOpenConsultation={handleOpenConsultation} />

        <CeoSpotlight onScheduleMeeting={() => handleOpenConsultation('Executive Advisory')} />

        <TechStackSection />

        <ContactSection initialService={selectedServiceForConsultation} />
      </main>

      {/* Footer */}
      <Footer />

      {/* Quick Consultation Modal */}
      <ConsultationModal
        isOpen={isConsultationOpen}
        onClose={() => setIsConsultationOpen(false)}
        defaultService={selectedServiceForConsultation}
      />

      {/* Live Working AI Product Lab Modal */}
      <ProductLabModal
        isOpen={isProductLabOpen}
        onClose={() => setIsProductLabOpen(false)}
        initialProductId={selectedProductForLab}
        onRequestDeployment={(productName) => handleOpenConsultation(`Custom Enterprise Deployment: ${productName}`)}
      />
    </div>
  );
}
