import React from 'react'
import { Mic, FileText, Brain, Users, Clock, Award } from 'lucide-react'

const Features = () => {
  const features = [
    {
      icon: <Mic className="h-8 w-8" />,
      title: "Speaking Practice",
      description: "Interactive speaking sessions with native speakers and AI-powered pronunciation analysis to improve your fluency and accuracy.",
      color: "bg-red-100 text-red-600"
    },
    {
      icon: <FileText className="h-8 w-8" />,
      title: "Mock Tests",
      description: "Comprehensive practice tests that simulate real IELTS conditions with detailed feedback and performance analytics.",
      color: "bg-blue-100 text-blue-600"
    },
    {
      icon: <Brain className="h-8 w-8" />,
      title: "AI Band Score",
      description: "Advanced AI technology predicts your band score and provides personalized recommendations for improvement.",
      color: "bg-purple-100 text-purple-600"
    },
    {
      icon: <Users className="h-8 w-8" />,
      title: "Expert Instructors",
      description: "Learn from certified IELTS trainers with years of experience and proven track records of student success.",
      color: "bg-green-100 text-green-600"
    }
  ]

  const stats = [
    { icon: <Clock className="h-6 w-6" />, value: "24/7", label: "Access" },
    { icon: <Award className="h-6 w-6" />, value: "1000+", label: "Practice Tests" },
    { icon: <Users className="h-6 w-6" />, value: "50+", label: "Expert Teachers" },
    { icon: <Brain className="h-6 w-6" />, value: "AI-Powered", label: "Feedback" }
  ]

  return (
    <section id="features" className="section-padding bg-white">
      <div className="container-custom">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Why Choose Our IELTS Program?
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Our comprehensive approach combines cutting-edge technology with expert instruction 
            to help you achieve your target band score.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {features.map((feature, index) => (
            <div key={index} className="card group hover:scale-105 transition-transform duration-300">
              <div className={`${feature.color} p-3 rounded-lg w-fit mb-4 group-hover:scale-110 transition-transform duration-300`}>
                {feature.icon}
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                {feature.title}
              </h3>
              <p className="text-gray-600 leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>

        {/* Stats Section */}
        <div className="bg-gradient-to-r from-primary-600 to-secondary-600 rounded-2xl p-8 md:p-12">
          <div className="text-center mb-8">
            <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">
              Trusted by Students Worldwide
            </h3>
            <p className="text-primary-100 text-lg">
              Join thousands of successful IELTS candidates
            </p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="flex justify-center mb-3">
                  <div className="bg-white bg-opacity-20 p-3 rounded-lg">
                    {stat.icon}
                  </div>
                </div>
                <div className="text-3xl font-bold text-white mb-1">
                  {stat.value}
                </div>
                <div className="text-primary-100">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center mt-16">
          <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
            Ready to Start Your IELTS Journey?
          </h3>
          <p className="text-lg text-gray-600 mb-8">
            Join our community of successful students and achieve your target band score.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="btn-primary">
              Start Free Trial
            </button>
            <button className="btn-secondary">
              Download Study Plan
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Features
