/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Phone, ShieldAlert, Star, Menu, X, MapPin, Ambulance, Sparkles } from 'lucide-react';

interface EmergencyHeaderProps {
  onBookClick: () => void;
  onCallClick: () => void;
}

export default function EmergencyHeader({ onBookClick, onCallClick }: EmergencyHeaderProps) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const topBarVariants = {
    visible: { y: 0, opacity: 1 },
    hidden: { y: -40, opacity: 0 }
  };

  const menuItems = [
    { label: 'Home', id: 'home' },
    { label: 'About Us', id: 'about' },
    { label: 'Services', id: 'services' },
    { label: 'NICU & Emergency', id: 'nicu-emergency' },
    { label: 'Wellness Programs', id: 'programs' },
    { label: 'Health Tips', id: 'health-tips' },
    { label: 'Testimonials', id: 'testimonials' },
    { label: 'Gallery', id: 'gallery' },
    { label: 'FAQ', id: 'faq' },
    { label: 'Contact', id: 'contact' },
  ];

  const handleScrollToSection = (id: string) => {
    setMobileMenuOpen(false);
    const element = document.getElementById(id);
    if (element) {
      // Offset for sticky header
      const headerOffset = 130;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
      
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <div id="top-pinnable-header" className="fixed top-0 left-0 w-full z-50">
      {/* 1. Critical Emergency Top Bar */}
      <AnimatePresence>
        {!scrolled && (
          <motion.div 
            initial="visible"
            animate="visible"
            exit="hidden"
            variants={topBarVariants}
            transition={{ duration: 0.3 }}
            className="bg-red-500 text-white text-xs md:text-sm font-medium h-10 flex items-center justify-between px-4 sm:px-6 md:px-8 shadow-sm"
          >
            <div className="flex items-center gap-2">
              <span className="bg-white text-red-600 rounded-full px-2 py-0.5 text-[10px] sm:text-xs font-bold animate-pulse flex items-center gap-1">
                <ShieldAlert className="w-3 h-3" /> 24×7 EMERGENCY
              </span>
              <span className="hidden leading-none sm:inline text-red-50 opacity-90">
                • Trusted Newborn & Pediatric Care in Vadodara
              </span>
            </div>
            
            <div className="flex items-center gap-4">
              <span className="hidden md:flex items-center gap-1 opacity-90 text-[13px]">
                <MapPin className="w-3.5 h-3.5 text-red-100" /> Harni - Warasiya Ring Rd, Vadodara
              </span>
              <a 
                href="tel:+917069780800" 
                className="flex items-center gap-1.5 bg-white/15 hover:bg-white/25 active:bg-white/30 text-white px-2.5 py-1 rounded-full transition-all text-xs font-bold cursor-pointer"
              >
                <Ambulance className="w-3.5 h-3.5 text-red-100 animate-bounce" /> Call Ambulance
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* 2. Primary Navigation Header */}
      <header 
        className={`w-full transition-all duration-300 ${
          scrolled 
            ? 'bg-white/90 backdrop-blur-md shadow-sm py-3 top-0 border-b border-slate-100' 
            : 'bg-white py-4 border-b border-slate-100/50'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            {/* Logo/Name */}
            <div 
              onClick={() => handleScrollToSection('home')} 
              className="flex items-center gap-3 cursor-pointer group"
            >
              <div className="w-10 h-10 bg-sky-600 rounded-full flex items-center justify-center text-white text-xl shadow-md group-hover:scale-105 transition-transform duration-300 shrink-0">
                🌸
              </div>
              <div className="flex flex-col">
                <h1 className="text-base sm:text-lg font-bold text-sky-900 tracking-tight leading-tight">
                  Lotus Hospital
                </h1>
                <span className="text-[10px] sm:text-[11px] uppercase tracking-widest text-sky-600 font-bold mt-0.5">
                  Newborn & Children
                </span>
              </div>
            </div>

            {/* Desktop Navigation Link-List */}
            <nav className="hidden xl:flex items-center gap-8 text-sm font-medium text-slate-600">
              {menuItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => handleScrollToSection(item.id)}
                  className="hover:text-sky-600 transition-colors cursor-pointer"
                >
                  {item.label}
                </button>
              ))}
            </nav>

            {/* Action Buttons and Quality Indicators */}
            <div className="hidden lg:flex items-center gap-4">
              <div className="flex flex-col items-end text-right">
                <div className="flex items-center gap-1 text-xs font-bold text-yellow-700 bg-yellow-50 px-2.5 py-0.5 rounded-full border border-yellow-100">
                  <Star className="w-3.5 h-3.5 fill-yellow-500 text-yellow-500" /> 4.5
                  <span className="text-[10px] text-slate-500 font-semibold">(927 Reviews)</span>
                </div>
                <span className="text-[9px] text-emerald-600 font-bold uppercase tracking-wider mt-1 flex items-center gap-0.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse"></span> Open 24 Hours
                </span>
              </div>

              <button
                onClick={onBookClick}
                className="bg-sky-600 hover:bg-sky-700 text-white font-bold text-sm px-5 py-2 rounded-full shadow-lg shadow-sky-200 hover:shadow-xl transition-all flex items-center gap-1.5 cursor-pointer"
              >
                <Sparkles className="w-3.5 h-3.5" /> Book Appointment
              </button>

              <button
                onClick={onCallClick}
                className="bg-slate-100 hover:bg-slate-200 text-slate-800 font-bold text-sm px-4 py-2 rounded-full transition-all flex items-center gap-1.5 cursor-pointer border border-slate-200"
              >
                <Phone className="w-3.5 h-3.5" /> Call Now
              </button>
            </div>

            {/* Mobile menu trigger */}
            <div className="flex items-center gap-2 xl:hidden">
              <a 
                href="tel:+917069780800" 
                className="bg-red-50 text-red-600 hover:bg-red-100 p-2 rounded-xl border border-red-100 flex lg:hidden items-center justify-center cursor-pointer"
              >
                <Phone className="w-4 h-4" />
              </a>
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="p-2 rounded-xl hover:bg-sky-50 text-gray-700 hover:text-sky-600 transition-colors cursor-pointer"
                aria-label="Toggle Navigation Menu"
              >
                {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Navigation Panel */}
        <AnimatePresence>
          {mobileMenuOpen && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: 'auto', opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.25 }}
              className="xl:hidden overflow-hidden bg-white border-t border-sky-100"
            >
              <div className="px-4 py-3 space-y-1">
                {menuItems.map((item) => (
                  <button
                    key={item.id}
                    onClick={() => handleScrollToSection(item.id)}
                    className="block w-full text-left py-2.5 px-3 rounded-lg text-[14px] font-semibold text-gray-700 hover:bg-sky-50/60 hover:text-sky-600 transition-all cursor-pointer"
                  >
                    {item.label}
                  </button>
                ))}
                
                {/* Quality Indicator and Actions for Mobile in Drawer */}
                <div className="pt-4 pb-2 border-t border-slate-100 space-y-3">
                  <div className="flex items-center justify-between px-3">
                    <div className="flex items-center gap-1 text-xs font-bold text-yellow-705 bg-yellow-50 px-2.5 py-0.5 rounded-full">
                      <Star className="w-3.5 h-3.5 fill-yellow-500 text-yellow-500" /> 4.5 (927 Reviews)
                    </div>
                    <span className="text-[10px] text-emerald-600 font-bold uppercase flex items-center gap-1">
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-500"></span> Open 24 Hours
                    </span>
                  </div>

                  <div className="grid grid-cols-2 gap-2 px-3">
                    <button
                      onClick={() => { setMobileMenuOpen(false); onBookClick(); }}
                      className="bg-sky-600 text-white font-bold text-xs py-3 rounded-full flex items-center justify-center gap-1 shadow-md active:scale-95 transition-transform cursor-pointer"
                    >
                      <Sparkles className="w-3.5 h-3.5" /> Book Slot
                    </button>
                    <button
                      onClick={() => { setMobileMenuOpen(false); onCallClick(); }}
                      className="bg-slate-100 hover:bg-slate-200 text-slate-850 font-bold text-xs py-3 rounded-full flex items-center justify-center gap-1 border border-slate-200 shadow-sm active:scale-95 transition-transform cursor-pointer"
                    >
                      <Phone className="w-3.5 h-3.5" /> Call Now
                    </button>
                  </div>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </header>
    </div>
  );
}
