import { motion } from "framer-motion";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { useLanguage } from '@/contexts/LanguageContext';

export default function AboutSection() {
  const { ref, isInView } = useScrollAnimation();
  const { t } = useLanguage();

  return (
    <section id="about" className="py-20 bg-primary-custom">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" ref={ref}>
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            {t('about.title')} <span className="text-accent"></span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            {t('about.subtitle')}
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* About Text */}
          <motion.div 
            className="space-y-6"
            initial={{ opacity: 0, x: -40 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -40 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div className="bg-secondary-custom/50 p-8 rounded-2xl border border-gray-700">
              <h3 className="text-2xl font-bold mb-4 text-accent">💡 {t('about.philosophy.title')}</h3>
              <p className="text-gray-300 leading-relaxed">
                {t('about.philosophy.content')}
              </p>
            </div>

            <div className="bg-secondary-custom/50 p-8 rounded-2xl border border-gray-700">
              <h3 className="text-2xl font-bold mb-4 text-success">🚀 {t('about.growth.title')}</h3>
              <p className="text-gray-300 leading-relaxed">
                {t('about.growth.content')}
              </p>
            </div>

            <div className="bg-secondary-custom/50 p-8 rounded-2xl border border-gray-700">
              <h3 className="text-2xl font-bold mb-4 text-yellow-400">⭐ 주요 성과</h3>
              <p className="text-gray-300 leading-relaxed">
                {t('about.content1')}
              </p>
            </div>
          </motion.div>

          {/* Personal Stats */}
          <motion.div 
            className="space-y-8"
            initial={{ opacity: 0, x: 40 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 40 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <div className="relative">
              <img 
                src="/family.png" 
                alt="제이미와 가족" 
                className="rounded-2xl shadow-2xl w-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-dark/60 to-transparent rounded-2xl"></div>
            </div>

            <div className="grid grid-cols-2 gap-6">
              <div className="bg-secondary-custom/50 p-6 rounded-xl text-center border border-gray-700">
                <div className="text-3xl font-bold text-accent mb-2">200+</div>
                <div className="text-gray-300">교육한 학생</div>
              </div>
              <div className="bg-secondary-custom/50 p-6 rounded-xl text-center border border-gray-700">
                <div className="text-3xl font-bold text-success mb-2">5년</div>
                <div className="text-gray-300">교육 경험</div>
              </div>
              <div className="bg-secondary-custom/50 p-6 rounded-xl text-center border border-gray-700">
                <div className="text-3xl font-bold text-yellow-400 mb-2">10+</div>
                <div className="text-gray-300">교육 프로그램</div>
              </div>
              <div className="bg-secondary-custom/50 p-6 rounded-xl text-center border border-gray-700">
                <div className="text-3xl font-bold text-purple-400 mb-2">100%</div>
                <div className="text-gray-300">열정</div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
