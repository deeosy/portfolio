import React, { useState } from 'react'
import emailjs from '@emailjs/browser'
import { trackEvent } from '../utils/analytics';

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    title: '',
    message: ''
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitted, setSubmitted] = useState(false)

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData(prev => ({ ...prev, [name]: value }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    setIsSubmitting(true)

    const currentTime = new Date().toLocaleString()
    const dataToSend = {
      ...formData,
      time: currentTime,
    }

    emailjs.send(
      import.meta.env.VITE_EMAILJS_SERVICE_ID,
      import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
      dataToSend,
      import.meta.env.VITE_EMAILJS_PUBLIC_KEY
    ).then(() => {
      setIsSubmitting(false)
      setSubmitted(true)
      
      // Simulate form submission and reset animation
      setTimeout(() => {
        // console.log('Form submitted:', formData)
        // Reset form after showing success message
          setSubmitted(false)
          setFormData({
            name: '',
            email: '',
            phone: '',
            title: '',
            message: ''
          })
        }, 3000)

        // Track form submission event
        trackEvent('Contact', 'Form Submission', `${formData.title} || Portfolio Contact Form`);
    }).catch((error) => {
      console.error("EmailJS Error:", error);
      setIsSubmitting(false);
      alert("Something went wrong. Please try again.")
    })
  }

  return (
    <div className="max-w-2xl h-full overflow-y-scroll mx-auto px-8 no-scrollbar">
      <h2 className="text-4xl sm:text-5xl md:text-7xl font-bold mb-8 text-center">Get in Touch</h2>
      
      {submitted ? (
        // <div className="bg-green-800 bg-opacity-50 backdrop-blur-sm p-6 rounded-lg text-center">
        //   <h3 className="text-2xl font-bold mb-2">Thank you!</h3>
        //   <p className="text-lg">Your message has been sent successfully. We'll get back to you soon.</p>
        // </div>
        <div className="fixed inset-0 bg-black/60 backdrop-blur-sm flex items-center justify-center z-[999]">
          <div className="bg-white/10 border border-white/20 rounded-xl p-6 w-[90%] max-w-md backdrop-blur-lg shadow-2xl">
            <h3 className="text-2xl font-bold mb-4">Thank you!</h3>
            <p className="text-lg">Your message has been sent successfully. We'll get back to you soon.</p>
          </div>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-2">
              <label htmlFor="name" className="block text-sm font-medium text-gray-200">
                Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 bg-white bg-opacity-10 rounded-lg border border-gray-600 focus:border-white focus:ring-2 focus:ring-white focus:ring-opacity-30 text-black placeholder-gray-400 transition-all backdrop-blur-sm"
                placeholder="Your name"
              />
            </div>
            <div className="space-y-2">
              <label htmlFor="email" className="block text-sm font-medium text-gray-200">
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 bg-white bg-opacity-10 rounded-lg border border-gray-600 focus:border-white focus:ring-2 focus:ring-white focus:ring-opacity-30 text-black placeholder-gray-400 transition-all backdrop-blur-sm"
                placeholder="your@email.com"
              />
            </div>
          </div>
          
          <div className="space-y-2">
            <label htmlFor="phone" className="block text-sm font-medium text-gray-200">
              Phone Number
            </label>
            <input
              type="tel"
              id="phone"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              className="w-full px-4 py-3 bg-white bg-opacity-10 rounded-lg border border-gray-600 focus:border-white focus:ring-2 focus:ring-white focus:ring-opacity-30 text-black placeholder-gray-400 transition-all backdrop-blur-sm"
              placeholder="Your phone number (optional)"
            />
          </div>
          
          <div className="space-y-2">
            <label htmlFor="title" className="block text-sm font-medium text-gray-200">
              Email Title
            </label>
            <input
              type="text"
              id="title"
              name="title"
              value={formData.title}
              onChange={handleChange}
              required
              className="w-full px-4 py-3 bg-white bg-opacity-10 rounded-lg border border-gray-600 focus:border-white focus:ring-2 focus:ring-white focus:ring-opacity-30 text-black placeholder-gray-400 transition-all backdrop-blur-sm"
              placeholder="Subject of your message"
            />
          </div>
          
          <div className="space-y-2">
            <label htmlFor="message" className="block text-sm font-medium text-gray-200">
              Message
            </label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              rows="5"
              required
              className="w-full px-4 py-3 bg-white bg-opacity-10 rounded-lg border border-gray-600 focus:border-white focus:ring-2 focus:ring-white focus:ring-opacity-30 text-black placeholder-gray-400 transition-all backdrop-blur-sm resize-none"
              placeholder="Your message..."
            />
          </div>
          
          <div className="pt-2">
            <button
              type="submit"
              disabled={isSubmitting}
              className={`w-full rounded-lg font-medium text-white transition-all ${
                isSubmitting 
                  ? 'bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500 animate-pulse cursor-not-allowed opacity-70' 
                  : 'bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500 transform animate-pulse cursor-pointer hover:-translate-y-1'
              }`}
            >
              {isSubmitting ? (
                <div className="flex items-center justify-center border border-white/20 bg-white/40 w-full py-4 px-6 rounded-lg">
                  <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                  </svg>
                  Sending...
                </div>
              ) : (
                <div className='border border-white/20 bg-white/40 w-full py-4 px-6 rounded-lg'>
                  Send Message
                </div>
              )}
            </button>
          </div>
        </form>
      )}
    </div>
  )
}