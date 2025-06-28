import { useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { 
  Github, 
  Linkedin, 
  Mail, 
  ExternalLink, 
  Download,
  Menu,
  X,
  Code,
  Database,
  Server,
  Globe
} from 'lucide-react'
import './App.css'

// Navbar Bileşeni
const Navbar = ({ activeSection, setActiveSection }) => {
  const [isOpen, setIsOpen] = useState(false)

  const navItems = [
    { id: 'home', label: 'Home' },
    { id: 'about', label: 'About' },
    { id: 'projects', label: 'Projects' },
    { id: 'contact', label: 'Contact' }
  ]

  const handleSectionChange = (sectionId) => {
    setActiveSection(sectionId)
    setIsOpen(false)
  }

  return (
    <motion.nav 
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-md border-b border-slate-200 shadow-sm"
    >
      <div className="navbar-container">
        <div className="flex items-center justify-between h-20">
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="navbar-brand text-gradient"
            onClick={() => handleSectionChange('home')}
          >
            Alperen Ozdil
          </motion.div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-2">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => handleSectionChange(item.id)}
                className={`nav-link ${
                  activeSection === item.id ? 'active' : 'inactive'
                }`}
              >
                {item.label}
              </button>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-3 rounded-lg text-slate-600 hover:text-emerald-600 hover:bg-emerald-50 transition-all duration-300"
            >
              {isOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="md:hidden py-4 space-y-2 overflow-hidden border-t border-slate-100"
            >
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => handleSectionChange(item.id)}
                  className={`block w-full text-left py-3 px-4 rounded-lg font-medium transition-all duration-300 ${
                    activeSection === item.id
                      ? 'text-emerald-600 bg-emerald-50'
                      : 'text-slate-600 hover:text-emerald-600 hover:bg-emerald-50'
                  }`}
                >
                  {item.label}
                </button>
              ))}
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.nav>
  )
}

// Page Wrapper for smooth transitions
const PageWrapper = ({ children, className = "" }) => {
  return (
    <motion.div
      initial={{ opacity: 0, x: 300 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: -300 }}
      transition={{ 
        duration: 0.5,
        ease: [0.25, 0.1, 0.25, 1]
      }}
      className={`min-h-screen pt-20 ${className}`}
    >
      {children}
    </motion.div>
  )
}

// Hero Section
const HeroSection = ({ setActiveSection }) => {
  const handleDownloadCV = () => {
    // CV dosyasını indir
    const link = document.createElement('a')
    link.href = '/Alperen Özdil CV Haziran 2025 .pdf'
    link.download = 'Alperen_Özdil_CV_Haziran_2025.pdf'
    link.target = '_blank'
    document.body.appendChild(link)
    link.click()
    document.body.removeChild(link)
  }

  return (
    <PageWrapper className="flex items-center justify-center bg-gradient-to-br from-emerald-50 to-slate-50">
      <div className="container-max section-padding">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Sol taraf - Yazılar ve butonlar */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-center md:text-left"
          >
            <motion.h1 
              className="font-bold text-4xl md:text-6xl lg:text-7xl mb-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
            >
              Hello, I'm{' '}
              <span className="text-gradient">Alperen Ozdil</span>
            </motion.h1>
            
            <motion.p 
              className="text-lg md:text-xl text-slate-600 mb-8"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
            >
              As a Full Stack Developer, I create user-friendly and 
              high-performance applications using modern web technologies.
            </motion.p>

            <motion.div 
              className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8 }}
            >
              <button 
                onClick={() => setActiveSection('projects')}
                className="btn-primary"
              >
                View My Projects
              </button>
              <button 
                onClick={handleDownloadCV}
                className="btn-secondary flex items-center gap-2 justify-center hover:bg-emerald-50 hover:border-emerald-500 hover:text-emerald-600"
              >
                <Download size={20} />
                Download CV
              </button>
            </motion.div>
          </motion.div>

          {/* Sağ taraf - Fotoğraf */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="flex justify-center"
          >
            <div className="relative">
              {/* Ana fotoğraf konteyneri */}
              <div className="relative w-80 h-80 md:w-96 md:h-96">
                {/* Arka plan dekoratif şekiller */}
                <div className="absolute inset-0 bg-gradient-to-br from-emerald-400 to-slate-500 rounded-3xl transform rotate-6"></div>
                <div className="absolute inset-0 bg-gradient-to-tr from-emerald-300 to-slate-400 rounded-3xl transform -rotate-3"></div>
                
                {/* Fotoğraf */}
                <div className="relative w-full h-full bg-white rounded-3xl overflow-hidden shadow-2xl transform hover:scale-105 transition-transform duration-300">
                  <img 
                    src="/IMG_7683.JPG" 
                    alt="Alperen Ozdil" 
                    className="w-full h-full object-cover"
                  />
                </div>
                
                {/* Floating iconlar */}
                <motion.div
                  animate={{ 
                    y: [0, -10, 0],
                    rotate: [0, 5, 0]
                  }}
                  transition={{ 
                    duration: 3,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                  className="absolute -top-4 -right-4 w-16 h-16 bg-emerald-500 rounded-full flex items-center justify-center shadow-lg"
                >
                  <Code className="w-8 h-8 text-white" />
                </motion.div>
                
                <motion.div
                  animate={{ 
                    y: [0, 10, 0],
                    rotate: [0, -5, 0]
                  }}
                  transition={{ 
                    duration: 4,
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: 1
                  }}
                  className="absolute -bottom-4 -left-4 w-16 h-16 bg-slate-500 rounded-full flex items-center justify-center shadow-lg"
                >
                  <Database className="w-8 h-8 text-white" />
                </motion.div>
                
                <motion.div
                  animate={{ 
                    y: [0, -15, 0],
                    x: [0, 5, 0]
                  }}
                  transition={{ 
                    duration: 5,
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: 2
                  }}
                  className="absolute top-1/2 -right-8 w-12 h-12 bg-emerald-400 rounded-full flex items-center justify-center shadow-lg"
                >
                  <Server className="w-6 h-6 text-white" />
                </motion.div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </PageWrapper>
  )
}

// About Section
const AboutSection = () => {
  const skills = [
    { name: 'Frontend', icon: Code, items: ['React', 'JavaScript', 'Tailwind CSS'] },
    { name: 'Backend', icon: Server, items: ['Spring Boot', 'RESTful APIs', ] },
    { name: 'Database', icon: Database, items: ['PostgreSQL', 'Redis', 'Database Design'] },
    { name: 'Tools', icon: Globe, items: ['Git', 'Docker', ] }
  ]

  return (
    <PageWrapper className="bg-gradient-to-br from-slate-50 to-emerald-50">
      <div className="container-max section-padding">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6">About Me</h2>
          <div className="max-w-3xl mx-auto">
            <p className="text-lg text-slate-600 mb-6">
            I'm a highly motivated and passionate Full Stack Developer, recently graduated in Computer Engineering. 
            I’m eager to turn ideas into impactful, user-friendly applications that make a difference.
            </p>
            <p className="text-lg text-slate-600">
            With hands-on experience in technologies like React, Spring Boot, and PostgreSQL,
             I enjoy working across both frontend and backend. I’m always open to learning new tools, 
             embracing innovation, and continuously improving myself as a developer.
            </p>
          </div>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {skills.map((skill, index) => (
            <motion.div
              key={skill.name}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2 }}
              whileHover={{ scale: 1.05 }}
              className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow"
            >
              <div className="text-emerald-600 mb-4">
                <skill.icon size={48} />
              </div>
              <h3 className="text-xl font-semibold mb-3 text-slate-800">{skill.name}</h3>
              <ul className="space-y-2">
                {skill.items.map((item, itemIndex) => (
                  <li key={itemIndex} className="text-slate-600">{item}</li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </PageWrapper>
  )
}

// Projects Section
const ProjectsSection = () => {
  const projects = [
    {
      title: 'Hoaxify - Social Media Platform',
      description: 'A modern social media platform where users can share content, interact with each other, and build a social community. ',
      image: 'hoaxify.png',
      tech: ['Spring Boot', 'PostgreSQL', 'Docker', 'React', 'Tailwind CSS'],
      github: 'https://github.com/alpozdil/Hoaxify',
      demo: 'https://hoaxify.vercel.app/'
    },
    {
      title: 'Sentiment Analysis Project',
      description: 'A project that automatically collects product reviews from e-commerce sites and performs sentiment analysis .',
      image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=500&h=300&fit=crop',
      tech: ['Selenium', 'BeautifulSoup', 'Bayes Smoothing', 'PostgreSQL'],
      github: 'https://github.com/alpozdil/textMining',
      demo: null
    },
    {
      title: 'Bus Ticket System Backend',
      description: 'RESTful API backend application developed for bus ticket reservation system. ',
      image: 'https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?w=500&h=300&fit=crop',
      tech: ['Spring Boot', 'Docker', 'Redis', 'PostgreSQL', 'Swagger'],
      github: 'https://github.com/alpozdil/bus-ticket-system',
      demo: null
    }
  ]

  return (
    <PageWrapper className="bg-gradient-to-br from-emerald-50 to-slate-50">
      <div className="container-max section-padding">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6">Projects</h2>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            Projects I've developed using various technologies. Each project represents 
            my passion for creating innovative solutions.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2 }}
              whileHover={{ scale: 1.02 }}
              className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow"
            >
              <div className="h-48 bg-gradient-to-br from-emerald-100 to-slate-100 flex items-center justify-center">
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-full object-cover"
                />
              </div>
              
              <div className="p-6">
                <h3 className="text-xl font-bold mb-3 text-slate-800">{project.title}</h3>
                <p className="text-slate-600 mb-4 line-clamp-3">{project.description}</p>
                
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tech.map((tech, techIndex) => (
                    <span 
                      key={techIndex}
                      className="px-3 py-1 bg-emerald-100 text-emerald-700 rounded-full text-sm font-medium"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                
                <div className="flex gap-3">
                  <a 
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 px-4 py-2 border border-slate-300 rounded-lg hover:bg-slate-50 transition-colors"
                  >
                    <Github size={16} />
                    GitHub
                  </a>
                  {project.demo && (
                    <a 
                      href={project.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 px-4 py-2 bg-emerald-600 text-white rounded-lg hover:bg-emerald-700 transition-colors"
                    >
                      <ExternalLink size={16} />
                      Demo
                    </a>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </PageWrapper>
  )
}

// Contact Section
const ContactSection = () => {
  return (
    <PageWrapper className="bg-gradient-to-br from-slate-50 to-emerald-50">
      <div className="container-max section-padding">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6">Contact</h2>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            I'd love to hear from you! Whether you have a project in mind or just want to connect, 
            feel free to reach out.
          </p>
        </motion.div>

        <div className="max-w-4xl mx-auto">
          <div className="grid md:grid-cols-3 gap-8 text-center">
            <motion.a
              href="mailto:alperenozdil@outlook.com"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              whileHover={{ scale: 1.05 }}
              className="group p-8 rounded-xl hover:bg-slate-50 transition-colors duration-300 min-h-[200px] flex flex-col justify-center"
            >
              <Mail className="w-12 h-12 text-emerald-600 mx-auto mb-4 group-hover:scale-110 transition-transform duration-300" />
              <h3 className="font-semibold text-lg mb-3">Email</h3>
              <p className="text-slate-600 break-words">alperenozdil@outlook.com</p>
            </motion.a>

            <motion.a
              href="https://www.linkedin.com/in/alperenozdil/"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              whileHover={{ scale: 1.05 }}
              className="group p-8 rounded-xl hover:bg-slate-50 transition-colors duration-300 min-h-[200px] flex flex-col justify-center"
            >
              <Linkedin className="w-12 h-12 text-emerald-600 mx-auto mb-4 group-hover:scale-110 transition-transform duration-300" />
              <h3 className="font-semibold text-lg mb-3">LinkedIn</h3>
              <p className="text-slate-600">Professional Profile</p>
            </motion.a>

            <motion.a
              href="https://github.com/alpozdil"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8 }}
              whileHover={{ scale: 1.05 }}
              className="group p-8 rounded-xl hover:bg-slate-50 transition-colors duration-300 min-h-[200px] flex flex-col justify-center"
            >
              <Github className="w-12 h-12 text-emerald-600 mx-auto mb-4 group-hover:scale-110 transition-transform duration-300" />
              <h3 className="font-semibold text-lg mb-3">GitHub</h3>
              <p className="text-slate-600">Code Repository</p>
            </motion.a>
          </div>
        </div>
      </div>
    </PageWrapper>
  )
}

// Ana App Bileşeni
function App() {
  const [activeSection, setActiveSection] = useState('home')

  const renderActiveSection = () => {
    switch (activeSection) {
      case 'home':
        return <HeroSection setActiveSection={setActiveSection} />
      case 'about':
        return <AboutSection />
      case 'projects':
        return <ProjectsSection />
      case 'contact':
        return <ContactSection />
      default:
        return <HeroSection setActiveSection={setActiveSection} />
    }
  }

  return (
    <div className="App overflow-hidden">
      <Navbar activeSection={activeSection} setActiveSection={setActiveSection} />
      <AnimatePresence mode="wait">
        <div key={activeSection}>
          {renderActiveSection()}
        </div>
      </AnimatePresence>
    </div>
  )
}

export default App
