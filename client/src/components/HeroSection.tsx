import { motion } from "framer-motion";
import { useLanguage } from '@/contexts/LanguageContext';

export default function HeroSection() {
  const { t } = useLanguage();
  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Background Gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-dark via-primary-custom to-secondary-custom"></div>
      
      {/* Animated Background Elements */}
      <div className="absolute inset-0">
        <motion.div 
          className="absolute top-20 left-20 w-72 h-72 bg-accent/10 rounded-full blur-3xl"
          animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.5, 0.3] }}
          transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div 
          className="absolute bottom-20 right-20 w-96 h-96 bg-success/10 rounded-full blur-3xl"
          animate={{ scale: [1.2, 1, 1.2], opacity: [0.5, 0.3, 0.5] }}
          transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: 2 }}
        />
      </div>

      <div className="relative z-10 text-center px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto">
        {/* Profile Image */}
        <motion.div 
          className="mb-8 -ml-2.5"
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <img 
            src="/profile.png" 
            alt="제이미 프로필 사진" 
            className="w-32 h-32 rounded-full mx-auto shadow-2xl ring-4 ring-accent/30 object-cover object-center"
          />
        </motion.div>

        <motion.h1 
          className="text-5xl md:text-7xl font-bold mb-6"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          {t('hero.greeting')}, <span className="text-accent">{t('hero.name')}</span>입니다
        </motion.h1>
        
        <motion.p 
          className="text-xl md:text-2xl text-gray-300 mb-8"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          {t('hero.title')}
        </motion.p>
        
        <motion.p 
          className="text-lg text-gray-400 mb-12 max-w-2xl mx-auto"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          {t('hero.description')}
        </motion.p>

        <motion.div 
          className="flex flex-col sm:flex-row gap-4 justify-center"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
        >
          <a 
            href="#projects" 
            className="bg-accent hover:bg-blue-600 text-white px-8 py-4 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg"
          >
            {t('nav.projects')}
          </a>
          <a 
            href="#contact" 
            className="border-2 border-accent text-accent hover:bg-accent hover:text-white px-8 py-4 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105"
          >
            {t('hero.cta')}
          </a>
        </motion.div>

        {/* Scroll Indicator */}
        <motion.div 
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
        >
          <i className="fas fa-chevron-down text-accent text-2xl"></i>
        </motion.div>
      </div>
    </section>
  );
}
