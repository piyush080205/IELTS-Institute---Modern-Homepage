import React from 'react'
import { Star, Quote } from 'lucide-react'

const Testimonials = () => {
  const testimonials = [
    {
      name: "Sarah Johnson",
      role: "Student",
      bandScore: "8.5",
      image: "https://images.unsplash.com/photo-1494790108755-2616b612b786?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=150&q=80",
      content: "The AI-powered speaking practice was a game-changer for me. I improved from Band 6 to Band 8.5 in just 3 months. The personalized feedback helped me identify and fix my weaknesses quickly.",
      country: "Canada"
    },
    {
      name: "Ahmed Hassan",
      role: "Engineer",
      bandScore: "8.0",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=150&q=80",
      content: "The mock tests were incredibly realistic and the detailed analytics showed me exactly where I needed to improve. The expert instructors provided invaluable tips that I couldn't find anywhere else.",
      country: "UAE"
    },
    {
      name: "Maria Rodriguez",
      role: "Doctor",
      bandScore: "9.0",
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=150&q=80",
      content: "I achieved Band 9.0 thanks to the comprehensive study materials and the supportive community. The 24/7 access allowed me to study around my busy schedule as a doctor.",
      country: "Spain"
    }
  ]

  const renderStars = (rating) => {
    return Array.from({ length: 5 }, (_, i) => (
      <Star
        key={i}
        className={`h-5 w-5 ${
          i < rating ? 'text-yellow-400 fill-current' : 'text-gray-300'
        }`}
      />
    ))
  }

  return (
    <section id="testimonials" className="section-padding bg-gray-50">
      <div className="container-custom">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            What Our Students Say
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Don't just take our word for it. Here's what our successful students have to say 
            about their IELTS preparation journey with us.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="card relative">
              {/* Quote Icon */}
              <div className="absolute -top-4 -left-4 bg-primary-600 p-3 rounded-full">
                <Quote className="h-6 w-6 text-white" />
              </div>

              {/* Rating */}
              <div className="flex items-center mb-4">
                {renderStars(5)}
                <span className="ml-2 text-sm text-gray-600">5.0</span>
              </div>

              {/* Content */}
              <p className="text-gray-700 leading-relaxed mb-6">
                "{testimonial.content}"
              </p>

              {/* Band Score Badge */}
              <div className="bg-primary-100 text-primary-800 px-3 py-1 rounded-full text-sm font-semibold w-fit mb-4">
                Band {testimonial.bandScore}
              </div>

              {/* Author */}
              <div className="flex items-center space-x-3">
                <img
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="w-12 h-12 rounded-full object-cover"
                />
                <div>
                  <div className="font-semibold text-gray-900">
                    {testimonial.name}
                  </div>
                  <div className="text-sm text-gray-600">
                    {testimonial.role} • {testimonial.country}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Overall Rating Section */}
        <div className="bg-white rounded-2xl p-8 md:p-12 text-center shadow-lg">
          <div className="max-w-4xl mx-auto">
            <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
              Join 10,000+ Successful Students
            </h3>
            
            <div className="flex justify-center items-center space-x-2 mb-6">
              {renderStars(5)}
              <span className="text-2xl font-bold text-gray-900 ml-2">4.9/5</span>
            </div>
            
            <p className="text-lg text-gray-600 mb-8">
              Based on 2,500+ verified reviews from students who achieved their target band scores
            </p>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              <div className="text-center">
                <div className="text-3xl font-bold text-primary-600 mb-2">95%</div>
                <div className="text-gray-600">Success Rate</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-primary-600 mb-2">8.2</div>
                <div className="text-gray-600">Average Band Score</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-primary-600 mb-2">3</div>
                <div className="text-gray-600">Months Average</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-primary-600 mb-2">50+</div>
                <div className="text-gray-600">Countries</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Testimonials
