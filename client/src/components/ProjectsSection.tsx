import { motion } from "framer-motion";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { useLanguage } from '@/contexts/LanguageContext';

export default function ProjectsSection() {
  const { ref, isInView } = useScrollAnimation();
  const { t } = useLanguage();

  const projects = [
    {
      title: t('projects.project1.title'),
      description: t('projects.project1.description'),
      image: "/project1.png",
      tags: [t('projects.project1.tag1'), t('projects.project1.tag2'), t('projects.project1.tag3'), t('projects.project1.tag4')],
      category: t('projects.project1.category'),
      type: t('projects.project1.type'),
      primaryColor: "accent",
      techColors: ["bg-blue-500/20 text-blue-400", "bg-green-500/20 text-green-400", "bg-purple-500/20 text-purple-400", "bg-yellow-500/20 text-yellow-400"]
    },
    {
      title: t('projects.project2.title'),
      description: t('projects.project2.description'),
      image: "/project2.png",
      tags: [t('projects.project2.tag1'), t('projects.project2.tag2'), t('projects.project2.tag3'), t('projects.project2.tag4')],
      category: t('projects.project2.category'),
      type: t('projects.project2.type'),
      primaryColor: "success",
      techColors: ["bg-blue-500/20 text-blue-400", "bg-green-500/20 text-green-400", "bg-red-500/20 text-red-400", "bg-orange-500/20 text-orange-400"]
    },
    {
      title: t('projects.project3.title'),
      description: t('projects.project3.description'),
      image: "/project3.png",
      tags: [t('projects.project3.tag1'), t('projects.project3.tag2'), t('projects.project3.tag3'), t('projects.project3.tag4')],
      category: t('projects.project3.category'),
      type: t('projects.project3.type'),
      primaryColor: "yellow-400",
      techColors: ["bg-blue-500/20 text-blue-400", "bg-green-500/20 text-green-400", "bg-purple-500/20 text-purple-400", "bg-orange-500/20 text-orange-400"]
    }
  ];

  return (
    <section id="projects" className="py-20 bg-primary-custom">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" ref={ref}>
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            {t('projects.title')}
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            {t('projects.subtitle')}
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div 
              key={project.title}
              className={`bg-secondary-custom/50 rounded-2xl overflow-hidden border border-gray-700 hover:border-${project.primaryColor}/50 transition-all duration-300 transform hover:scale-105 group`}
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
            >
              <img 
                src={project.image}
                alt={`${project.title} 프로젝트`}
                className="w-full h-48 object-contain bg-white group-hover:scale-110 transition-transform duration-300"
              />
              
              <div className="p-6">
                <div className="flex items-center gap-2 mb-3">
                  <span className={`bg-${project.primaryColor}/20 text-${project.primaryColor} px-3 py-1 rounded-full text-sm`}>
                    {project.category}
                  </span>
                  <span className={`bg-${project.primaryColor === 'accent' ? 'success' : project.primaryColor === 'success' ? 'purple-500' : 'pink-500'}/20 text-${project.primaryColor === 'accent' ? 'success' : project.primaryColor === 'success' ? 'purple-400' : 'pink-400'} px-3 py-1 rounded-full text-sm`}>
                    {project.type}
                  </span>
                </div>
                
                <h3 className="text-xl font-bold mb-3 text-white">{project.title}</h3>
                <p className="text-gray-300 mb-4">{project.description}</p>
                
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag, tagIndex) => (
                    <span key={tag} className={`${project.techColors[tagIndex]} px-2 py-1 rounded text-xs`}>
                      {tag}
                    </span>
                  ))}
                </div>
                
                <div className="flex gap-3">
                  <a 
                    href="#" 
                    className={`flex-1 ${project.primaryColor === 'accent' ? 'bg-accent hover:bg-blue-600' : project.primaryColor === 'success' ? 'bg-success hover:bg-green-600' : 'bg-yellow-400 hover:bg-yellow-500'} text-white py-2 px-4 rounded-lg text-center transition-colors duration-300 ${project.primaryColor === 'yellow-400' ? 'text-dark font-semibold' : ''}`}
                  >
                    <i className={`${project.primaryColor === 'yellow-400' ? 'fas fa-play' : 'fas fa-external-link-alt'} mr-2`}></i>
                    {project.primaryColor === 'yellow-400' ? '플랫폼 보기' : '자세히 보기'}
                  </a>
                  <a 
                    href="#" 
                    className={`flex-1 border border-gray-600 hover:border-${project.primaryColor} text-gray-300 hover:text-${project.primaryColor} py-2 px-4 rounded-lg text-center transition-colors duration-300`}
                  >
                    <i className="fas fa-file-alt mr-2"></i>자료 보기
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* View All Projects Button */}
        <motion.div 
          className="text-center mt-12"
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
          transition={{ duration: 0.8, delay: 0.8 }}
        >
          <a 
            href="#" 
            className="inline-flex items-center bg-accent hover:bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105"
          >
            <i className="fas fa-graduation-cap mr-2"></i>
            모든 교육 활동 보기
          </a>
        </motion.div>
      </div>
    </section>
  );
}
