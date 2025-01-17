import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const modalVariants = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: { opacity: 1, scale: 1, transition: { duration: 0.3, ease: "easeOut" } },
  exit: { opacity: 0, scale: 0.8, transition: { duration: 0.3, ease: "easeIn" } }
};

const overlayVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { duration: 0.3 } },
  exit: { opacity: 0, transition: { duration: 0.3 } }
};

export function CertificationModal({ isOpen, onClose, certificates }) {
  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          className="fixed inset-0 z-50 flex items-center justify-center p-4"
          initial="hidden"
          animate="visible"
          exit="exit"
        >
          <motion.div
            className="fixed inset-0 bg-black bg-opacity-50 backdrop-blur-sm"
            variants={overlayVariants}
            onClick={onClose}
          />
          <motion.div
            className="bg-[#0a2816] rounded-lg shadow-xl overflow-hidden max-w-4xl w-full max-h-[90vh] relative z-10"
            variants={modalVariants}
          >
            <div className="p-6 overflow-y-auto max-h-[calc(90vh-4rem)]">
              <div className="flex justify-between items-center mb-6">
                <h2 className="text-3xl font-bold text-emerald-100">All Certifications</h2>
                <button
                  onClick={onClose}
                  className="text-emerald-100 hover:text-emerald-200 p-2 rounded-full hover:bg-emerald-700 transition-colors"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                  <span className="sr-only">Close</span>
                </button>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {certificates.map((cert, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                  >
                    <div className="bg-[#0c0c0e] border-emerald-600 rounded-lg overflow-hidden">
                      <div className="p-4">
                        <h3 className="text-xl font-semibold text-emerald-100">{cert.name}</h3>
                        <p className="text-slate-200">{cert.issuer} - {cert.date}</p>
                      </div>
                      <div className="p-4 pt-0">
                        <div className="flex flex-wrap gap-2">
                          {cert.skills.map((skill, skillIndex) => (
                            <motion.div key={skillIndex} whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                              <span className="inline-block bg-[#103d17] text-emerald-100 px-2 py-1 rounded-full text-sm">
                                {skill}
                              </span>
                            </motion.div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

