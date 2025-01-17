"use client"; 

import { Mail, MapPin, Clock, Phone, Facebook, Instagram, Linkedin } from 'lucide-react';
import Swal from 'sweetalert2';
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link'

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
  });

  const [errors, setErrors] = useState({});
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  function handleChange(event) {
    const { name, value } = event.target;
    setFormData((prevState) => ({ ...prevState, [name]: value }));
  }

  async function handleSubmit(event) {
    event.preventDefault();
    setIsLoading(true);

    let newErrors = {};
    if (!formData.name.trim()) newErrors.name = "Name is required";
    if (!formData.email.trim()) newErrors.email = "Email is required";
    if (!formData.phone.trim()) newErrors.phone = "Phone number is required";
    if (!formData.message.trim()) newErrors.message = "Message is required";

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      setIsLoading(false);
      return;
    }

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          ...formData,
          access_key: "17a86a6a-740c-4db6-ba02-75508e33e749",
        }),
      });

      const result = await response.json();
      if (result.success) {
        setIsSubmitted(true);
        Swal.fire({
          title: "Success!",
          text: "Your form has been submitted successfully.",
          icon: "success",
          confirmButtonText: "OK",
          confirmButtonColor: "#00ff66", // Change button color
        });
      } else {
        console.error('Form submission failed:', result.message);
      }
    } catch (error) {
      console.error('Error submitting form:', error);
    } finally {
      setIsLoading(false);
    }
  }

  function handleBack() {
    setIsSubmitted(false);
    setFormData({
      name: '',
      email: '',
      phone: '',
      message: '',
    });
  }

  return (
    <div className="min-h-screen bg-[#001a0e] ">
      <div>
        <div className="grid md:grid-cols-2 gap-8">
          {/* Form Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="bg-[#002713] p-8 rounded-lg shadow-lg border border-[#00ff66]/10"
          >
            <div className="mb-8">
              <h3 className="text-[#00ff66] text-sm font-medium mb-2">Get in Touch</h3>
              <h2 className="text-2xl font-bold text-white">Let's discuss your project today!</h2>
            </div>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-white mb-2">
                  Name *
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className={`w-full p-3 bg-[#001a0e] text-white rounded-md border ${
                    errors.name ? 'border-red-500' : 'border-[#00ff66]/20'
                  } focus:outline-none focus:border-[#00ff66]`}
                  placeholder="Enter your name"
                />
                {errors.name && <p className="text-red-500 text-sm mt-1">{errors.name}</p>}
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-white mb-2">
                  Email *
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className={`w-full p-3 bg-[#001a0e] text-white rounded-md border ${
                    errors.email ? 'border-red-500' : 'border-[#00ff66]/20'
                  } focus:outline-none focus:border-[#00ff66]`}
                  placeholder="Enter your email"
                />
                {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email}</p>}
              </div>

              <div>
                <label htmlFor="phone" className="block text-sm font-medium text-white mb-2">
                  Phone *
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  className={`w-full p-3 bg-[#001a0e] text-white rounded-md border ${
                    errors.phone ? 'border-red-500' : 'border-[#00ff66]/20'
                  } focus:outline-none focus:border-[#00ff66]`}
                  placeholder="Enter your phone number"
                />
                {errors.phone && <p className="text-red-500 text-sm mt-1">{errors.phone}</p>}
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-white mb-2">
                  Message *
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={4}
                  className={`w-full p-3 bg-[#001a0e] text-white rounded-md border ${
                    errors.message ? 'border-red-500' : 'border-[#00ff66]/20'
                  } focus:outline-none focus:border-[#00ff66]`}
                  placeholder="Tell us about your project"
                />
                {errors.message && <p className="text-red-500 text-sm mt-1">{errors.message}</p>}
              </div>

              <div className="flex items-start">
                <input
                  type="checkbox"
                  id="consent"
                  className="mt-1 h-4 w-4 rounded border-gray-300 text-[#00ff66] focus:ring-[#00ff66]"
                  required
                />
                <label htmlFor="consent" className="ml-2 text-sm text-gray-300">
                  I allow this website to store my submission so they can respond to my inquiry.
                </label>
              </div>

              <button
                type="submit"
                className="w-full py-3 px-4 bg-[#00ff66] text-black font-bold rounded-md hover:bg-[#00cc52] transition-colors duration-300 flex items-center justify-center"
                disabled={isLoading}
              >
                {isLoading ? (
                  <>
                    <svg
                      className="animate-spin -ml-1 mr-3 h-5 w-5 text-black"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                    >
                      <circle
                        className="opacity-25"
                        cx="12"
                        cy="12"
                        r="10"
                        stroke="currentColor"
                        strokeWidth="4"
                      ></circle>
                      <path
                        className="opacity-75"
                        fill="currentColor"
                        d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                      ></path>
                    </svg>
                    Submitting...
                  </>
                ) : (
                  'Submit'
                )}
              </button>
            </form>
          </motion.div>

          {/* Contact Information Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="bg-[#002713] p-8 rounded-lg shadow-lg border border-[#00ff66]/10"
          >
            <h3 className="text-[#00ff66] text-2xl font-medium mb-6">Get in touch</h3>

            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <Mail className="w-6 h-6 text-[#00ff66] mt-1" />
                <div>
                  <p className="text-white">abdulhadi.76543@gmail.com</p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <Phone className="w-6 h-6 text-[#00ff66] mt-1" />
                <div>
                  <p className="text-white">+92 300 123 4567</p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <MapPin className="w-6 h-6 text-[#00ff66] mt-1" />
                <div>
                  <p className="text-white">Karachi, SD PK</p>
                </div>
              </div>

              <div className="border-t border-[#00ff66]/10 pt-6">
                <div className="flex items-start space-x-4">
                  <Clock className="w-6 h-6 text-[#00ff66] mt-1" />
                  <div className="space-y-2">
                    <h4 className="text-white font-medium">Hours</h4>
                    <div className="space-y-1">
                      <div className="flex justify-between text-gray-300">
                        <span>Monday - Friday</span>
                        <span>9:00am - 10:00pm</span>
                      </div>
                      <div className="flex justify-between text-gray-300">
                        <span>Saturday</span>
                        <span>9:00am - 6:00pm</span>
                      </div>
                      <div className="flex justify-between text-gray-300">
                        <span>Sunday</span>
                        <span>9:00am - 12:00pm</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="border-t border-[#00ff66]/10 pt-6">
                <h4 className="text-white font-medium mb-4">Connect with us</h4>
                <div className="flex space-x-4">
                  <a
                    href="#"
                    className="p-2 bg-[#001a0e] rounded-full text-[#00ff66] hover:bg-[#00ff66] hover:text-black transition-colors duration-300"
                  >
                    <Facebook className="w-5 h-5 " />
                  </a>
                  <a
                    href="#"
                    className="p-2 bg-[#001a0e] rounded-full text-[#00ff66] hover:bg-[#00ff66] hover:text-black transition-colors duration-300"
                  >
                    <Instagram className="w-5 h-5" />
                  </a>
                  <a
                    href="#"
                    className="p-2 bg-[#001a0e] rounded-full text-[#00ff66] hover:bg-[#00ff66] hover:text-black transition-colors duration-300"
                  >
                    <Linkedin className="w-5 h-5" />
                  </a>
                </div>
              </div>

              <div className="space-y-4 flex flex-col text-center">
                <Link href='/contact' className="w-full py-3 px-4 bg-[#00ff66] text-black font-bold rounded-md hover:bg-[#00cc52] transition-colors duration-300">
                  Schedule a Meeting
                </Link>
                <Link href='/completeintake' className="w-full py-3 px-4 bg-[#001a0e] text-[#00ff66] font-bold rounded-md border border-[#00ff66] hover:bg-[#00ff66] hover:text-black transition-colors duration-300">
                  Request a Quote
                </Link>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
