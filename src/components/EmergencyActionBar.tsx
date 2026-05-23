/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion } from 'motion/react';
import { Phone, Calendar, MessageSquare, Ambulance } from 'lucide-react';

interface EmergencyActionBarProps {
  onBookClick: () => void;
  onCallClick: () => void;
}

export default function EmergencyActionBar({ onBookClick, onCallClick }: EmergencyActionBarProps) {
  return (
    <>
      {/* 1. Mobile-only persistent fixed action footer bar (visible under lg) */}
      <div className="fixed bottom-0 left-0 w-full bg-white/95 backdrop-blur-md border-t border-sky-100 shadow-xl z-40 lg:hidden py-2 px-3">
        <div className="grid grid-cols-3 gap-2">
          
          {/* Quick Call Button */}
          <a
            href="tel:+917069780800"
            className="bg-red-500 hover:bg-red-600 active:scale-95 text-white rounded-xl py-2.5 px-2 flex flex-col items-center justify-center gap-1 transition-transform text-center"
          >
            <Phone className="w-5 h-5 animate-pulse" />
            <span className="text-[10px] font-black uppercase tracking-wider">Emergency Call</span>
          </a>

          {/* Quick Booking Button */}
          <button
            onClick={onBookClick}
            className="bg-sky-500 hover:bg-sky-600 active:scale-95 text-white rounded-xl py-2.5 px-2 flex flex-col items-center justify-center gap-1 transition-transform text-center cursor-pointer"
          >
            <Calendar className="w-5 h-5" />
            <span className="text-[10px] font-black uppercase tracking-wider">Book Slot</span>
          </button>

          {/* WhatsApp Support Button */}
          <a
            href="https://wa.me/917069780800?text=Hello%20Lotus%20Hospital%20Vadodara%20I%3Am%20inquiring%20about%20a%20child%20appointment."
            target="_blank"
            rel="noopener noreferrer"
            className="bg-emerald-500 hover:bg-emerald-600 active:scale-95 text-white rounded-xl py-2.5 px-2 flex flex-col items-center justify-center gap-1 transition-transform text-center cursor-pointer"
          >
            <MessageSquare className="w-5 h-5" />
            <span className="text-[10px] font-black uppercase tracking-wider">WhatsApp</span>
          </a>

        </div>
      </div>

      {/* 2. Floating Circular WhatsApp Widget (Visible everywhere, positioned slightly higher on mobile to prevent overlaying the sticky action bar) */}
      <motion.div
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ delay: 1, type: 'spring' }}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        className="fixed bottom-[74px] lg:bottom-6 right-5 z-40"
      >
        <a
          href="https://wa.me/917069780800?text=Hello%20Lotus%20Hospital%20Vadodara%20I%3Am%20inquiring%20about%20a%20children%20appointment."
          target="_blank"
          rel="noopener noreferrer"
          className="bg-emerald-500 hover:bg-emerald-600 text-white p-3.5 rounded-full shadow-2xl flex items-center justify-center border-2 border-white cursor-pointer relative group"
          aria-label="Chat with active pediatric helpers on WhatsApp"
        >
          {/* Pulsing indicator ring */}
          <span className="absolute -inset-0.5 rounded-full bg-emerald-500 animate-ping opacity-45 -z-10 group-hover:hidden"></span>
          
          <MessageSquare className="w-6 h-6 fill-white text-emerald-500" />
          
          {/* Hover helper alert bubble */}
          <span className="absolute right-14 bg-white text-gray-800 text-[10px] font-bold py-1.5 px-3 rounded-xl shadow-lg border border-sky-100 shrink-0 select-none opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none whitespace-nowrap">
            WhatsApp 24/7 Support Active
          </span>
        </a>
      </motion.div>
    </>
  );
}
