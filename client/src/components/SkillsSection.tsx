import { motion } from "framer-motion";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { useEffect, useState } from "react";
import { useLanguage } from '@/contexts/LanguageContext';

export default function SkillsSection() {
  const { ref, isInView } = useScrollAnimation();
  const [animateBars, setAnimateBars] = useState(false);
  const { t } = useLanguage();

  useEffect(() => {
    if (isInView) {
      const timer = setTimeout(() => setAnimateBars(true), 500);
      return () => clearTimeout(timer);
    }
  }, [isInView]);

  const skills = [
    { name: t('skills.ai'), level: 90, color: "bg-accent" },
    { name: t('skills.coding'), level: 85, color: "bg-success" },
    { name: t('skills.ict'), level: 88, color: "bg-yellow-400" },
    { name: t('skills.curriculum'), level: 92, color: "bg-purple-400" }
  ];

  const tools = [
    { name: t('skills.platform'), level: 95, color: "bg-accent" },
    { name: t('skills.teacher'), level: 88, color: "bg-success" },
    { name: "학습 관리 시스템", level: 80, color: "bg-yellow-400" },
    { name: "교육 콘텐츠 제작", level: 85, color: "bg-purple-400" }
  ];

  return (
    <section id="skills" className="py-20 bg-dark">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" ref={ref}>
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            {t('skills.title')}
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            {t('skills.subtitle')}
          </p>
        </motion.div>

        {/* Skills Grid */}
        <motion.div 
          className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16"
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          {/* AI Education */}
          <div className="bg-secondary-custom/50 p-8 rounded-2xl border border-gray-700 hover:border-accent/50 transition-all duration-300 transform hover:scale-105">
            <div className="text-center">
              <i className="fas fa-brain text-4xl text-blue-400 mb-4"></i>
              <h3 className="text-xl font-bold mb-4 text-accent">AI 교육</h3>
              <ul className="space-y-2 text-gray-300">
                <li>머신러닝 기초</li>
                <li>챗GPT 활용법</li>
                <li>AI 윤리</li>
                <li>AI 도구 체험</li>
              </ul>
            </div>
          </div>

          {/* Coding Education */}
          <div className="bg-secondary-custom/50 p-8 rounded-2xl border border-gray-700 hover:border-success/50 transition-all duration-300 transform hover:scale-105">
            <div className="text-center">
              <i className="fas fa-code text-4xl text-success mb-4"></i>
              <h3 className="text-xl font-bold mb-4 text-success">코딩 교육</h3>
              <ul className="space-y-2 text-gray-300">
                <li>스크래치</li>
                <li>파이썬 기초</li>
                <li>웹 개발 입문</li>
                <li>알고리즘 사고</li>
              </ul>
            </div>
          </div>

          {/* ICT Education */}
          <div className="bg-secondary-custom/50 p-8 rounded-2xl border border-gray-700 hover:border-yellow-400/50 transition-all duration-300 transform hover:scale-105">
            <div className="text-center">
              <i className="fas fa-laptop text-4xl text-yellow-400 mb-4"></i>
              <h3 className="text-xl font-bold mb-4 text-yellow-400">ICT 교육</h3>
              <ul className="space-y-2 text-gray-300">
                <li>디지털 시민교육</li>
                <li>멀티미디어 활용</li>
                <li>온라인 도구</li>
                <li>정보 보안</li>
              </ul>
            </div>
          </div>

          {/* Educational Technology */}
          <div className="bg-secondary-custom/50 p-8 rounded-2xl border border-gray-700 hover:border-purple-400/50 transition-all duration-300 transform hover:scale-105">
            <div className="text-center">
              <i className="fas fa-chalkboard-teacher text-4xl text-purple-400 mb-4"></i>
              <h3 className="text-xl font-bold mb-4 text-purple-400">교육 기술</h3>
              <ul className="space-y-2 text-gray-300">
                <li>LMS 활용</li>
                <li>블렌디드 러닝</li>
                <li>플립러닝</li>
                <li>교육용 앱</li>
              </ul>
            </div>
          </div>
        </motion.div>

        {/* Skill Progress Bars */}
        <motion.div 
          className="grid md:grid-cols-2 gap-8"
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <div className="space-y-6">
            <h3 className="text-2xl font-bold text-center mb-8">교육 전문 역량</h3>
            
            <div className="space-y-4">
              {skills.map((skill, index) => (
                <div key={skill.name}>
                  <div className="flex justify-between mb-2">
                    <span className="text-gray-300">{skill.name}</span>
                    <span className="text-accent">{skill.level}%</span>
                  </div>
                  <div className="bg-gray-700 rounded-full h-3">
                    <motion.div 
                      className={`h-3 rounded-full ${skill.color}`}
                      initial={{ width: 0 }}
                      animate={animateBars ? { width: `${skill.level}%` } : { width: 0 }}
                      transition={{ duration: 1.5, delay: index * 0.2, ease: "easeInOut" }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="space-y-6">
            <h3 className="text-2xl font-bold text-center mb-8">교육 도구 & 플랫폼</h3>
            
            <div className="space-y-4">
              {tools.map((tool, index) => (
                <div key={tool.name}>
                  <div className="flex justify-between mb-2">
                    <span className="text-gray-300">{tool.name}</span>
                    <span className="text-accent">{tool.level}%</span>
                  </div>
                  <div className="bg-gray-700 rounded-full h-3">
                    <motion.div 
                      className={`h-3 rounded-full ${tool.color}`}
                      initial={{ width: 0 }}
                      animate={animateBars ? { width: `${tool.level}%` } : { width: 0 }}
                      transition={{ duration: 1.5, delay: (index + 4) * 0.2, ease: "easeInOut" }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
