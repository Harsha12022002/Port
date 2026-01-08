/* eslint-disable react/no-unknown-property */
/* eslint-disable no-unused-vars */

import React, { useState, useEffect } from 'react';
import { ChevronDown, Github, Linkedin, Mail, Phone, Download, ExternalLink, Code, Database, Server, Smartphone, GitBranch, Terminal } from 'lucide-react';

function Home() {
  const [activeSection, setActiveSection] = useState('home');
  const [isVisible, setIsVisible] = useState(false);
  const [particles, setParticles] = useState([]);

  useEffect(() => {
    setIsVisible(true);
    const newParticles = [];
    for (let i = 0; i < 50; i++) {
      newParticles.push({
        id: i,
        x: Math.random() * 100,
        y: Math.random() * 100,
        size: Math.random() * 4 + 1,
        speedX: (Math.random() - 0.5) * 0.5,
        speedY: (Math.random() - 0.5) * 0.5,
      });
    }
    setParticles(newParticles);
  }, []);

  const skills = {
    languages: ['C', 'C++', 'Java', 'JavaScript', 'Python', 'Dart'],
    frameworks: ['React', 'Node.js', 'Express', 'Spring Boot', 'Flutter'],
    databases: ['SQL', 'PostgreSQL', 'MongoDB', 'Redis'],
    tools: ['Git', 'GitHub', 'Docker', 'Postman', 'VS Code', 'IntelliJ']
  };

  const projects = [
  {
    title: "AI-Powered CCTV Surveillance & Person Search System",
    description:
      "Intelligent CCTV surveillance system that detects, tracks, and re-identifies people across video streams. Video footage is indexed using deep learning embeddings, enabling person search via image and retrieval of matching frames with timestamps.",
    tech: ["Python", "YOLOv8", "OpenCV", "Deep Learning", "FAISS", "React", "Spring Boot"],
    image: "📹",
    github: "https://github.com/Harsha12022002/CCTV_INDEXING",
  },
  {
    title: "Endpoint Network Monitoring & Control Daemon",
    description:
      "System-level endpoint security project that runs a local proxy daemon to intercept all outbound HTTP/HTTPS traffic. Implements domain-based and time-based access control using configurable JSON rules, enabling parental control and enterprise endpoint security.",
    tech: ["Python", "Networking", "HTTP Proxy", "Security", "System Design"],
    image: "🔒",
    github: "https://github.com/Harsha12022002/END_POINT_SECURITY",
  },
  {
    title: "Real-time Chat Application",
    description:
      "Socket.io powered chat app with React frontend and Node.js backend. Includes real-time messaging, file sharing, and user presence indicators.",
    tech: ["React", "Node.js", "Socket.io", "MongoDB", "Redis"],
    image: "💬",
    github: "https://github.com/Harsha12022002/Kafka-Chat",
  },
  {
    title: "AI-Assisted Coding Platform",
    description:
      "AI-assisted coding platform that helps developers verify syntax and ask questions while coding, allowing them to focus purely on problem-solving and logic.",
    tech: ["React", "PostgreSQL", "Spring Boot", "Redux", "AI", "APIs"],
    image: "🤖",
    github: "https://github.com/Harsha12022002/Coding-Master",
  },
];


  const scrollToSection = (sectionId) => {
    setActiveSection(sectionId);
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 text-white overflow-hidden">
      {/* Animated Background */}
      <div className="fixed inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-900/20 via-purple-900/20 to-pink-900/20"></div>
        {particles.map((particle) => (
          <div
            key={particle.id}
            className="absolute rounded-full bg-gradient-to-r from-cyan-400 to-blue-400 opacity-30 animate-pulse"
            style={{
              left: `${particle.x}%`,
              top: `${particle.y}%`,
              width: `${particle.size}px`,
              height: `${particle.size}px`,
              animation: `float ${10 + particle.id % 10}s infinite linear`,
            }}
          />
        ))}
      </div>

      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 bg-black/20 backdrop-blur-lg border-b border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="text-2xl font-bold bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
              Harsha Devadiga
            </div>
            <div className="hidden md:flex space-x-8">
              {['Home', 'About', 'Skills', 'Projects', 'Contact'].map((item) => (
                <button
                  key={item}
                  onClick={() => scrollToSection(item.toLowerCase())}
                  className={`px-3 py-2 text-sm font-medium transition-all duration-300 hover:text-cyan-400 hover:scale-105 ${
                    activeSection === item.toLowerCase() ? 'text-cyan-400' : 'text-gray-300'
                  }`}
                >
                  {item}
                </button>
              ))}
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="relative min-h-screen flex items-center justify-center px-4">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className={`space-y-8 ${isVisible ? 'animate-fade-in-up' : 'opacity-0'}`}>
            <div className="space-y-4">
              <h1 className="text-6xl lg:text-8xl font-extrabold bg-gradient-to-r from-orange-400 via-red-500 to-pink-500 bg-clip-text text-transparent leading-tight">
                Full-Stack Developer
              </h1>
              <h2 className="text-4xl lg:text-5xl font-bold bg-gradient-to-r from-yellow-400 via-pink-500 to-red-500 bg-clip-text text-transparent">
                Hello, I am Harsha Devadiga
              </h2>
            </div>
            
            <p className="text-lg lg:text-xl text-gray-300 leading-relaxed max-w-2xl">
              I am a <span className="text-yellow-400 font-semibold">passionate Full-Stack Developer</span> with expertise in building dynamic, user-friendly web applications.
              I specialize in crafting <span className="text-green-300 font-semibold">scalable backend systems</span> and <span className="text-blue-300 font-semibold">seamless frontend interfaces</span>, utilizing modern 
              technologies like <span className="text-purple-300 font-semibold">React, Node.js, Express,</span> and <span className="text-red-300 font-semibold">databases</span>. 
              My goal is to deliver <span className="text-pink-400 font-semibold">robust solutions</span> that bridge creativity and functionality.
            </p>

            <div className="flex flex-wrap gap-4">
              <button className="px-8 py-3 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-full font-semibold text-white shadow-lg hover:shadow-cyan-500/25 transform hover:scale-105 transition-all duration-300">
                <Download className="inline-block w-4 h-4 mr-2" />
                Download Resume
              </button>
              <button 
                onClick={() => scrollToSection('contact')}
                className="px-8 py-3 border-2 border-cyan-500 text-cyan-400 rounded-full font-semibold hover:bg-cyan-500 hover:text-white transform hover:scale-105 transition-all duration-300"
              >
                Get In Touch
              </button>
            </div>
          </div>

          <div className={`flex justify-center ${isVisible ? 'animate-fade-in-right' : 'opacity-0'}`}>
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-full blur-xl opacity-30 animate-pulse"></div>
              <img
                src="portphoto.jpg"
                alt="Harsha - Full Stack Developer"
                className="relative z-10 w-80 h-80 rounded-full object-cover border-4 border-white/20 shadow-2xl"
              />
            </div>
          </div>
        </div>
        
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <ChevronDown className="w-8 h-8 text-cyan-400" />
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl lg:text-5xl font-bold text-center mb-16 bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
            Technical Skills
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-white/5 backdrop-blur-lg rounded-2xl p-6 border border-white/10 hover:border-cyan-400/50 transition-all duration-300 hover:transform hover:scale-105">
              <div className="flex items-center mb-4">
                <Code className="w-8 h-8 text-cyan-400 mr-3" />
                <h3 className="text-xl font-semibold text-cyan-400">Languages</h3>
              </div>
              <div className="space-y-2">
                {skills.languages.map((skill, index) => (
                  <div key={index} className="bg-gradient-to-r from-cyan-500/20 to-blue-500/20 rounded-lg px-3 py-2 text-sm font-medium">
                    {skill}
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-white/5 backdrop-blur-lg rounded-2xl p-6 border border-white/10 hover:border-purple-400/50 transition-all duration-300 hover:transform hover:scale-105">
              <div className="flex items-center mb-4">
                <Server className="w-8 h-8 text-purple-400 mr-3" />
                <h3 className="text-xl font-semibold text-purple-400">Frameworks</h3>
              </div>
              <div className="space-y-2">
                {skills.frameworks.map((skill, index) => (
                  <div key={index} className="bg-gradient-to-r from-purple-500/20 to-pink-500/20 rounded-lg px-3 py-2 text-sm font-medium">
                    {skill}
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-white/5 backdrop-blur-lg rounded-2xl p-6 border border-white/10 hover:border-green-400/50 transition-all duration-300 hover:transform hover:scale-105">
              <div className="flex items-center mb-4">
                <Database className="w-8 h-8 text-green-400 mr-3" />
                <h3 className="text-xl font-semibold text-green-400">Databases</h3>
              </div>
              <div className="space-y-2">
                {skills.databases.map((skill, index) => (
                  <div key={index} className="bg-gradient-to-r from-green-500/20 to-emerald-500/20 rounded-lg px-3 py-2 text-sm font-medium">
                    {skill}
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-white/5 backdrop-blur-lg rounded-2xl p-6 border border-white/10 hover:border-orange-400/50 transition-all duration-300 hover:transform hover:scale-105">
              <div className="flex items-center mb-4">
                <Terminal className="w-8 h-8 text-orange-400 mr-3" />
                <h3 className="text-xl font-semibold text-orange-400">Tools</h3>
              </div>
              <div className="space-y-2">
                {skills.tools.map((skill, index) => (
                  <div key={index} className="bg-gradient-to-r from-orange-500/20 to-red-500/20 rounded-lg px-3 py-2 text-sm font-medium">
                    {skill}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 px-4 bg-black/20">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl lg:text-5xl font-bold text-center mb-16 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
            Featured Projects
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {projects.map((project, index) => (
              <div key={index} className="bg-white/5 backdrop-blur-lg rounded-2xl overflow-hidden border border-white/10 hover:border-purple-400/50 transition-all duration-300 hover:transform hover:scale-105 group">
                <div className="h-48 bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center text-6xl">
                  {project.image}
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-2 text-purple-400">{project.title}</h3>
                  <p className="text-gray-300 mb-4">{project.description}</p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tech.map((tech, techIndex) => (
                      <span key={techIndex} className="px-3 py-1 bg-gradient-to-r from-purple-500/20 to-pink-500/20 rounded-full text-xs font-medium">
                        {tech}
                      </span>
                    ))}
                  </div>
                  <div className="flex gap-2">
                    {/*<button className="flex items-center px-4 py-2 bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg text-sm font-medium hover:scale-105 transition-all duration-300">
                      <ExternalLink className="w-4 h-4 mr-2" />
                      Live Demo
                    </button>*/}
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center px-4 py-2 border border-purple-400 text-purple-400 rounded-lg text-sm font-medium hover:bg-purple-500 hover:text-white transition-all duration-300"
                    >
                      <Github className="w-4 h-4 mr-2" />
                      Code
                    </a>

                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl lg:text-5xl font-bold mb-8 bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
            Lets Work Together
          </h2>
          <p className="text-xl text-gray-300 mb-12">
            Ready to bring your ideas to life? Lets create something amazing together.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            <div className="bg-white/5 backdrop-blur-lg rounded-2xl p-6 border border-white/10 hover:border-cyan-400/50 transition-all duration-300">
              <Mail className="w-8 h-8 text-cyan-400 mx-auto mb-4" />
              <h3 className="text-lg font-semibold mb-2">Email</h3>
            <a
              href="mailto:harshadevadiga6289@gmail.com"
              className="text-gray-300 hover:text-cyan-400 transition-colors"
            >
              harshadevadiga6289@gmail.com
            </a>
            </div>
            <div className="bg-white/5 backdrop-blur-lg rounded-2xl p-6 border border-white/10 hover:border-purple-400/50 transition-all duration-300">
              <Phone className="w-8 h-8 text-purple-400 mx-auto mb-4" />
              <h3 className="text-lg font-semibold mb-2">Phone</h3>
              <p className="text-gray-300">+91 6361775340</p>
            </div>
            <div className="bg-white/5 backdrop-blur-lg rounded-2xl p-6 border border-white/10 hover:border-pink-400/50 transition-all duration-300">
              <Linkedin className="w-8 h-8 text-pink-400 mx-auto mb-4" />
              <h3 className="text-lg font-semibold mb-2">LinkedIn</h3>
              <p className="text-gray-300">
                <a
                  href="https://www.linkedin.com/in/harsha-77a1bb288"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  LinkedIn
                </a>

              </p>
            </div>
          </div>

          <div className="bg-white/5 backdrop-blur-lg rounded-2xl p-8 border border-white/10">
            <div className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <input
                  type="text"
                  placeholder="Your Name"
                  className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg focus:outline-none focus:border-cyan-400 transition-all duration-300"
                />
                <input
                  type="email"
                  placeholder="Your Email"
                  className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg focus:outline-none focus:border-cyan-400 transition-all duration-300"
                />
              </div>
              <input
                type="text"
                placeholder="Subject"
                className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg focus:outline-none focus:border-cyan-400 transition-all duration-300"
              />
              <textarea
                placeholder="Your Message"
                rows="6"
                className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg focus:outline-none focus:border-cyan-400 transition-all duration-300"
              ></textarea>
              <button
                onClick={() => alert('Message sent! (Demo only)')}
                className="w-full px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-lg font-semibold text-white shadow-lg hover:shadow-cyan-500/25 transform hover:scale-105 transition-all duration-300"
              >
                Send Message
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-4 bg-black/40 border-t border-white/10">
        <div className="max-w-7xl mx-auto text-center">
          <p className="text-gray-400">
            © 2024 Harsha. Built with React & Tailwind CSS. All rights reserved.
          </p>
        </div>
      </footer>

      <style jsx>{`
        @keyframes fade-in-up {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        @keyframes fade-in-right {
          from {
            opacity: 0;
            transform: translateX(30px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }
        
        @keyframes float {
          0%, 100% {
            transform: translateY(0px) rotate(0deg);
          }
          50% {
            transform: translateY(-20px) rotate(180deg);
          }
        }
        
        .animate-fade-in-up {
          animation: fade-in-up 0.8s ease-out;
        }
        
        .animate-fade-in-right {
          animation: fade-in-right 0.8s ease-out 0.3s both;
        }
      `}</style>
    </div>
  );
}

export default Home;

