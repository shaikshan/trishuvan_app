import { Calendar, Clock, Award, BookOpen } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Bootcamp() {
  const curriculum = [
    '1️⃣ Python Foundations',
    '2️⃣ Statistics & Probability',
    '3️⃣ Machine Learning Algorithms',
    '4️⃣ Deep Learning & Neural Networks',
    '5️⃣ NLP & Transformers',
    '6️⃣ Generative AI (LLMs, LangChain)',
    '7️⃣ Agentic AI Projects'
  ];

  return (
    <div>
      <section className="py-20 bg-gradient-to-br from-white via-cyan-50 to-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
              Master Data Science & AI
            </h1>
            <p className="text-2xl text-gray-700 mb-8">
              End-to-End Deployment Bootcamp
            </p>

            <div className="inline-flex flex-wrap items-center justify-center gap-6 mb-8">
              <div className="flex items-center gap-2 bg-white px-6 py-3 rounded-full shadow-md">
                <Calendar className="w-5 h-5 text-cyan-600" />
                <span className="font-semibold">Mon–Fri (8–9 PM)</span>
              </div>
              <div className="flex items-center gap-2 bg-white px-6 py-3 rounded-full shadow-md">
                <Clock className="w-5 h-5 text-cyan-600" />
                <span className="font-semibold">3+ Months</span>
              </div>
              <div className="flex items-center gap-2 bg-white px-6 py-3 rounded-full shadow-md">
                <Award className="w-5 h-5 text-cyan-600" />
                <span className="font-semibold">Certificate Provided</span>
              </div>
            </div>

            <div className="text-4xl font-bold text-cyan-600 mb-8">
              ₹9,999 + 18% GST
            </div>

            <div className="bg-white inline-block px-8 py-4 rounded-lg shadow-lg mb-8">
              <div className="text-sm text-gray-600 mb-1">Starts</div>
              <div className="text-2xl font-bold text-gray-900">10 November 2025</div>
            </div>

            <div className="flex flex-wrap justify-center gap-4">
              <Link
                to="/contact"
                className="px-8 py-4 bg-gradient-to-r from-cyan-600 to-blue-600 text-white rounded-full font-semibold text-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
              >
                💳 Enroll Now
              </Link>
              <button className="px-8 py-4 border-2 border-cyan-600 text-cyan-600 rounded-full font-semibold text-lg hover:bg-cyan-50 transition-all duration-300">
                📘 Download Brochure
              </button>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-center gap-3 mb-12">
            <BookOpen className="w-8 h-8 text-cyan-600" />
            <h2 className="text-4xl font-bold text-gray-900">Comprehensive Curriculum</h2>
          </div>

          <div className="grid md:grid-cols-2 gap-6 mb-12">
            {curriculum.map((item, index) => (
              <div
                key={index}
                className="bg-gradient-to-br from-cyan-50 to-blue-50 p-6 rounded-xl border border-cyan-100 hover:shadow-lg transition-shadow"
              >
                <p className="text-lg font-semibold text-gray-900">{item}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-gradient-to-br from-cyan-50 to-blue-50">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-center text-gray-900 mb-12">What You'll Build</h2>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white p-8 rounded-xl shadow-lg">
              <div className="text-3xl mb-4">🤖</div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">AI-Powered Applications</h3>
              <p className="text-gray-600">
                Build end-to-end AI applications from data collection to deployment, including
                chatbots, recommendation systems, and predictive models.
              </p>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-lg">
              <div className="text-3xl mb-4">📊</div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Data Pipelines</h3>
              <p className="text-gray-600">
                Design and implement robust data pipelines for ETL processes, data warehousing,
                and real-time analytics.
              </p>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-lg">
              <div className="text-3xl mb-4">🧠</div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Deep Learning Models</h3>
              <p className="text-gray-600">
                Train neural networks for computer vision, NLP, and time series forecasting
                using modern frameworks.
              </p>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-lg">
              <div className="text-3xl mb-4">🚀</div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Production Deployments</h3>
              <p className="text-gray-600">
                Deploy ML models to cloud platforms with proper monitoring, versioning, and
                scalability considerations.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold text-gray-900 mb-8">Why Choose This Bootcamp?</h2>

          <div className="space-y-6 text-left">
            <div className="flex gap-4 items-start">
              <div className="flex-shrink-0 w-8 h-8 bg-gradient-to-r from-cyan-600 to-blue-600 rounded-full flex items-center justify-center text-white font-bold">
                ✓
              </div>
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Industry-Relevant Skills</h3>
                <p className="text-gray-600">Learn tools and techniques currently used by leading tech companies</p>
              </div>
            </div>

            <div className="flex gap-4 items-start">
              <div className="flex-shrink-0 w-8 h-8 bg-gradient-to-r from-cyan-600 to-blue-600 rounded-full flex items-center justify-center text-white font-bold">
                ✓
              </div>
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Expert Mentorship</h3>
                <p className="text-gray-600">Learn from industry professionals with years of practical experience</p>
              </div>
            </div>

            <div className="flex gap-4 items-start">
              <div className="flex-shrink-0 w-8 h-8 bg-gradient-to-r from-cyan-600 to-blue-600 rounded-full flex items-center justify-center text-white font-bold">
                ✓
              </div>
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Job-Ready Portfolio</h3>
                <p className="text-gray-600">Graduate with 5+ production-grade projects showcasing your skills</p>
              </div>
            </div>

            <div className="flex gap-4 items-start">
              <div className="flex-shrink-0 w-8 h-8 bg-gradient-to-r from-cyan-600 to-blue-600 rounded-full flex items-center justify-center text-white font-bold">
                ✓
              </div>
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Career Support</h3>
                <p className="text-gray-600">Resume building, interview preparation, and job referrals</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
