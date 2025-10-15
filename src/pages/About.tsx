import { Eye, CheckCircle, Award } from 'lucide-react';

export default function About() {
  return (
    <div>
      <section className="py-20 bg-gradient-to-br from-white via-cyan-50 to-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
              The Philosophy of TRISHUVAAN
            </h1>
            <p className="text-2xl text-gray-700 max-w-3xl mx-auto">
              Learn to Lead AI
            </p>
          </div>

          <div className="max-w-4xl mx-auto mb-16">
            <p className="text-xl text-gray-700 leading-relaxed mb-6">
              TRISHUVAAN bridges the gap between learning tools and leading real-world AI implementations.
              We teach practical design, reasoning, and leadership — not just code.
            </p>
            <p className="text-xl text-gray-700 leading-relaxed">
              Our mission is to empower professionals with the skills and confidence to build, deploy, and
              lead AI-driven solutions that make a real impact.
            </p>
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-center text-gray-900 mb-16">Our Core Values</h2>

          <div className="grid md:grid-cols-3 gap-12">
            <div className="text-center">
              <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-r from-cyan-600 to-blue-600 rounded-full mb-6">
                <Eye className="w-10 h-10 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Vision</h3>
              <p className="text-gray-600 text-lg leading-relaxed">
                Build leaders, not just coders. We focus on developing strategic thinking and
                problem-solving abilities that set you apart.
              </p>
            </div>

            <div className="text-center">
              <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-r from-cyan-600 to-blue-600 rounded-full mb-6">
                <CheckCircle className="w-10 h-10 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Verification</h3>
              <p className="text-gray-600 text-lg leading-relaxed">
                Every course is vetted by industry experts. We ensure that what you learn is
                current, relevant, and immediately applicable.
              </p>
            </div>

            <div className="text-center">
              <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-r from-cyan-600 to-blue-600 rounded-full mb-6">
                <Award className="w-10 h-10 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Skill</h3>
              <p className="text-gray-600 text-lg leading-relaxed">
                You finish with deployable AI projects. Every course culminates in real-world
                applications that showcase your capabilities.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-gradient-to-br from-cyan-50 to-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-center text-gray-900 mb-16">Our Approach</h2>

          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <div className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-shadow">
              <div className="text-4xl mb-4">🎯</div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">100% Live, No Recordings</h3>
              <p className="text-gray-600">
                Interactive sessions where you can ask questions, get instant feedback, and
                collaborate with peers in real-time.
              </p>
            </div>

            <div className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-shadow">
              <div className="text-4xl mb-4">🤖</div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">AI-First Curriculum</h3>
              <p className="text-gray-600">
                Every course is designed from the ground up with artificial intelligence and
                modern tools at the forefront.
              </p>
            </div>

            <div className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-shadow">
              <div className="text-4xl mb-4">💼</div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Career Mentorship</h3>
              <p className="text-gray-600">
                Built-in internships, job assistance, and portfolio guidance to accelerate
                your career transition.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
