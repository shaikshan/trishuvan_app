import { Code2, Sparkles } from 'lucide-react';
import { projects } from '../data/projects';

export default function LiveProjects() {
  return (
    <div>
      <section className="py-20 bg-gradient-to-br from-white via-cyan-50 to-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
              Hands-On Projects That Get You Hired
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Build real-world applications and showcase your skills to employers
            </p>
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-8">
            {projects.map((project) => (
              <div
                key={project.id}
                className="bg-gradient-to-br from-white to-cyan-50 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 border border-cyan-100 overflow-hidden group"
              >
                <div className="p-8">
                  <div className="flex items-start justify-between mb-4">
                    <div className="flex-1">
                      <h3 className="text-2xl font-bold text-gray-900 mb-3 group-hover:text-cyan-600 transition-colors">
                        {project.title}
                      </h3>
                      <p className="text-gray-600 leading-relaxed mb-6">
                        {project.description}
                      </p>
                    </div>
                    <div className="flex-shrink-0 ml-4">
                      <div className="w-12 h-12 bg-gradient-to-r from-cyan-600 to-blue-600 rounded-full flex items-center justify-center">
                        <Code2 className="w-6 h-6 text-white" />
                      </div>
                    </div>
                  </div>

                  <div>
                    <div className="flex items-center gap-2 text-gray-700 mb-3">
                      <Sparkles className="w-4 h-4 text-cyan-600" />
                      <span className="font-semibold text-sm">Technologies:</span>
                    </div>
                    <div className="flex flex-wrap gap-2">
                      {project.technologies.map((tech, index) => (
                        <span
                          key={index}
                          className="px-3 py-1 bg-white border border-cyan-200 text-cyan-700 rounded-full text-sm font-medium"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="bg-gradient-to-r from-cyan-600 to-blue-600 px-8 py-4">
                  <p className="text-white text-sm font-medium">
                    ✨ Build this project during your course
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-gradient-to-br from-cyan-50 to-blue-50">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-center text-gray-900 mb-12">
            Why Projects Matter
          </h2>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-xl shadow-lg text-center">
              <div className="text-4xl mb-4">💼</div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Portfolio Building</h3>
              <p className="text-gray-600">
                Demonstrate your capabilities with tangible, working applications
              </p>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-lg text-center">
              <div className="text-4xl mb-4">🎯</div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Real-World Skills</h3>
              <p className="text-gray-600">
                Learn to solve actual problems that businesses face daily
              </p>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-lg text-center">
              <div className="text-4xl mb-4">🚀</div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Career Acceleration</h3>
              <p className="text-gray-600">
                Stand out in interviews with proof of your technical expertise
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gradient-to-br from-cyan-600 to-blue-600 rounded-2xl p-12 text-center text-white shadow-xl">
            <h2 className="text-3xl font-bold mb-4">
              Ready to Build Your Portfolio?
            </h2>
            <p className="text-xl mb-8 text-cyan-100">
              Join our courses and start creating impressive projects today
            </p>
            <a
              href="/courses/weekend"
              className="inline-block px-8 py-4 bg-white text-cyan-600 rounded-full font-semibold text-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
            >
              📩 View All Projects
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
