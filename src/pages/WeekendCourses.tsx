import CourseCard from '../components/CourseCard';
import { courses } from '../data/courses';
import { Course } from '../types';

export default function WeekendCourses() {
  const handleEnroll = (course: Course) => {
    window.location.href = '/contact';
  };

  return (
    <div>
      <section className="py-20 bg-gradient-to-br from-white via-cyan-50 to-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
              Transform Your Weekends into Career Breakthroughs
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Live Classes. Real Projects. Bilingual Batches.
            </p>
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {courses.map(course => (
              <CourseCard key={course.id} course={course} onEnroll={handleEnroll} />
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-gradient-to-br from-cyan-50 to-blue-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">What You Get</h2>
          <div className="grid md:grid-cols-2 gap-6 text-left">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="font-semibold text-lg text-gray-900 mb-2">✅ Live Interactive Sessions</h3>
              <p className="text-gray-600">No recordings, only real-time learning with instant doubt resolution</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="font-semibold text-lg text-gray-900 mb-2">✅ Hands-On Projects</h3>
              <p className="text-gray-600">Build portfolio-worthy projects that impress employers</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="font-semibold text-lg text-gray-900 mb-2">✅ Bilingual Support</h3>
              <p className="text-gray-600">Learn comfortably in English or Telugu</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="font-semibold text-lg text-gray-900 mb-2">✅ Career Assistance</h3>
              <p className="text-gray-600">Internship opportunities and job placement guidance</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
