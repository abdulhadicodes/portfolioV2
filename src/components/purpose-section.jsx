'use client'

import { motion } from "framer-motion";
import { Rocket, Eye } from 'lucide-react';

export default function PurposeSection() {
  return (
    <section className="bg-[#04140b] py-16 md:py-24 px-4">
      <div className="max-w-6xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-3xl md:text-4xl font-bold text-white text-center mb-16"
        >
          My Purpose
        </motion.h2>
        
        <div className="grid md:grid-cols-2 gap-12 md:gap-16">
          {/* Mission Section */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="relative group"
          >
            <div className="rounded-lg border border-[#00ff66]/20 bg-[#0a2816] p-8 transition-all duration-300 hover:border-[#00ff66] hover:shadow-[0_0_30px_rgba(0,255,102,0.15)]">
              <div className="flex justify-center mb-6">
                <div className="bg-[#00ff66]/10 rounded-full p-4">
                  <Rocket className="w-12 h-12 text-[#00ff66]" />
                </div>
              </div>
              <h3 className="text-2xl font-bold mb-4 text-white text-center">Our Mission</h3>
              <p className="text-slate-300 leading-relaxed text-center">
                Our mission is to help businesses unlock their digital potential through
                innovative web solutions, empowering them to thrive in the online world.
              </p>
              <motion.div
                initial={{ width: 0 }}
                whileInView={{ width: "100%" }}
                transition={{ duration: 0.8, delay: 0.5 }}
                className="h-0.5 bg-gradient-to-r from-[#00ff66]/40 to-[#00ff66] mt-6"
              />
            </div>
          </motion.div>

          {/* Vision Section */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="relative group"
          >
            <div className="rounded-lg border border-[#00ff66]/20 bg-[#0a2816] p-8 transition-all duration-300 hover:border-[#00ff66] hover:shadow-[0_0_30px_rgba(0,255,102,0.15)]">
              <div className="flex justify-center mb-6">
                <div className="bg-[#00ff66]/10 rounded-full p-4">
                  <Eye className="w-12 h-12 text-[#00ff66]" />
                </div>
              </div>
              <h3 className="text-2xl font-bold mb-4 text-white text-center">Our Vision</h3>
              <p className="text-slate-300 leading-relaxed text-center">
                We aim to be a trusted partner for businesses worldwide, delivering
                exceptional websites and e-commerce platforms that drive growth and
                success.
              </p>
              <motion.div
                initial={{ width: 0 }}
                whileInView={{ width: "100%" }}
                transition={{ duration: 0.8, delay: 0.7 }}
                className="h-0.5 bg-gradient-to-r from-[#00ff66]/40 to-[#00ff66] mt-6"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

