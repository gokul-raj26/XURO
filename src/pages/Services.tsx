import React from 'react';
import { motion } from 'framer-motion';
import ServiceCard from '../components/ServiceCard';
import { useScrollAnimation } from '../hooks/useScrollAnimation';
import { Service } from '../types';
import logoDesignImg from '../assets/logo design.jpg';
import mobileAppImg from '../assets/mobile app.jpg';
import productImg from '../assets/product.jpg';
import trainingImg from '../assets/traings.jpg';
import uiDesignImg from '../assets/UI-design-process-steps.jpg';
import webDevImg from '../assets/webdev.jpg';


const Services: React.FC = () => {
  const servicesRef = useScrollAnimation();

  const services: Service[] = [
    {
      id: 'logo-design',
     title: 'Branding & Visual Design',
    description: 'Crafting strong brand identities and creative visual assets that communicate your business vision effectively.',
    points: [
      "Custom Logo Design",
      "Corporate & Minimalist Branding",
      "Creative Graphic Design (Posters, Flyers, Brochures)",
      "Marketing & Social Media Assets",
      "Brand Guidelines & Style Systems"
    ],
      image: logoDesignImg,
      gradient: 'from-blue-500 to-cyan-500',
    },
    {
      id: 'web-design',
      title: 'UI/UX & Web Design',
    description: 'Designing intuitive, conversion-driven digital experiences with responsive layouts and modern design systems.',
    points: [
      "Wireframing & Prototyping",
      "Responsive Website Design",
      "Interactive UI Components",
      "Design Systems & UI Kits",
      "Usability & Accessibility Optimization"
    ],
      image: uiDesignImg,
      gradient: 'from-purple-500 to-blue-500',
    },
    {
      id: 'web-development',
      title: 'Web Development',
    description: 'Developing scalable, secure, and high-performance websites tailored to business goals with modern technologies.',
    points: [
      "Custom Web Development",
      "Single & Multi-Page Applications",
      "Interactive Web Experiences",
      "Enterprise & Corporate Websites",
      "Cross-browser Compatibility"
    ],
      image:webDevImg,
      gradient: 'from-pink-500 to-purple-500',
    },
    {
      id: 'product-photography',
    title: 'Creative Media Production',
    description: 'Delivering high-quality photography and video content to enhance brand storytelling and digital presence.',
    points: [
      "Product & Lifestyle Photography",
      "Professional Photo Editing & Retouching",
      "Corporate & Promotional Videos",
      "Social Media Short-form Content",
      "Motion Graphics & VFX"
    ],
      image: productImg,
      gradient: 'from-green-500 to-blue-500',
    },
     {
      id: 'training-programs',
     title: 'Training & Consulting',
    description: 'Providing hands-on training programs and expert consulting to help individuals and businesses grow digitally.',
    points: [
      "Web & App Development Training",
      "UI/UX & Design Workshops",
      "Photography & Editing Sessions",
      "Digital Marketing Strategy Consulting",
      "End-to-end Project Mentorship"
    ],
      image:trainingImg,
      gradient: 'from-indigo-500 to-purple-500',
    },
    {
      id: 'Mobile App-Development',
    title: 'Mobile App Development',
    description: 'Building cross-platform and native mobile apps with optimized performance and seamless user experiences.',
    points: [
      "iOS & Android Applications",
      "Cross-platform Apps (Flutter / React Native)",
      "API & Database Integration",
      "Mobile-first UI/UX Implementation",
      "App Store Deployment & Maintenance"
    ],
     image: mobileAppImg,
      gradient: 'from-indigo-500 to-purple-500',
    },
  ];

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
              Our Services
            </span>
          </h1>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            From concept to completion, we provide comprehensive digital solutions 
            that drive results and exceed expectations
          </p>
        </motion.div>

        {/* Services Grid */}
        <motion.div
          ref={servicesRef.ref}
          initial="hidden"
          animate={servicesRef.controls}
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
          {services.map((service, index) => (
            <ServiceCard key={service.id} service={service} index={index} />
          ))}
        </motion.div>
      </div>
    </div>
  );
};

export default Services;