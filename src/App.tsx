/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  PhoneCall, ShieldCheck, Heart, Clock, Award, Star, StarOff, AlertTriangle, 
  MapPin, CheckCircle, Video, X, CalendarCheck, HelpCircle, ChevronUp, Bell, 
  Sparkles, Coffee, BookOpen, Facebook, Instagram, Twitter, Linkedin
} from 'lucide-react';

// Modular Imports
import EmergencyHeader from './components/EmergencyHeader';
import { Hero, About, Services, WhyChooseUs, NICUHighlight, WellnessPrograms } from './components/Sections';
import { AppointmentForm, Reviews, Gallery, FAQs, HealthTips, ContactLocation } from './components/InteractiveFeatures';
import EmergencyActionBar from './components/EmergencyActionBar';

export default function App() {
  // Global States
  const [toastMessage, setToastMessage] = useState<string | null>(null);
  const [teleconsultOpen, setTeleconsultOpen] = useState(false);
  const [emergencyCallSimOpen, setEmergencyCallSimOpen] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);

  // Auto-running toast alerts simulation helper
  const triggerToast = (msg: string) => {
    setToastMessage(msg);
    setTimeout(() => {
      setToastMessage(null);
    }, 4000);
  };

  // Tracking Scroll Progress percentage
  useEffect(() => {
    const handleScrollProgress = () => {
      const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
      if (totalHeight > 0) {
        setScrollProgress((window.scrollY / totalHeight) * 100);
      }
    };
    window.addEventListener('scroll', handleScrollProgress, { passive: true });
    return () => window.removeEventListener('scroll', handleScrollProgress);
  }, []);

  // Dispatch standard welcoming toast
  useEffect(() => {
    const timer = setTimeout(() => {
      triggerToast("Welcome! Lotus Hospital pediatric helpers are online to assist you (24×7).");
    }, 2000);
    return () => clearTimeout(timer);
  }, []);

  // Shared scroll event
  const handleScrollToTarget = (elementId: string) => {
    const element = document.getElementById(elementId);
    if (element) {
      const offset = 130;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;
      
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <div className="min-h-screen bg-white text-gray-800 antialiased selection:bg-sky-500/10 selection:text-sky-600">
      
      {/* 1. Scroll Progress Indicator line on top */}
      <div 
        className="fixed top-0 left-0 h-1 bg-gradient-to-r from-sky-400 via-mint-400 to-sky-600 z-50 transition-all duration-100"
        style={{ width: `${scrollProgress}%` }}
      ></div>

      {/* 2. Global Notifications Toast Popups */}
      <AnimatePresence>
        {toastMessage && (
          <motion.div
            initial={{ opacity: 0, y: 35, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 35, scale: 0.9 }}
            className="fixed bottom-20 lg:bottom-10 left-5 z-50 max-w-sm bg-gray-900/95 backdrop-blur text-white py-3.5 px-5 rounded-2xl shadow-2xl flex items-center gap-3 border border-white/10"
          >
            <div className="bg-sky-500 text-white p-1.5 rounded-xl">
              <Bell className="w-4.5 h-4.5 animate-bounce" />
            </div>
            <div className="flex-1">
              <p className="text-xs font-bold leading-relaxed">{toastMessage}</p>
            </div>
            <button 
              onClick={() => setToastMessage(null)}
              className="text-gray-400 hover:text-white p-1 cursor-pointer"
            >
              <X className="w-4 h-4" />
            </button>
          </motion.div>
        )}
      </AnimatePresence>

      {/* 3. Core Sticky Header Bar */}
      <EmergencyHeader 
        onBookClick={() => {
          handleScrollToTarget('appointment');
          triggerToast("Scroll down to secure your pediatric checkup token.");
        }}
        onCallClick={() => setEmergencyCallSimOpen(true)}
      />

      {/* 4. Active Main Sections Layout */}
      <main className="space-y-1">
        {/* Hero Area */}
        <Hero 
          onBookClick={() => handleScrollToTarget('appointment')}
          onCallClick={() => setEmergencyCallSimOpen(true)}
          onExploreServices={() => handleScrollToTarget('services')}
        />

        {/* Dynamic Teleconsultation Callout Banner */}
        <section className="bg-sky-50 py-10 border-y border-sky-100/50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="bg-white rounded-3xl p-6 sm:p-8 border border-sky-100 shadow-sm flex flex-col lg:flex-row items-center justify-between gap-6 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-48 h-48 bg-sky-100/35 rounded-full filter blur-2xl pointer-events-none"></div>
              
              <div className="flex items-center gap-5 relative z-10 flex-col sm:flex-row text-center sm:text-left">
                <div className="bg-sky-100 p-4 rounded-2xl text-sky-600 shrink-0">
                  <Video className="w-8 h-8 animate-pulse" />
                </div>
                <div>
                  <span className="bg-sky-150 text-sky-700 text-[10px] font-black tracking-widest uppercase px-2.5 py-1 rounded-full">
                    Advanced Digital Outpatient Care
                  </span>
                  <h3 className="text-xl sm:text-2xl font-black text-gray-900 tracking-tight mt-1.5">
                    Prefer staying home? Try Video Teleconsultation
                  </h3>
                  <p className="text-xs sm:text-sm text-gray-500 font-medium leading-relaxed mt-1">
                    Connect immediately with our on-duty senior pediatric specialist over high-definition secure web conference keys.
                  </p>
                </div>
              </div>

              <button
                onClick={() => setTeleconsultOpen(true)}
                className="bg-sky-500 hover:bg-sky-600 active:bg-sky-700 text-white font-black text-xs sm:text-sm px-6 py-3.5 rounded-2xl shadow-sm hover:shadow transition-all shrink-0 cursor-pointer w-full lg:w-auto text-center"
              >
                Initiate Video Consultation Now
              </button>
            </div>
          </div>
        </section>

        {/* About Hospital */}
        <About />

        {/* Specialized Services */}
        <Services />

        {/* Clinical NICU Emergency Highlights */}
        <NICUHighlight />

        {/* Why families Choose Lotus Hospital */}
        <WhyChooseUs />

        {/* Child Wellness Programs Packages */}
        <WellnessPrograms />

        {/* Interactive Booking form */}
        <AppointmentForm />

        {/* Testimonials Review Section */}
        <Reviews />

        {/* Virtual Facility Photo gallery */}
        <Gallery />

        {/* Health blog advisory columns */}
        <HealthTips />

        {/* Accordions FAQ Search database */}
        <FAQs />

        {/* Address & Embedded Maps frame */}
        <ContactLocation />
      </main>

      {/* 5. Sticky Float Bottom components */}
      <EmergencyActionBar 
        onBookClick={() => handleScrollToTarget('appointment')}
        onCallClick={() => setEmergencyCallSimOpen(true)}
      />

      {/* 6. Footer Layout section */}
      <footer className="bg-gray-950 text-gray-400 pt-16 pb-28 lg:pb-12 border-t border-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10">
            
            {/* Widget A: Brand profile */}
            <div className="lg:col-span-4 flex flex-col space-y-4">
              <div className="flex items-center gap-2.5">
                <div className="bg-gradient-to-tr from-sky-400 to-mint-400 p-1.5 rounded-xl">
                  {/* Small Lotus SVG */}
                  <svg className="w-6 h-6 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M12 22s-8-4.5-8-11.5A8 8 0 0 1 12 3a8 8 0 0 1 8 7.5c0 7-8 11.5-8 11.5z" />
                  </svg>
                </div>
                <h3 className="font-extrabold text-white text-lg sm:text-xl tracking-tight leading-none">
                  Lotus Hospital <span className="text-sky-400 font-medium text-sm sm:text-base">For Newborn & Children</span>
                </h3>
              </div>
              <p className="text-gray-500 text-xs sm:text-sm leading-relaxed">
                Dedicated premium pediatric and neonatal diagnostic hospital based in Vadodara, Gujarat. Combining technical ICU depth with warm, kid-friendly clinical surroundings.
              </p>

              {/* Verified certifications indicators */}
              <div className="space-y-2 pt-2">
                <div className="flex items-center gap-2 text-xs font-bold text-gray-400">
                  <ShieldCheck className="w-4 h-4 text-emerald-500" />
                  <span>IAP (Indian Academy of Pediatrics) Compliant</span>
                </div>
                <div className="flex items-center gap-2 text-xs font-bold text-gray-400">
                  <Award className="w-4 h-4 text-sky-400" />
                  <span>Level-III Neonatologists Unit Accreditation</span>
                </div>
              </div>

              {/* Simple Social links */}
              <div className="flex items-center gap-2.5 pt-4">
                <a href="https://facebook.com" className="bg-gray-900 hover:bg-sky-500/10 p-2.5 rounded-xl text-gray-500 hover:text-sky-400 transition-colors" aria-label="Lotus Facebook">
                  <Facebook className="w-4 h-4" />
                </a>
                <a href="https://instagram.com" className="bg-gray-900 hover:bg-sky-500/10 p-2.5 rounded-xl text-gray-500 hover:text-sky-400 transition-colors" aria-label="Lotus Instagram">
                  <Instagram className="w-4 h-4" />
                </a>
                <a href="https://twitter.com" className="bg-gray-900 hover:bg-sky-500/10 p-2.5 rounded-xl text-gray-500 hover:text-sky-400 transition-colors" aria-label="Lotus Twitter">
                  <Twitter className="w-4 h-4" />
                </a>
                <a href="https://linkedin.com" className="bg-gray-900 hover:bg-sky-500/10 p-2.5 rounded-xl text-gray-500 hover:text-sky-400 transition-colors" aria-label="Lotus LinkedIn">
                  <Linkedin className="w-4 h-4" />
                </a>
              </div>
            </div>

            {/* Widget B: Navigation Sitemap list */}
            <div className="lg:col-span-2 flex flex-col space-y-4">
              <h4 className="text-white font-extrabold text-xs sm:text-sm uppercase tracking-wider">Quick Navigation</h4>
              <ul className="space-y-2.5 text-xs sm:text-sm text-gray-500">
                {['Home', 'About Us', 'Services', 'NICU & Emergency', 'Wellness Programs', 'Health Tips', 'Testimonials', 'Gallery', 'FAQ', 'Contact'].map((item, idx) => {
                  const targetId = ['home', 'about', 'services', 'nicu-emergency', 'programs', 'health-tips', 'testimonials', 'gallery', 'faq', 'contact'][idx];
                  return (
                    <li key={item}>
                      <button 
                        onClick={() => handleScrollToTarget(targetId)}
                        className="hover:text-sky-400 text-left cursor-pointer hover:underline transition-all"
                      >
                        {item}
                      </button>
                    </li>
                  );
                })}
              </ul>
            </div>

            {/* Widget C: 12 Services listing */}
            <div className="lg:col-span-3 flex flex-col space-y-4">
              <h4 className="text-white font-extrabold text-xs sm:text-sm uppercase tracking-wider">Our Core Services</h4>
              <ul className="space-y-2.5 text-[11px] sm:text-xs text-gray-500 font-semibold grid grid-cols-1 gap-1">
                {[
                  'Neonatal Intensive Care (NICU)', 'Pediatric Consultation', 'Vaccination Center',
                  'Newborn Care & Support', 'Child Emergency Care', 'Fever & Infection Treatment',
                  'Child Nutrition Guidance', 'Growth Monitoring & Charts', 'Asthma & Allergy Therapies',
                  'Pediatric ICU (PICU) Support', 'Developmental Assessments', 'Preventive Child Assessments'
                ].map((sName) => (
                  <li key={sName} className="flex items-center gap-1.5 hover:text-sky-400 transition-colors">
                    <span className="w-1 h-1 rounded-full bg-sky-500"></span>
                    <span>{sName}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Widget D: Urgent Admissions & Location contact detail */}
            <div className="lg:col-span-3 flex flex-col space-y-4">
              <h4 className="text-white font-extrabold text-xs sm:text-sm uppercase tracking-wider">Urgent Support</h4>
              <div className="space-y-3">
                <div className="bg-red-500/10 p-3.5 rounded-2xl border border-red-500/20 text-xs text-red-200">
                  <span className="font-extrabold block text-sm text-white mb-1">Ambulance Hotline</span>
                  <a href="tel:+917069780800" className="font-black text-lg block text-white hover:text-red-400 hover:underline">
                    +91 70697 80800
                  </a>
                  <p className="text-[10px] text-gray-400 font-medium leading-relaxed mt-1">
                    Call directly. Fully equipped neonatal ICU ventilators on-board for premature newborns transit.
                  </p>
                </div>

                <div className="text-xs space-y-1">
                  <span className="text-white font-bold block">Physical Address:</span>
                  <p className="text-gray-500 leading-relaxed">
                    Bilipatra Complex, Harni - Warasiya Ring Rd, opp. Banker\'s Hospital, Vadodara, Gujarat 390006
                  </p>
                </div>
              </div>
            </div>

          </div>

          {/* Lower copyright disclaimer */}
          <div className="mt-12 pt-8 border-t border-gray-900 text-center flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-gray-600">
            <p className="font-semibold select-none">
              © {new Date().getFullYear()} Lotus Hospital For Newborn And Children. All Rights Reserved.
            </p>
            <p className="flex items-center gap-1">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-500"></span> 
              <span>State-of-the-art Neonatal Infrastructure</span>
            </p>
          </div>
        </div>
      </footer>

      {/* 7. SECURE VIDEO TELE-CONSULTATION SYSTEM MODAL SIMULATION */}
      <AnimatePresence>
        {teleconsultOpen && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setTeleconsultOpen(false)}
              className="absolute inset-0 bg-gray-950/80 backdrop-blur"
            ></motion.div>

            <motion.div
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.95, opacity: 0 }}
              className="bg-gray-900 border border-gray-800 text-white rounded-3xl max-w-lg w-full overflow-hidden shadow-2xl relative z-10"
            >
              {/* Teleconference simulator header */}
              <div className="bg-gray-950 px-5 py-3.5 flex items-center justify-between border-b border-gray-850">
                <div className="flex items-center gap-2">
                  <div className="w-2.5 h-2.5 rounded-full bg-rose-500 animate-ping"></div>
                  <h4 className="font-bold text-xs sm:text-sm text-gray-300 uppercase tracking-widest">
                    Lotus Tele-Consult Live
                  </h4>
                </div>
                <button
                  onClick={() => setTeleconsultOpen(false)}
                  className="text-gray-500 hover:text-white p-1 rounded-lg hover:bg-gray-850 cursor-pointer"
                >
                  <X className="w-4 h-4" />
                </button>
              </div>

              {/* simulated viewport container */}
              <div className="relative aspect-[16:9] bg-black flex items-center justify-center overflow-hidden">
                <div className="absolute top-5 left-5 bg-gray-950/70 p-2 rounded-xl text-[10px] font-bold tracking-wider uppercase z-20 flex items-center gap-1 text-sky-400 border border-sky-500/30">
                  <Video className="w-3.5 h-3.5" /> Doctor Desk #3 Live
                </div>

                {/* Sub local viewport */}
                <div className="absolute bottom-4 right-4 w-28 aspect-video bg-gray-800 rounded-lg overflow-hidden border border-white/20 z-20 shadow-lg">
                  <img 
                    src="https://images.unsplash.com/photo-1516627145497-ae6968895b74?q=80&w=200&auto=format&fit=crop" 
                    alt="Baby preview feed" 
                    className="w-full h-full object-cover blur-[1px]"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-black/20"></div>
                </div>

                {/* Main simulated pediatric doctor image check */}
                <img 
                  src="https://images.unsplash.com/photo-1622253692010-333f2da6031d?q=80&w=600&auto=format&fit=crop" 
                  alt="Pediatrician Video Consultation Desk"
                  className="w-full h-full object-cover select-none"
                  referrerPolicy="no-referrer"
                />

                <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/80 to-transparent p-4 flex flex-col justify-end text-center">
                  <span className="text-xs font-black tracking-wide text-gray-200 block">Dr. S. K. Patel (Senior Consultant Pediatrician)</span>
                  <p className="text-[10px] text-gray-400 mt-0.5">Lotus Medical Board Outpatient Unit #1</p>
                </div>
              </div>

              {/* bottom action status panels inside conference */}
              <div className="p-5 space-y-4">
                <div className="bg-gray-950 p-3.5 rounded-2xl border border-gray-800 text-xs space-y-1.5">
                  <div className="flex items-center gap-1.5 text-sky-400 font-bold">
                    <CheckCircle className="w-4 h-4 text-sky-400" />
                    <span>Secure Encrypted Clinic Connection and Vouched Vitals Ready</span>
                  </div>
                  <p className="text-gray-400 font-medium text-[11px] leading-relaxed">
                    Consultation fees can be processed via digital scanner QR during checkout or after prescriptions are issued on WhatsApp.
                  </p>
                </div>

                <div className="flex gap-2.5">
                  <button
                    onClick={() => {
                      setTeleconsultOpen(false);
                      triggerToast("Teleconsultation checkup call connected successfully simulated.");
                    }}
                    className="w-full bg-sky-500 hover:bg-sky-600 text-white font-extrabold text-xs sm:text-sm py-3 rounded-xl transition-all shadow-md cursor-pointer text-center"
                  >
                    Start Real HD Connection Now
                  </button>
                  <button
                    onClick={() => setTeleconsultOpen(false)}
                    className="bg-gray-800 hover:bg-gray-700 text-gray-300 font-bold text-xs px-4 py-3 rounded-xl cursor-pointer"
                  >
                    Disconnect
                  </button>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

      {/* 8. EMERGENCY CALL DIALOG SIMULATOR */}
      <AnimatePresence>
        {emergencyCallSimOpen && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 animate-fadeIn">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setEmergencyCallSimOpen(false)}
              className="absolute inset-0 bg-gray-950/70 backdrop-blur-sm"
            ></motion.div>

            <motion.div
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.95, opacity: 0 }}
              className="bg-white rounded-3xl p-6 shadow-2xl border border-sky-100 max-w-sm w-full text-center relative z-10 space-y-5"
            >
              <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto text-red-500 border border-red-200">
                <PhoneCall className="w-8 h-8 animate-pulse" />
              </div>

              <div>
                <span className="text-[10px] font-black uppercase text-red-500 tracking-wider bg-red-50 px-2 py-0.5 rounded">
                  Active Emergency dispatch Line
                </span>
                <h3 className="font-extrabold text-gray-900 text-lg mt-2">Dial Lotus Hospital</h3>
                <p className="text-xs text-gray-500 font-medium leading-relaxed mt-1">
                  Ready 24 hours for infant breathing complications, children sudden fevers, seizures, and trauma.
                </p>
              </div>

              {/* Number display wrapper */}
              <div className="bg-sky-50 rounded-2xl p-4 border border-sky-100/50">
                <a 
                  href="tel:+917069780800"
                  className="text-xl font-black text-gray-800 block hover:text-sky-600 cursor-pointer select-all"
                >
                  +91 70697 80800
                </a>
                <span className="text-[10px] text-gray-400 block mt-1">Tap above to initiate real mobile call</span>
              </div>

              <div className="grid grid-cols-2 gap-2">
                <button
                  onClick={() => setEmergencyCallSimOpen(false)}
                  className="bg-gray-100 hover:bg-gray-200 text-gray-600 font-bold text-xs py-2.5 rounded-xl cursor-pointer"
                >
                  Go Back
                </button>
                <a
                  href="tel:+917069780800"
                  className="bg-red-500 hover:bg-red-650 text-white font-extrabold text-xs py-2.5 rounded-xl text-center shadow cursor-pointer active:scale-95 transition-transform"
                >
                  Dial Now
                </a>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

    </div>
  );
}
