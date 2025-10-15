import { Link } from 'react-router-dom';
import { Target, Briefcase, Brain, Rocket } from 'lucide-react';
import HeroSlider from '../components/HeroSlider';
import CourseCard from '../components/CourseCard';
import { courses } from '../data/courses';
import { Course } from '../types';

export default function Home() {
  const handleEnroll = (course: Course) => {
    window.location.href = '/contact';
  };

  return (
    <div>
      <HeroSlider />

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Why TRISHUVAAN</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Transform your career with industry-leading AI education
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center p-6 rounded-xl bg-gradient-to-br from-cyan-50 to-blue-50 border border-cyan-100 hover:shadow-lg transition-shadow">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-cyan-600 to-blue-600 rounded-full mb-4">
                <Target className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">🎯 Live Learning</h3>
              <p className="text-gray-600">100% interactive sessions — no recordings</p>
            </div>

            <div className="text-center p-6 rounded-xl bg-gradient-to-br from-cyan-50 to-blue-50 border border-cyan-100 hover:shadow-lg transition-shadow">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-cyan-600 to-blue-600 rounded-full mb-4">
                <Briefcase className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">💼 Career Focus</h3>
              <p className="text-gray-600">Internship & job assistance after every course</p>
            </div>

            <div className="text-center p-6 rounded-xl bg-gradient-to-br from-cyan-50 to-blue-50 border border-cyan-100 hover:shadow-lg transition-shadow">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-cyan-600 to-blue-600 rounded-full mb-4">
                <Brain className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">🧠 Bilingual</h3>
              <p className="text-gray-600">English & Telugu batches available</p>
            </div>

            <div className="text-center p-6 rounded-xl bg-gradient-to-br from-cyan-50 to-blue-50 border border-cyan-100 hover:shadow-lg transition-shadow">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-cyan-600 to-blue-600 rounded-full mb-4">
                <Rocket className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">🚀 Project-Based</h3>
              <p className="text-gray-600">Real-world deployment and portfolio guidance</p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-gradient-to-br from-white via-cyan-50 to-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Featured Courses</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Weekend batches starting at just ₹999 + GST
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
            {courses.filter(c => c.isFeatured).map(course => (
              <CourseCard key={course.id} course={course} onEnroll={handleEnroll} />
            ))}
          </div>

          <div className="text-center">
            <Link
              to="/courses/weekend"
              className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-cyan-600 to-blue-600 text-white rounded-full font-semibold text-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
            >
              📘 Explore All Courses
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
