"use client";

import { useState, useEffect, useRef } from "react";

export default function Page() {
  const [scrollY, setScrollY] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isDarkMode, setIsDarkMode] = useState(false);
  const heroRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    setIsVisible(true);
    
    const handleScroll = () => setScrollY(window.scrollY);
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener("scroll", handleScroll);
    window.addEventListener("mousemove", handleMouseMove);
    
    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  const parallaxOffset = scrollY * 0.5;
  const fadeIn = isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8";

  const focusAreas = [
    {
      icon: (
        <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
        </svg>
      ),
      title: "Applied Reasoning & LLM Alignment",
      desc: "Building domain-aware reasoning systems that evaluate how large language models think, plan, and justify decisions in high-stakes environments.",
      tag: "AI/ML"
    },
    {
      icon: (
        <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z" />
        </svg>
      ),
      title: "Intelligence Systems for Decision Support",
      desc: "Developing AI systems that prioritize, surface, and synthesize critical signals to power decisions in complex, information-dense environments.",
      tag: "Systems"
    },
    {
      icon: (
        <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4m0 5c0 2.21-3.582 4-8 4s-8-1.79-8-4" />
        </svg>
      ),
      title: "Information Architecture & Prioritization",
      desc: "Creating advanced ranking frameworks that structure, filter, and contextualize dense information streams for clarity and actionability.",
      tag: "Data"
    },
    {
      icon: (
        <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
      title: "Locational Intelligence & Geospatial AI",
      desc: "Applying spatial data analysis to understand movement patterns, urban behavior, and infrastructure dynamics for smarter city systems.",
      tag: "Geospatial"
    },
    {
      icon: (
        <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M7 12l3-3 3 3 4-4M8 21l4-4 4 4M3 4h18M4 4h16v12a1 1 0 01-1 1H5a1 1 0 01-1-1V4z" />
        </svg>
      ),
      title: "Private Market Intelligence",
      desc: "Building tools to extract valuation signals, founder patterns, and sector dynamics from opaque startup and investment ecosystems.",
      tag: "Finance"
    },
  ];

  return (
    <main className={`min-h-screen ${isDarkMode ? 'bg-neutral-900 text-white' : 'bg-white text-neutral-900'} antialiased transition-colors duration-500`}>
      {/* Noise Texture Overlay */}
      <div className="fixed inset-0 pointer-events-none z-50 opacity-[0.015]" style={{
        backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 400 400' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' /%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)' /%3E%3C/svg%3E")`,
      }} />

      {/* Dark Mode Toggle */}
      <button
        onClick={() => setIsDarkMode(!isDarkMode)}
        className={`fixed top-6 right-6 z-50 p-3 rounded-full ${isDarkMode ? 'bg-white/10 text-white' : 'bg-neutral-900/10 text-neutral-900'} backdrop-blur-sm border ${isDarkMode ? 'border-white/20' : 'border-neutral-900/20'} hover:scale-110 transition-all duration-300 shadow-lg`}
        aria-label="Toggle dark mode"
      >
        {isDarkMode ? '☀️' : '🌙'}
      </button>

      {/* Hero Section with Parallax */}
      <section 
        ref={heroRef}
        className="relative flex flex-col items-center justify-center text-center min-h-[90vh] px-6 overflow-hidden"
      >
        {/* Parallax Toronto Map Background */}
        <div 
          className="absolute inset-0 bg-cover bg-center transition-transform duration-75 ease-out"
          style={{
            backgroundImage: `url('/toronto-map-bg.png')`,
            transform: `translateY(${parallaxOffset}px)`,
          }}
        />
        
        {/* Animated Mesh Gradient */}
        <div className="absolute inset-0 opacity-40">
          <div 
            className="absolute w-[800px] h-[800px] rounded-full blur-3xl transition-all duration-300"
            style={{
              background: `radial-gradient(circle, ${isDarkMode ? 'rgba(59, 130, 246, 0.3)' : 'rgba(59, 130, 246, 0.2)'} 0%, transparent 70%)`,
              left: `${mousePosition.x - 400}px`,
              top: `${mousePosition.y - 400}px`,
            }}
          />
        </div>

        {/* Gradient Overlays */}
        <div className={`absolute inset-0 bg-gradient-to-b ${isDarkMode ? 'from-neutral-900/95 via-neutral-900/85 to-neutral-900/95' : 'from-white/95 via-white/85 to-white/95'} transition-colors duration-500`} />
        <div className={`absolute inset-0 bg-gradient-to-br ${isDarkMode ? 'from-blue-900/20 via-transparent to-neutral-900/20' : 'from-blue-50/40 via-transparent to-neutral-50/30'} transition-colors duration-500`} />

        {/* Vignette */}
        <div className="absolute inset-0" style={{
          background: `radial-gradient(ellipse at center, transparent 0%, ${isDarkMode ? 'rgba(23, 23, 23, 0.3)' : 'rgba(255,255,255,0.3)'} 70%, ${isDarkMode ? 'rgba(23, 23, 23, 0.7)' : 'rgba(255,255,255,0.7)'} 100%)`
        }} />

        {/* Floating Data Points */}
        {[...Array(12)].map((_, i) => (
          <div
            key={i}
            className={`absolute w-2 h-2 ${isDarkMode ? 'bg-blue-400' : 'bg-blue-600'} rounded-full animate-pulse`}
            style={{
              left: `${15 + (i * 7)}%`,
              top: `${20 + (i % 3) * 20}%`,
              animationDelay: `${i * 0.3}s`,
              animationDuration: `${2 + (i % 3)}s`,
              opacity: 0.4
            }}
          />
        ))}

        {/* Content */}
        <div className={`relative z-10 max-w-5xl mx-auto transition-all duration-1000 ease-out ${fadeIn}`}>
          <div className="mb-6 inline-block">
            <span className={`px-4 py-2 rounded-full text-sm font-medium ${isDarkMode ? 'bg-blue-500/20 text-blue-300 border border-blue-400/30' : 'bg-blue-50 text-blue-700 border border-blue-200'} backdrop-blur-sm`}>
              Waterloo, Canada
            </span>
          </div>
          
          <h1 className={`text-6xl sm:text-7xl lg:text-8xl font-bold tracking-tight mb-6 ${isDarkMode ? 'text-white' : 'text-neutral-900'}`}>
            Dara Lab
          </h1>
          <p className={`text-xl sm:text-2xl lg:text-3xl ${isDarkMode ? 'text-neutral-300' : 'text-neutral-700'} max-w-3xl mx-auto font-light leading-relaxed mb-8`}>
            Next-generation AI research lab building domain-specific reasoning models for high-stakes, information-dense environments.
          </p>
          <p className={`text-base sm:text-lg ${isDarkMode ? 'text-neutral-400' : 'text-neutral-600'} max-w-2xl mx-auto leading-relaxed`}>
            Combining machine reasoning, scientific computing, and advanced information ranking to power critical decision systems.
          </p>
          
          <div className="mt-12 flex flex-col sm:flex-row gap-4 justify-center items-center">
            <button 
              onClick={() => document.getElementById('mission')?.scrollIntoView({ behavior: 'smooth' })}
              className={`group inline-flex items-center gap-2 px-8 py-4 ${isDarkMode ? 'bg-white text-neutral-900 hover:bg-neutral-100' : 'bg-neutral-900 text-white hover:bg-neutral-800'} rounded-full transition-all duration-300 hover:scale-105 font-medium shadow-lg hover:shadow-2xl`}
            >
              Explore Our Work
              <svg className="w-4 h-4 group-hover:translate-y-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </button>
            
            <button 
              onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
              className={`inline-flex items-center gap-2 px-8 py-4 ${isDarkMode ? 'bg-white/10 text-white border-white/20 hover:bg-white/20' : 'bg-white/80 text-neutral-900 border-neutral-200 hover:bg-white'} backdrop-blur-sm border rounded-full transition-all duration-300 hover:scale-105 font-medium shadow-lg`}
            >
              Get in Touch
            </button>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
          <svg className={`w-6 h-6 ${isDarkMode ? 'text-white/50' : 'text-neutral-400'}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
          </svg>
        </div>
      </section>

      {/* Mission Section */}
      <section id="mission" className={`py-24 px-6 ${isDarkMode ? 'bg-gradient-to-b from-neutral-900 to-neutral-800' : 'bg-gradient-to-b from-white to-neutral-50'} transition-colors duration-500`}>
        <div className="max-w-6xl mx-auto">
          <h2 className={`text-5xl sm:text-6xl font-bold text-center mb-8 ${isDarkMode ? 'text-white' : 'text-neutral-900'} transition-all duration-1000 delay-100 ${fadeIn}`}>
            Mission
          </h2>
          
          <div className={`max-w-3xl mx-auto text-center mb-20 transition-all duration-1000 delay-200 ${fadeIn}`}>
            <p className={`text-xl ${isDarkMode ? 'text-neutral-300' : 'text-neutral-600'} leading-relaxed mb-6`}>
              We accelerate progress in applied AI by building transparent, high-performance systems that think clearly — and explain how they think.
            </p>
            <p className={`text-lg ${isDarkMode ? 'text-neutral-400' : 'text-neutral-500'} mb-4`}>
              Our work focuses on high-stakes, information-dense environments where reasoning clarity and decision quality matter most.
            </p>
            <p className={`text-lg ${isDarkMode ? 'text-neutral-400' : 'text-neutral-500'}`}>
              We do this by:
            </p>
          </div>

          <div className="grid sm:grid-cols-2 gap-6 lg:gap-8">
            {[
              {
                title: "Domain-Specific Reasoning Models",
                desc: "Building specialized AI systems trained on real-world constraints, capable of deep reasoning and rapid adaptation to complex domains.",
                icon: (
                  <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                  </svg>
                ),
                gradient: "from-blue-500/20 to-purple-500/20"
              },
              {
                title: "Scientific Computing Innovation",
                desc: "Applying advanced computational methods and simulation frameworks to enable breakthrough research in technical and scientific fields.",
                icon: (
                  <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
                  </svg>
                ),
                gradient: "from-green-500/20 to-emerald-500/20"
              },
              {
                title: "Information Ranking & Prioritization",
                desc: "Developing sophisticated algorithms to extract, rank, and organize critical signals from massive, noisy data streams in real-time.",
                icon: (
                  <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 4h13M3 8h9m-9 4h9m5-4v12m0 0l-4-4m4 4l4-4" />
                  </svg>
                ),
                gradient: "from-orange-500/20 to-red-500/20"
              },
              {
                title: "Transparent Evaluation Tools",
                desc: "Creating rigorous benchmarking and auditing frameworks for machine reasoning to ensure trust, alignment, and safety at scale.",
                icon: (
                  <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                ),
                gradient: "from-cyan-500/20 to-blue-500/20"
              }
            ].map((item, i) => (
              <div
                key={i}
                className={`group relative p-8 ${isDarkMode ? 'bg-neutral-800/50 border-neutral-700 hover:border-neutral-600' : 'bg-white border-neutral-200 hover:border-neutral-300'} rounded-2xl border backdrop-blur-sm shadow-sm hover:shadow-2xl transition-all duration-500 overflow-hidden ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
                style={{ transitionDelay: `${300 + i * 100}ms` }}
              >
                {/* Gradient Glow on Hover */}
                <div className={`absolute inset-0 bg-gradient-to-br ${item.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-xl`} />
                
                <div className="relative z-10">
                  <div className={`mb-4 group-hover:scale-110 transition-transform duration-300 inline-block ${isDarkMode ? 'text-blue-400' : 'text-blue-600'}`}>
                    {item.icon}
                  </div>
                  <h3 className={`text-xl font-semibold mb-3 ${isDarkMode ? 'text-white' : 'text-neutral-900'}`}>
                    {item.title}
                  </h3>
                  <p className={`${isDarkMode ? 'text-neutral-400' : 'text-neutral-600'} leading-relaxed`}>
                    {item.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Areas of Focus */}
      <section className={`py-24 px-6 ${isDarkMode ? 'bg-neutral-800' : 'bg-neutral-50'} transition-colors duration-500`}>
        <div className="max-w-6xl mx-auto">
          <h2 className={`text-5xl sm:text-6xl font-bold text-center mb-8 ${isDarkMode ? 'text-white' : 'text-neutral-900'}`}>
            Areas of Focus
          </h2>
          
          <p className={`text-center ${isDarkMode ? 'text-neutral-400' : 'text-neutral-600'} mb-16 max-w-2xl mx-auto text-lg leading-relaxed`}>
            From fundamental reasoning research to real-world deployment in geospatial intelligence, financial markets, and critical infrastructure—our work spans the full spectrum of high-stakes AI applications.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {focusAreas.map((item, i) => (
              <div
                key={i}
                className={`group relative p-8 ${isDarkMode ? 'bg-neutral-900/50 border-neutral-700 hover:border-blue-500/50' : 'bg-white border-neutral-200 hover:border-blue-200'} rounded-2xl border backdrop-blur-sm shadow-sm hover:shadow-2xl transition-all duration-500 flex flex-col`}
              >
                {/* Glow Effect */}
                <div className="absolute inset-0 bg-gradient-to-br from-blue-500/0 to-purple-500/0 group-hover:from-blue-500/10 group-hover:to-purple-500/10 rounded-2xl transition-all duration-500" />
                
                <div className="relative z-10 flex-1">
                  <div className="flex items-start justify-between mb-5">
                    <div className={`group-hover:scale-110 transition-transform duration-300 ${isDarkMode ? 'text-blue-400' : 'text-blue-600'}`}>
                      {item.icon}
                    </div>
                    <span className={`text-xs px-3 py-1 rounded-full ${isDarkMode ? 'bg-blue-500/20 text-blue-300' : 'bg-blue-50 text-blue-700'}`}>
                      {item.tag}
                    </span>
                  </div>
                  
                  <h3 className={`text-lg font-semibold mb-3 ${isDarkMode ? 'text-white' : 'text-neutral-900'}`}>
                    {item.title}
                  </h3>
                  <p className={`${isDarkMode ? 'text-neutral-400' : 'text-neutral-600'} text-sm leading-relaxed`}>
                    {item.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Trust Indicators / Partners */}
      {/* <section className={`py-16 px-6 ${isDarkMode ? 'bg-neutral-900 border-neutral-800' : 'bg-white border-neutral-100'} border-y transition-colors duration-500`}>
        <div className="max-w-6xl mx-auto text-center">
          <p className={`text-sm uppercase tracking-wider ${isDarkMode ? 'text-neutral-500' : 'text-neutral-400'} mb-8`}>
            Trusted by Leading Research Institutions & High-Stakes Organizations
          </p>
          <div className="flex flex-wrap justify-center items-center gap-12 opacity-50">
            {['University Partners', 'Tech Companies', 'Government Labs', 'Financial Institutions'].map((partner, i) => (
              <div key={i} className={`text-lg font-semibold ${isDarkMode ? 'text-neutral-600' : 'text-neutral-300'}`}>
                {partner}
              </div>
            ))}
          </div>
        </div>
      </section> */}

      {/* How We Work - Process */}
      <section className={`py-24 px-6 ${isDarkMode ? 'bg-neutral-800' : 'bg-neutral-50'} transition-colors duration-500`}>
        <div className="max-w-6xl mx-auto">
          <h2 className={`text-4xl sm:text-5xl font-bold text-center mb-6 ${isDarkMode ? 'text-white' : 'text-neutral-900'}`}>
            How We Work
          </h2>
          <p className={`text-center ${isDarkMode ? 'text-neutral-400' : 'text-neutral-600'} mb-16 max-w-2xl mx-auto`}>
            Our approach combines rigorous research methodology with rapid iteration cycles, ensuring both theoretical soundness and practical impact.
          </p>
          
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                step: "01",
                title: "Research & Discovery",
                desc: "We identify critical gaps in AI reasoning and real-world applications through deep domain analysis and collaboration with field experts.",
                icon: (
                  <svg className="w-8 h-8 mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                  </svg>
                )
              },
              {
                step: "02",
                title: "Build & Validate",
                desc: "We develop transparent systems with rigorous evaluation frameworks, comprehensive testing in simulated high-stakes environments, and continuous benchmarking.",
                icon: (
                  <svg className="w-8 h-8 mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                  </svg>
                )
              },
              {
                step: "03",
                title: "Deploy & Iterate",
                desc: "We work closely with partners to deploy solutions in production environments and continuously improve based on real-world performance data and feedback.",
                icon: (
                  <svg className="w-8 h-8 mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                )
              }
            ].map((item, i) => (
              <div key={i} className="relative">
                <div className={`${isDarkMode ? 'text-blue-400' : 'text-blue-600'}`}>
                  {item.icon}
                </div>
                <div className={`text-6xl font-bold ${isDarkMode ? 'text-neutral-700' : 'text-neutral-200'} mb-4`}>
                  {item.step}
                </div>
                <h3 className={`text-xl font-semibold mb-3 ${isDarkMode ? 'text-white' : 'text-neutral-900'}`}>
                  {item.title}
                </h3>
                <p className={`${isDarkMode ? 'text-neutral-400' : 'text-neutral-600'} leading-relaxed`}>
                  {item.desc}
                </p>
                
                {i < 2 && (
                  <div className={`hidden md:block absolute top-12 -right-4 w-8 h-0.5 ${isDarkMode ? 'bg-neutral-700' : 'bg-neutral-300'}`} />
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter Signup */}
      <section className={`py-16 px-6 ${isDarkMode ? 'bg-neutral-900' : 'bg-white'} transition-colors duration-500`}>
        <div className="max-w-2xl mx-auto text-center">
          <h3 className={`text-3xl font-bold mb-4 ${isDarkMode ? 'text-white' : 'text-neutral-900'}`}>
            Stay Updated
          </h3>
          <p className={`${isDarkMode ? 'text-neutral-400' : 'text-neutral-600'} mb-8`}>
            Get insights on AI reasoning research, new tools, and developments in high-stakes decision systems.
          </p>
          
          <form className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
            <input
              type="email"
              placeholder="your@email.com"
              className={`flex-1 px-5 py-3 rounded-xl ${isDarkMode ? 'bg-neutral-800 border-neutral-700 text-white placeholder-neutral-500' : 'bg-neutral-50 border-neutral-300 text-neutral-900 placeholder-neutral-400'} border focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all`}
            />
            <button
              type="submit"
              className={`px-6 py-3 ${isDarkMode ? 'bg-white text-neutral-900 hover:bg-neutral-100' : 'bg-neutral-900 text-white hover:bg-neutral-800'} rounded-xl font-medium transition-all duration-300 hover:scale-105 shadow-lg`}
            >
              Subscribe
            </button>
          </form>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className={`py-24 px-6 ${isDarkMode ? 'bg-gradient-to-b from-neutral-800 to-neutral-900' : 'bg-gradient-to-b from-neutral-50 to-white'} transition-colors duration-500`}>
        <div className="max-w-2xl mx-auto">
          <h2 className={`text-4xl sm:text-5xl font-bold mb-6 text-center ${isDarkMode ? 'text-white' : 'text-neutral-900'}`}>
            Let's Collaborate
          </h2>
          <p className={`text-center ${isDarkMode ? 'text-neutral-400' : 'text-neutral-600'} mb-12 text-lg leading-relaxed`}>
            We partner with researchers, engineers, and institutions working on the next generation of intelligent systems for high-stakes environments.
          </p>

          <form
            action="https://formspree.io/f/yourFormID"
            method="POST"
            className={`${isDarkMode ? 'bg-neutral-800/50 border-neutral-700' : 'bg-white border-neutral-200'} p-8 sm:p-10 rounded-2xl shadow-2xl border backdrop-blur-sm`}
          >
            <div className="space-y-6">
              <div>
                <label htmlFor="name" className={`block text-sm font-medium ${isDarkMode ? 'text-neutral-300' : 'text-neutral-700'} mb-2`}>
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  className={`w-full px-4 py-3 border ${isDarkMode ? 'bg-neutral-900/50 border-neutral-700 text-white placeholder-neutral-500' : 'bg-neutral-50 border-neutral-300 text-neutral-900 placeholder-neutral-400'} rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all`}
                />
              </div>
              
              <div>
                <label htmlFor="email" className={`block text-sm font-medium ${isDarkMode ? 'text-neutral-300' : 'text-neutral-700'} mb-2`}>
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  className={`w-full px-4 py-3 border ${isDarkMode ? 'bg-neutral-900/50 border-neutral-700 text-white placeholder-neutral-500' : 'bg-neutral-50 border-neutral-300 text-neutral-900 placeholder-neutral-400'} rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all`}
                />
              </div>
              
              <div>
                <label htmlFor="message" className={`block text-sm font-medium ${isDarkMode ? 'text-neutral-300' : 'text-neutral-700'} mb-2`}>
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={5}
                  required
                  className={`w-full px-4 py-3 border ${isDarkMode ? 'bg-neutral-900/50 border-neutral-700 text-white placeholder-neutral-500' : 'bg-neutral-50 border-neutral-300 text-neutral-900 placeholder-neutral-400'} rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all resize-none`}
                />
              </div>
              
              <button
                type="submit"
                className={`w-full ${isDarkMode ? 'bg-white text-neutral-900 hover:bg-neutral-100' : 'bg-neutral-900 text-white hover:bg-neutral-800'} font-semibold py-4 rounded-xl transition-all duration-300 hover:scale-[1.02] shadow-lg hover:shadow-2xl`}
              >
                Send Message
              </button>
            </div>
          </form>
        </div>
      </section>

      {/* Footer */}
      <footer className={`${isDarkMode ? 'bg-neutral-900 border-neutral-800' : 'bg-white border-neutral-200'} border-t transition-colors duration-500`}>
        <div className="max-w-6xl mx-auto px-6 py-12">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div className="md:col-span-2">
              <h3 className={`text-2xl font-bold mb-3 ${isDarkMode ? 'text-white' : 'text-neutral-900'}`}>
                Dara Lab
              </h3>
              <p className={`${isDarkMode ? 'text-neutral-400' : 'text-neutral-600'} text-sm leading-relaxed mb-2`}>
                A next-generation AI research lab based in Waterloo, building domain-specific reasoning models for high-stakes, information-dense environments.
              </p>
              <p className={`${isDarkMode ? 'text-neutral-500' : 'text-neutral-500'} text-xs`}>
                Waterloo, Ontario, Canada
              </p>
            </div>
            
            <div>
              <h4 className={`font-semibold mb-3 ${isDarkMode ? 'text-white' : 'text-neutral-900'}`}>
                Research
              </h4>
              <ul className="space-y-2">
                {['Publications', 'Tools', 'Blog', 'Careers'].map(item => (
                  <li key={item}>
                    <a href="#" className={`text-sm ${isDarkMode ? 'text-neutral-400 hover:text-white' : 'text-neutral-600 hover:text-neutral-900'} transition-colors`}>
                      {item}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
            
            <div>
              <h4 className={`font-semibold mb-3 ${isDarkMode ? 'text-white' : 'text-neutral-900'}`}>
                Connect
              </h4>
              <ul className="space-y-2">
                {['Twitter', 'GitHub', 'LinkedIn', 'Email'].map(item => (
                  <li key={item}>
                    <a href="#" className={`text-sm ${isDarkMode ? 'text-neutral-400 hover:text-white' : 'text-neutral-600 hover:text-neutral-900'} transition-colors`}>
                      {item}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
          
          <div className={`pt-8 border-t ${isDarkMode ? 'border-neutral-800' : 'border-neutral-200'} flex flex-col sm:flex-row justify-between items-center gap-4`}>
            <p className={`text-sm ${isDarkMode ? 'text-neutral-500' : 'text-neutral-500'}`}>
              © {new Date().getFullYear()} Dara Lab. All rights reserved.
            </p>
            <div className="flex gap-6">
              {['Privacy', 'Terms', 'Security'].map(item => (
                <a key={item} href="#" className={`text-sm ${isDarkMode ? 'text-neutral-500 hover:text-neutral-300' : 'text-neutral-500 hover:text-neutral-700'} transition-colors`}>
                  {item}
                </a>
              ))}
            </div>
          </div>
        </div>
      </footer>
    </main>
  );
}