import React from 'react'
import { ArrowRight, Star, Users, Award } from 'lucide-react'

const Hero = () => {
  return (
    <section id="home" className="bg-gradient-to-br from-primary-50 to-secondary-50 section-padding">
      <div className="container-custom">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-8">
            <div className="space-y-4">
              <div className="flex items-center space-x-2 text-primary-600">
                <Star className="h-5 w-5 fill-current" />
                <span className="font-semibold">Trusted by 10,000+ Students</span>
              </div>
              
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
                Master IELTS with
                <span className="text-primary-600"> Expert Guidance</span>
              </h1>
              
              <p className="text-xl text-gray-600 leading-relaxed">
                Join thousands of successful students who achieved their dream band scores 
                with our comprehensive IELTS preparation program. Expert instructors, 
                AI-powered practice, and proven strategies.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <button className="btn-primary flex items-center justify-center space-x-2">
                <span>Start Free Trial</span>
                <ArrowRight className="h-5 w-5" />
              </button>
              <button className="btn-secondary">
                Watch Demo
              </button>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-8 pt-8">
              <div className="text-center">
                <div className="flex items-center justify-center mb-2">
                  <Users className="h-8 w-8 text-primary-600" />
                </div>
                <div className="text-2xl font-bold text-gray-900">10,000+</div>
                <div className="text-sm text-gray-600">Students</div>
              </div>
              <div className="text-center">
                <div className="flex items-center justify-center mb-2">
                  <Award className="h-8 w-8 text-primary-600" />
                </div>
                <div className="text-2xl font-bold text-gray-900">95%</div>
                <div className="text-sm text-gray-600">Success Rate</div>
              </div>
              <div className="text-center">
                <div className="flex items-center justify-center mb-2">
                  <Star className="h-8 w-8 text-primary-600" />
                </div>
                <div className="text-2xl font-bold text-gray-900">4.9/5</div>
                <div className="text-sm text-gray-600">Rating</div>
              </div>
            </div>
          </div>

          {/* Right Content - Hero Image */}
          <div className="relative">
            <div className="relative z-10">
              <img
                src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80"
                alt="Students studying for IELTS"
                className="rounded-2xl shadow-2xl w-full h-auto"
              />
            </div>
            
            {/* Floating Cards */}
            <div className="absolute -top-6 -left-6 bg-white rounded-xl shadow-lg p-4 z-20">
              <div className="flex items-center space-x-3">
                <div className="bg-green-100 p-2 rounded-lg">
                  <Award className="h-6 w-6 text-green-600" />
                </div>
                <div>
                  <div className="font-semibold text-gray-900">Band 8+</div>
                  <div className="text-sm text-gray-600">Average Score</div>
                </div>
              </div>
            </div>

            <div className="absolute -bottom-6 -right-6 bg-white rounded-xl shadow-lg p-4 z-20">
              <div className="flex items-center space-x-3">
                <div className="bg-blue-100 p-2 rounded-lg">
                  <Users className="h-6 w-6 text-blue-600" />
                </div>
                <div>
                  <div className="font-semibold text-gray-900">Live Classes</div>
                  <div className="text-sm text-gray-600">Daily Sessions</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero
