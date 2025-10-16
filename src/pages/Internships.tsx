import { Link } from 'react-router-dom';
import { Clock, Target, Wrench, Award } from 'lucide-react';
import { internships } from '../data/internships';

export default function Internships() {
  return (
    <section className="min-h-screen bg-gradient-to-br from-cyan-50 to-blue-50 py-16 px-6 md:px-12">
      {/* Header */}
      <div className="text-center mb-12">
        <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-4">
          Apply Your Knowledge. Build Your Future.
        </h1>
        <p className="text-lg md:text-xl text-gray-700">
          Gain real-world experience with our structured internship programs.
        </p>
      </div>

      {/* Internship Cards */}
      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3 max-w-7xl mx-auto">
        {internships.map((internship) => (
          <div
            key={internship.id}
            className="bg-white rounded-2xl shadow-md overflow-hidden hover:shadow-xl transition transform hover:-translate-y-1"
          >
            {/* Internship Image */}
            <img
              src={
                internship.image ||
                `/images/internships/${internship.id}.jpg`
              }
              alt={internship.title}
              className="w-full h-48 object-cover"
            />

            {/* Internship Info */}
            <div className="p-6">
              <h3 className="text-2xl font-bold text-gray-900 mb-2">
                {internship.title}
              </h3>

              <div className="flex items-center gap-2 text-gray-600 mb-2">
                <Clock className="w-4 h-4 text-cyan-600" />
                <span>{internship.duration}</span>
              </div>

              <div className="flex items-center gap-2 text-gray-600 mb-2">
                <Target className="w-4 h-4 text-cyan-600" />
                <span>{internship.focus}</span>
              </div>

              <div className="flex items-start gap-2 text-gray-600 mb-4">
                <Wrench className="w-4 h-4 text-cyan-600 mt-1" />
                <div className="flex flex-wrap gap-2">
                  {internship.tools.map((tool, index) => (
                    <span
                      key={index}
                      className="px-3 py-1 bg-cyan-100 text-cyan-700 text-sm rounded-full"
                    >
                      {tool}
                    </span>
                  ))}
                </div>
              </div>

              <Link
                to="/contact"
                className="inline-block w-full text-center bg-cyan-600 text-white py-2 rounded-lg font-medium hover:bg-cyan-500 transition"
              >
                Apply Now
              </Link>
            </div>
          </div>
        ))}
      </div>

      {/* Gain Section */}
      <div className="max-w-5xl mx-auto text-center mt-20">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
          What You’ll Gain
        </h2>
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {[
            {
              icon: <Award className="w-10 h-10 text-cyan-600 mb-3 mx-auto" />,
              title: 'Certification',
              desc: 'Receive an industry-recognized internship certificate.'
            },
            {
              icon: <Wrench className="w-10 h-10 text-cyan-600 mb-3 mx-auto" />,
              title: 'Practical Projects',
              desc: 'Work on real-world projects guided by mentors.'
            },
            {
              icon: <Target className="w-10 h-10 text-cyan-600 mb-3 mx-auto" />,
              title: 'Career Readiness',
              desc: 'Gain skills that prepare you for high-demand roles.'
            },
            {
              icon: <Clock className="w-10 h-10 text-cyan-600 mb-3 mx-auto" />,
              title: 'Flexible Schedule',
              desc: 'Learn at your own pace with flexible hours.'
            }
          ].map((item, idx) => (
            <div
              key={idx}
              className="bg-white rounded-xl shadow-md p-6 hover:shadow-lg transition"
            >
              {item.icon}
              <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
              <p className="text-gray-600">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
