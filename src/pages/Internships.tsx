import { Link } from 'react-router-dom';
import { Clock, Target, Wrench, Award } from 'lucide-react';
import { internships } from '../data/internships';

export default function Internships() {
  return (
    <div>
      <section className="py-20 bg-gradient-to-br from-white via-cyan-50 to-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
              Apply Your Knowledge. Build Your Future.
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Gain real-world experience with our structured internship programs
            </p>
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-8 mb-16">
            {internships.map((internship) => (
              <div
                key={internship.id}
                className="bg-gradient-to-br from-white to-cyan-50 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 border border-cyan-100 overflow-hidden"
              >
                <div className="bg-gradient-to-r from-cyan-600 to-blue-600 p-6 text-white">
                  <h3 className="text-2xl font-bold mb-2">{internship.title}</h3>
                  <div className="flex items-center gap-2 text-cyan-100">
                    <Clock className="w-4 h-4" />
                    <span className="text-sm">{internship.duration}</span>
                  </div>
                </div>

                <div className="p-6">
                  <div className="mb-4">
                    <div className="flex items-center gap-2 text-gray-700 mb-2">
                      <Target className="w-5 h-5 text-cyan-600" />
                      <span className="font-semibold">Focus:</span>
                    </div>
                    <p className="text-gray-600 pl-7">{internship.focus}</p>
                  </div>

                  <div className="mb-6">
                    <div className="flex items-center gap-2 text-gray-700 mb-3">
                      <Wrench className="w-5 h-5 text-cyan-600" />
                      <span className="font-semibold">Tools & Technologies:</span>
                    </div>
                    <div className="flex flex-wrap gap-2 pl-7">
                      {internship.tools.map((tool, index) => (
                        <span
                          key={index}
                          className="px-3 py-1 bg-white border border-cyan-200 text-cyan-700 rounded-full text-sm"
                        >
                          {tool}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-gradient-to-br from-cyan-50 to-blue-50">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-center text-gray-900 mb-12">
            You'll Gain
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-white p-6 rounded-xl shadow-lg text-center">
              <div className="text-4xl mb-4">📅</div>
              <h3 className="font-bold text-lg text-gray-900 mb-2">Weekly Mentor Sessions</h3>
              <p className="text-gray-600 text-sm">
                Regular guidance from industry experts
              </p>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-lg text-center">
              <div className="text-4xl mb-4">📝</div>
              <h3 className="font-bold text-lg text-gray-900 mb-2">Resume Review</h3>
              <p className="text-gray-600 text-sm">
                Professional feedback on your CV
              </p>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-lg text-center">
              <div className="text-4xl mb-4">💻</div>
              <h3 className="font-bold text-lg text-gray-900 mb-2">GitHub Portfolio</h3>
              <p className="text-gray-600 text-sm">
                Build an impressive project portfolio
              </p>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-lg text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-cyan-600 to-blue-600 rounded-full mb-4">
                <Award className="w-8 h-8 text-white" />
              </div>
              <h3 className="font-bold text-lg text-gray-900 mb-2">Certificate</h3>
              <p className="text-gray-600 text-sm">
                Official internship completion certificate
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">
            Ready to Launch Your Career?
          </h2>
          <p className="text-xl text-gray-600 mb-8">
            Apply now and take the first step towards professional excellence
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-cyan-600 to-blue-600 text-white rounded-full font-semibold text-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
          >
            📩 Apply Now
          </Link>
        </div>
      </section>
    </div>
  );
}
