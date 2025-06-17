import { useState, useEffect } from "react";
import { useLanguage } from '@/contexts/LanguageContext';
import { Globe } from 'lucide-react';

export default function Navigation() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { language, setLanguage, t } = useLanguage();

  useEffect(() => {
    const handleScroll = (e: Event) => {
      e.preventDefault();
      const target = e.target as HTMLAnchorElement;
      const targetId = target.getAttribute('href');
      if (targetId && targetId.startsWith('#')) {
        const targetElement = document.querySelector(targetId);
        if (targetElement) {
          const offsetTop = targetElement.getBoundingClientRect().top + window.pageYOffset - 80;
          window.scrollTo({
            top: offsetTop,
            behavior: 'smooth'
          });
        }
      }
      setIsMobileMenuOpen(false);
    };

    const navLinks = document.querySelectorAll('a[href^="#"]');
    navLinks.forEach(link => {
      link.addEventListener('click', handleScroll);
    });

    return () => {
      navLinks.forEach(link => {
        link.removeEventListener('click', handleScroll);
      });
    };
  }, []);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-dark/90 backdrop-blur-md border-b border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="text-xl font-bold">
            <span className="text-accent">포트</span>
            <span className="text-success">폴리오</span>
          </div>
          
          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <a href="#home" className="text-gray-300 hover:text-accent transition-colors duration-300">홈</a>
            <a href="#about" className="text-gray-300 hover:text-accent transition-colors duration-300">{t('nav.about')}</a>
            <a href="#skills" className="text-gray-300 hover:text-accent transition-colors duration-300">{t('nav.skills')}</a>
            <a href="#projects" className="text-gray-300 hover:text-accent transition-colors duration-300">{t('nav.projects')}</a>
            <a href="#contact" className="text-gray-300 hover:text-accent transition-colors duration-300">{t('nav.contact')}</a>
            
            {/* Language Toggle */}
            <button
              onClick={() => setLanguage(language === 'ko' ? 'en' : 'ko')}
              className="flex items-center space-x-2 px-3 py-1.5 text-gray-300 hover:text-accent transition-colors duration-300 border border-gray-600 rounded-md hover:border-accent"
            >
              <Globe size={16} />
              <span className="text-sm font-medium">
                {language === 'ko' ? 'EN' : '한글'}
              </span>
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button 
            className="md:hidden text-gray-300 hover:text-accent"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            <i className="fas fa-bars text-xl"></i>
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-secondary-custom/95 backdrop-blur-md">
          <div className="px-4 pt-2 pb-4 space-y-2">
            <a href="#home" className="block text-gray-300 hover:text-accent transition-colors duration-300 py-2">홈</a>
            <a href="#about" className="block text-gray-300 hover:text-accent transition-colors duration-300 py-2">{t('nav.about')}</a>
            <a href="#skills" className="block text-gray-300 hover:text-accent transition-colors duration-300 py-2">{t('nav.skills')}</a>
            <a href="#projects" className="block text-gray-300 hover:text-accent transition-colors duration-300 py-2">{t('nav.projects')}</a>
            <a href="#contact" className="block text-gray-300 hover:text-accent transition-colors duration-300 py-2">{t('nav.contact')}</a>
            
            {/* Mobile Language Toggle */}
            <button
              onClick={() => setLanguage(language === 'ko' ? 'en' : 'ko')}
              className="flex items-center space-x-2 w-full px-3 py-2 text-gray-300 hover:text-accent transition-colors duration-300 border border-gray-600 rounded-md hover:border-accent mt-3"
            >
              <Globe size={16} />
              <span className="text-sm font-medium">
                {language === 'ko' ? 'English' : '한국어'}
              </span>
            </button>
          </div>
        </div>
      )}
    </nav>
  );
}
