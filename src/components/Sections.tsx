/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import * as Icons from 'lucide-react';
import { servicesData, reasonsData, wellnessProgramsData } from '../data';
import { Service, WhyChooseReason, WellnessProgram } from '../types';

// Safe dynamic icon resolver
export function SmartIcon({ name, className = "w-6 h-6", ...props }: { name: string; className?: string; [key: string]: any }) {
  const IconComponent = (Icons as any)[name];
  if (!IconComponent) {
    return <Icons.HelpCircle className={className} {...props} />;
  }
  return <IconComponent className={className} {...props} />;
}

// Stats Counter Effect
function StatCounter({ value, label, suffix = "" }: { value: string; label: string; suffix?: string }) {
  return (
    <motion.div 
      initial={{ scale: 0.9, opacity: 0 }}
      whileInView={{ scale: 1, opacity: 1 }}
      viewport={{ once: true }}
      className="bg-white/70 backdrop-blur-md rounded-2xl p-4 border border-sky-100/50 shadow-sm text-center flex-1 min-w-[120px]"
    >
      <div className="text-xl md:text-2xl font-black text-sky-600 flex items-center justify-center gap-0.5">
        {value}
        <span className="text-sm font-semibold">{suffix}</span>
      </div>
      <div className="text-[10px] md:text-xs font-bold text-gray-500 uppercase tracking-wider mt-1">{label}</div>
    </motion.div>
  );
}

/* ============================================================================
   1. HERO SECTION
   ============================================================================ */
interface HeroProps {
  onBookClick: () => void;
  onCallClick: () => void;
  onExploreServices: () => void;
}

export function Hero({ onBookClick, onCallClick, onExploreServices }: HeroProps) {
  return (
    <section id="home" className="relative pt-24 md:pt-36 pb-16 md:pb-24 overflow-hidden bg-gradient-to-br from-sky-50/50 via-mint-50/30 to-[#f8fafc]">
      {/* Absolute decorative child circles & graphics for child-friendly touch */}
      <div className="absolute top-10 left-[-10%] w-[45%] aspect-square bg-sky-100/30 rounded-full filter blur-3xl opacity-60"></div>
      <div className="absolute bottom-5 right-[-10%] w-[40%] aspect-square bg-mint-100/35 rounded-full filter blur-3xl opacity-65"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Main Hero copy content */}
          <div className="lg:col-span-7 flex flex-col space-y-7 text-center lg:text-left">
            <motion.div 
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.5 }}
              className="inline-block bg-sky-50 text-sky-600 px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-widest self-center lg:self-start border border-sky-100"
            >
              Pediatric Excellence in Gujarat
            </motion.div>

            <motion.h2 
              initial={{ y: 25, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-4xl sm:text-5xl md:text-5xl lg:text-5xl font-extrabold text-slate-900 leading-[1.1] tracking-tight"
            >
              Advanced Care for <br />
              <span className="text-sky-600">Newborns & Infants</span>
            </motion.h2>

            <motion.p 
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-base sm:text-lg text-slate-600 max-w-md mx-auto lg:mx-0 leading-relaxed font-normal"
            >
              Delivering compassionate pediatric and neonatal healthcare with modern medical expertise and family-centered care.
            </motion.p>

            {/* CTA buttons */}
            <motion.div 
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start pt-2"
            >
              <button 
                onClick={onBookClick}
                className="bg-sky-600 hover:bg-sky-700 active:bg-sky-800 text-white font-bold text-sm px-6 py-3.5 rounded-full shadow-lg shadow-sky-200/55 hover:shadow-xl transition-all flex items-center justify-center gap-2 cursor-pointer"
              >
                <Icons.Calendar className="w-5 h-5 text-sky-100" /> Book Appointment
              </button>

              <button 
                onClick={onCallClick}
                className="bg-emerald-600 hover:bg-emerald-700 active:bg-emerald-800 text-white font-bold text-sm px-6 py-3.5 rounded-full shadow-lg shadow-emerald-200/55 hover:shadow-xl transition-all flex items-center justify-center gap-1.5 cursor-pointer"
              >
                <Icons.PhoneCall className="w-5 h-5 text-emerald-100 animate-bounce" /> Call Hospital Now
              </button>

              <button 
                onClick={onExploreServices}
                className="bg-white hover:bg-slate-50 text-slate-700 font-bold text-sm px-6 py-3.5 rounded-full border border-slate-200 cursor-pointer shadow-sm hover:shadow transition-all"
              >
                Explore Services
              </button>
            </motion.div>

            {/* Highlighting Achievements panel with Natural Tones visual styling */}
            <div className="pt-8 border-t border-slate-100 flex flex-wrap gap-4 max-w-xl mx-auto lg:mx-0">
              <div className="bg-white p-4 rounded-2xl shadow-sm border border-slate-100 flex items-center gap-4 flex-1 min-w-[140px]">
                <div className="text-3xl text-yellow-400">★</div>
                <div>
                  <p className="text-xl font-bold text-slate-900">4.5/5</p>
                  <p className="text-xs text-slate-400 font-medium">927+ Reviews</p>
                </div>
              </div>
              <div className="bg-white p-4 rounded-2xl shadow-sm border border-slate-100 flex items-center gap-4 flex-1 min-w-[140px]">
                <div className="text-2xl">👨‍⚕️</div>
                <div>
                  <p className="text-xl font-bold text-slate-900">24/7</p>
                  <p className="text-xs text-slate-400 font-medium">NICU Specialists</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Hero Visual elements - Image and floating badges conforming with Natural Tones */}
          <div className="lg:col-span-5 relative flex justify-center">
            <motion.div 
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.6 }}
              className="relative w-full aspect-square rounded-[40px] bg-slate-200 overflow-hidden shadow-2xl border-8 border-white"
            >
              {/* Actual pediatric nurse and smile photo */}
              <img 
                src="https://images.unsplash.com/photo-1502740479091-635887520276?q=80&w=600&auto=format&fit=crop" 
                alt="Pediatrician comforting toddler"
                className="w-full h-full object-cover rounded-[32px] saturate-110"
                referrerPolicy="no-referrer"
              />
              
              {/* Bottom glass reflection gradient */}
              <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-slate-900/40 via-transparent to-transparent"></div>

              {/* Patient Review Popup conforming to Natural Tones style */}
              <div className="absolute bottom-4 left-4 right-4 bg-white/90 backdrop-blur p-4 rounded-2xl shadow-lg border border-white">
                <div className="flex gap-1.5 mb-1.5">
                  <div className="w-1.5 h-1.5 bg-green-500 rounded-full animate-pulse"></div>
                  <div className="w-1.5 h-1.5 bg-green-500 rounded-full animate-pulse"></div>
                  <div className="w-1.5 h-1.5 bg-green-500 rounded-full animate-pulse"></div>
                </div>
                <p className="text-xs sm:text-sm font-bold text-slate-800 italic">"Expert care for our little one in the NICU. Truly life-saving!"</p>
                <p className="text-[10px] sm:text-xs text-slate-500 font-medium mt-1">- Parent from Vadodara</p>
              </div>
            </motion.div>

            {/* Floating Badge A - Vaccination */}
            <div className="absolute top-12 -left-8 bg-white p-3 rounded-xl shadow-xl border border-slate-50 flex items-center gap-3">
               <div className="w-8 h-8 bg-purple-50 rounded-lg flex items-center justify-center text-lg">💉</div>
               <p className="text-[10px] font-bold text-slate-800 leading-tight">VACCINATION<br/>CENTER</p>
            </div>

            {/* Floating Badge B - Modern NICU */}
            <div className="absolute bottom-20 -right-4 bg-white p-3 rounded-xl shadow-xl border border-slate-50 flex items-center gap-3">
               <div className="w-8 h-8 bg-yellow-50 rounded-lg flex items-center justify-center text-lg">👶</div>
               <p className="text-[10px] font-bold text-slate-800 leading-tight">MODERN<br/>NICU</p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}

/* ============================================================================
   2. ABOUT HOSPITAL SECTION
   ============================================================================ */
export function About() {
  const values = [
    { title: 'Level-3 NICU Care', desc: 'Pre-term and complex newborn intensive protocols.' },
    { title: 'Maximum Hygiene', desc: 'Sterilized settings checking infectious vectors.' },
    { title: 'Comfort First', desc: 'Cartoon consults keeping children fear-free and secure.' },
    { title: 'Experienced Nursing', desc: 'Warm clinical assistants specializing in tiny veins.' }
  ];

  return (
    <section id="about" className="py-20 md:py-28 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          
          {/* Left Block: Image collage */}
          <div className="relative flex justify-center lg:justify-start">
            {/* Primary Image Container */}
            <div className="relative w-full max-w-md aspect-[4/3] bg-mint-100/40 rounded-3xl p-4 border border-mint-200/60 shadow-md">
              <img 
                src="https://images.unsplash.com/photo-1516549655169-df83a0774514?q=80&w=600&auto=format&fit=crop" 
                alt="Lotus neonatal incubator unit"
                className="w-full h-full object-cover rounded-2xl shadow-sm"
                referrerPolicy="no-referrer"
              />
            </div>

            {/* Overlapping secondary clinical staff image */}
            <div className="absolute -bottom-12 -right-4 w-[60%] aspect-[4/3] bg-purple-50 p-2.5 rounded-2xl border border-sky-100 shadow-xl xl:block hidden">
              <img 
                src="https://images.unsplash.com/photo-1584515979956-d9f6e5d09982?q=80&w=600&auto=format&fit=crop" 
                alt="Doctor smiling at infant"
                className="w-full h-full object-cover rounded-xl"
                referrerPolicy="no-referrer"
              />
            </div>

            {/* Badge */}
            <div className="absolute top-[-30px] right-2 bg-white/95 text-sky-600 font-extrabold text-xs px-4 py-3 rounded-2xl shadow-md border border-sky-100 flex items-center gap-1">
              <Icons.Award className="w-4 h-4 text-emerald-500" /> Authorized Pediatric Center
            </div>
          </div>

          {/* Right Block: Content details */}
          <div className="flex flex-col space-y-6">
            <div className="flex flex-col space-y-2">
              <span className="text-xs font-bold text-sky-500 uppercase tracking-widest">About Lotus Hospital</span>
              <h3 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-gray-900 tracking-tight leading-snug">
                The Trusted Haven for Your Little One\'s Bright Future
              </h3>
            </div>
            
            <p className="text-gray-600 text-[15px] font-medium leading-relaxed">
              Based at Harni-Warasiya Ring Road, Vadodara, <strong>Lotus Hospital For Newborn And Children</strong> stands as a premium center of excellence in pediatric and neonatal healthcare. We mix advanced intensive tech like critical Level-III NICU facilities with maternal tenderness, providing premium, reliable care 24 hours a year.
            </p>

            <p className="text-gray-600 text-[15px] font-medium leading-relaxed">
              Every detail is tailored around child psychology—from isolated waiting suites prevent fever transfers to medical staff trained in playful diagnostic approaches.
            </p>

            {/* Quick Benefits Bullet Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4">
              {values.map((v, i) => (
                <div key={i} className="flex gap-2.5 p-3 rounded-xl bg-sky-50/20 border border-sky-100/40">
                  <Icons.CheckCircle className="w-5 h-5 text-emerald-500 shrink-0 mt-0.5" />
                  <div>
                    <h4 className="font-bold text-gray-800 text-sm">{v.title}</h4>
                    <p className="text-xs text-gray-500 font-medium mt-0.5 leading-relaxed">{v.desc}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* Mini Contact card */}
            <div className="bg-gradient-to-r from-mint-50/50 to-sky-50/50 p-4 rounded-2xl border border-sky-100/50 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mt-2">
              <div className="flex items-center gap-3">
                <div className="bg-white p-3 rounded-xl shadow-sm border border-sky-100">
                  <Icons.MapPin className="w-5 h-5 text-sky-500" />
                </div>
                <div>
                  <h4 className="text-xs font-black text-gray-500 uppercase tracking-wide">Hospital Location</h4>
                  <p className="text-xs sm:text-sm font-bold text-gray-700 mt-0.5">Waghela Nagar, Bapunagar, Vadodara</p>
                </div>
              </div>
              <a 
                href="#contact" 
                className="text-xs sm:text-sm font-extrabold text-sky-600 hover:text-sky-700 flex items-center gap-1 self-start sm:self-auto cursor-pointer"
              >
                Get Directions <Icons.ChevronRight className="w-4 h-4" />
              </a>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
}

/* ============================================================================
   3. SPECIALIZED SERVICES SECTION
   ============================================================================ */
export function Services() {
  const [selectedService, setSelectedService] = useState<Service | null>(null);

  // Filter keys
  const [activeTab, setActiveTab] = useState<'all' | 'neonatal' | 'pediatric' | 'preventive'>('all');

  const filteredServices = servicesData.filter(s => {
    if (activeTab === 'all') return true;
    return s.category === activeTab;
  });

  return (
    <section id="services" className="py-20 md:py-28 bg-gradient-to-b from-[#f8fafc] via-slate-50 to-white overflow-hidden border-t border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section header */}
        <div className="text-center max-w-3xl mx-auto flex flex-col space-y-3 mb-12">
          <span className="text-xs font-semibold text-sky-600 uppercase tracking-widest bg-sky-55/35 px-4.5 py-1.5 rounded-full self-center border border-sky-100/30">Our Medical Scope</span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight leading-snug">
            Specialized Pediatric & Neonatal Clinic
          </h2>
          <p className="text-sm sm:text-base text-slate-600 font-medium leading-relaxed">
            From critical prenatal intensive support inside our Level-III NICU to preventive wellness checks, we deliver continuous warmth.
          </p>
        </div>

        {/* Tab Filters */}
        <div className="flex justify-center flex-wrap gap-2.5 mb-12">
          {[
            { label: 'All Services', key: 'all' },
            { label: 'Neonatal & Infant Care', key: 'neonatal' },
            { label: 'Pediatric Specialty', key: 'pediatric' },
            { label: 'Preventive Healthcare', key: 'preventive' },
          ].map((tab) => (
            <button
              key={tab.key}
              onClick={() => setActiveTab(tab.key as any)}
              className={`px-5 py-2.5 rounded-full font-bold text-xs sm:text-sm transition-all cursor-pointer ${
                activeTab === tab.key
                  ? 'bg-sky-600 text-white shadow-lg shadow-sky-200'
                  : 'bg-white text-slate-600 hover:text-sky-600 hover:bg-slate-50 border border-slate-200'
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Services Grid with Staggered Entrance Animations */}
        <motion.div 
          layout
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 animate-fadeIn"
        >
          <AnimatePresence mode="popLayout">
            {filteredServices.map((service) => (
              <motion.div
                layout
                key={service.id}
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.3 }}
                whileHover={{ y: -6 }}
                className="bg-white rounded-3xl p-6 border border-slate-200/60 shadow-sm hover:shadow-md transition-shadow flex flex-col justify-between"
              >
                <div>
                  {/* Category badging conforming with Natural Tones colors */}
                  <div className="flex items-center justify-between mb-5">
                    {service.category === 'neonatal' ? (
                      <span className="text-[10px] font-black uppercase text-sky-600 tracking-wider bg-sky-50 px-2.5 py-1 rounded-full border border-sky-100/40">
                        NICU Support
                      </span>
                    ) : service.category === 'pediatric' ? (
                      <span className="text-[10px] font-black uppercase text-emerald-700 tracking-wider bg-emerald-50 px-2.5 py-1 rounded-full border border-emerald-100/40">
                        Pediatric Care
                      </span>
                    ) : (
                      <span className="text-[10px] font-black uppercase text-purple-700 tracking-wider bg-purple-50 px-2.5 py-1 rounded-full border border-purple-100/40">
                        Preventive Care
                      </span>
                    )}

                    {service.gujaratiTitle && (
                      <span className="text-[10px] text-slate-400 font-semibold font-sans">
                        {service.gujaratiTitle}
                      </span>
                    )}
                  </div>

                  {/* Icon & Title */}
                  <div className="flex items-start gap-3.5">
                    <div className="bg-slate-50 p-3 rounded-2xl shrink-0 border border-slate-100">
                      <SmartIcon name={service.iconName} className="w-6 h-6 text-sky-600" />
                    </div>
                    <div>
                      <h3 className="font-extrabold text-[#1e293b] text-base md:text-md leading-tight hover:text-sky-600 transition-colors">
                        {service.title}
                      </h3>
                    </div>
                  </div>

                  <p className="text-slate-500 text-xs sm:text-sm font-medium mt-3.5 leading-relaxed">
                    {service.description}
                  </p>
                </div>

                <div className="mt-5 pt-4 border-t border-slate-100 flex items-center justify-between">
                  <span className="text-[11px] font-bold text-emerald-600 flex items-center gap-1">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-500"></span> Prepared
                  </span>
                  <button
                    onClick={() => setSelectedService(service)}
                    className="text-xs font-extrabold text-sky-600 hover:text-sky-700 flex items-center gap-0.5 hover:underline cursor-pointer"
                  >
                    Read Details <Icons.ChevronRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* Dynamic Modal detailed view for Service Detail */}
        <AnimatePresence>
          {selectedService && (
            <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
              {/* Overlay shadow */}
              <motion.div 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                onClick={() => setSelectedService(null)}
                className="absolute inset-0 bg-slate-950/60 backdrop-blur-sm"
              ></motion.div>

              {/* Modal Core Window with Natural Tones styles */}
              <motion.div
                initial={{ scale: 0.95, y: 15, opacity: 0 }}
                animate={{ scale: 1, y: 0, opacity: 1 }}
                exit={{ scale: 0.95, y: 15, opacity: 0 }}
                className="bg-white rounded-[40px] max-w-lg w-full p-6 sm:p-8 shadow-2xl relative z-10 border border-slate-100"
              >
                {/* Close Button */}
                <button
                  onClick={() => setSelectedService(null)}
                  className="absolute top-4 right-4 p-2 rounded-full hover:bg-slate-100 text-slate-400 hover:text-slate-700 transition-all cursor-pointer"
                >
                  <Icons.X className="w-5 h-5" />
                </button>

                {/* Header inside Modal */}
                <div className="flex gap-4 items-start pb-4 border-b border-slate-100 pr-8">
                  <div className="bg-sky-50 p-3 rounded-2xl border border-sky-100/30">
                    <SmartIcon name={selectedService.iconName} className="w-6 h-6 text-sky-600" />
                  </div>
                  <div>
                    <span className="inline-block text-[10px] font-black uppercase text-sky-600 tracking-wider bg-sky-50 px-2.5 py-1 rounded-full mb-1">
                      {selectedService.category} Care
                    </span>
                    <h3 className="font-extrabold text-[#1e293b] text-lg leading-tight">
                      {selectedService.title}
                    </h3>
                    {selectedService.gujaratiTitle && (
                      <p className="text-xs text-sky-600 font-bold mt-1">
                        {selectedService.gujaratiTitle}
                      </p>
                    )}
                  </div>
                </div>

                {/* Body inside modal */}
                <div className="py-4 space-y-4 max-h-[60vh] overflow-y-auto scrollbar-thin">
                  <p className="text-sm text-slate-600 leading-relaxed font-semibold">
                    {selectedService.description}
                  </p>

                  <div className="space-y-2.5">
                    <h4 className="text-xs font-black uppercase text-slate-500 tracking-widest">Core Capabilities Included:</h4>
                    <div className="grid grid-cols-1 gap-2">
                      {selectedService.details.map((detail, idx) => (
                        <div key={idx} className="flex gap-2.5 p-3 rounded-2xl bg-sky-50/20 text-xs sm:text-sm text-slate-700 font-semibold border border-sky-100/30">
                          <Icons.Check className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                          <span>{detail}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Footer inside modal */}
                <div className="pt-4 border-t border-slate-100 flex justify-end gap-2.5">
                  <button
                    onClick={() => setSelectedService(null)}
                    className="px-4 py-2.5 rounded-full font-bold text-xs text-slate-500 hover:bg-slate-50 transition-colors cursor-pointer"
                  >
                    Go Back
                  </button>
                  <a
                    href="#appointment"
                    onClick={() => setSelectedService(null)}
                    className="bg-sky-600 hover:bg-sky-700 text-white font-black text-xs px-5 py-2.5 rounded-full flex items-center gap-1 cursor-pointer transition-all shadow-md hover:shadow-lg hover:shadow-sky-100"
                  >
                    Book for this Care <Icons.ArrowRight className="w-3.5 h-3.5" />
                  </a>
                </div>
              </motion.div>
            </div>
          )}
        </AnimatePresence>

      </div>
    </section>
  );
}

/* ============================================================================
   4. WHY CHOOSE LOTUS HOSPITAL
   ============================================================================ */
export function WhyChooseUs() {
  return (
    <section className="py-20 md:py-24 bg-white overflow-hidden border-t border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section header */}
        <div className="text-center max-w-3xl mx-auto flex flex-col space-y-3 mb-12">
          <span className="text-xs font-semibold text-sky-600 uppercase tracking-widest bg-sky-50 px-4.5 py-1.5 rounded-full self-center border border-sky-100/30">Why Families Trust Us</span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight leading-snug">
            Uncompromising Excellence In Children’s Healing
          </h2>
          <p className="text-sm sm:text-base text-slate-600 font-medium leading-relaxed font-sans">
            Building a safe haven is about balancing medical depth with pediatric gentleness. Here is what sets Lotus Hospital apart:
          </p>
        </div>

        {/* Feature Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {reasonsData.map((reason, idx) => (
            <motion.div
              layout
              key={reason.id}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.3, delay: idx * 0.05 }}
              whileHover={{ y: -4 }}
              className="bg-slate-50/45 border border-slate-200/60 rounded-3xl p-6 hover:bg-white hover:shadow-xl transition-all"
            >
              {/* Upper Section */}
              <div className="flex items-center justify-between mb-5">
                <span className="text-[10px] font-black uppercase text-emerald-700 tracking-wider bg-emerald-50 px-2.5 py-1 rounded-full border border-emerald-100/40">
                  {reason.highlight}
                </span>
                <div className="bg-slate-50 border border-slate-100 p-2.5 rounded-2xl text-sky-600">
                  <SmartIcon name={reason.iconName} className="w-5 h-5" />
                </div>
              </div>

              {/* Title & Desc */}
              <h3 className="font-extrabold text-[#1e293b] text-sm sm:text-base leading-snug">
                {reason.title}
              </h3>
              <p className="text-slate-500 text-xs sm:text-xs font-semibold mt-2.5 leading-relaxed">
                {reason.description}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Floating quality banner inside Why Choose Us section (Natural Tones deep highlight) */}
        <div className="bg-sky-950 rounded-[40px] p-6 sm:p-8 md:p-10 mt-14 text-white shadow-xl flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6 relative overflow-hidden border border-sky-900">
          <div className="absolute top-0 right-10 w-36 h-36 bg-emerald-500/10 rounded-full filter blur-xl pointer-events-none self-center"></div>
          
          <div className="space-y-2.5 relative z-10 max-w-2xl">
            <span className="text-[9px] font-black uppercase tracking-widest text-[#a7f3d0] bg-emerald-500/15 px-3 py-1 rounded-full border border-emerald-500/20 inline-block">
              EMERGENCY ASSISTANCE SECURED
            </span>
            <h3 className="text-xl sm:text-2xl font-extrabold tracking-tight text-white leading-snug">
              Immediate Neonatal / Birth Complication Transport
            </h3>
            <p className="text-xs sm:text-sm text-slate-350 leading-relaxed font-sans font-medium">
              Is your newborn baby experiencing warning signs or breathing issues in another clinic? We dispatch a high-care portable ventilator transport system immediately with a pediatric medical team.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-3 relative z-10 shrink-0">
            <a
              href="tel:+917069780800"
              className="bg-[#10b981] hover:bg-[#059669] text-white font-extrabold text-sm px-6 py-3.5 rounded-full shadow-md text-center flex items-center justify-center gap-2 hover:scale-105 transition-all cursor-pointer"
            >
              <Icons.PhoneCall className="w-4 h-4 text-emerald-100 animate-pulse" /> Call +91 70697 80800
            </a>
            <a
              href="#appointment"
              className="bg-white/10 hover:bg-white/20 text-white font-bold text-sm px-6 py-3.5 rounded-full border border-white/20 text-center transition-all cursor-pointer"
            >
              Request Ambulance
            </a>
          </div>
        </div>

      </div>
    </section>
  );
}

/* ============================================================================
   5. DECIATED NICU & EMERGENCY ADVANCED CARE SHOWCASE
   ============================================================================ */
export function NICUHighlight() {
  const points = [
    { title: 'Level-III Neo-natal ICU (NICU)', desc: 'Pre-term and complex newborn intensive protocols.' },
    { title: 'Advanced Infant Ventilators', desc: 'Precision mechanical breathing support with surfactants.' },
    { title: 'Continuous 24-Hour Vitals Log', desc: 'Multipara metrics mapping heartbeat, oxygen levels.' },
    { title: 'In-House Portable Ultrasound', desc: 'Emergency internal monitoring directly inside incubators.' }
  ];

  return (
    <section id="nicu-emergency" className="py-20 md:py-24 bg-gradient-to-b from-white via-slate-50 to-white overflow-hidden border-t border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          
          {/* Left Block: Technical and professional detail copy */}
          <div className="flex flex-col space-y-6">
            <div className="flex flex-col space-y-2">
              <span className="text-xs font-semibold text-rose-600 uppercase tracking-widest bg-rose-50 px-3.5 py-1.5 rounded-full border border-rose-100/40 inline-flex items-center gap-1.5 self-start">
                <Icons.AlertCircle className="w-4 h-4 animate-pulse" /> Critical Intensive Care Unit
              </span>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight leading-snug">
                Advanced NICU Emergency Response
              </h2>
            </div>

            <p className="text-slate-600 text-base font-normal leading-relaxed">
              When a newborn is born prematurely, or a pediatric patient experiences severe acute illness, every second matters. Our specialized emergency wing combines structural security with unmatched technical depth.
            </p>

            {/* Quick specifications grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-1">
              {points.map((pt, idx) => (
                <div key={idx} className="bg-white p-5 rounded-3xl border border-slate-200/60 shadow-sm flex gap-3.5">
                  <div className="bg-rose-50 border border-rose-100 p-2.5 rounded-2xl text-rose-500 shrink-0 h-10 w-10 flex items-center justify-center">
                    <Icons.Activity className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="font-extrabold text-[#1e293b] text-sm leading-tight">{pt.title}</h4>
                    <p className="text-xs text-slate-500 font-medium mt-1.5 leading-relaxed">{pt.desc}</p>
                  </div>
                </div>
              ))}
            </div>

            <p className="text-xs font-bold text-slate-600 bg-amber-50 px-4 py-3.5 rounded-2xl border border-amber-100 flex items-start gap-2 leading-relaxed">
              <Icons.ShieldAlert className="w-5 h-5 text-amber-600 shrink-0" />
              <span>Safety Note: This unit runs isolation rooms for infants diagnosed with respiratory, dengue, or viral issues to block hospital-acquired infection.</span>
            </p>
          </div>

          {/* Right Block: Image with indicators */}
          <div className="relative flex justify-center lg:justify-end">
            <div className="w-full max-w-md aspect-square bg-slate-100 rounded-[40px] p-5 border-8 border-white shadow-2xl relative overflow-hidden">
              <img 
                src="https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?q=80&w=600&auto=format&fit=crop" 
                alt="Incubator suite" 
                className="w-full h-full object-cover rounded-[28px]"
                referrerPolicy="no-referrer"
              />
              {/* Overlay highlight metrics */}
              <div className="absolute bottom-10 left-10 bg-white/95 backdrop-blur-md px-3.5 py-2 rounded-full shadow-md flex items-center gap-2 border border-slate-100">
                <span className="w-2.5 h-2.5 rounded-full bg-red-500 animate-ping"></span>
                <span className="text-[10px] font-black text-[#1e293b] uppercase tracking-widest">24/7 NICU Ready</span>
              </div>
            </div>

            {/* Float badge for clinical staff */}
            <div className="absolute top-[-20px] left-2 bg-sky-600 text-white font-extrabold text-xs px-4.5 py-2 rounded-full shadow-md border border-white">
              ★ Active Neonatal Team On Duty
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}

/* ============================================================================
   6. CHILD WELLNESS PROGRAMS
   ============================================================================ */
export function WellnessPrograms() {
  return (
    <section id="programs" className="py-20 md:py-24 bg-[#f8fafc] overflow-hidden border-t border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section header */}
        <div className="text-center max-w-3xl mx-auto flex flex-col space-y-3 mb-12">
          <span className="text-xs font-semibold text-sky-600 uppercase tracking-widest bg-sky-50 px-4.5 py-1.5 rounded-full self-center border border-sky-100/30">Preventative Checkups</span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight leading-snug">
            Nurturing Child Health & Wellness Programs
          </h2>
          <p className="text-sm sm:text-base text-slate-600 font-medium leading-relaxed font-sans">
            Structured annual support, seasonal allergies checks, and immunization reminders to ensure childhood stays joyous.
          </p>
        </div>

        {/* Programs list cards grid (6 items) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {wellnessProgramsData.map((item, idx) => (
            <div
              key={item.id}
              className="bg-white border border-slate-200/65 rounded-3xl p-6 hover:shadow-lg hover:border-slate-200 transition-all flex flex-col justify-between"
            >
              <div>
                {/* Visual Icon and Header indicator */}
                <div className="flex items-center justify-between mb-4">
                  <span className="text-[10px] font-black uppercase text-sky-600 tracking-wider bg-sky-50 px-2.5 py-1 rounded-full border border-sky-100/35">
                    Age Scope: {item.ageScope}
                  </span>
                  <div className="bg-slate-50 border border-slate-100 p-2.5 rounded-2xl text-sky-600">
                    <SmartIcon name={item.iconName} className="w-5 h-5" />
                  </div>
                </div>

                <h3 className="font-extrabold text-[#1e293b] text-base leading-snug">
                  {item.title}
                </h3>
                
                <span className="inline-block text-[10px] font-black text-purple-700 uppercase tracking-widest bg-purple-50 px-2.5 py-1 rounded-full mt-2 mb-3">
                  Schedule: {item.schedule}
                </span>

                <p className="text-slate-500 text-xs sm:text-sm font-medium leading-relaxed mb-4">
                  {item.description}
                </p>

                {/* Sub benefits inside list checking */}
                <div className="space-y-2">
                  <span className="text-[10px] font-black uppercase text-slate-400 tracking-wider block">Benefits Include:</span>
                  {item.benefits.map((benefit, b_idx) => (
                    <div key={b_idx} className="flex gap-2 text-xs text-slate-600 font-semibold leading-relaxed">
                      <Icons.CheckCircle2 className="w-3.5 h-3.5 text-emerald-500 shrink-0 mt-0.5" />
                      <span>{benefit}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Lower cta link */}
              <div className="mt-6 pt-4 border-t border-slate-100 flex items-center justify-between">
                <span className="text-[10.5px] font-bold text-slate-400">Custom Program Scope</span>
                <a
                  href="#appointment"
                  className="bg-slate-100 text-slate-700 font-extrabold text-xs px-4 py-2 rounded-full border border-slate-200 hover:bg-sky-600 hover:text-white transition-all cursor-pointer"
                >
                  Enroll Child
                </a>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
