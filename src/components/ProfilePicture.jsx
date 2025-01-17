'use client'
import ProfilePicture from '../../public/ProfilePic.jpg'
import React, { useEffect, useState } from 'react'

const ProfilePicture = ({ src, alt }) => {
  const [isMounted, setIsMounted] = useState(false)

  useEffect(() => {
    setIsMounted(true)
  }, [])

  if (!isMounted) {
    return null // or a loading placeholder
  }

  return (
    <div 
      className="my-5 mx-auto w-[400px] h-[550px] rounded-xl shadow-lg overflow-hidden"
      style={{
        backgroundImage: `url(${ProfilePicture.src})`,
        backgroundAttachment: 'fixed',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
      }}
      role="img"
      aria-label={alt}
    />
  )
}

export default ProfilePicture

