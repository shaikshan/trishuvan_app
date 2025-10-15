import { useParams, Link } from 'react-router-dom';
import { Calendar, Clock, BookOpen, CheckCircle } from 'lucide-react';
import { courses } from '../data/courses';

export default function CourseDetail() {
  const { slug } = useParams();
  const course = courses.find(c => c.slug === slug);

  if (!course) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Course Not Found</h1>
          <Link to="/courses/weekend" className="text-cyan-600 hover:underline">
            View All Courses
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div>
      <section className="py-20 bg-gradient-to-br from-white via-cyan-50 to-blue-50">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
              {course.title}
            </h1>
            <p className="text-xl text-gray-700 leading-relaxed max-w-3xl mx-auto mb-8">
              {course.description}
            </p>

            <div className="flex flex-wrap items-center justify-center gap-6 mb-8">
              <div className="flex items-center gap-2 bg-white px-6 py-3 rounded-full shadow-md">
                <Calendar className="w-5 h-5 text-cyan-600" />
                <span className="font-semibold">EN: {course.dateEN}</span>
              </div>
              <div className="flex items-center gap-2 bg-white px-6 py-3 rounded-full shadow-md">
                <Calendar className="w-5 h-5 text-cyan-600" />
                <span className="font-semibold">TE: {course.dateTE}</span>
              </div>
              {course.duration && (
                <div className="flex items-center gap-2 bg-white px-6 py-3 rounded-full shadow-md">
                  <Clock className="w-5 h-5 text-cyan-600" />
                  <span className="font-semibold">{course.duration}</span>
                </div>
              )}
            </div>

            <div className="text-4xl font-bold text-cyan-600 mb-8">
              ₹{course.price} + GST
            </div>

            <Link
              to="/contact"
              className="inline-block px-8 py-4 bg-gradient-to-r from-cyan-600 to-blue-600 text-white rounded-full font-semibold text-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
            >
              💳 Enroll Now
            </Link>
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <div className="flex items-center gap-3 mb-6">
                <BookOpen className="w-8 h-8 text-cyan-600" />
                <h2 className="text-3xl font-bold text-gray-900">Course Highlights</h2>
              </div>

              <div className="space-y-3">
                {course.highlights.map((highlight, index) => (
                  <div key={index} className="flex items-center gap-3 p-3 bg-gradient-to-r from-cyan-50 to-blue-50 rounded-lg">
                    <CheckCircle className="w-5 h-5 text-cyan-600 flex-shrink-0" />
                    <span className="text-gray-700 font-medium">{highlight}</span>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <div className="flex items-center gap-3 mb-6">
                <BookOpen className="w-8 h-8 text-cyan-600" />
                <h2 className="text-3xl font-bold text-gray-900">Curriculum</h2>
              </div>

              {course.curriculum && (
                <div className="space-y-3">
                  {course.curriculum.map((item, index) => (
                    <div key={index} className="flex items-start gap-3 p-4 bg-white border border-cyan-100 rounded-lg hover:shadow-md transition-shadow">
                      <div className="flex-shrink-0 w-8 h-8 bg-gradient-to-r from-cyan-600 to-blue-600 rounded-full flex items-center justify-center text-white font-bold text-sm">
                        {index + 1}
                      </div>
                      <span className="text-gray-700 font-medium pt-1">{item}</span>
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-gradient-to-br from-cyan-50 to-blue-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">What You'll Get</h2>

          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-white p-6 rounded-xl shadow-md">
              <h3 className="font-bold text-lg text-gray-900 mb-2">✅ Live Interactive Sessions</h3>
              <p className="text-gray-600">No recordings, only real-time learning with instant doubt resolution</p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-md">
              <h3 className="font-bold text-lg text-gray-900 mb-2">✅ Hands-On Projects</h3>
              <p className="text-gray-600">Build portfolio-worthy projects that impress employers</p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-md">
              <h3 className="font-bold text-lg text-gray-900 mb-2">✅ Expert Mentorship</h3>
              <p className="text-gray-600">Learn from industry professionals with years of experience</p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-md">
              <h3 className="font-bold text-lg text-gray-900 mb-2">✅ Career Support</h3>
              <p className="text-gray-600">Internship opportunities and job placement assistance</p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">
            Ready to Start Learning?
          </h2>
          <p className="text-xl text-gray-600 mb-8">
            Join hundreds of students transforming their careers with TRISHUVAAN
          </p>
          <Link
            to="/contact"
            className="inline-block px-8 py-4 bg-gradient-to-r from-cyan-600 to-blue-600 text-white rounded-full font-semibold text-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
          >
            💳 Enroll in {course.title}
          </Link>
        </div>
      </section>
    </div>
  );
}
