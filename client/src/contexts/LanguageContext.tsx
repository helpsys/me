import React, { createContext, useContext, useState, ReactNode } from 'react';

export type Language = 'ko' | 'en';

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};

const translations = {
  ko: {
    // Navigation
    'nav.about': '소개',
    'nav.skills': '역량',
    'nav.projects': '주요 활동',
    'nav.testimonials': '추천사',
    'nav.contact': '연락처',
    
    // Hero Section
    'hero.greeting': '안녕하세요, 저는',
    'hero.name': '제이미',
    'hero.title': '부산광역시교육청 교육전문직',
    'hero.subtitle': 'AI 교육, 코딩 교육, ICT 교육 전문가',
    'hero.description': '혁신적인 교육 방법론과 최신 기술을 접목하여 미래 교육을 선도하고 있습니다. 전국 최초의 여러 교육 프로그램을 기획하고 운영하며, 교육 현장의 디지털 전환을 이끌고 있습니다.',
    'hero.cta': '연락하기',
    
    // About Section
    'about.title': '소개',
    'about.subtitle': '교육 혁신을 통해 미래를 만들어갑니다',
    'about.content1': '부산광역시교육청에서 교육전문직으로 근무하며, AI 교육, 코딩 교육, ICT 교육 분야의 전문성을 바탕으로 혁신적인 교육 프로그램을 기획하고 운영하고 있습니다.',
    'about.content2': '전국 최초의 다양한 교육 시스템과 프로그램을 도입하며, 교육 현장의 디지털 전환을 선도하고 있습니다. 교사와 학생들이 미래 사회에 필요한 역량을 기를 수 있도록 체계적이고 실용적인 교육 환경을 조성하는 것이 저의 목표입니다.',
    'about.philosophy.title': '교육 철학',
    'about.philosophy.content': '기술과 교육의 융합을 통해 학습자 중심의 창의적 교육 환경을 만들어가겠습니다.',
    'about.growth.title': '지속적 성장',
    'about.growth.content': '변화하는 교육 환경에 발맞춰 끊임없이 학습하고 혁신하는 교육전문가가 되겠습니다.',
    
    // Skills Section
    'skills.title': '전문 역량',
    'skills.subtitle': '교육 혁신을 위한 핵심 역량',
    'skills.ai': 'AI 교육 기획 및 운영',
    'skills.coding': '코딩 교육 프로그램 개발',
    'skills.ict': 'ICT 교육 시스템 구축',
    'skills.curriculum': '교육과정 개발 및 관리',
    'skills.teacher': '교사 연수 및 역량 강화',
    'skills.platform': '교육 플랫폼 기획 및 관리',
    
    // Projects Section
    'projects.title': '주요 교육 활동',
    'projects.subtitle': '혁신적인 교육 프로그램과 시스템 구축',
    
    // Project 1
    'projects.project1.title': '전국 최초 인공지능교육 가이드북 발간(2019년)',
    'projects.project1.description': '2019년 전국 최초로 인공지능 교육을 위한 체계적인 가이드북을 발간하여 교육 현장에 실질적인 도움을 제공했습니다. 교사들이 AI 도구를 교육에 효과적으로 활용할 수 있는 실무 중심의 가이드라인을 제시했습니다.',
    'projects.project1.category': '교육 혁신',
    'projects.project1.type': '연구 개발',
    'projects.project1.tag1': 'AI 교육',
    'projects.project1.tag2': '가이드북',
    'projects.project1.tag3': '2019년',
    'projects.project1.tag4': '전국최초',
    
    // Project 2
    'projects.project2.title': '중등 임용고사 실기 시험 적용(2020년)',
    'projects.project2.description': '2020년부터 전국 최초로 정보컴퓨터 교사 임용시험에 C/Python 2차 실기 문제를 적용했습니다. 공정하고 효율적인 코딩 실기 평가 시스템을 구축하여 예비교사들의 실무 프로그래밍 역량을 정확히 평가할 수 있게 했습니다.',
    'projects.project2.category': '평가 혁신',
    'projects.project2.type': '시스템 구축',
    'projects.project2.tag1': '임용고사',
    'projects.project2.tag2': 'C/Python',
    'projects.project2.tag3': '2020년부터',
    'projects.project2.tag4': '전국최초',
    
    // Project 3
    'projects.project3.title': '전국 최초 인공지능 교육 플랫폼 개설(2021년)',
    'projects.project3.description': '2021년 전국 최초로 인공지능 교육 전용 플랫폼 https://bmooc.pen.go.kr을 개설하여 체계적인 AI 교육 환경을 조성했습니다. 교사와 학생들이 함께 AI를 학습할 수 있는 통합 교육 플랫폼을 제공합니다.',
    'projects.project3.category': '플랫폼 개발',
    'projects.project3.type': '웹 서비스',
    'projects.project3.tag1': 'AI 플랫폼',
    'projects.project3.tag2': '2021년',
    'projects.project3.tag3': '온라인 교육',
    'projects.project3.tag4': '전국최초',
    'projects.viewDetails': '자세히 보기',
    
    // Testimonials Section
    'testimonials.title': '추천사',
    'testimonials.subtitle': '함께 일한 동료들의 평가',
    
    // Contact Section
    'contact.title': '연락처',
    'contact.subtitle': '언제든지 연락주세요',
    'contact.form.title': '메시지 보내기',
    'contact.form.name': '이름',
    'contact.form.email': '이메일',
    'contact.form.subject': '제목',
    'contact.form.message': '메시지',
    'contact.form.send': '메시지 전송',
    'contact.info.email': '이메일',
    'contact.info.phone': '전화번호',
    'contact.info.location': '근무지',
    'contact.info.locationValue': '부산광역시교육청',
    'contact.success': '메시지가 전송되었습니다!',
    'contact.successDesc': '빠른 시일 내에 답변드리겠습니다.',
    'contact.error': '전송 실패',
    'contact.errorDesc': '메시지 전송 중 오류가 발생했습니다.',
    'contact.networkError': '네트워크 오류가 발생했습니다.',
    
    // Footer
    'footer.copyright': '© 2025 제이미. All rights reserved. | Made with ❤️',
  },
  en: {
    // Navigation
    'nav.about': 'About',
    'nav.skills': 'Skills',
    'nav.projects': 'Projects',
    'nav.testimonials': 'Testimonials',
    'nav.contact': 'Contact',
    
    // Hero Section
    'hero.greeting': 'Hello, I am',
    'hero.name': 'Jamie',
    'hero.title': 'Education Specialist at Busan Metropolitan Office of Education',
    'hero.subtitle': 'AI Education, Coding Education, ICT Education Expert',
    'hero.description': 'Leading future education by integrating innovative educational methodologies with cutting-edge technology. Planning and operating various first-in-nation educational programs, driving digital transformation in educational settings.',
    'hero.cta': 'Get in Touch',
    
    // About Section
    'about.title': 'About Me',
    'about.subtitle': 'Creating the future through educational innovation',
    'about.content1': 'Working as an education specialist at Busan Metropolitan Office of Education, I plan and operate innovative educational programs based on expertise in AI education, coding education, and ICT education.',
    'about.content2': 'Leading digital transformation in educational settings by introducing various first-in-nation educational systems and programs. My goal is to create systematic and practical educational environments that help teachers and students develop competencies needed for future society.',
    'about.philosophy.title': 'Educational Philosophy',
    'about.philosophy.content': 'Creating learner-centered creative educational environments through the convergence of technology and education.',
    'about.growth.title': 'Continuous Growth',
    'about.growth.content': 'Becoming an educational professional who continuously learns and innovates in line with the changing educational environment.',
    
    // Skills Section
    'skills.title': 'Professional Skills',
    'skills.subtitle': 'Core competencies for educational innovation',
    'skills.ai': 'AI Education Planning & Operations',
    'skills.coding': 'Coding Education Program Development',
    'skills.ict': 'ICT Education System Construction',
    'skills.curriculum': 'Curriculum Development & Management',
    'skills.teacher': 'Teacher Training & Capacity Building',
    'skills.platform': 'Educational Platform Planning & Management',
    
    // Projects Section
    'projects.title': 'Major Educational Activities',
    'projects.subtitle': 'Innovative educational programs and system construction',
    
    // Project 1
    'projects.project1.title': 'First AI Education Guidebook in Korea (2019)',
    'projects.project1.description': 'Published the first systematic AI education guidebook in Korea in 2019, providing practical help to educational fields. Presented practical guidelines for teachers to effectively utilize AI tools in education.',
    'projects.project1.category': 'Educational Innovation',
    'projects.project1.type': 'Research & Development',
    'projects.project1.tag1': 'AI Education',
    'projects.project1.tag2': 'Guidebook',
    'projects.project1.tag3': '2019',
    'projects.project1.tag4': 'First in Korea',
    
    // Project 2
    'projects.project2.title': 'Secondary Teacher Certification Practical Exam (2020)',
    'projects.project2.description': 'From 2020, applied C/Python practical exam questions to the Information & Computer teacher certification exam for the first time in Korea. Built a fair and efficient coding practical evaluation system to accurately assess pre-service teachers\' practical programming competencies.',
    'projects.project2.category': 'Assessment Innovation',
    'projects.project2.type': 'System Development',
    'projects.project2.tag1': 'Teacher Certification',
    'projects.project2.tag2': 'C/Python',
    'projects.project2.tag3': 'Since 2020',
    'projects.project2.tag4': 'First in Korea',
    
    // Project 3
    'projects.project3.title': 'First AI Education Platform in Korea (2021)',
    'projects.project3.description': 'Established the first AI education platform https://bmooc.pen.go.kr in Korea in 2021, creating a systematic AI education environment. Provides an integrated educational platform where teachers and students can learn AI together.',
    'projects.project3.category': 'Platform Development',
    'projects.project3.type': 'Web Service',
    'projects.project3.tag1': 'AI Platform',
    'projects.project3.tag2': '2021',
    'projects.project3.tag3': 'Online Education',
    'projects.project3.tag4': 'First in Korea',
    'projects.viewDetails': 'View Details',
    
    // Testimonials Section
    'testimonials.title': 'Testimonials',
    'testimonials.subtitle': 'Evaluations from colleagues I have worked with',
    
    // Contact Section
    'contact.title': 'Contact',
    'contact.subtitle': 'Feel free to reach out anytime',
    'contact.form.title': 'Send Message',
    'contact.form.name': 'Name',
    'contact.form.email': 'Email',
    'contact.form.subject': 'Subject',
    'contact.form.message': 'Message',
    'contact.form.send': 'Send Message',
    'contact.info.email': 'Email',
    'contact.info.phone': 'Phone',
    'contact.info.location': 'Workplace',
    'contact.info.locationValue': 'Busan Metropolitan Office of Education',
    'contact.success': 'Message sent successfully!',
    'contact.successDesc': 'I will respond as soon as possible.',
    'contact.error': 'Sending failed',
    'contact.errorDesc': 'An error occurred while sending the message.',
    'contact.networkError': 'A network error occurred.',
    
    // Footer
    'footer.copyright': '© 2025 Jamie. All rights reserved. | Made with ❤️',
  }
};

interface LanguageProviderProps {
  children: ReactNode;
}

export const LanguageProvider: React.FC<LanguageProviderProps> = ({ children }) => {
  const [language, setLanguage] = useState<Language>('ko');
  
  const t = (key: string): string => {
    return translations[language][key as keyof typeof translations['ko']] || key;
  };
  
  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};