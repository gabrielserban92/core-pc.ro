'use client';

import { useState, useEffect } from 'react';
import { motion, useScroll, AnimatePresence } from 'motion/react';
import { MessageCircle, ArrowUp } from 'lucide-react';

export default function FloatingActions() {
  const { scrollYProgress } = useScroll();
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.scrollY > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', toggleVisibility);
    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end gap-4">
      {/* Scroll to Top with Progress */}
      <AnimatePresence>
        {isVisible && (
          <motion.button
            initial={{ opacity: 0, y: 20, scale: 0.8 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.8 }}
            onClick={scrollToTop}
            className="relative w-12 h-12 flex items-center justify-center bg-zinc-900 rounded-full text-emerald-500 hover:bg-zinc-800 transition-colors group shadow-lg border border-white/10"
            aria-label="Scroll to top"
          >
            <svg className="absolute inset-0 w-full h-full -rotate-90" viewBox="0 0 100 100">
              <circle
                cx="50"
                cy="50"
                r="46"
                fill="none"
                stroke="rgba(255,255,255,0.1)"
                strokeWidth="4"
              />
              <motion.circle
                cx="50"
                cy="50"
                r="46"
                fill="none"
                stroke="#10b981" /* emerald-500 */
                strokeWidth="4"
                style={{ pathLength: scrollYProgress }}
                strokeDasharray="289.02" /* 2 * pi * 46 */
              />
            </svg>
            <ArrowUp className="w-5 h-5 relative z-10 group-hover:-translate-y-1 transition-transform" />
          </motion.button>
        )}
      </AnimatePresence>

      {/* WhatsApp Button */}
      <div className="group relative flex items-center">
        <div className="absolute right-full mr-4 px-3 py-2 bg-zinc-900 text-white text-sm font-medium rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap pointer-events-none border border-white/10 shadow-xl">
          Scrie-ne pe Whats&apos;App
        </div>
        <a
          href="https://wa.me/40760721202"
          target="_blank"
          rel="noopener noreferrer"
          className="w-14 h-14 bg-zinc-800 hover:bg-zinc-700 rounded-full flex items-center justify-center shadow-lg transition-colors duration-300 border border-white/10 hover:border-emerald-400"
          aria-label="Contact on WhatsApp"
        >
          <svg 
            xmlns="http://www.w3.org/2000/svg" 
            width="28" 
            height="28" 
            viewBox="0 0 24 24" 
            fill="#25D366"
          >
            <path d="M12.031 0C5.396 0 .015 5.38.015 12.016c0 2.12.553 4.19 1.604 6.012L.015 24l6.125-1.606a11.94 11.94 0 0 0 5.891 1.543h.005c6.633 0 12.014-5.38 12.014-12.017C24.05 5.38 18.668 0 12.031 0zm0 21.936h-.004a9.92 9.92 0 0 1-5.056-1.385l-.362-.215-3.76.986 1.003-3.666-.236-.376a9.91 9.91 0 0 1-1.517-5.286c0-5.476 4.457-9.932 9.933-9.932 2.653 0 5.148 1.034 7.023 2.91 1.874 1.877 2.907 4.373 2.907 7.026 0 5.476-4.458 9.932-9.933 9.932h.002zm5.45-7.438c-.299-.15-1.767-.872-2.04-.972-.273-.1-.472-.15-.672.15-.2.3-.769.972-.943 1.171-.173.2-.347.225-.646.075-.299-.15-1.261-.465-2.403-1.485-.888-.793-1.488-1.772-1.662-2.072-.174-.3-.019-.462.13-.611.135-.134.3-.35.45-.525.15-.175.2-.3.3-.5.1-.2.05-.375-.025-.525-.075-.15-.672-1.62-.922-2.218-.243-.583-.49-.504-.672-.513-.174-.009-.373-.011-.573-.011-.2 0-.523.075-.797.375-.274.3-1.046 1.022-1.046 2.493s1.07 2.89 1.22 3.09c.15.2 2.106 3.216 5.102 4.51.713.308 1.269.492 1.703.63.715.228 1.366.196 1.88.119.576-.086 1.767-.722 2.016-1.42.25-.698.25-1.296.175-1.422-.075-.126-.274-.201-.573-.351z"/>
          </svg>
        </a>
      </div>
    </div>
  );
}
