'use client'
import "/src/app/styles/globals.css";
import Image from "next/image";
import Link from "next/link";
import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X, Moon, Sun, Code, Briefcase, User, Mail, ArrowRight } from 'lucide-react'
import { list } from "postcss";
import { UseFieldArrayReturn } from "react-hook-form";

// Custom hook for dark mode
const useDarkMode = (): [boolean, (value: boolean) => void] => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    if (isDarkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [isDarkMode]);

  return [isDarkMode, setIsDarkMode];
};


// Animated background component
const AnimatedBackground = () => {
  return (
    <div className="fixed inset-0 -z-10">
      <div className="absolute inset-0 bg-gradient-to-br from-purple-50 to-indigo-100 dark:from-gray-900 dark:to-indigo-950" />
      <div className="absolute inset-0 opacity-50 dark:opacity-30">
        {[...Array(50)].map((_, i) => (
          <div
            key={i}
            className="absolute rounded-full bg-white dark:bg-gray-800"
            style={{
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              width: `${Math.random() * 3 + 1}px`,
              height: `${Math.random() * 3 + 1}px`,
              animation: `float ${Math.random() * 10 + 5}s linear infinite`,
            }}
          />
        ))}
      </div>
    </div>
  )
}
interface HeaderProps {
  isDarkMode: boolean;
  setIsDarkMode: (value: boolean) => void;
}

// Header component
const Header = ({ isDarkMode, setIsDarkMode }: HeaderProps) => {
  const [isOpen, setIsOpen] = useState(false);

  

  const navItems = [
    { name: 'Home', icon: <Code className="w-4 h-4" /> },
    { name: 'About', icon: <User className="w-4 h-4" /> },
    { name: 'Projects', icon: <Briefcase className="w-4 h-4" /> },
    { name: 'Contact', icon: <Mail className="w-4 h-4" /> },
  ]

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white bg-opacity-80 dark:bg-gray-900 dark:bg-opacity-80 backdrop-blur-sm">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <motion.a
          href="#home"
          className="text-2xl font-bold text-indigo-600 dark:text-indigo-400"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          Gatonio Banderas
        </motion.a>

        <nav className="hidden md:flex space-x-8">
          {navItems && navItems.map(({ name, icon }) => (
            <motion.a
              key={name}
              href={`#${name.toLowerCase()}`}
              className="text-gray-600 dark:text-gray-300 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors flex items-center space-x-1"
              whileHover={{ y: -2 }}
              whileTap={{ y: 0 }}
            >
              {icon}
              <span>{name}</span>
            </motion.a>
          ))}
        </nav>

        <div className="flex items-center space-x-4">
          <button
            onClick={() => setIsDarkMode(!isDarkMode)}
            className="text-gray-600 dark:text-gray-300 hover:text-indigo-600 dark:hover:text-indigo-400"
          >
            {isDarkMode ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
          </button>
          <button className="md:hidden" onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      <AnimatePresence>
        {isOpen && (
          <motion.nav
            className="md:hidden bg-white dark:bg-gray-900"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
          >
            {navItems && navItems.map(({ name }) => (
              <a
                key={name}
                href={`#${name.toLowerCase()}`}
                className="block py-2 px-4 text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800"
                onClick={() => setIsOpen(false)}
              >
                {name}
              </a>
            ))}
          </motion.nav>
        )}
      </AnimatePresence>
    </header>
  )
}

// Hero section component
const Hero = () => {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden">
      <div className="text-center z-10">
        <motion.h1
          className="text-5xl md:text-7xl font-bold text-gray-800 dark:text-white mb-4"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          Hi, I'm{' '}
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-600 to-indigo-600">
          Gatonio Banderas
          </span>
        </motion.h1>
        <motion.p
          className="text-xl md:text-2xl text-gray-600 dark:text-gray-300 mb-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          Crafting digital experiences that inspire and innovate
        </motion.p>
        <motion.a
          href="#projects"
          className="inline-flex items-center bg-indigo-600 text-white px-8 py-3 rounded-full text-lg font-semibold hover:bg-indigo-700 transition-colors"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          Explore My Work
          <ArrowRight className="ml-2 w-5 h-5" />
        </motion.a>
      </div>
      <div className="absolute inset-0 flex items-center justify-center opacity-10 dark:opacity-5">
        <div className="w-[800px] h-[800px] bg-indigo-600 rounded-full filter blur-3xl"></div>
      </div>
    </section>
  )
}


interface SkillProps {
  name: string;
  level: number;
}
// Header component
const Skill = ({ name, level }: SkillProps) => {
  
// Skill component

  return (
    <div className="mb-4">
      <div className="flex justify-between mb-1">
        <span className="text-gray-700 dark:text-gray-300">{name}</span>
        <span className="text-gray-600 dark:text-gray-400">{level}%</span>
      </div>
      <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2.5">
        <motion.div
          className="bg-indigo-600 h-2.5 rounded-full"
          initial={{ width: 0 }}
          animate={{ width: `${level}%` }}
          transition={{ duration: 1, delay: 0.5 }}
        ></motion.div>
      </div>
    </div>
  )
}

// About section component
const About = () => {
  const skills = [
    { name: 'React', level: 90 },
    { name: 'Next.js', level: 85 },
    { name: 'TypeScript', level: 80 },
    { name: 'Node.js', level: 75 },
    { name: 'UI/UX Design', level: 70 },
  ]

  return (
    <section id="about" className="py-20 bg-white dark:bg-gray-900">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-gray-800 dark:text-white">About Me</h2>
        <div className="flex flex-col md:flex-row items-center justify-between">
          <motion.div
            className="md:w-1/2 mb-8 md:mb-0"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <img
              src="/pexels-stefanstefancik-91227.jpg?height=400&width=400"
              alt="Gatonio Banderas"
              className="w-64 h-64 rounded-full object-cover mx-auto md:mx-0"
            />
          </motion.div>
          <div className="md:w-1/2">
            <p className="text-lg text-gray-600 dark:text-gray-300 mb-6">
              As a passionate web developer with 5 years of experience, I thrive on creating innovative digital solutions that not only meet but exceed client expectations. My approach combines cutting-edge technology with user-centric design principles to deliver seamless, engaging web experiences.
            </p>
            <p className="text-lg text-gray-600 dark:text-gray-300 mb-6">
              I believe in the power of continuous learning and stay up-to-date with the latest industry trends and best practices. My goal is to push the boundaries of what's possible on the web, always striving for excellence in every project I undertake.
            </p>
            <div className="mt-8">
              <h3 className="text-xl font-semibold mb-4 text-gray-800 dark:text-white">My Skills</h3>
              {skills && skills.map((skill) => (
                <Skill key={skill.name} name={skill.name} level={skill.level} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

interface ProjectCardProps {
  title: string;
  description: string;
  tags: string[];
  image: string;
  link: string;
  
}
// Header component
const ProjectCard = ({ title, description, image, tags, link,}: ProjectCardProps) =>

// Project card component
 {
  return (
    <motion.div
      className="bg-white dark:bg-gray-800 rounded-lg shadow-lg overflow-hidden transform transition-all duration-300 hover:scale-105"
      whileHover={{ y: -5 }}
    >
      <img src={image} alt={title} className="w-full h-48 object-cover" />
      <div className="p-6">
        <h3 className="text-xl font-semibold mb-2 text-gray-800 dark:text-white">{title}</h3>
        <p className="text-gray-600 dark:text-gray-300 mb-4">{description}</p>
        <div className="flex flex-wrap gap-2 mb-4">
          {tags && tags.map((tag) => (
            <span
              key={tag}
              className="px-2 py-1 bg-indigo-100 dark:bg-indigo-900 text-indigo-800 dark:text-indigo-200 text-sm rounded-full"
            >
              {tag}
            </span>
          ))}
        </div>
        <a
          href={link}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center text-indigo-600 dark:text-indigo-400 hover:underline"
        >
          View Project <ArrowRight className="ml-1 w-4 h-4" />
        </a>
      </div>
    </motion.div>
  )
}

// Projects section component
const Projects = () => {
  const projects = [
    {
      title: 'E-commerce Platform',
      description: 'A fully responsive e-commerce solution with advanced features and seamless user experience.',
      image: '/Ecom.png',
      tags: ['React', 'Node.js', 'MongoDB', 'Stripe'],
      link: '#',
    },
    {
      title: 'Task Management App',
      description: 'A productivity app for managing tasks and projects with real-time collaboration features.',
      image: '/taskmangement.png',
      tags: ['Vue.js', 'Firebase', 'Vuex', 'PWA'],
      link: '#',
    },
    {
      title: 'AI-Powered Analytics Dashboard',
      description: 'An intelligent dashboard providing real-time insights and predictive analytics for businesses.',
      image: '/aianalys.png',
      tags: ['React', 'Python', 'TensorFlow', 'D3.js'],
      link: '#',
    },
  ]

  return (
    <section id="projects" className="py-20 bg-gray-50 dark:bg-gray-800">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-gray-800 dark:text-white">Featured Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects && projects.map((project, index) => (
            <ProjectCard key={index} {...project} />
          ))}
        </div>
      </div>
    </section>
  )
}

// Contact form component
const ContactForm = () => {
  const [formStatus, setFormStatus] = useState('')
  
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    
    e.preventDefault()
    // Add your form submission logic here
    setFormStatus('Thank you! Your message has been sent.')
  }

  return (
    <form onSubmit={handleSubmit} className="max-w-md mx-auto">
      <div className="mb-4">
        <label htmlFor="name" className="block text-gray-700 dark:text-gray-300 font-semibold mb-2">Name</label>
        <input
          type="text"
          id="name"
          name="name"
          required
          className="w-full px-3 py-2 border border-gray-300 dark:border-gray-700 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500 dark:bg-gray-800 dark:text-white"
        />
      </div>
      <div className="mb-4">
        <label htmlFor="email" className="block text-gray-700 dark:text-gray-300 font-semibold mb-2">Email</label>
        <input
          type="email"
          id="email"
          name="email"
          required
          className="w-full px-3 py-2 border border-gray-300 dark:border-gray-700 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500 dark:bg-gray-800 dark:text-white"
        />
      </div>
      <div className="mb-4">
        <label htmlFor="message" className="block text-gray-700 dark:text-gray-300 font-semibold mb-2">Message</label>
        <textarea
          id="message"
          name="message"
          required
          
          className="w-full px-3 py-2 border border-gray-300 dark:border-gray-700 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500 dark:bg-gray-800 dark:text-white"
        ></textarea>
      </div>
      <motion.button
        type="submit"
        className="w-full bg-indigo-600 text-white py-2 px-4 rounded-md font-semibold hover:bg-indigo-700 transition-colors"
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
      >
        Send Message
      </motion.button>
      {formStatus && <p className="mt-4 text-green-600 dark:text-green-400">{formStatus}</p>}
    </form>
  )
}

// Contact section component
const Contact = () => {
  return (
    <section id="contact" className="py-20 bg-white dark:bg-gray-900">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-gray-800 dark:text-white">Get in Touch</h2>
        <ContactForm />
      </div>
    </section>
  )
}

// Footer component
const Footer = () => {
  const socialLinks = [
    { name: 'GitHub', icon: <Code className="w-5 h-5" />, link: '#' },
    { name: 'LinkedIn', icon: <Briefcase className="w-5 h-5" />, link: '#' },
    { name: 'Email', icon: <Mail className="w-5 h-5" />, link: 'mailto:your.email@example.com' },
  ]

  return (
    <footer className="bg-gray-800 text-white py-8">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <p className="mb-4 md:mb-0">&copy; 2023 YourName. All rights reserved.</p>
          <div className="flex space-x-4">
            {socialLinks && socialLinks.map(({ name, icon, link }) => (
              <motion.a
                key={name}
                href={link}
                className="hover:text-indigo-400"
                whileHover={{ y: -2 }}
                aria-label={name}
              >
                {icon}
              </motion.a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  )
}

// Main App component
export default function CreativePortfolio() {
  const [isDarkMode, setIsDarkMode] = useDarkMode(); // Let TypeScript infer types
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate loading time
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  if (isLoading) {
    return (
      <div className="flex items-center justify-center min-h-screen bg-white dark:bg-gray-900">
        <div className="w-16 h-16 border-4 border-indigo-600 border-t-transparent rounded-full animate-spin"></div>
      </div>
    );
  }

  return (
    <div className="min-h-screen flex flex-col dark:text-white">
      <AnimatedBackground />
      <Header isDarkMode={isDarkMode} setIsDarkMode={setIsDarkMode} /> {/* Fixed prop passing */}
      <main>
        <Hero />
        <About />
        <Projects />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
