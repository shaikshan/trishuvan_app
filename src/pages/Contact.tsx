import { useState } from 'react';
import { Mail, Phone, MapPin, Send } from 'lucide-react';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    mobile: '',
    course: '',
    language: 'English'
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert('Enrollment form submitted! We will contact you shortly.');
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <div>
      <section className="py-20 bg-gradient-to-br from-white via-cyan-50 to-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
              Join TRISHUVAAN Today
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Start Your AI Journey
            </p>
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Get in Touch</h2>
              <p className="text-gray-600 mb-8 leading-relaxed">
                Ready to transform your career with AI? Fill out the form and our team will reach out to you shortly.
              </p>

              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-r from-cyan-600 to-blue-600 rounded-full flex items-center justify-center">
                    <Mail className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-1">Email</h3>
                    <p className="text-gray-600">contact@trishuvaan.com</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-r from-cyan-600 to-blue-600 rounded-full flex items-center justify-center">
                    <Phone className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-1">Phone</h3>
                    <p className="text-gray-600">+91 XXXXX XXXXX</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-r from-cyan-600 to-blue-600 rounded-full flex items-center justify-center">
                    <MapPin className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-1">Location</h3>
                    <p className="text-gray-600">Hyderabad, India</p>
                  </div>
                </div>
              </div>

              <div className="mt-12 p-6 bg-gradient-to-br from-cyan-50 to-blue-50 rounded-xl border border-cyan-100">
                <h3 className="font-bold text-lg text-gray-900 mb-3">Why Enroll?</h3>
                <ul className="space-y-2 text-gray-700">
                  <li className="flex items-center gap-2">
                    <span className="text-cyan-600">✓</span>
                    100% Live Interactive Classes
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="text-cyan-600">✓</span>
                    Bilingual Support (English & Telugu)
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="text-cyan-600">✓</span>
                    Real-World Project Experience
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="text-cyan-600">✓</span>
                    Internship & Career Assistance
                  </li>
                </ul>
              </div>
            </div>

            <div className="bg-gradient-to-br from-white to-cyan-50 p-8 rounded-2xl shadow-xl border border-cyan-100">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Enrollment Form</h3>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-semibold text-gray-700 mb-2">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-cyan-600 focus:border-transparent transition-all"
                    placeholder="Enter your full name"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-semibold text-gray-700 mb-2">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-cyan-600 focus:border-transparent transition-all"
                    placeholder="your.email@example.com"
                  />
                </div>

                <div>
                  <label htmlFor="mobile" className="block text-sm font-semibold text-gray-700 mb-2">
                    Mobile Number *
                  </label>
                  <input
                    type="tel"
                    id="mobile"
                    name="mobile"
                    value={formData.mobile}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-cyan-600 focus:border-transparent transition-all"
                    placeholder="+91 XXXXX XXXXX"
                  />
                </div>

                <div>
                  <label htmlFor="course" className="block text-sm font-semibold text-gray-700 mb-2">
                    Select Course *
                  </label>
                  <select
                    id="course"
                    name="course"
                    value={formData.course}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-cyan-600 focus:border-transparent transition-all"
                  >
                    <option value="">Choose a course</option>
                    <option value="ai-tool-kit">AI Tool Kit</option>
                    <option value="sql-mastery">SQL Mastery</option>
                    <option value="python-for-ai">Python for AI</option>
                    <option value="power-bi">Power BI</option>
                    <option value="machine-learning">Machine Learning</option>
                    <option value="gen-ai-agentic">Gen AI & Agentic AI</option>
                    <option value="bootcamp">Weekday Advanced Bootcamp</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-3">
                    Language Preference *
                  </label>
                  <div className="flex gap-4">
                    <label className="flex items-center gap-2 cursor-pointer">
                      <input
                        type="radio"
                        name="language"
                        value="English"
                        checked={formData.language === 'English'}
                        onChange={handleChange}
                        className="w-4 h-4 text-cyan-600 focus:ring-cyan-600"
                      />
                      <span className="text-gray-700">English</span>
                    </label>
                    <label className="flex items-center gap-2 cursor-pointer">
                      <input
                        type="radio"
                        name="language"
                        value="Telugu"
                        checked={formData.language === 'Telugu'}
                        onChange={handleChange}
                        className="w-4 h-4 text-cyan-600 focus:ring-cyan-600"
                      />
                      <span className="text-gray-700">Telugu</span>
                    </label>
                  </div>
                </div>

                <button
                  type="submit"
                  className="w-full px-6 py-4 bg-gradient-to-r from-cyan-600 to-blue-600 text-white rounded-lg font-semibold text-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 flex items-center justify-center gap-2"
                >
                  <Send className="w-5 h-5" />
                  Pay & Enroll Now
                </button>

                <p className="text-sm text-gray-500 text-center">
                  By enrolling, you agree to our terms and conditions
                </p>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
