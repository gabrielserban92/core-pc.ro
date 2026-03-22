'use client';

import { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { Menu, X, Search, Cpu, ChevronDown, Phone, Mail, Clock } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

const navLinks = [
  { name: 'Acasă', href: '/' },
  { 
    name: 'Servicii IT', 
    href: '/#servicii',
    subItems: [
      { name: 'Hardware', href: '/#hardware' },
      { name: 'Software', href: '/#software' },
      { name: 'Web Design', href: '/#web-design' },
    ]
  },
  { name: 'Livrare & Ridicare', href: '/livrare-ridicare' },
  { name: 'Despre Noi', href: '/#despre' },
  { name: 'Contact', href: '/#contact' },
];

const searchData = [
  { title: 'Acasă', href: '/' },
  { title: 'Servicii IT', href: '/#servicii' },
  { title: 'Servicii Hardware', href: '/#hardware' },
  { title: 'Asamblare PC', href: '/servicii/asamblare-pc' },
  { title: 'Mentenanță PC', href: '/servicii/mentenanta-pc' },
  { title: 'Mentenanță Laptop', href: '/servicii/mentenanta-laptop' },
  { title: 'Mentenanță Console', href: '/servicii/mentenanta-console' },
  { title: 'Înlocuire componente', href: '/servicii/inlocuire-componente' },
  { title: 'Servicii Software', href: '/#software' },
  { title: 'Instalare sistem operare', href: '/servicii/instalare-sistem-operare' },
  { title: 'Optimizare sistem operare', href: '/servicii/optimizare-sistem-operare' },
  { title: 'Configurare PC', href: '/servicii/configurare-pc' },
  { title: 'Instalare Office', href: '/servicii/instalare-office' },
  { title: 'Update BIOS', href: '/servicii/update-bios' },
  { title: 'Servicii Web Design', href: '/#web-design' },
  { title: 'Landing page', href: '#contact' },
  { title: 'Site prezentare', href: '#contact' },
  { title: 'Magazin online', href: '#contact' },
  { title: 'Modificare/actualizare site live', href: '#contact' },
  { title: 'Livrare & Ridicare', href: '/livrare-ridicare' },
  { title: 'Despre Noi', href: '/#despre' },
  { title: 'Contact', href: '/#contact' },
  { title: 'Întrebări frecvente (FAQ)', href: '/#faq' },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const searchInputRef = useRef<HTMLInputElement>(null);
  const router = useRouter();

  useEffect(() => {
    if (isSearchOpen && searchInputRef.current) {
      setTimeout(() => {
        searchInputRef.current?.focus();
      }, 100);
    }
  }, [isSearchOpen]);

  const filteredResults = searchData.filter(item => 
    item.title.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const handleSearchSelect = (href: string) => {
    setIsSearchOpen(false);
    setSearchQuery('');
    setIsOpen(false);
    router.push(href);
  };

  return (
    <>
      <nav className="fixed w-full z-50 flex flex-col">
        {/* Top Bar */}
        <div className="bg-zinc-950 border-b border-white/10">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col sm:flex-row items-center justify-between py-2 sm:h-10 sm:py-0 text-xs font-medium text-gray-300 gap-2 sm:gap-0">
              <div className="flex items-center gap-3 sm:gap-4">
                <a href="tel:+40760721202" className="flex items-center gap-1.5 hover:text-emerald-400 transition-colors">
                  <Phone className="w-3.5 h-3.5" />
                  0760721202
                </a>
                <span className="text-emerald-500">|</span>
                <a href="mailto:contact@core-pc.ro" className="flex items-center gap-1.5 hover:text-emerald-400 transition-colors">
                  <Mail className="w-3.5 h-3.5" />
                  contact@core-pc.ro
                </a>
              </div>
              <div className="flex items-center gap-1.5">
                <Clock className="w-3.5 h-3.5 text-emerald-500" />
                <span>Luni-Vineri 10:00 - 17:30</span>
              </div>
            </div>
          </div>
        </div>

        {/* Main Navbar */}
        <div className="bg-black/80 backdrop-blur-md border-b border-white/10">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-center justify-between h-16">
              <div className="flex items-center">
                <Link href="/" className="flex items-center gap-2">
                  <Cpu className="w-8 h-8 text-emerald-500" />
                  <span className="text-xl font-bold tracking-tight text-white">core-pc.ro</span>
                </Link>
              </div>
            
            <div className="hidden md:block">
              <div className="ml-10 flex items-baseline space-x-8">
                {navLinks.map((link) => (
                  <div 
                    key={link.name} 
                    className="relative group"
                    onMouseEnter={() => setActiveDropdown(link.name)}
                    onMouseLeave={() => setActiveDropdown(null)}
                  >
                    {link.name === 'Contact' ? (
                      <button
                        onClick={(e) => {
                          e.preventDefault();
                          window.dispatchEvent(new Event('open-contact-drawer'));
                        }}
                        className="bg-emerald-500 hover:bg-emerald-400 text-zinc-950 px-5 py-2.5 rounded-lg text-sm font-bold transition-all shadow-lg shadow-emerald-500/25 ml-2"
                      >
                        {link.name}
                      </button>
                    ) : (
                      <Link
                        href={link.href}
                        className="text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium transition-colors flex items-center gap-1"
                      >
                        {link.name}
                        {link.subItems && <ChevronDown className="w-4 h-4" />}
                      </Link>
                    )}
                    
                    {link.subItems && (
                      <AnimatePresence>
                        {activeDropdown === link.name && (
                          <motion.div
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: 10 }}
                            transition={{ duration: 0.2 }}
                            className="absolute left-0 mt-2 w-48 rounded-md shadow-lg bg-zinc-900 ring-1 ring-white/10 focus:outline-none overflow-hidden"
                          >
                            <div className="py-1">
                              {link.subItems.map((subItem) => (
                                <Link
                                  key={subItem.name}
                                  href={subItem.href}
                                  className="block px-4 py-2 text-sm text-gray-300 hover:bg-emerald-500/10 hover:text-emerald-400 transition-colors"
                                >
                                  {subItem.name}
                                </Link>
                              ))}
                            </div>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    )}
                  </div>
                ))}
              </div>
            </div>

            <div className="hidden md:flex items-center gap-4">
              <button 
                onClick={() => setIsSearchOpen(true)}
                className="text-gray-300 hover:text-white transition-colors relative p-2"
                aria-label="Căutare"
              >
                <Search className="w-5 h-5" />
              </button>
            </div>

            <div className="-mr-2 flex md:hidden items-center gap-2">
              <button 
                onClick={() => setIsSearchOpen(true)}
                className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-800 focus:outline-none"
                aria-label="Căutare"
              >
                <Search className="w-5 h-5" />
              </button>
              <button
                onClick={() => setIsOpen(!isOpen)}
                className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-800 focus:outline-none"
              >
                <span className="sr-only">Deschide meniul principal</span>
                {isOpen ? <X className="block h-6 w-6" /> : <Menu className="block h-6 w-6" />}
              </button>
            </div>
          </div>
        </div>
        </div>

        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="md:hidden bg-black border-b border-white/10 overflow-hidden"
            >
              <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
                {navLinks.map((link) => (
                  <div key={link.name}>
                    {link.name === 'Contact' ? (
                      <button
                        onClick={(e) => {
                          e.preventDefault();
                          setIsOpen(false);
                          window.dispatchEvent(new Event('open-contact-drawer'));
                        }}
                        className="w-full text-left bg-emerald-500 hover:bg-emerald-400 text-zinc-950 px-3 py-3 rounded-md text-base font-bold transition-colors mt-2"
                      >
                        {link.name}
                      </button>
                    ) : (
                      <Link
                        href={link.href}
                        onClick={() => !link.subItems && setIsOpen(false)}
                        className="text-gray-300 hover:text-white px-3 py-2 rounded-md text-base font-medium flex items-center justify-between"
                      >
                        {link.name}
                        {link.subItems && <ChevronDown className="w-4 h-4" />}
                      </Link>
                    )}
                    {link.subItems && (
                      <div className="pl-6 space-y-1 mt-1">
                        {link.subItems.map((subItem) => (
                          <Link
                            key={subItem.name}
                            href={subItem.href}
                            onClick={() => setIsOpen(false)}
                            className="text-gray-400 hover:text-emerald-400 block px-3 py-2 rounded-md text-sm font-medium"
                          >
                            {subItem.name}
                          </Link>
                        ))}
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>

      {/* Search Modal */}
      <AnimatePresence>
        {isSearchOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[60] flex items-start justify-center pt-20 px-4 sm:px-6 bg-black/80 backdrop-blur-sm"
            onClick={() => setIsSearchOpen(false)}
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: -20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: -20 }}
              className="w-full max-w-2xl bg-zinc-900 border border-white/10 rounded-2xl shadow-2xl overflow-hidden"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="p-4 border-b border-white/10 flex items-center gap-3">
                <Search className="w-5 h-5 text-gray-400" />
                <input
                  ref={searchInputRef}
                  type="text"
                  placeholder="Caută servicii, informații..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="flex-1 bg-transparent border-none text-white placeholder:text-gray-500 focus:outline-none text-lg"
                />
                <button 
                  onClick={() => setIsSearchOpen(false)}
                  className="p-1 rounded-md text-gray-400 hover:text-white hover:bg-white/10 transition-colors"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>
              
              <div className="max-h-[60vh] overflow-y-auto">
                {searchQuery.length > 0 ? (
                  filteredResults.length > 0 ? (
                    <div className="p-2">
                      {filteredResults.map((result, index) => (
                        <button
                          key={index}
                          onClick={() => handleSearchSelect(result.href)}
                          className="w-full text-left px-4 py-3 rounded-xl hover:bg-white/5 text-gray-300 hover:text-white transition-colors flex items-center gap-3"
                        >
                          <Search className="w-4 h-4 text-emerald-500" />
                          {result.title}
                        </button>
                      ))}
                    </div>
                  ) : (
                    <div className="p-8 text-center text-gray-500">
                      Nu am găsit niciun rezultat pentru &quot;{searchQuery}&quot;
                    </div>
                  )
                ) : (
                  <div className="p-8 text-center text-gray-500">
                    Începe să tastezi pentru a căuta în site...
                  </div>
                )}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
