import { useState, useEffect } from 'react';
import { courses } from '../data/courses';
import { ArrowLeft, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function HeroSlider() {
  const featuredCourses = courses.filter(course => course.isFeatured);
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent(prev => (prev + 1) % featuredCourses.length);
    }, 5000); // Change slide every 5 seconds
    return () => clearInterval(timer);
  }, [featuredCourses.length]);

  const prevSlide = () =>
    setCurrent(prev => (prev === 0 ? featuredCourses.length - 1 : prev - 1));
  const nextSlide = () =>
    setCurrent(prev => (prev + 1) % featuredCourses.length);

  if (featuredCourses.length === 0) return null;

  const course = featuredCourses[current];

  return (
    <section className="relative w-full h-[500px] overflow-hidden flex items-center justify-center">
      {/* Background Image */}
      <img
        src={course.image}
        alt={course.title}
        className="absolute inset-0 w-full h-full object-cover"
      />

      {/* Cinematic Overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-black/50 via-black/40 to-transparent mix-blend-overlay"></div>

      {/* Main Content */}
      <div className="relative z-10 text-center px-6 md:px-0 text-white drop-shadow-lg max-w-3xl">
        <h2 className="text-4xl md:text-5xl font-extrabold mb-4 leading-tight">
          {course.title}
        </h2>
        <p className="text-lg md:text-xl mb-4 opacity-90">{course.description}</p>
        <p className="mb-2 opacity-80">
          Dates: {course.dateEN} (EN) | {course.dateTE} (TE)
        </p>
        <p className="text-2xl font-bold text-cyan-300 mb-6">
          ₹{course.price} + GST
        </p>

        <div className="flex justify-center gap-4">
          <Link
            to="/contact"
            className="px-6 py-2 bg-cyan-600 text-white rounded-lg font-medium hover:bg-cyan-500 transition"
          >
            Enroll Now
          </Link>
          <Link
            to={`/course/${course.slug}`}
            className="px-6 py-2 border-2 border-cyan-400 text-cyan-300 rounded-lg font-medium hover:bg-cyan-400/10 transition"
          >
            View Details
          </Link>
        </div>
      </div>

      {/* Slider Controls */}
      <button
        onClick={prevSlide}
        className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white/70 rounded-full p-2 shadow hover:bg-white transition"
      >
        <ArrowLeft className="w-5 h-5 text-gray-800" />
      </button>
      <button
        onClick={nextSlide}
        className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white/70 rounded-full p-2 shadow hover:bg-white transition"
      >
        <ArrowRight className="w-5 h-5 text-gray-800" />
      </button>

      {/* Dots Indicator */}
      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex gap-2">
        {featuredCourses.map((_, idx) => (
          <span
            key={idx}
            className={`w-3 h-3 rounded-full cursor-pointer transition ${
              idx === current ? 'bg-cyan-400' : 'bg-gray-400/60'
            }`}
            onClick={() => setCurrent(idx)}
          ></span>
        ))}
      </div>
    </section>
  );
}
