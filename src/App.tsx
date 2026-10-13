import React, { useState, useEffect } from 'react';
import { initialProfileData, projectsData } from './data/portfolioData';
import { ProfileData } from './types/portfolio';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { AboutSection } from './components/AboutSection';
import { SkillsSection } from './components/SkillsSection';
import { ProjectsSection } from './components/ProjectsSection';
import { ExperienceTimeline } from './components/ExperienceTimeline';
import { CertificationsSection } from './components/CertificationsSection';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';
import { ResumeModal } from './components/ResumeModal';
import { ProfileCustomizerModal } from './components/ProfileCustomizerModal';

export default function App() {
  const [profile, setProfile] = useState<ProfileData>(() => {
    try {
      const saved = localStorage.getItem('ovi_portfolio_profile_v2');
      if (saved) {
        return { ...initialProfileData, ...JSON.parse(saved) };
      }
    } catch (e) {
      console.error('Failed to parse cached profile', e);
    }
    return initialProfileData;
  });

  const [isResumeOpen, setIsResumeOpen] = useState(false);
  const [isCustomizerOpen, setIsCustomizerOpen] = useState(false);

  // Sync profile to localStorage on change
  const handleSaveProfile = (updated: ProfileData) => {
    setProfile(updated);
    try {
      localStorage.setItem('ovi_portfolio_profile_v2', JSON.stringify(updated));
    } catch (e) {
      console.error('Failed to save profile', e);
    }
  };

  const handleResetProfile = () => {
    setProfile(initialProfileData);
    try {
      localStorage.removeItem('ovi_portfolio_profile_v2');
      localStorage.removeItem('ovi_portfolio_profile');
    } catch (e) {
      console.error('Failed to reset profile', e);
    }
  };

  const handleContactClick = () => {
    const el = document.getElementById('contact');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-stone-50 text-stone-900 selection:bg-stone-900 selection:text-white">
      {/* 3-Zone Top Navigation Bar */}
      <Navbar
        onOpenResume={() => setIsResumeOpen(true)}
        onOpenCustomizer={() => setIsCustomizerOpen(true)}
        onContactClick={handleContactClick}
      />

      <main>
        {/* Split Hero with Profile Card & 4-Column Metric Strip */}
        <Hero
          profile={profile}
          onOpenResume={() => setIsResumeOpen(true)}
          onOpenCustomizer={() => setIsCustomizerOpen(true)}
          onContactClick={handleContactClick}
        />

        {/* Narrative & Academic Mission */}
        <AboutSection profile={profile} />

        {/* EU DigComp 2.1 Test Scores & Technical Matrix */}
        <SkillsSection />

        {/* Selected Work & Field Systems with Interactive Modal */}
        <ProjectsSection projects={projectsData} />

        {/* Leadership & Volunteering Timeline (2017 – Present) */}
        <ExperienceTimeline />

        {/* Certifications (BYLC, BDRCS) & CEFR Language Matrix */}
        <CertificationsSection />

        {/* Interactive Contact & Inquiry Form */}
        <ContactSection profile={profile} />
      </main>

      {/* Clean Footer */}
      <Footer
        profile={profile}
        onOpenResume={() => setIsResumeOpen(true)}
      />

      {/* Europass CV Modal with PDF Print Engine */}
      <ResumeModal
        isOpen={isResumeOpen}
        onClose={() => setIsResumeOpen(false)}
        profile={profile}
      />

      {/* Profile Live Customizer Modal */}
      <ProfileCustomizerModal
        isOpen={isCustomizerOpen}
        onClose={() => setIsCustomizerOpen(false)}
        profile={profile}
        onSave={handleSaveProfile}
        onReset={handleResetProfile}
      />
    </div>
  );
}
