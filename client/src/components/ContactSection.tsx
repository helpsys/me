import { motion } from "framer-motion";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";
import { useLanguage } from '@/contexts/LanguageContext';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";

export default function ContactSection() {
  const { ref, isInView } = useScrollAnimation();
  const { toast } = useToast();
  const { t } = useLanguage();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: ""
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const result = await response.json();

      if (response.ok) {
        toast({
          title: t('contact.success'),
          description: t('contact.successDesc'),
        });
        setFormData({ name: "", email: "", subject: "", message: "" });
      } else {
        toast({
          title: t('contact.error'),
          description: result.error || t('contact.errorDesc'),
          variant: "destructive",
        });
      }
    } catch (error) {
      toast({
        title: t('contact.error'),
        description: t('contact.networkError'),
        variant: "destructive",
      });
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  const socialLinks = [
    { name: "GitHub", icon: "fab fa-github", color: "bg-blue-600 hover:bg-blue-700", href: "#" },
    { name: "LinkedIn", icon: "fab fa-linkedin", color: "bg-blue-500 hover:bg-blue-600", href: "#" },
    { name: "Twitter", icon: "fab fa-twitter", color: "bg-blue-400 hover:bg-blue-500", href: "#" },
    { name: "Blog", icon: "fas fa-blog", color: "bg-gray-600 hover:bg-gray-700", href: "#" }
  ];

  return (
    <section id="contact" className="py-20 bg-primary-custom">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" ref={ref}>
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            {t('contact.title')}
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            {t('contact.subtitle')} 
            더 나은 교육 환경을 함께 만들어봅시다.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Contact Info */}
          <motion.div 
            className="space-y-8"
            initial={{ opacity: 0, x: -40 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -40 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div className="bg-secondary-custom/50 p-8 rounded-2xl border border-gray-700">
              <h3 className="text-2xl font-bold mb-6 text-accent">{t('contact.title')}</h3>
              
              <div className="space-y-6">
                <div className="flex items-center">
                  <div className="bg-accent/20 p-3 rounded-lg mr-4">
                    <i className="fas fa-envelope text-accent text-xl"></i>
                  </div>
                  <div>
                    <p className="text-gray-400 text-sm">{t('contact.info.email')}</p>
                    <p className="text-white font-semibold">helpsys@kroea.kr</p>
                  </div>
                </div>

                <div className="flex items-center">
                  <div className="bg-success/20 p-3 rounded-lg mr-4">
                    <i className="fas fa-phone text-success text-xl"></i>
                  </div>
                  <div>
                    <p className="text-gray-400 text-sm">{t('contact.info.phone')}</p>
                    <p className="text-white font-semibold">010-2559-5769</p>
                  </div>
                </div>

                <div className="flex items-center">
                  <div className="bg-purple-400/20 p-3 rounded-lg mr-4">
                    <i className="fas fa-map-marker-alt text-purple-400 text-xl"></i>
                  </div>
                  <div>
                    <p className="text-gray-400 text-sm">{t('contact.info.location')}</p>
                    <p className="text-white font-semibold">{t('contact.info.locationValue')}</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Social Links */}
            <div className="bg-secondary-custom/50 p-8 rounded-2xl border border-gray-700">
              <h3 className="text-2xl font-bold mb-6 text-accent">소셜 미디어</h3>
              
              <div className="flex flex-wrap gap-4">
                {socialLinks.map((link) => (
                  <a 
                    key={link.name}
                    href={link.href}
                    className={`${link.color} text-white p-4 rounded-lg transition-colors duration-300 flex items-center`}
                  >
                    <i className={`${link.icon} text-xl mr-3`}></i>
                    <span>{link.name}</span>
                  </a>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div 
            className="bg-secondary-custom/50 p-8 rounded-2xl border border-gray-700"
            initial={{ opacity: 0, x: 40 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 40 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <h3 className="text-2xl font-bold mb-6 text-accent">{t('contact.form.title')}</h3>
            
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <Label htmlFor="name" className="text-gray-300 mb-2">{t('contact.form.name')}</Label>
                <Input 
                  type="text" 
                  id="name" 
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full bg-dark border border-gray-600 rounded-lg px-4 py-3 text-white focus:border-accent focus:outline-none transition-colors duration-300" 
                  placeholder={t('contact.form.name')} 
                  required 
                />
              </div>

              <div>
                <Label htmlFor="email" className="text-gray-300 mb-2">{t('contact.form.email')}</Label>
                <Input 
                  type="email" 
                  id="email" 
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full bg-dark border border-gray-600 rounded-lg px-4 py-3 text-white focus:border-accent focus:outline-none transition-colors duration-300" 
                  placeholder="hong@example.com" 
                  required 
                />
              </div>

              <div>
                <Label htmlFor="subject" className="text-gray-300 mb-2">{t('contact.form.subject')}</Label>
                <Input 
                  type="text" 
                  id="subject" 
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  className="w-full bg-dark border border-gray-600 rounded-lg px-4 py-3 text-white focus:border-accent focus:outline-none transition-colors duration-300" 
                  placeholder={t('contact.form.subject')} 
                  required 
                />
              </div>

              <div>
                <Label htmlFor="message" className="text-gray-300 mb-2">{t('contact.form.message')}</Label>
                <Textarea 
                  id="message" 
                  name="message" 
                  rows={5}
                  value={formData.message}
                  onChange={handleChange}
                  className="w-full bg-dark border border-gray-600 rounded-lg px-4 py-3 text-white focus:border-accent focus:outline-none transition-colors duration-300 resize-none" 
                  placeholder={t('contact.form.message')} 
                  required 
                />
              </div>

              <Button 
                type="submit"
                className="w-full bg-accent hover:bg-blue-600 text-white py-3 px-6 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105"
              >
                <i className="fas fa-paper-plane mr-2"></i>
                {t('contact.form.send')}
              </Button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
