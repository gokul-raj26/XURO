import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import ProjectCard from '../components/ProjectCard';
import { useScrollAnimation } from '../hooks/useScrollAnimation';
import { Project } from '../types';
import { X } from 'lucide-react';

const Showcase: React.FC = () => {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [activeFilter, setActiveFilter] = useState('All');
  const showcaseRef = useScrollAnimation();

  const projects: Project[] = [
    {
      id: '1',
      title: 'E-Commerce Platform',
      category: 'Web Development',
      description: 'A modern e-commerce platform with advanced features and seamless user experience.',
      image: 'https://images.pexels.com/photos/267350/pexels-photo-267350.jpeg?auto=compress&cs=tinysrgb&w=600',
      tags: ['React', 'Node.js', 'MongoDB', 'Stripe'],
      link: '#',
    },
    {
      id: '2',
      title: 'Brand Identity System',
      category: 'Logo Design',
      description: 'Complete brand identity system for a tech startup including logo, colors, and guidelines.',
      image: 'https://images.pexels.com/photos/196644/pexels-photo-196644.jpeg?auto=compress&cs=tinysrgb&w=600',
      tags: ['Branding', 'Logo', 'Identity', 'Guidelines'],
    },
    {
      id: '3',
      title: 'Mobile Banking App',
      category: 'App Development',
      description: 'Secure and intuitive mobile banking application with biometric authentication.',
      image: 'https://images.pexels.com/photos/147413/twitter-facebook-together-exchange-147413.jpeg?auto=compress&cs=tinysrgb&w=600',
      tags: ['React Native', 'Finance', 'Security', 'UX'],
    },
    {
      id: '4',
      title: 'Product Photography',
      category: 'Photography',
      description: 'Professional product photography for luxury watch collection.',
      image: 'https://images.pexels.com/photos/190819/pexels-photo-190819.jpeg?auto=compress&cs=tinysrgb&w=600',
      tags: ['Photography', 'Product', 'Luxury', 'Commercial'],
    },
    {
      id: '5',
      title: 'Restaurant Website',
      category: 'Web Design',
      description: 'Modern restaurant website with online ordering and reservation system.',
      image: 'https://images.pexels.com/photos/262978/pexels-photo-262978.jpeg?auto=compress&cs=tinysrgb&w=600',
      tags: ['Web Design', 'Restaurant', 'Booking', 'Menu'],
    },
    {
      id: '6',
      title: 'Fitness Training App',
      category: 'App Development',
      description: 'Comprehensive fitness app with workout tracking and nutrition guidance.',
      image: 'https://images.pexels.com/photos/841130/pexels-photo-841130.jpeg?auto=compress&cs=tinysrgb&w=600',
      tags: ['Flutter', 'Fitness', 'Health', 'Tracking'],
    },
  ];

  const categories = ['All', 'Web Development', 'Web Design', 'App Development', 'Logo Design', 'Photography'];

  const filteredProjects = activeFilter === 'All' 
    ? projects 
    : projects.filter(project => project.category === activeFilter);

  return (
    <div className="relative pt-32 pb-20 px-6 min-h-screen">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            <span className="bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 bg-clip-text text-transparent">
              Our Showcase
            </span>
          </h1>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Explore our portfolio of cutting-edge projects that showcase our expertise 
            and passion for digital excellence
          </p>
        </motion.div>

        {/* Filter Buttons */}
        <motion.div
          className="flex flex-wrap justify-center gap-4 mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.6 }}
        >
          {categories.map((category) => (
            <button
              key={category}
              className={`px-6 py-3 rounded-full font-medium transition-all duration-300 ${
                activeFilter === category
                  ? 'bg-gradient-to-r from-blue-500 to-purple-600 text-white'
                  : 'bg-white/5 text-gray-400 hover:bg-white/10 hover:text-white'
              }`}
              onClick={() => setActiveFilter(category)}
            >
              {category}
            </button>
          ))}
        </motion.div>

        {/* Projects Grid */}
        <motion.div
          ref={showcaseRef.ref}
          initial="hidden"
          animate={showcaseRef.controls}
          variants={{
            hidden: { opacity: 0 },
            visible: {
              opacity: 1,
              transition: {
                staggerChildren: 0.1,
              },
            },
          }}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          <AnimatePresence>
            {filteredProjects.map((project, index) => (
              <ProjectCard
                key={project.id}
                project={project}
                index={index}
                onView={setSelectedProject}
              />
            ))}
          </AnimatePresence>
        </motion.div>

        {/* Project Modal */}
        <AnimatePresence>
          {selectedProject && (
            <motion.div
              className="fixed inset-0 z-50 flex items-center justify-center p-6 bg-black/80 backdrop-blur-sm"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedProject(null)}
            >
              <motion.div
                className="relative max-w-4xl w-full bg-gray-900 rounded-2xl overflow-hidden"
                initial={{ scale: 0.9, y: 50 }}
                animate={{ scale: 1, y: 0 }}
                exit={{ scale: 0.9, y: 50 }}
                onClick={(e) => e.stopPropagation()}
              >
                <button
                  className="absolute top-4 right-4 z-10 p-2 bg-white/10 backdrop-blur-sm rounded-full text-white hover:bg-white/20 transition-colors"
                  onClick={() => setSelectedProject(null)}
                >
                  <X className="w-6 h-6" />
                </button>
                
                <img
                  src={selectedProject.image}
                  alt={selectedProject.title}
                  className="w-full h-64 md:h-96 object-cover"
                />
                
                <div className="p-8">
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-blue-400 font-medium">{selectedProject.category}</span>
                  </div>
                  
                  <h3 className="text-3xl font-bold text-white mb-4">{selectedProject.title}</h3>
                  
                  <p className="text-gray-400 text-lg mb-6 leading-relaxed">
                    {selectedProject.description}
                  </p>
                  
                  <div className="flex flex-wrap gap-3">
                    {selectedProject.tags.map((tag, index) => (
                      <span
                        key={index}
                        className="px-3 py-1 bg-white/10 text-gray-300 rounded-full text-sm"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
};

export default Showcase;