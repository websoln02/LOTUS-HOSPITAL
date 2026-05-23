/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Check, Search, Sparkles, Calendar, MapPin, User, Baby, FileText, Send, 
  Star, Trash, Plus, Phone, Navigation, Clock, Heart, Activity, 
  ChevronDown, ChevronUp, ThumbsUp, CalendarCheck, MessageSquare, BookOpen, Clock3
} from 'lucide-react';
import { testimonialsData, galleryItemsData, faqsData, healthTipsData } from '../data';
import { Testimonial, GalleryItem, FAQ, HealthTip, Appointment } from '../types';
import { SmartIcon } from './Sections';

/* ============================================================================
   1. APPOINTMENT BOOKING WITH TICKET AND LOCALSTORAGE TRACKER
   ============================================================================ */
export function AppointmentForm() {
  const [parentName, setParentName] = useState('');
  const [childName, setChildName] = useState('');
  const [childAge, setChildAge] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [preferredDate, setPreferredDate] = useState('');
  const [preferredTime, setPreferredTime] = useState('10:00 AM');
  const [symptoms, setSymptoms] = useState('');
  const [success, setSuccess] = useState(false);
  const [ticket, setTicket] = useState<Appointment | null>(null);
  const [savedAppointments, setSavedAppointments] = useState<Appointment[]>([]);
  const [errorMsg, setErrorMsg] = useState('');

  // Hydrate local appointments list initially
  useEffect(() => {
    try {
      const stored = localStorage.getItem('lotus_appointments');
      if (stored) {
        setSavedAppointments(JSON.parse(stored));
      }
    } catch (e) {
      console.error("Error reading localStorage", e);
    }
  }, []);

  const handleBookSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMsg('');

    // Field check
    if (!parentName || !childName || !childAge || !phoneNumber || !preferredDate) {
      setErrorMsg('Please compile all required fields (*).');
      return;
    }

    // Phone validation
    const trimmedPhone = phoneNumber.replace(/[^0-9+]/g, '');
    if (trimmedPhone.length < 10) {
      setErrorMsg('Please input a valid 10-digit primary phone number.');
      return;
    }

    const newAppointment: Appointment = {
      id: 'LOTUS-' + Math.floor(100000 + Math.random() * 900000),
      parentName,
      childName,
      childAge,
      phoneNumber: trimmedPhone,
      preferredDate,
      preferredTime,
      symptoms: symptoms || 'General child health evaluation checkup',
      checkedIn: false
    };

    // Save
    const updated = [newAppointment, ...savedAppointments];
    setSavedAppointments(updated);
    try {
      localStorage.setItem('lotus_appointments', JSON.stringify(updated));
    } catch (e) {
      console.error(e);
    }

    setTicket(newAppointment);
    setSuccess(true);
    
    // Clear Form inputs
    setParentName('');
    setChildName('');
    setChildAge('');
    setPhoneNumber('');
    setPreferredDate('');
    setSymptoms('');
  };

  const handleCancelAppointment = (id: string) => {
    const fresh = savedAppointments.filter(app => app.id !== id);
    setSavedAppointments(fresh);
    localStorage.setItem('lotus_appointments', JSON.stringify(fresh));
  };

  return (
    <section id="appointment" className="py-20 md:py-24 bg-gradient-to-b from-[#f8fafc] via-white to-white overflow-hidden border-t border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Left block layout: Info, contact numbers, and Saved tickets pane */}
          <div className="lg:col-span-5 flex flex-col space-y-6">
            <div className="flex flex-col space-y-2.5">
              <span className="text-xs font-semibold text-sky-600 uppercase tracking-widest bg-sky-50 px-4 py-1.5 rounded-full self-start border border-sky-100/30">Hassle-Free Booking</span>
              <h2 className="text-3xl font-extrabold text-slate-900 tracking-tight leading-snug">
                Schedule a Pediatric Session
              </h2>
              <p className="text-sm text-slate-600 font-medium leading-relaxed font-sans">
                Fill out the adjacent scheduler. Reserved slots secure priority checks on-site to minimize wait times for babies and children. Open 24 Hours.
              </p>
            </div>

            {/* Quick emergency hotlines cards */}
            <div className="bg-rose-50/55 rounded-3xl p-5 border border-rose-100/70 flex items-start gap-4">
              <div className="bg-rose-500 text-white p-3.5 rounded-2xl shadow-md shrink-0">
                <SmartIcon name="PhoneCall" className="w-5 h-5 animate-pulse" />
              </div>
              <div className="space-y-1">
                <h4 className="font-extrabold text-rose-700 text-xs sm:text-xs uppercase tracking-widest">EMERGENCY HOTLINE HELPLINE</h4>
                <p className="text-xl font-black text-slate-900 tracking-tight">+91 70697 80800</p>
                <p className="text-xs text-rose-600 font-semibold leading-relaxed">Ready 24 hours daily for prenatal and critical children transport.</p>
              </div>
            </div>

            {/* Local Storage tracker panel (My Bookings) */}
            {savedAppointments.length > 0 && (
              <div className="bg-slate-50 border border-slate-200/60 rounded-[32px] p-6 shadow-sm">
                <div className="flex items-center justify-between mb-4 pb-3 border-b border-slate-200/50">
                  <h3 className="text-xs font-black uppercase text-slate-700 tracking-wider flex items-center gap-1.5">
                    <CalendarCheck className="w-4 h-4 text-sky-600" /> Stored Bookings ({savedAppointments.length})
                  </h3>
                  <span className="text-[9px] text-emerald-700 bg-emerald-50 px-2.5 py-1 rounded-full border border-emerald-100 font-black uppercase tracking-wider">SECURE DEVICE SYNC</span>
                </div>

                <div className="space-y-3 max-h-[240px] overflow-y-auto scrollbar-thin pr-1">
                  {savedAppointments.map((app) => (
                    <div key={app.id} className="bg-white p-4 rounded-2xl border border-slate-200/60 shadow-sm flex items-start justify-between gap-3 hover:border-slate-300 transition-all">
                      <div className="space-y-1.5">
                        <div className="flex items-center gap-1.5">
                          <span className="text-xs font-black text-sky-600 uppercase tracking-widest">{app.id}</span>
                          <span className="w-1.5 h-1.5 rounded-full bg-orange-400 animate-pulse"></span>
                          <span className="text-[10px] text-slate-400 font-bold uppercase tracking-wider">Pending</span>
                        </div>
                        <h4 className="font-extrabold text-slate-850 text-xs sm:text-sm">Patient: {app.childName}</h4>
                        <div className="text-xs text-slate-500 font-semibold font-sans flex items-center gap-1">
                          <Clock className="w-3.5 h-3.5 text-slate-400" />
                          <span>{app.preferredDate} • {app.preferredTime}</span>
                        </div>
                        <p className="text-[11px] text-slate-400 italic font-medium">Concern: {app.symptoms}</p>
                      </div>
                      
                      <button 
                        onClick={() => handleCancelAppointment(app.id)}
                        className="text-slate-400 hover:text-rose-600 p-2 rounded-xl hover:bg-rose-50 transition-colors shrink-0 cursor-pointer border border-transparent hover:border-rose-100"
                        title="Cancel appointment slot"
                      >
                        <Trash className="w-4 h-4" />
                      </button>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>

          {/* Right form block */}
          <div className="lg:col-span-7">
            <div className="bg-white rounded-[32px] p-6 sm:p-8 border border-sky-100/70 shadow-xl relative">
              <div className="absolute top-5 right-5 w-10 h-10 bg-mint-100/50 rounded-full flex items-center justify-center border border-mint-200 pointer-events-none">
                <Sparkles className="w-5 h-5 text-mint-500 animate-spin" />
              </div>

              <h3 className="font-extrabold text-gray-800 text-lg md:text-xl pb-4 border-b border-sky-50 mb-6 flex items-center gap-1">
                Hospital Scheduler <span className="text-xs text-sky-500 font-semibold">(No pre-payment needed)</span>
              </h3>

              {errorMsg && (
                <div className="bg-red-50 text-red-600 px-4 py-3 rounded-2xl text-xs sm:text-sm font-bold border border-red-100 mb-5">
                  {errorMsg}
                </div>
              )}

              <form onSubmit={handleBookSubmit} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {/* Parent name */}
                  <div className="space-y-1.5">
                    <label className="text-xs font-black text-gray-650 uppercase tracking-wide flex items-center gap-1">
                      <User className="w-3.5 h-3.5 text-sky-500" /> Parent Full Name *
                    </label>
                    <input 
                      type="text" 
                      required
                      placeholder="e.g., Snehaben Patel" 
                      value={parentName}
                      onChange={(e) => setParentName(e.target.value)}
                      className="w-full bg-sky-50/20 border border-sky-150 rounded-2xl px-4 py-3 focus:border-sky-500 focus:ring-1 focus:ring-sky-500 outline-none text-sm transition-all"
                    />
                  </div>

                  {/* Child name */}
                  <div className="space-y-1.5">
                    <label className="text-xs font-black text-gray-650 uppercase tracking-wide flex items-center gap-1">
                      <Baby className="w-3.5 h-3.5 text-sky-500" /> Child\'s Full Name *
                    </label>
                    <input 
                      type="text" 
                      required
                      placeholder="e.g., Aarav Patel" 
                      value={childName}
                      onChange={(e) => setChildName(e.target.value)}
                      className="w-full bg-sky-50/20 border border-sky-150 rounded-2xl px-4 py-3 focus:border-sky-500 focus:ring-1 focus:ring-sky-500 outline-none text-sm transition-all"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {/* Child Age */}
                  <div className="space-y-1.5">
                    <label className="text-xs font-black text-gray-650 uppercase tracking-wide flex items-center gap-1">
                      <Baby className="w-3.5 h-3.5 text-sky-500" /> Child\'s Age Group *
                    </label>
                    <input 
                      type="text" 
                      required
                      placeholder="e.g., 6 Months, or 4 Years" 
                      value={childAge}
                      onChange={(e) => setChildAge(e.target.value)}
                      className="w-full bg-sky-50/20 border border-sky-150 rounded-2xl px-4 py-3 focus:border-sky-500 focus:ring-1 focus:ring-sky-500 outline-none text-sm transition-all"
                    />
                  </div>

                  {/* Phone number */}
                  <div className="space-y-1.5">
                    <label className="text-xs font-black text-gray-650 uppercase tracking-wide flex items-center gap-1">
                      <Phone className="w-3.5 h-3.5 text-sky-500" /> WhatsApp / Phone Number *
                    </label>
                    <input 
                      type="tel" 
                      required
                      placeholder="e.g., +91 98765 43210" 
                      value={phoneNumber}
                      onChange={(e) => setPhoneNumber(e.target.value)}
                      className="w-full bg-sky-50/20 border border-sky-150 rounded-2xl px-4 py-3 focus:border-sky-500 focus:ring-1 focus:ring-sky-500 outline-none text-sm transition-all"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {/* Select Date */}
                  <div className="space-y-1.5">
                    <label className="text-xs font-black text-gray-650 uppercase tracking-wide flex items-center gap-1">
                      <Calendar className="w-3.5 h-3.5 text-sky-500" /> Preferred Date *
                    </label>
                    <input 
                      type="date" 
                      required
                      value={preferredDate}
                      onChange={(e) => setPreferredDate(e.target.value)}
                      className="w-full bg-sky-50/20 border border-sky-150 rounded-2xl px-4 py-3 focus:border-sky-500 focus:ring-1 focus:ring-sky-500 outline-none text-sm transition-all"
                    />
                  </div>

                  {/* Time slots */}
                  <div className="space-y-1.5">
                    <label className="text-xs font-black text-gray-650 uppercase tracking-wide flex items-center gap-1">
                      <Clock className="w-3.5 h-3.5 text-sky-500" /> General Time Window *
                    </label>
                    <select
                      value={preferredTime}
                      onChange={(e) => setPreferredTime(e.target.value)}
                      className="w-full bg-sky-50/20 border border-sky-150 rounded-2xl px-4 py-3 focus:border-sky-500 focus:ring-1 focus:ring-sky-500 outline-none text-sm transition-all"
                    >
                      <option value="10:00 AM">Morning (10:00 AM - 01:00 PM)</option>
                      <option value="04:00 PM">Evening (04:00 PM - 07:00 PM)</option>
                      <option value="08:00 PM">Night emergency check window</option>
                    </select>
                  </div>
                </div>

                {/* Symptoms / Note */}
                <div className="space-y-1.5">
                  <label className="text-xs font-black text-gray-650 uppercase tracking-wide flex items-center gap-1">
                    <FileText className="w-3.5 h-3.5 text-sky-500" /> Parent Notes / Symptoms (Vaccine, Fever, etc.)
                  </label>
                  <textarea 
                    rows={2}
                    placeholder="Describe brief signs (e.g. fever since 2 days, respiratory cough, childhood wellness consults, routine immunizations...)" 
                    value={symptoms}
                    onChange={(e) => setSymptoms(e.target.value)}
                    className="w-full bg-sky-50/20 border border-sky-150 rounded-2xl px-4 py-3 focus:border-sky-500 focus:ring-1 focus:ring-sky-500 outline-none text-sm transition-all resize-none"
                  />
                </div>

                <button 
                  type="submit"
                  className="w-full bg-sky-600 hover:bg-sky-700 active:bg-sky-800 text-white font-black text-sm sm:text-base py-4 rounded-full transition-all shadow-md hover:shadow-lg hover:shadow-sky-100 flex items-center justify-center gap-2 cursor-pointer mt-4"
                >
                  <Send className="w-4 h-4" /> Schedule Appointment Successfully
                </button>
              </form>
            </div>
          </div>

        </div>
      </div>

      {/* Appointment Success Ticket overlay modal pop-up */}
      <AnimatePresence>
        {success && ticket && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSuccess(false)}
              className="absolute inset-0 bg-slate-900/60 backdrop-blur-sm"
            ></motion.div>

            <motion.div 
              initial={{ scale: 0.95, opacity: 0, y: 15 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.95, opacity: 0, y: 15 }}
              className="bg-white rounded-[40px] max-w-md w-full p-6 sm:p-8 shadow-2xl border border-slate-100 relative z-10 text-center space-y-5"
            >
              <div className="w-16 h-16 bg-emerald-50 rounded-full flex items-center justify-center mx-auto text-emerald-600 border border-emerald-100 shadow-sm">
                <Check className="w-7 h-7 stroke-[3]" />
              </div>

              <div>
                <h3 className="font-extrabold text-slate-900 text-xl tracking-tight">Appointment Scheduled!</h3>
                <p className="text-xs text-gray-500 font-semibold mt-1">Please keep a screenshot of this clinical token ticket.</p>
              </div>

              {/* Patient Entry Slip */}
              <div className="bg-sky-50/40 p-5 rounded-2xl border border-sky-100 border-dashed text-left space-y-2 font-sans relative overflow-hidden">
                <div className="absolute top-0 right-[-15px] w-12 h-12 bg-sky-200/20 rounded-full"></div>
                
                <div className="flex items-center justify-between border-b border-sky-100 pb-2">
                  <span className="text-[10px] font-black uppercase text-gray-400">Lotus Hospital Token</span>
                  <span className="text-xs font-black text-sky-600 font-mono tracking-widest">{ticket.id}</span>
                </div>

                <div className="grid grid-cols-2 gap-y-2 mt-2 text-xs">
                  <div>
                    <span className="text-[10px] text-gray-400 font-bold uppercase">Child Name</span>
                    <p className="font-extrabold text-gray-850 truncate">{ticket.childName}</p>
                  </div>
                  <div>
                    <span className="text-[10px] text-gray-400 font-bold uppercase">Child Age</span>
                    <p className="font-extrabold text-gray-850">{ticket.childAge}</p>
                  </div>
                  <div>
                    <span className="text-[10px] text-gray-400 font-bold uppercase">Scheduled Date</span>
                    <p className="font-extrabold text-gray-850 font-mono">{ticket.preferredDate}</p>
                  </div>
                  <div>
                    <span className="text-[10px] text-gray-400 font-bold uppercase font-sans">Estimated Time</span>
                    <p className="font-extrabold text-gray-850 font-mono text-[11px]">{ticket.preferredTime}</p>
                  </div>
                </div>

                <div className="border-t border-sky-100 pt-2 text-[11px] text-gray-500 mt-2">
                  <span className="font-bold text-gray-600">Note:</span> Present this token code at Bilipatra Complex reception on-site. Waiting time optimized for child safety!
                </div>
              </div>

              <div className="flex gap-2">
                <button
                  onClick={() => setSuccess(false)}
                  className="w-full bg-sky-500 hover:bg-sky-600 text-white font-extrabold text-xs sm:text-sm py-3 rounded-xl transition-all shadow cursor-pointer"
                >
                  Done, Thank You!
                </button>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
}

/* ============================================================================
   2. TESTIMONIALS SECTION
   ============================================================================ */
export function Reviews() {
  const [reviewsList, setReviewsList] = useState<Testimonial[]>(testimonialsData);
  const [writeReviewOpen, setWriteReviewOpen] = useState(false);
  const [newParentName, setNewParentName] = useState('');
  const [newChildName, setNewChildName] = useState('');
  const [newAge, setNewAge] = useState('');
  const [newRating, setNewRating] = useState(5);
  const [newComment, setNewComment] = useState('');
  const [newHighlight, setNewHighlight] = useState('');
  const [newLoc, setNewLoc] = useState('Vadodara, Gujarat');

  const handleReviewSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newParentName || !newChildName || !newComment) return;

    const added: Testimonial = {
      id: 'REV-' + Date.now(),
      parentName: newParentName,
      childName: newChildName,
      age: newAge || '1 Year',
      rating: newRating,
      highlight: newHighlight || 'Exemplary clinical experience!',
      comment: newComment,
      location: newLoc,
      date: 'Today'
    };

    setReviewsList([added, ...reviewsList]);
    
    // Clear
    setNewParentName('');
    setNewChildName('');
    setNewAge('');
    setNewComment('');
    setNewHighlight('');
    setWriteReviewOpen(false);
  };

  return (
    <section id="testimonials" className="py-20 md:py-28 bg-gradient-to-b from-white via-sky-50/20 to-sky-50/30 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div className="flex flex-col space-y-3 max-w-2xl">
            <span className="text-xs font-bold text-sky-500 uppercase tracking-widest">Real Healing Experiences</span>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-gray-900 tracking-tight leading-snug">
              Trusted by Loving Parents Across Vadodara
            </h2>
            <p className="text-sm text-gray-600 font-medium">
              Read how our dedicated neonatologists and soft pediatric surroundings help comfort families during critical moments.
            </p>
          </div>

          <button
            onClick={() => setWriteReviewOpen(true)}
            className="bg-white hover:bg-sky-50 text-sky-600 border border-sky-100 rounded-xl px-5 py-3 font-extrabold text-xs sm:text-sm shadow-sm transition-all flex items-center gap-1 shrink-0 self-start md:self-auto cursor-pointer"
          >
            <MessageSquare className="w-4 h-4 text-sky-500" /> Share Your Healing Story
          </button>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {reviewsList.map((rev) => (
            <div
              key={rev.id}
              className="bg-white rounded-3xl p-5 sm:p-6 border border-sky-100/50 shadow-sm flex flex-col justify-between hover:shadow-md transition-shadow"
            >
              <div className="space-y-3">
                {/* Rating layout */}
                <div className="flex items-center gap-0.5">
                  {Array.from({ length: 5 }).map((_, idx) => (
                    <Star 
                      key={idx} 
                      className={`w-3.5 h-3.5 ${idx < rev.rating ? 'text-yellow-400 fill-yellow-400' : 'text-gray-200'}`} 
                    />
                  ))}
                  <span className="text-[10px] text-gray-400 font-bold ml-1">{rev.date}</span>
                </div>

                <h4 className="font-extrabold text-gray-800 text-sm leading-snug">
                  "{rev.highlight}"
                </h4>

                <p className="text-gray-550 text-xs sm:text-sm font-medium leading-relaxed italic">
                  {rev.comment}
                </p>
              </div>

              {/* Informative footprint footer */}
              <div className="mt-5 pt-4 border-t border-sky-50 flex items-center gap-2.5">
                <div className="w-9 h-9 bg-gradient-to-tr from-sky-400 to-mint-400 text-white rounded-full flex items-center justify-center font-extrabold text-xs shadow-sm">
                  {rev.parentName.charAt(0)}
                </div>
                <div>
                  <h4 className="font-extrabold text-gray-800 text-xs">{rev.parentName}</h4>
                  <span className="text-[10px] text-sky-600 font-bold block mt-0.5">
                    Parent of {rev.childName} ({rev.age})
                  </span>
                  <span className="text-[9px] text-gray-400 font-semibold block">{rev.location}</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Add Review Dialog */}
        <AnimatePresence>
          {writeReviewOpen && (
            <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                onClick={() => setWriteReviewOpen(false)}
                className="absolute inset-0 bg-gray-900/60 backdrop-blur-sm"
              ></motion.div>

              <motion.div
                initial={{ scale: 0.95, opacity: 0, y: 15 }}
                animate={{ scale: 1, opacity: 1, y: 0 }}
                exit={{ scale: 0.95, opacity: 0, y: 15 }}
                className="bg-white rounded-3xl max-w-lg w-full p-6 shadow-2xl relative z-10 border border-sky-100"
              >
                <h3 className="font-extrabold text-gray-900 text-lg pb-3 border-b border-sky-50 mb-4">
                  Share Your Real Experience with Lotus Hospital
                </h3>

                <form onSubmit={handleReviewSubmit} className="space-y-4">
                  <div className="grid grid-cols-2 gap-3">
                    <div className="space-y-1">
                      <label className="text-[10px] font-black text-gray-500 uppercase tracking-widest">Parent Name *</label>
                      <input 
                        type="text" 
                        required 
                        placeholder="e.g. Priyaben Patel" 
                        value={newParentName}
                        onChange={(e) => setNewParentName(e.target.value)}
                        className="w-full bg-sky-50/25 border border-sky-100 rounded-xl px-3 py-2.5 text-xs outline-none"
                      />
                    </div>
                    <div className="space-y-1">
                      <label className="text-[10px] font-black text-gray-500 uppercase tracking-widest">Child Name *</label>
                      <input 
                        type="text" 
                        required 
                        placeholder="e.g. Veer Patel" 
                        value={newChildName}
                        onChange={(e) => setNewChildName(e.target.value)}
                        className="w-full bg-sky-50/25 border border-sky-100 rounded-xl px-3 py-2.5 text-xs outline-none"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-2 gap-3">
                    <div className="space-y-1">
                      <label className="text-[10px] font-black text-gray-500 uppercase tracking-widest">Child Age</label>
                      <input 
                        type="text" 
                        placeholder="e.g. 10 Months" 
                        value={newAge}
                        onChange={(e) => setNewAge(e.target.value)}
                        className="w-full bg-sky-50/25 border border-sky-100 rounded-xl px-3 py-2.5 text-xs outline-none"
                      />
                    </div>
                    <div className="space-y-1">
                      <label className="text-[10px] font-black text-gray-500 uppercase tracking-widest">Vadodara Area</label>
                      <input 
                        type="text" 
                        placeholder="e.g. Gotri, Vadodara" 
                        value={newLoc}
                        onChange={(e) => setNewLoc(e.target.value)}
                        className="w-full bg-sky-50/25 border border-sky-100 rounded-xl px-3 py-2.5 text-xs outline-none"
                      />
                    </div>
                  </div>

                  <div className="space-y-1">
                    <label className="text-[10px] font-black text-gray-500 uppercase tracking-widest block">Review Rating</label>
                    <div className="flex gap-1.5 mt-1">
                      {[1, 2, 3, 4, 5].map((stars) => (
                        <button
                          type="button"
                          key={stars}
                          onClick={() => setNewRating(stars)}
                          className="text-gray-300 hover:scale-110 transition-transform cursor-pointer"
                        >
                          <Star className={`w-6 h-6 ${stars <= newRating ? 'text-yellow-400 fill-yellow-400' : 'text-gray-200'}`} />
                        </button>
                      ))}
                    </div>
                  </div>

                  <div className="space-y-1">
                    <label className="text-[10px] font-black text-gray-500 uppercase tracking-widest">Core Summary Highlight *</label>
                    <input 
                      type="text" 
                      required
                      placeholder="e.g. Extremely friendly nurses and warm behavior!" 
                      value={newHighlight}
                      onChange={(e) => setNewHighlight(e.target.value)}
                      className="w-full bg-sky-50/25 border border-sky-100 rounded-xl px-3 py-2.5 text-xs outline-none"
                    />
                  </div>

                  <div className="space-y-1">
                    <label className="text-[10px] font-black text-gray-500 uppercase tracking-widest">My Healing Story *</label>
                    <textarea 
                      rows={3}
                      required
                      placeholder="Explain your detailed hospital experience here..." 
                      value={newComment}
                      onChange={(e) => setNewComment(e.target.value)}
                      className="w-full bg-sky-50/25 border border-sky-100 rounded-xl px-3 py-2.5 text-xs outline-none resize-none"
                    />
                  </div>

                  <div className="pt-3 border-t border-sky-50 flex justify-end gap-2 text-xs">
                    <button
                      type="button"
                      onClick={() => setWriteReviewOpen(false)}
                      className="px-4 py-2 rounded-xl text-gray-500 font-semibold cursor-pointer"
                    >
                      Cancel
                    </button>
                    <button
                      type="submit"
                      className="bg-sky-500 text-white font-extrabold px-5 py-2.5 rounded-xl cursor-pointer"
                    >
                      Publish Feedback
                    </button>
                  </div>
                </form>
              </motion.div>
            </div>
          )}
        </AnimatePresence>

      </div>
    </section>
  );
}

/* ============================================================================
   3. PHOTO GALLERY SECTION
   ============================================================================ */
export function Gallery() {
  const [activeTab, setActiveTab] = useState<'all' | 'neonatal' | 'pediatric' | 'facility' | 'care'>('all');
  const [zoomedItem, setZoomedItem] = useState<GalleryItem | null>(null);

  const filteredItems = galleryItemsData.filter(item => {
    if (activeTab === 'all') return true;
    return item.category === activeTab;
  });

  return (
    <section id="gallery" className="py-20 md:py-28 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section header */}
        <div className="text-center max-w-3xl mx-auto flex flex-col space-y-3 mb-12">
          <span className="text-xs font-bold text-sky-500 uppercase tracking-widest">Our Visual Tour</span>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-gray-900 tracking-tight leading-snug">
            Take a Tour of Lotus Hospital facilities
          </h2>
          <p className="text-sm text-gray-600 font-medium">
            Explore our state-of-the-art Level-3 NICU infrastructure, child-friendly waiting corridor, and sterilized diagnosis zones.
          </p>
        </div>

        {/* Filter Keys */}
        <div className="flex justify-center flex-wrap gap-2 mb-10">
          {[
            { label: 'All Photos', category: 'all' },
            { label: 'NICU & Newborn Wing', category: 'neonatal' },
            { label: 'Pediatric Treatment Corridors', category: 'pediatric' },
            { label: 'General Facilities', category: 'facility' },
            { label: 'Expert Pediatric Care', category: 'care' },
          ].map((tab) => (
            <button
              key={tab.category}
              onClick={() => setActiveTab(tab.category as any)}
              className={`px-3.5 py-2 rounded-xl font-bold text-xs sm:text-sm cursor-pointer transition-all ${
                activeTab === tab.category
                  ? 'bg-sky-500 text-white shadow-sm'
                  : 'bg-sky-50/50 text-gray-600 hover:text-sky-600 border border-sky-100/30'
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Images Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          <AnimatePresence mode="popLayout">
            {filteredItems.map((item) => (
              <motion.div
                layout
                key={item.id}
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.3 }}
                onClick={() => setZoomedItem(item)}
                className="group relative bg-sky-50/20 aspect-[4/3] rounded-3xl p-2 border border-sky-150 overflow-hidden cursor-zoom-in shadow-sm hover:shadow-md"
              >
                <img 
                  src={item.imageUrl} 
                  alt={item.title}
                  className="w-full h-full object-cover rounded-2xl group-hover:scale-[1.03] transition-transform duration-500"
                  referrerPolicy="no-referrer"
                />

                {/* Bottom Overlay Label */}
                <div className="absolute inset-x-2 bottom-2 bg-white/90 backdrop-blur-sm p-3.5 rounded-xl border border-sky-100 flex flex-col">
                  <span className="text-[9px] font-black uppercase text-sky-500 tracking-wider mb-0.5">
                    {item.category}
                  </span>
                  <h4 className="font-extrabold text-gray-800 text-xs sm:text-sm truncate">
                    {item.title}
                  </h4>
                  <p className="text-[10px] text-gray-500 line-clamp-1 mt-0.5">
                    {item.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

        {/* Enlarged Photo pop-up dialog */}
        <AnimatePresence>
          {zoomedItem && (
            <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                onClick={() => setZoomedItem(null)}
                className="absolute inset-0 bg-gray-950/80 backdrop-blur-sm"
              ></motion.div>

              <motion.div
                initial={{ scale: 0.95, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.95, opacity: 0 }}
                className="bg-white rounded-3xl overflow-hidden shadow-2xl relative z-10 max-w-2xl w-full border border-sky-150"
              >
                <button
                  onClick={() => setZoomedItem(null)}
                  className="absolute top-4 right-4 bg-white/80 backdrop-blur p-2 rounded-xl text-gray-500 hover:text-gray-800 shadow cursor-pointer z-10"
                >
                  <ChevronUp className="w-5 h-5 rotate-[90deg]" />
                </button>

                <div className="aspect-[16:10] w-full bg-black relative">
                  <img 
                    src={zoomedItem.imageUrl} 
                    alt={zoomedItem.title} 
                    className="w-full h-full object-cover"
                    referrerPolicy="no-referrer"
                  />
                </div>

                <div className="p-5 space-y-1">
                  <span className="text-[10px] font-black uppercase text-sky-500 tracking-wider">
                    {zoomedItem.category} facility
                  </span>
                  <h3 className="font-bold text-gray-900 text-base sm:text-lg">
                    {zoomedItem.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-gray-650 leading-relaxed font-semibold">
                    {zoomedItem.description}
                  </p>
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
   4. SEARCHABLE & CATEGORIZED INTERACTIVE FAQ ACCORDION
   ============================================================================ */
export function FAQs() {
  const [searchQuery, setSearchQuery] = useState('');
  const [activeFAQCategory, setActiveFAQCategory] = useState<'all' | 'emergency' | 'nicu' | 'appointments' | 'general' | 'vaccines'>('all');
  const [expandedFAQId, setExpandedFAQId] = useState<string | null>('f1');

  // Filter lists
  const filteredFAQs = faqsData.filter((faq) => {
    // Category check
    const matchesCategory = activeFAQCategory === 'all' || faq.category === activeFAQCategory;
    // Search query check
    const matchesKeyword = 
      faq.question.toLowerCase().includes(searchQuery.toLowerCase()) || 
      faq.answer.toLowerCase().includes(searchQuery.toLowerCase());
    
    return matchesCategory && matchesKeyword;
  });

  const toggleFAQId = (id: string) => {
    setExpandedFAQId(expandedFAQId === id ? null : id);
  };

  return (
    <section id="faq" className="py-20 md:py-28 bg-gradient-to-b from-sky-50/30 to-white overflow-hidden">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section header */}
        <div className="text-center flex flex-col space-y-3 mb-10">
          <span className="text-xs font-bold text-sky-500 uppercase tracking-widest">Answering Concerns</span>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-gray-900 tracking-tight">
            Common Inquiries & Clinical FAQs
          </h2>
          <p className="text-sm text-gray-600 font-medium">
            Find answers on emergency admissions, vaccination slots, or neonatal procedures.
          </p>
        </div>

        {/* Dynamic Search queries bar */}
        <div className="relative max-w-lg mx-auto mb-8">
          <input 
            type="text"
            placeholder="Search FAQs by keywords (e.g. NICU, emergency, hour, slot...)" 
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full bg-white border border-sky-150 rounded-2xl pl-11 pr-4 py-3 text-sm focus:border-sky-500 outline-none shadow-sm font-semibold"
          />
          <Search className="w-5 h-5 text-gray-400 absolute left-4 top-1/2 -translate-y-1/2" />
        </div>

        {/* Category triggers */}
        <div className="flex justify-center flex-wrap gap-1.5 mb-8">
          {[
            { label: 'All FAQs', cat: 'all' },
            { label: 'Emergency', cat: 'emergency' },
            { label: 'NICU Care', cat: 'nicu' },
            { label: 'Appointments', cat: 'appointments' },
            { label: 'Vaccinations', cat: 'vaccines' },
            { label: 'General', cat: 'general' },
          ].map((btn) => (
            <button
              key={btn.cat}
              onClick={() => setActiveFAQCategory(btn.cat as any)}
              className={`px-3 py-1.5 rounded-lg text-xs font-black cursor-pointer transition-colors ${
                activeFAQCategory === btn.cat
                  ? 'bg-sky-500 text-white'
                  : 'bg-white text-gray-500 border border-sky-100 hover:text-sky-600'
              }`}
            >
              {btn.label}
            </button>
          ))}
        </div>

        {/* Accordions */}
        <div className="space-y-3">
          {filteredFAQs.length > 0 ? (
            filteredFAQs.map((faq) => {
              const isExpanded = expandedFAQId === faq.id;
              return (
                <div 
                  key={faq.id}
                  className="bg-white rounded-2xl border border-sky-100/60 overflow-hidden shadow-sm hover:border-sky-200 transition-colors"
                >
                  <button
                    onClick={() => toggleFAQId(faq.id)}
                    className="w-full text-left px-5 py-4 flex items-center justify-between gap-4 font-bold text-gray-800 text-sm sm:text-base cursor-pointer hover:bg-sky-50/20"
                  >
                    <span className="leading-snug">{faq.question}</span>
                    <span className="shrink-0 p-1 rounded-lg bg-sky-50 text-sky-500">
                      {isExpanded ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
                    </span>
                  </button>

                  <AnimatePresence initial={false}>
                    {isExpanded && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.2 }}
                      >
                        <div className="px-5 pb-5 pt-1 text-xs sm:text-sm text-gray-600 leading-relaxed font-semibold border-t border-sky-50">
                          {faq.answer}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              );
            })
          ) : (
            <div className="text-center py-10 text-gray-400">
              No general clinical FAQs match your query. Try resetting filters.
            </div>
          )}
        </div>

      </div>
    </section>
  );
}

/* ============================================================================
   5. HEALTH TIPS & BLOG PORTAL
   ============================================================================ */
export function HealthTips() {
  const [activeCategory, setActiveCategory] = useState<'all' | 'newborn' | 'nutrition' | 'growth' | 'safety' | 'seasonal'>('all');
  const [selectedTip, setSelectedTip] = useState<HealthTip | null>(null);

  const filteredTips = healthTipsData.filter(tip => {
    if (activeCategory === 'all') return true;
    return tip.category === activeCategory;
  });

  return (
    <section id="health-tips" className="py-20 md:py-28 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto flex flex-col space-y-3 mb-12">
          <span className="text-xs font-bold text-sky-500 uppercase tracking-widest flex items-center gap-1 justify-center">
            <BookOpen className="w-4.5 h-4.5 text-sky-450" /> Pediatrician Advisory Blog
          </span>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-gray-900 tracking-tight leading-snug">
            Expert Wellness Guides & Baby Health Tips
          </h2>
          <p className="text-sm text-gray-600 font-medium">
            Practical care, fever home-response, allergy preventives, and weaning food charts prepared by Lotus senior clinicians.
          </p>
        </div>

        {/* Category selection */}
        <div className="flex justify-center flex-wrap gap-2 mb-10">
          {[
            { label: 'All Wellness Articles', cat: 'all' },
            { label: 'Newborn Care', cat: 'newborn' },
            { label: 'Nutrition', cat: 'nutrition' },
            { label: 'Safety Protocols', cat: 'safety' },
            { label: 'Seasonal Cough/Asthma', cat: 'seasonal' },
          ].map((btn) => (
            <button
              key={btn.cat}
              onClick={() => setActiveCategory(btn.cat as any)}
              className={`px-3.5 py-2 rounded-xl text-xs font-black cursor-pointer transition-all ${
                activeCategory === btn.cat
                  ? 'bg-sky-500 text-white shadow-sm'
                  : 'bg-sky-50/50 text-gray-600 hover:text-sky-600 border border-sky-100/30'
              }`}
            >
              {btn.label}
            </button>
          ))}
        </div>

        {/* Dynamic tips grid cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {filteredTips.map((tip) => (
            <div
              key={tip.id}
              onClick={() => setSelectedTip(tip)}
              className="bg-sky-50/10 hover:bg-white border border-sky-100/50 rounded-2xl p-5 hover:shadow-md transition-all flex flex-col justify-between cursor-pointer group"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="text-[10px] font-black uppercase text-purple-600 tracking-wider bg-purple-50 px-2 py-0.5 rounded">
                    {tip.category}
                  </span>
                  <span className="text-[10px] text-gray-400 font-mono flex items-center gap-0.5">
                    <Clock3 className="w-3 h-3 text-gray-300" /> {tip.readTime}
                  </span>
                </div>

                <div className="flex gap-2 mb-3 items-start">
                  <div className="bg-sky-50 p-1.5 rounded-lg text-sky-500 shrink-0 mt-0.5">
                    <SmartIcon name={tip.iconName} className="w-4 h-4" />
                  </div>
                  <h3 className="font-extrabold text-gray-800 text-sm group-hover:text-sky-500 transition-colors leading-snug">
                    {tip.title}
                  </h3>
                </div>

                <p className="text-gray-550 text-xs font-semibold leading-relaxed line-clamp-3">
                  {tip.summary}
                </p>
              </div>

              {/* Author footer banner */}
              <div className="mt-5 pt-3 border-t border-sky-50 flex items-center justify-between">
                <span className="text-[10px] text-gray-400 font-bold">{tip.author}</span>
                <span className="text-[11px] font-black text-sky-500 group-hover:translate-x-1 transition-transform flex items-center gap-0.5">
                  Read Article →
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* Full Reader tip article dialog */}
        <AnimatePresence>
          {selectedTip && (
            <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                onClick={() => setSelectedTip(null)}
                className="absolute inset-0 bg-gray-950/60 backdrop-blur-sm"
              ></motion.div>

              <motion.div
                initial={{ scale: 0.95, opacity: 0, y: 15 }}
                animate={{ scale: 1, opacity: 1, y: 0 }}
                exit={{ scale: 0.95, opacity: 0, y: 15 }}
                className="bg-white rounded-[32px] max-w-xl w-full p-6 sm:p-8 shadow-2xl relative z-10 border border-sky-100 max-h-[85vh] overflow-y-auto scrollbar-thin"
              >
                {/* Header inside pop-up */}
                <div className="flex items-center justify-between pb-4 border-b border-sky-50 mb-4 pr-10">
                  <div className="flex gap-2.5 items-center">
                    <div className="bg-sky-100 p-2.5 rounded-xl text-sky-500">
                      <SmartIcon name={selectedTip.iconName} className="w-5 h-5" />
                    </div>
                    <div>
                      <span className="inline-block text-[9px] font-black uppercase text-purple-600 tracking-wider bg-purple-50 px-1.5 py-0.5 rounded">
                        {selectedTip.category} Section
                      </span>
                      <p className="text-[10px] text-gray-400 font-bold mt-0.5">{selectedTip.date} • {selectedTip.readTime}</p>
                    </div>
                  </div>

                  <button
                    onClick={() => setSelectedTip(null)}
                    className="absolute top-4 right-4 p-2 rounded-xl text-gray-400 hover:text-gray-800 hover:bg-gray-100 transition-colors cursor-pointer"
                  >
                    <ChevronUp className="w-5 h-5 rotate-[90deg]" />
                  </button>
                </div>

                <div className="space-y-4 font-sans">
                  <h3 className="font-extrabold text-gray-900 text-lg sm:text-2xl leading-tight">
                    {selectedTip.title}
                  </h3>
                  
                  <p className="text-sm text-gray-500 italic font-bold">
                    Author: {selectedTip.author} • Senior Pediatric advisor at Lotus
                  </p>

                  <div className="bg-sky-50/40 p-4 rounded-2xl border border-sky-100 text-xs sm:text-sm text-gray-700 font-semibold leading-relaxed">
                    {selectedTip.summary}
                  </div>

                  {/* Bullet points mapping */}
                  <div className="space-y-3.5 pt-2">
                    <h4 className="text-xs font-black uppercase text-gray-400 tracking-wider">Detailed Pediatric Guidelines:</h4>
                    {selectedTip.content.map((elem, idx) => (
                      <div key={idx} className="flex gap-3 items-start text-xs sm:text-sm text-gray-600 leading-relaxed font-semibold">
                        <span className="bg-sky-100 text-sky-700 font-black h-6 w-6 rounded-full flex items-center justify-center shrink-0">
                          {idx + 1}
                        </span>
                        <p className="mt-0.5">{elem}</p>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Footer and share info */}
                <div className="pt-6 mt-6 border-t border-sky-50 flex items-center justify-between text-xs">
                  <span className="text-gray-450 font-medium">Lotus Pediatric Care Resource</span>
                  <button
                    onClick={() => setSelectedTip(null)}
                    className="bg-sky-500 text-white font-extrabold px-5 py-2.5 rounded-xl cursor-pointer"
                  >
                    Close Article
                  </button>
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
   6. CONTACT, HOURS, AND EMBEDDED LOCATION MAPS ZONE
   ============================================================================ */
export function ContactLocation() {
  const [copied, setCopied] = useState(false);

  // Auto-running opening clock
  const [currentTime, setCurrentTime] = useState('');

  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      setCurrentTime(now.toLocaleString('en-IN', { timeZone: 'Asia/Kolkata', hour: '2-digit', minute: '2-digit', second: '2-digit', hour12: true }));
    };
    updateTime();
    const interval = setInterval(updateTime, 1000);
    return () => clearInterval(interval);
  }, []);

  const handleCopyClick = () => {
    navigator.clipboard.writeText('+91 70697 80800');
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section id="contact" className="py-20 md:py-28 bg-gradient-to-b from-sky-50/20 to-sky-100/30 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Contact box */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-stretch">
          
          {/* Information blocks (7 columns) */}
          <div className="lg:col-span-5 bg-white rounded-[32px] p-6 sm:p-8 border border-sky-150 shadow-xl flex flex-col justify-between">
            <div className="space-y-6">
              <div className="flex flex-col space-y-1">
                <span className="text-xs font-bold text-sky-550 uppercase tracking-widest">Connect with Us</span>
                <h3 className="text-2xl font-extrabold text-gray-900 tracking-tight">
                  Lotus Hospital Contact Center
                </h3>
                <span className="text-[11px] text-sky-600 font-bold tracking-wider uppercase mt-1">
                  નવજાત અને બાળકો માટે લોટસ હોસ્પિટલ
                </span>
              </div>

              {/* Dynamic Vadodara active clock */}
              <div className="bg-emerald-50 rounded-2xl p-3 border border-emerald-100/60 inline-flex items-center gap-2">
                <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse shrink-0"></span>
                <span className="text-xs font-black text-emerald-800 uppercase tracking-wider">
                  Vadodara Clock: <span className="font-mono text-[11px] bg-white px-2 py-0.5 rounded border border-emerald-100/50">{currentTime || 'Hospital Active'}</span>
                </span>
              </div>

              {/* Core Items */}
              <div className="space-y-4">
                
                {/* Physical address */}
                <div className="flex gap-3 items-start">
                  <div className="bg-sky-100/70 text-sky-500 p-2.5 rounded-xl shrink-0">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="text-xs font-black text-gray-400 uppercase tracking-widest">Hospital Address</h4>
                    <p className="text-xs sm:text-sm font-bold text-gray-750 leading-relaxed mt-0.5">
                      Bilipatra Complex, Harni - Warasiya Ring Rd, opp. Banker's Hospital, Waghela Nagar, Bapunagar, Vadodara, Gujarat 390006
                    </p>
                  </div>
                </div>

                {/* Primary telephone dial */}
                <div className="flex gap-3 items-start">
                  <div className="bg-sky-100/70 text-sky-500 p-2.5 rounded-xl shrink-0">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="text-xs font-black text-gray-400 uppercase tracking-widest">Dial Hotline</h4>
                    <div className="flex items-center gap-2 mt-0.5">
                      <a href="tel:+917069780800" className="text-sm sm:text-base font-black text-gray-900 hover:text-sky-600 cursor-pointer">
                        +91 70697 80800
                      </a>
                      <button 
                        onClick={handleCopyClick}
                        className="bg-sky-50 text-[10px] text-sky-600 px-2 py-1 rounded-lg hover:bg-sky-100 border border-sky-100 transition-colors uppercase font-bold cursor-pointer"
                      >
                        {copied ? 'Copied' : 'Copy'}
                      </button>
                    </div>
                  </div>
                </div>

                {/* WhatsApp Chat link */}
                <div className="flex gap-3 items-start">
                  <div className="bg-sky-100/70 text-sky-500 p-2.5 rounded-xl shrink-0">
                    <MessageSquare className="w-5 h-5 text-emerald-500" />
                  </div>
                  <div>
                    <h4 className="text-xs font-black text-gray-400 uppercase tracking-widest">WhatsApp Query Chat</h4>
                    <a 
                      href="https://wa.me/917069780800?text=Hello%20Lotus%20Hospital%20Vadodara%20I%20would%20like%20to%20inquire%20about%20a%20pediatric%20or%20neonatal%20appointment."
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-xs sm:text-sm font-bold text-emerald-600 hover:underline flex items-center gap-0.5 mt-0.5 cursor-pointer"
                    >
                      Chat with Active Helpdesk ↗
                    </a>
                  </div>
                </div>

                {/* Working hours badge info */}
                <div className="flex gap-3 items-start">
                  <div className="bg-sky-100/70 text-sky-500 p-2.5 rounded-xl shrink-0">
                    <Clock className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="text-xs font-black text-gray-400 uppercase tracking-widest">Admissions & Emergency Hours</h4>
                    <p className="text-xs sm:text-sm font-bold text-gray-750 mt-0.5">
                      Open 24 Hours / 365 Days
                    </p>
                  </div>
                </div>

              </div>
            </div>

            {/* Quick action buttons for physical location direction */}
            <div className="pt-6 border-t border-sky-100 mt-6 grid grid-cols-2 gap-2">
              <a 
                href="https://maps.google.com/?q=Lotus+Hospital+For+Newborn+And+Children+Vadodara" 
                target="_blank" 
                rel="noopener noreferrer"
                className="bg-sky-500 hover:bg-sky-600 text-white font-extrabold text-xs py-3 rounded-2xl text-center shadow flex items-center justify-center gap-1 cursor-pointer"
              >
                <Navigation className="w-4 h-4 fill-white" /> Open Directions
              </a>
              <a 
                href="tel:+917069780800" 
                className="bg-red-50 hover:bg-red-100 text-red-600 font-extrabold text-xs py-3 rounded-2xl text-center border border-red-100 flex items-center justify-center gap-1"
              >
                <Phone className="w-4 h-4 animate-bounce" /> Call Now
              </a>
            </div>
          </div>

          {/* Embedded Map widget (7 columns) */}
          <div className="lg:col-span-7 bg-white rounded-[32px] overflow-hidden shadow-xl border border-sky-150 p-2 flex flex-col justify-between">
            <div className="w-full flex-1 aspect-[16/10] bg-sky-50 rounded-2xl overflow-hidden relative border border-sky-100">
              {/* Responsive Google Map frame. This specifies coordinate pins near Banker's Hospital Waghela Nagar Bapunagar Harni Road Vadodara */}
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3690.6698991871783!2d73.21852441114532!3d22.328329641777083!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x395fcfee832f0561%3A0xe67db1387d7b1aa7!2sLotus%20Hospital%20For%20Newborn%20And%20Children!5e0!3m2!1sen!2sin!4v1716300000000!5m2!1sen!2sin"
                title="Lotus Hospital Location Google Map"
                className="w-full h-full border-0 absolute inset-0"
                allowFullScreen={true}
                loading="lazy"
                referrerPolicy="no-referrer"
              ></iframe>
            </div>

            <div className="p-4 bg-sky-50/40 rounded-2xl border border-sky-100/50 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 mt-2">
              <div>
                <h4 className="text-[10px] font-black uppercase text-sky-500 tracking-wider">Opposite Banker\'s Hospital</h4>
                <p className="text-xs font-bold text-gray-750">Bilipatra Complex, Harni-Warasiya Ring Road, Vadodara</p>
              </div>
              <span className="text-[10px] text-rose-500 font-black uppercase flex items-center gap-1">
                <span className="w-1.5 h-1.5 rounded-full bg-red-500 animate-pulse"></span> Emergency ambulance landing space
              </span>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
