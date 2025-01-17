import { useState } from 'react'

export function useCertifications() {
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [certifications] = useState([
    {
      id: '1',
      title: 'Web Development Bootcamp',
      issuer: 'Udemy',
      year: '2023',
      skills: ['HTML', 'CSS', 'JavaScript', 'React']
    },
    {
      id: '2',
      title: 'Machine Learning Specialization',
      issuer: 'Coursera',
      year: '2022',
      skills: ['Python', 'TensorFlow', 'Neural Networks']
    },
    {
      id: '3',
      title: 'AWS Certified Solutions Architect',
      issuer: 'Amazon Web Services',
      year: '2023',
      skills: ['AWS', 'Cloud Architecture', 'Security']
    }
  ])

  const openModal = () => setIsModalOpen(true)
  const closeModal = () => setIsModalOpen(false)

  return { certifications, isModalOpen, openModal, closeModal }
}

