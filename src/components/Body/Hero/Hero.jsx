import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import './Hero.css';

const Hero = () => {
  return (
    <section className="hero-section relative overflow-hidden bg-gradient-to-r from-blue-600 to-indigo-800 text-white py-20">
      <div className="container mx-auto px-6 flex flex-col md:flex-row items-center">
        <div className="md:w-1/2 mb-10 md:mb-0">
          <motion.h1 
            className="text-4xl md:text-5xl font-bold mb-6 leading-tight"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            Transform Your Fitness Journey with VPeakFit
          </motion.h1>
          <motion.p 
            className="text-xl mb-8 text-blue-100"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Personalized training, nutrition, and injury prevention powered by AI technology.
            Achieve your fitness goals faster and smarter.
          </motion.p>
          <motion.div 
            className="flex flex-col sm:flex-row gap-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <Link 
              to="/get-started" 
              className="bg-white text-blue-700 hover:bg-blue-50 font-semibold py-3 px-8 rounded-lg text-lg transition duration-300 text-center"
            >
              Get Started
            </Link>
            <Link 
              to="/how-it-works" 
              className="bg-transparent border-2 border-white hover:bg-white hover:bg-opacity-10 text-white font-semibold py-3 px-8 rounded-lg text-lg transition duration-300 text-center"
            >
              Learn More
            </Link>
          </motion.div>
        </div>
        <div className="md:w-1/2">
          <motion.div 
            className="relative"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="absolute -top-6 -left-6 w-64 h-64 bg-blue-400 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob"></div>
            <div className="absolute -bottom-8 -right-8 w-64 h-64 bg-indigo-400 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-2000"></div>
            <div className="relative">
              <img 
                src="https://images.unsplash.com/photo-1571019614242-c6e2f4f06f8a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80" 
                alt="Fitness Transformation"
                className="rounded-lg shadow-2xl transform hover:scale-105 transition-transform duration-500"
              />
            </div>
          </motion.div>
        </div>
      </div>
      
      {/* Stats Section */}
      <div className="container mx-auto px-6 mt-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
          <motion.div 
            className="bg-white bg-opacity-10 backdrop-filter backdrop-blur-lg p-6 rounded-xl"
            whileHover={{ y: -5 }}
          >
            <h3 className="text-4xl font-bold mb-2">10K+</h3>
            <p className="text-blue-100">Active Members</p>
          </motion.div>
          <motion.div 
            className="bg-white bg-opacity-10 backdrop-filter backdrop-blur-lg p-6 rounded-xl"
            whileHover={{ y: -5 }}
          >
            <h3 className="text-4xl font-bold mb-2">50+</h3>
            <p className="text-blue-100">Expert Trainers</p>
          </motion.div>
          <motion.div 
            className="bg-white bg-opacity-10 backdrop-filter backdrop-blur-lg p-6 rounded-xl"
            whileHover={{ y: -5 }}
          >
            <h3 className="text-4xl font-bold mb-2">95%</h3>
            <p className="text-blue-100">Success Rate</p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
