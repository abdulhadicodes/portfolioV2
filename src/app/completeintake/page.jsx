'use client'
import Footer from "../../components/Footer.jsx";
import Header from "../../components/Header.jsx";
import work from '../../../public/intake.jpg'
import Link from 'next/link'

import React, { useState } from 'react'
import { motion } from 'framer-motion'

export default function IntakeForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    services: [],
    budget: '',
    timeline: '',
    description: ''
  })

  const [errors, setErrors] = useState({})
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [isLoading, setIsLoading] = useState(false)

  function handleChange(event) {
    const { name, value } = event.target
    setFormData(prevState => ({ ...prevState, [name]: value }))
  }

  function handleCheckboxChange(service) {
    setFormData(prevState => ({
      ...prevState,
      services: prevState.services.includes(service)
        ? prevState.services.filter(s => s !== service)
        : [...prevState.services, service]
    }))
  }

  async function handleSubmit(event) {
    event.preventDefault()
    setIsLoading(true)

    let newErrors = {}
    if (!formData.name.trim()) newErrors.name = "Full Name is required."
    if (!formData.email.trim()) newErrors.email = "Email is required."
    if (!formData.phone.trim()) newErrors.phone = "Phone number is required."
    if (!formData.services.length) newErrors.services = "Select at least one service."
    if (!formData.description.trim()) newErrors.description = "Project description is required."

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors)
      setIsLoading(false)
      return
    }

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json"
        },
        body: JSON.stringify({
          ...formData,
          access_key: "17a86a6a-740c-4db6-ba02-75508e33e749"
        })
      })

      const result = await response.json()
      if (result.success) {
        setIsSubmitted(true)
      } else {
        console.error('Form submission failed:', result.message)
      }
    } catch (error) {
      console.error('Error submitting form:', error)
    } finally {
      setIsLoading(false)
    }
  }

  function handleBack() {
    setIsSubmitted(false)
    setFormData({
      name: '',
      email: '',
      phone: '',
      company: '',
      services: [],
      budget: '',
      timeline: '',
      description: ''
    })
  }


  const services = [
    'Web Development',
    'E-commerce Solutions',
    'SEO Services',
    'Content Management Systems',
    'Mobile App Development',
    'Website Maintenance',
    'UI/UX Design'
  ]

  if (isSubmitted) {
    return (
      <>
      <div className="min-h-screen bg-[#04140b] py-12 px-4 sm:px-6 lg:px-8 flex items-center justify-center ">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="max-w-md w-full bg-[#0a2816] p-8 rounded-lg shadow-lg text-center"
        >
          <h2 className="text-2xl font-bold text-white mb-4">Thank You!</h2>
          <p className="text-lg text-white mb-6">We will get back to you soon.</p>
          <button
            onClick={handleBack}
            className="w-full py-2 px-4 bg-[#00ff66] text-black font-bold rounded-md hover:bg-[#00cc52] transition-colors duration-300"
          >
            Back to Form
          </button>
        </motion.div>
      </div>
      <Footer/>

      </>
    )
  }

  return (
    <>
    <Header/>
    <header className="relative h-[95vh] flex items-center overflow-hidden -mt-6">
       {/* Fixed Background Image */}
       <div
         className="absolute inset-0 bg-cover bg-center bg-no-repeat"
         style={{
           backgroundImage: `url(${work.src})`, // Dynamically reference the imported image
           backgroundAttachment: 'fixed' // Enable fixed positioning
         }}
       ></div>

       {/* Dark Overlay */}
       <div className="absolute inset-0 bg-black bg-opacity-70" />

       {/* Content */}
       <div className="container relative z-10 mx-auto flex justify-center text-center align-middle">
         <div className="text-white ">
           <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold leading-tight mb-4">
           Project Intake Form
           </h1>
           <p className="text-xl sm:text-2xl mb-5">Share Your Requirements for a Tailored Solution.</p>
           <Link href='#' className="px-6 py-3 text-[#00ff66] bg-transparent border-2 border-[#00ff66]
           text-lg font-medium transition-all duration-300
           hover:bg-[#00ff66] hover:text-black hover:shadow-[0_0_20px_rgba(0,255,102,0.4)]
           focus:outline-none focus:ring-2 focus:ring-[#00ff66] focus:ring-offset-2 focus:ring-offset-black">
         View Work
       </Link>
         </div>
       </div>
     </header>
    <div className="min-h-screen bg-[#04140b] py-12 px-4 sm:px-6 lg:px-8">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="max-w-4xl mx-auto bg-[#0a2816] p-8 rounded-lg shadow-lg mt-20"
      >
        <form onSubmit={handleSubmit} className="space-y-8">
        <h1 className='text-white text-center text-4xl p-4 font-bold'>Project Intake Form:</h1>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-2">
              <label htmlFor="name" className="block text-sm font-medium text-white">Full Name *</label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className={`w-full p-2 bg-[#103d17] text-white rounded-md border-2 ${errors.name ? 'border-red-500' : 'border-[#1a5c2e]'}`}
                placeholder="John Doe"
              />
              {errors.name && <p className="text-red-500 text-sm">{errors.name}</p>}
            </div>

            <div className="space-y-2">
              <label htmlFor="email" className="block text-sm font-medium text-white">Email Address *</label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className={`w-full p-2 bg-[#103d17] text-white rounded-md border-2 ${errors.email ? 'border-red-500' : 'border-[#1a5c2e]'}`}
                placeholder="john@example.com"
              />
              {errors.email && <p className="text-red-500 text-sm">{errors.email}</p>}
            </div>
          </div>

          <div className="space-y-2">
            <label htmlFor="phone" className="block text-sm font-medium text-white">Phone Number *</label>
            <input
              type="tel"
              id="phone"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              className={`w-full p-2 bg-[#103d17] text-white rounded-md border-2 ${errors.phone ? 'border-red-500' : 'border-[#1a5c2e]'}`}
              placeholder="(123) 456-7890"
            />
            {errors.phone && <p className="text-red-500 text-sm">{errors.phone}</p>}
          </div>

          <div className="space-y-2">
            <label htmlFor="company" className="block text-sm font-medium text-white">Company Name</label>
            <input
              type="text"
              id="company"
              name="company"
              value={formData.company}
              onChange={handleChange}
              className="w-full p-2 bg-[#103d17] text-white rounded-md border-2 border-[#1a5c2e]"
              placeholder="Your Company"
            />
          </div>

          <div className="space-y-3">
            <label className="block text-sm font-medium text-white">What services are you interested in? *</label>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
              {services.map((service) => (
                <motion.div
                  key={service}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className={`p-4 rounded-lg cursor-pointer transition-all duration-200
                    ${formData.services.includes(service) ? 'bg-[#1a5c2e] border-2 border-[#00ff66]' : 'bg-[#103d17] border-2 border-[#1a5c2e] hover:border-[#00ff66]'}`}
                  onClick={() => handleCheckboxChange(service)}
                >
                  <input
                    type="checkbox"
                    id={service}
                    checked={formData.services.includes(service)}
                    onChange={() => handleCheckboxChange(service)}
                    className="hidden"
                  />
                  <label htmlFor={service} className="text-white">{service}</label>
                </motion.div>
              ))}
            </div>
            {errors.services && <p className="text-red-500 text-sm">{errors.services}</p>}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-2">
              <label htmlFor="budget" className="block text-sm font-medium text-white">Project Budget</label>
              <input
                type="text"
                id="budget"
                name="budget"
                value={formData.budget}
                onChange={handleChange}
                className="w-full p-2 bg-[#103d17] text-white rounded-md border-2 border-[#1a5c2e]"
                placeholder="e.g. $5,000 - $10,000"
              />
            </div>

            <div className="space-y-2">
              <label htmlFor="timeline" className="block text-sm font-medium text-white">Project Timeline</label>
              <input
                type="text"
                id="timeline"
                name="timeline"
                value={formData.timeline}
                onChange={handleChange}
                className="w-full p-2 bg-[#103d17] text-white rounded-md border-2 border-[#1a5c2e]"
                placeholder="e.g. 3-6 months"
              />
            </div>
          </div>

          <div className="space-y-2">
            <label htmlFor="description" className="block text-sm font-medium text-white">Project Description *</label>
            <textarea
              id="description"
              name="description"
              value={formData.description}
              onChange={handleChange}
              className={`w-full p-2 bg-[#103d17] text-white rounded-md border-2 ${errors.description ? 'border-red-500' : 'border-[#1a5c2e]'}`}
              placeholder="Describe your project here..."
              rows={5}
            />
            {errors.description && <p className="text-red-500 text-sm">{errors.description}</p>}
          </div>

          <button 
            type="submit" 
            className="w-full py-2 px-4 bg-[#00ff66] text-black font-bold rounded-md hover:bg-[#00cc52] transition-colors duration-300 flex items-center justify-center"
            disabled={isLoading}
          >
            {isLoading ? (
              <>
                <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-black" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                  <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                  <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                </svg>
                Submitting...
              </>
            ) : (
              'Submit'
            )}
          </button>
        </form>
      </motion.div>
    </div>
    <Footer/>
    </>

  )
}

