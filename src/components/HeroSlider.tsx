import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ChevronLeft, ChevronRight } from 'lucide-react';

interface Slide {
  icon: string;
  title: string;
  description: string;
  dateEN: string;
  dateTE: string;
  price: string;
  slug: string;
  gradient: string;
}

const slides: Slide[] = [
  {
    icon: '⚙️',
    title: 'AI TOOL KIT',
    description: 'Master 15+ AI Tools & Automate Tasks Using Prompt Engineering',
    dateEN: '19 Oct (EN)',
    dateTE: '26 Oct (TE)',
    price: '₹999 + GST',
    slug: 'ai-tool-kit',
    gradient: 'from-cyan-500 to-blue-600'
  },
  {
    icon: '🤖',
    title: 'GEN AI & AGENTIC AI',
    description: 'Build Your Own AI Agents & LangChain Workflows',
    dateEN: '13 Dec (EN)',
    dateTE: '20 Dec (TE)',
    price: '₹999 + GST',
    slug: 'gen-ai-agentic',
    gradient: 'from-blue-500 to-violet-600'
  },
  {
    icon: '📊',
    title: 'MACHINE LEARNING',
    description: 'Regression, Classification, Model Deployment',
    dateEN: '29 Nov (EN)',
    dateTE: '6 Dec (TE)',
    price: '₹999 + GST',
    slug: 'machine-learning',
    gradient: 'from-violet-500 to-blue-600'
  }
];

export default function HeroSlider() {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 4000);

    return () => clearInterval(timer);
  }, []);

  const nextSlide = () => setCurrentSlide((prev) => (prev + 1) % slides.length);
  const prevSlide = () => setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);

  return (
    <div className="relative bg-gradient-to-br from-white via-cyan-50 to-blue-50 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="relative">
          {slides.map((slide, index) => (
            <div
              key={index}
              className={`transition-all duration-700 ${
                index === currentSlide
                  ? 'opacity-100 scale-100'
                  : 'opacity-0 scale-95 absolute inset-0 pointer-events-none'
              }`}
            >
              <div className="text-center max-w-4xl mx-auto">
                <div className="text-6xl mb-6 animate-bounce">{slide.icon}</div>
                <h1 className={`text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r ${slide.gradient} bg-clip-text text-transparent`}>
                  {slide.title}
                </h1>
                <p className="text-xl md:text-2xl text-gray-700 mb-8 leading-relaxed">
                  {slide.description}
                </p>
                <div className="flex flex-wrap items-center justify-center gap-4 mb-8 text-gray-600">
                  <span className="font-semibold">Dates:</span>
                  <span className="px-4 py-2 bg-white rounded-full shadow-sm">{slide.dateEN}</span>
                  <span className="px-4 py-2 bg-white rounded-full shadow-sm">{slide.dateTE}</span>
                </div>
                <div className="text-3xl font-bold text-cyan-600 mb-8">{slide.price}</div>
                <div className="flex flex-wrap justify-center gap-4">
                  <Link
                    to="/contact"
                    className="px-8 py-4 bg-gradient-to-r from-cyan-600 to-blue-600 text-white rounded-full font-semibold text-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
                  >
                    💳 Enroll Now
                  </Link>
                  <Link
                    to={`/course/${slide.slug}`}
                    className="px-8 py-4 border-2 border-cyan-600 text-cyan-600 rounded-full font-semibold text-lg hover:bg-cyan-50 transition-all duration-300"
                  >
                    📘 View Details
                  </Link>
                </div>
              </div>
            </div>
          ))}

          <button
            onClick={prevSlide}
            className="absolute left-0 top-1/2 -translate-y-1/2 p-3 bg-white/80 backdrop-blur-sm rounded-full shadow-lg hover:bg-white transition-all"
          >
            <ChevronLeft className="w-6 h-6 text-cyan-600" />
          </button>
          <button
            onClick={nextSlide}
            className="absolute right-0 top-1/2 -translate-y-1/2 p-3 bg-white/80 backdrop-blur-sm rounded-full shadow-lg hover:bg-white transition-all"
          >
            <ChevronRight className="w-6 h-6 text-cyan-600" />
          </button>
        </div>

        <div className="flex justify-center gap-3 mt-12">
          {slides.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentSlide(index)}
              className={`w-3 h-3 rounded-full transition-all ${
                index === currentSlide
                  ? 'bg-cyan-600 w-8'
                  : 'bg-gray-300 hover:bg-gray-400'
              }`}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
