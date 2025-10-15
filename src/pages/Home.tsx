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
      {/* Hero Slider */}
      <HeroSlider />

      {/* Why Trishuvaan Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Why TRISHUVAAN</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Transform your career with industry-leading AI education
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { icon: Target, title: '🎯 Live Learning', desc: '100% interactive sessions — no recordings' },
              { icon: Briefcase, title: '💼 Career Focus', desc: 'Internship & job assistance after every course' },
              { icon: Brain, title: '🧠 Bilingual', desc: 'English & Telugu batches available' },
              { icon: Rocket, title: '🚀 Project-Based', desc: 'Real-world deployment and portfolio guidance' },
            ].map((item, idx) => (
              <div
                key={idx}
                className="text-center p-6 rounded-xl bg-gradient-to-br from-cyan-50 to-blue-50 border border-cyan-100 hover:shadow-lg transition-shadow"
              >
                <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-cyan-600 to-blue-600 rounded-full mb-4">
                  <item.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">{item.title}</h3>
                <p className="text-gray-600">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Courses Section */}
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
