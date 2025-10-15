import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { Course } from '../types';

interface CourseCardProps {
  course: Course;
  onEnroll: (course: Course) => void;
}

export default function CourseCard({ course, onEnroll }: CourseCardProps) {
  return (
    <div className="bg-white rounded-xl shadow-md hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 overflow-hidden border border-gray-100">

      {/* Course Image */}
      {course.image && (
        <div className="h-48 w-full overflow-hidden">
          <img
            src={course.image}
            alt={course.title}
            className="w-full h-full object-cover"
          />
        </div>
      )}

      <div className="bg-gradient-to-br from-cyan-50 to-blue-50 p-6 border-b border-gray-100">
        <h3 className="text-xl font-bold text-gray-900 mb-2">{course.title}</h3>
        <div className="flex flex-wrap gap-2 mb-3">
          {course.highlights.slice(0, 3).map((highlight, index) => (
            <span
              key={index}
              className="text-xs px-3 py-1 bg-white rounded-full text-cyan-700 border border-cyan-200"
            >
              {highlight}
            </span>
          ))}
        </div>
      </div>

      <div className="p-6">
        <div className="flex items-baseline justify-between mb-4">
          <div>
            <span className="text-3xl font-bold text-cyan-600">₹{course.price}</span>
            <span className="text-gray-500 text-sm ml-2">+ GST</span>
          </div>
        </div>

        <div className="space-y-2 mb-4 text-sm text-gray-600">
          <div className="flex justify-between">
            <span className="font-medium">English Batch:</span>
            <span>{course.dateEN}</span>
          </div>
          <div className="flex justify-between">
            <span className="font-medium">Telugu Batch:</span>
            <span>{course.dateTE}</span>
          </div>
          {course.duration && (
            <div className="flex justify-between">
              <span className="font-medium">Duration:</span>
              <span>{course.duration}</span>
            </div>
          )}
        </div>

        <div className="flex gap-3">
          <Link
            to={`/course/${course.slug}`}
            className="flex-1 px-4 py-2 border-2 border-cyan-600 text-cyan-600 rounded-lg font-medium hover:bg-cyan-50 transition-colors text-center flex items-center justify-center gap-2"
          >
            View Details
            <ArrowRight className="w-4 h-4" />
          </Link>
          <button
            onClick={() => onEnroll(course)}
            className="flex-1 px-4 py-2 bg-gradient-to-r from-cyan-600 to-blue-600 text-white rounded-lg font-medium hover:shadow-lg transition-all duration-300 transform hover:scale-105"
          >
            Enroll Now
          </button>
        </div>
      </div>
    </div>
  );
}
