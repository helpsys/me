import { motion } from "framer-motion";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

export default function TestimonialsSection() {
  const { ref, isInView } = useScrollAnimation();

  const testimonials = [
    {
      name: "김수연",
      role: "동료 교사",
      image: "https://images.unsplash.com/photo-1494790108755-2616b9c94e2d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=100&h=100",
      content: "제이미 선생님의 AI 교육 연수를 받고 나서 수업이 완전히 달라졌어요. 복잡한 기술을 쉽게 설명해주시고, 실무에 바로 적용할 수 있는 실용적인 내용들이 정말 도움이 되었습니다.",
      borderColor: "accent"
    },
    {
      name: "박민지",
      role: "고등학생",
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=100&h=100",
      content: "코딩이 어렵고 지루할 것 같았는데, 제이미 선생님 수업은 정말 재미있어요! 스크래치부터 차근차근 알려주셔서 이제 간단한 게임도 만들 수 있게 되었습니다.",
      borderColor: "success"
    },
    {
      name: "이원석",
      role: "교육정책 담당자",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=100&h=100",
      content: "부산교육청의 디지털 교육 혁신을 이끌어가는 핵심 인재입니다. 교육 현장의 니즈를 정확히 파악하고 실현 가능한 정책을 제안하는 능력이 뛰어납니다.",
      borderColor: "purple-400"
    }
  ];

  return (
    <section className="py-20 bg-dark">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" ref={ref}>
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            함께한 사람들의 <span className="text-accent">이야기</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            동료 교사와 학생들이 전하는 교육 경험담입니다.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div 
              key={testimonial.name}
              className={`bg-secondary-custom/50 p-8 rounded-2xl border border-gray-700 hover:border-${testimonial.borderColor}/50 transition-all duration-300`}
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
            >
              <div className="flex items-center mb-6">
                <img 
                  src={testimonial.image}
                  alt={`${testimonial.name} ${testimonial.role}`}
                  className="w-16 h-16 rounded-full mr-4"
                />
                <div>
                  <h4 className="font-bold text-white">{testimonial.name}</h4>
                  <p className="text-gray-400 text-sm">{testimonial.role}</p>
                </div>
              </div>
              <p className="text-gray-300 italic mb-4">
                "{testimonial.content}"
              </p>
              <div className="flex text-yellow-400">
                {[...Array(5)].map((_, i) => (
                  <i key={i} className="fas fa-star"></i>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
