import { motion } from "framer-motion";
import { useLanguage } from '@/contexts/LanguageContext';

export default function Footer() {
  const { t } = useLanguage();
  const socialLinks = [
    { icon: "fab fa-github", href: "#" },
    { icon: "fab fa-linkedin", href: "#" },
    { icon: "fab fa-twitter", href: "#" },
    { icon: "fas fa-envelope", href: "#" }
  ];

  return (
    <footer className="bg-dark border-t border-gray-800 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          className="text-center"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <div className="text-2xl font-bold text-accent mb-4">제이미</div>
          <p className="text-gray-400 mb-6">
            미래 교육을 선도하는 교육전문가
          </p>
          
          <div className="flex justify-center space-x-6 mb-8">
            {socialLinks.map((link, index) => (
              <motion.a 
                key={index}
                href={link.href}
                className="text-gray-400 hover:text-accent transition-colors duration-300"
                whileHover={{ scale: 1.2 }}
                whileTap={{ scale: 0.9 }}
              >
                <i className={`${link.icon} text-2xl`}></i>
              </motion.a>
            ))}
          </div>
          
          <div className="text-gray-500 text-sm">
            {t('footer.copyright')}
          </div>
        </motion.div>
      </div>
    </footer>
  );
}
