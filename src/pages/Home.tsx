import React from 'react';
import { motion } from 'framer-motion';
import Hero from '../components/Hero';
import ServiceCard from '../components/ServiceCard';
import { useScrollAnimation } from '../hooks/useScrollAnimation';
import { Service } from '../types';

interface HomeProps {
  onNavigate: (page: string) => void;
}

const Home: React.FC<HomeProps> = ({ onNavigate }) => {
  const featuredServicesRef = useScrollAnimation();

  const featuredServices: Service[] = [
    {
      id: 'web-design',
      title: 'Web Design',
      description: 'Stunning, user-centric designs that captivate and convert',
      image: 'https://images.pexels.com/photos/196644/pexels-photo-196644.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&fit=crop',
      gradient: 'from-blue-500 to-purple-600',
    },
    {
      id: 'web-development',
      title: 'Web Development',
      description: 'Cutting-edge web applications built with modern technologies',
      image: 'https://images.pexels.com/photos/270348/pexels-photo-270348.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&fit=crop',
      gradient: 'from-purple-500 to-pink-600',
    },
    {
      id: 'app-development',
      title: 'App Development',
      description: 'Native and cross-platform mobile applications',
      image: 'https://images.pexels.com/photos/147413/twitter-facebook-together-exchange-147413.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&fit=crop',
      gradient: 'from-pink-500 to-blue-600',
    },
  ];

  return (
    <div className="relative">
      {/* Hero Section */}
      <Hero onNavigate={onNavigate} />

      {/* Featured Services Preview */}
      <section className="relative py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <motion.div
            ref={featuredServicesRef.ref}
            initial="hidden"
            animate={featuredServicesRef.controls}
            variants={{
              hidden: { opacity: 0 },
              visible: {
                opacity: 1,
                transition: {
                  staggerChildren: 0.2,
                },
              },
            }}
          >
            <motion.div
              className="text-center mb-16"
              variants={{
                hidden: { opacity: 0, y: 30 },
                visible: { opacity: 1, y: 0 },
              }}
            >
              <h2 className="text-4xl md:text-5xl font-bold mb-6">
                <span className="bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 bg-clip-text text-transparent">
                  Our Expertise
                </span>
              </h2>
              <p className="text-xl text-gray-400 max-w-3xl mx-auto">
                We specialize in creating digital experiences that push boundaries and exceed expectations
              </p>
            </motion.div>

            <div className="grid md:grid-cols-3 gap-8">
              {featuredServices.map((service, index) => (
                <ServiceCard key={service.id} service={service} index={index} />
              ))}
            </div>

            <motion.div
              className="text-center mt-12"
              variants={{
                hidden: { opacity: 0, y: 30 },
                visible: { opacity: 1, y: 0 },
              }}
            >
              <motion.button
                className="px-8 py-4 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full text-white font-semibold hover:from-purple-600 hover:to-pink-600 transition-all duration-300"
                onClick={() => onNavigate('services')}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                View All Services
              </motion.button>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Home;