import React, { useState } from 'react';
import { ChevronRight, Home, Shield, TrendingUp, Users, Star, Phone, Mail, MapPin } from 'lucide-react';

const LandingPage: React.FC = () => {
  // Sample data for projects and testimonials
  const projects = [
    {
      id: '1',
      title: 'Modern Family Home',
      image: '/pexels-brett-sayles-2881232.svg',
      description: 'Beautiful 4-bedroom family home with modern amenities',
      status: 'completed'
    },
    {
      id: '2',
      title: 'Luxury Condo',
      image: 'pexels-brett-sayles-2881232-1.svg',
      description: 'High-end condominium in downtown area',
      status: 'completed'
    },
    {
      id: '3',
      title: 'Commercial Building',
      image: 'pexels-brett-sayles-2881232-2.svg',
      description: 'Prime commercial real estate opportunity',
      status: 'ongoing'
    },
    {
      id: '4',
      title: 'Suburban House',
      image: 'pexels-brett-sayles-2881232-3.svg',
      description: 'Charming suburban home with large yard',
      status: 'completed'
    }
  ];

  const testimonials = [
    {
      id: '1',
      name: 'Sarah Johnson',
      role: 'Home Buyer',
      company: 'Tech Solutions Inc.',
      content: 'Real Trust made my home buying experience incredibly smooth. Their attention to detail and professional service exceeded my expectations.',
      rating: 5,
      image: 'Ellipse 28.jpg'
    },
    {
      id: '2',
      name: 'Michael Chen',
      role: 'Property Investor',
      company: 'Chen Holdings',
      content: 'The marketing strategies and design consultation provided by Real Trust significantly increased the value of my property portfolio.',
      rating: 5,
      image: 'Ellipse 29.jpg'
    },
    {
      id: '3',
      name: 'Emily Rodriguez',
      role: 'First-time Buyer',
      company: 'Marketing Pro',
      content: 'As a first-time buyer, I was nervous about the process. Real Trust guided me every step of the way with patience and expertise.',
      rating: 5,
      image: 'Ellipse 31.jpg'
    },
    {
      id: '4',
      name: 'David Thompson',
      role: 'Commercial Client',
      company: 'Thompson Enterprises',
      content: 'Outstanding commercial real estate services. Their market knowledge and negotiation skills saved us significant costs.',
      rating: 5,
      image: 'Ellipse 33.jpg'
    }
  ];

  const [contactForm, setContactForm] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });
  const [newsletterEmail, setNewsletterEmail] = useState('');
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [newsletterSubmitted, setNewsletterSubmitted] = useState(false);

  const handleContactSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real app, this would send data to a backend
    console.log('Contact form submitted:', contactForm);
    setContactForm({ name: '', email: '', phone: '', message: '' });
    setFormSubmitted(true);
    setTimeout(() => setFormSubmitted(false), 3000);
  };

  const handleNewsletterSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real app, this would send data to a backend
    console.log('Newsletter subscription:', newsletterEmail);
    setNewsletterEmail('');
    setNewsletterSubmitted(true);
    setTimeout(() => setNewsletterSubmitted(false), 3000);
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
<header className="bg-white shadow-sm sticky top-0 z-50">
  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <div className="flex justify-between items-center h-16">
      <div className="flex items-center">
        <img
          src="/logo.svg" />

        <nav className="hidden md:flex space-x-8 ml-8">
          <a href="#home" className="text-gray-900 hover:text-blue-600 transition-colors">HOME</a>
          <a href="#services" className="text-gray-900 hover:text-blue-600 transition-colors">SERVICES</a>
          <a href="#about" className="text-gray-900 hover:text-blue-600 transition-colors">ABOUT US</a>
          <a href="#projects" className="text-gray-900 hover:text-blue-600 transition-colors">PROJECTS</a>
          <a href="#testimonials" className="text-gray-900 hover:text-blue-600 transition-colors">TESTIMONIALS</a>
          <a href="#contact" className="text-gray-900 hover:text-blue-600 transition-colors">CONTACT</a>
        </nav>
      </div>
    </div>
  </div>   {/* ← this was missing */}
</header>


      {/* Hero Section */}
      <section id="home" className="relative min-h-screen flex items-center">
  <div
    className="absolute inset-0 bg-cover bg-center"
    style={{
      backgroundImage: "url('/young-couple-examining-blueprints-with-real-estate-agent-while-buying-new-home 1.svg')"
    }}
  ></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="text-white">
            <h1 className="text-5xl lg:text-6xl font-bold leading-tight mb-6">
              Consultation,<br />
              Design,<br />
              <span className="text-orange-400">& Marketing</span>
            </h1>
            <p className="text-xl mb-8 opacity-90">
              Your trusted partner in real estate success. We provide comprehensive consultation, 
              innovative design solutions, and strategic marketing to maximize your property potential.
            </p>
          </div>
          
          {/* Contact Form */}
          <div className="bg-white rounded-lg shadow-2xl p-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-2">Get a Free</h3>
            <h3 className="text-2xl font-bold text-blue-600 mb-6">Consultation</h3>
            
            {formSubmitted ? (
              <div className="bg-green-50 border border-green-200 rounded-lg p-4 text-center">
                <p className="text-green-800 font-semibold">Thank you for your message!</p>
                <p className="text-green-600">We'll get back to you soon.</p>
              </div>
            ) : (
              <form onSubmit={handleContactSubmit} className="space-y-4">
                <input
                  type="text"
                  placeholder="Your Full Name"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  value={contactForm.name}
                  onChange={(e) => setContactForm({...contactForm, name: e.target.value})}
                  required
                />
                <input
                  type="email"
                  placeholder="Your Email Address"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  value={contactForm.email}
                  onChange={(e) => setContactForm({...contactForm, email: e.target.value})}
                  required
                />
                <input
                  type="tel"
                  placeholder="Phone Number"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  value={contactForm.phone}
                  onChange={(e) => setContactForm({...contactForm, phone: e.target.value})}
                  required
                />
                <textarea
                  placeholder="Tell us about your project"
                  rows={4}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent resize-none"
                  value={contactForm.message}
                  onChange={(e) => setContactForm({...contactForm, message: e.target.value})}
                  required
                ></textarea>
                <button
                  type="submit"
                  className="w-full bg-orange-500 hover:bg-orange-600 text-white font-semibold py-3 px-6 rounded-lg transition-colors flex items-center justify-center"
                >
                  Send Message
                  <ChevronRight className="ml-2 h-5 w-5" />
                </button>
              </form>
            )}
          </div>
        </div>
      </section>

      {/* Not Your Average Realtor */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-blue-50 relative overflow-hidden">
        {/* Decorative geometric elements */}
        <div className="absolute top-10 right-20 w-20 h-20 bg-blue-500 rounded-full"></div>
        <div className="absolute top-40 right-10 w-16 h-12 bg-blue-600 rounded"></div>
        <div className="absolute bottom-20 left-10 w-12 h-12 bg-orange-500 rounded-full"></div>
        <div className="absolute bottom-40 right-1/4 w-8 h-8 bg-orange-400 rounded-full"></div>
        
        {/* Large background text */}
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
          <span className="text-9xl font-bold text-gray-100 opacity-30 select-none">REAL TRUST</span>
        </div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center relative z-10">
            <div className="space-y-6">
              <h2 className="text-4xl font-bold text-gray-900 mb-6">
                Not Your Average Realtor
              </h2>
              <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                Real Trust goes beyond traditional real estate services. We combine cutting-edge technology, 
                innovative design thinking, and strategic marketing to deliver exceptional results. Our team 
                of experts works tirelessly to understand your unique needs and exceed your expectations 
                at every step of the journey.
              </p>
              <div className="flex items-center space-x-6">
                <div className="flex items-center space-x-2">
                  <div className="w-4 h-4 bg-blue-600 rounded-full"></div>
                  <span className="text-sm text-gray-600">Innovation</span>
                </div>
                <div className="flex items-center space-x-2">
                  <div className="w-4 h-4 bg-orange-500 rounded-full"></div>
                  <span className="text-sm text-gray-600">Excellence</span>
                </div>
              </div>
            </div>
            
            {/* Modern image layout with geometric elements */}
            <div className="relative">
             {/* Main central image - professional realtor */}
              <div className="relative z-20 w-80 h-80 mx-auto">
                <div className="w-full h-full rounded-full overflow-hidden shadow-2xl border-8 border-white">
                  <img
                    src="\Ellipse 11.jpg"
                    alt="Professional realtor"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
              
              {/* Top right image - happy couple */}
              <div className="absolute -top-8 -right-8 z-10 w-48 h-48">
                <div className="w-full h-full rounded-full overflow-hidden shadow-xl border-6 border-white">
                  <img
                    src="\Ellipse 12.jpg"
                    alt="Happy couple"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
              
              {/* Bottom right image - consultation */}
              <div className="absolute -bottom-4 -right-12 z-10 w-40 h-40">
                <div className="w-full h-full rounded-full overflow-hidden shadow-xl border-6 border-white">
                  <img
                    src="\Ellipse 13.jpg"
                    alt="Professional consultation"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
              {/* Geometric accent elements */}
              <div className="absolute top-1/4 -left-8 w-16 h-16 bg-blue-100 rounded-lg opacity-60"></div>
              <div className="absolute bottom-1/4 -left-4 w-8 h-8 bg-orange-200 rounded-full"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section id="services" className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Why Choose Us?</h2>
            <div className="w-24 h-1 bg-blue-600 mx-auto"></div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center p-8 bg-white rounded-lg shadow-lg hover:shadow-xl transition-shadow">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <TrendingUp className="h-8 w-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Potential ROI</h3>
              <p className="text-gray-600">
                Maximize your investment potential with our data-driven market analysis and strategic 
                planning. We help you make informed decisions that generate the highest returns.
              </p>
            </div>
            
            <div className="text-center p-8 bg-white rounded-lg shadow-lg hover:shadow-xl transition-shadow">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <Shield className="h-8 w-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Design</h3>
              <p className="text-gray-600">
                Transform spaces with our innovative design solutions. From staging to renovations, 
                we create environments that captivate buyers and maximize property value.
              </p>
            </div>
            
            <div className="text-center p-8 bg-white rounded-lg shadow-lg hover:shadow-xl transition-shadow">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <Users className="h-8 w-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Marketing</h3>
              <p className="text-gray-600">
                Reach the right buyers with our comprehensive marketing strategies. We leverage 
                digital platforms, professional photography, and targeted campaigns for optimal exposure.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* About Us */}
      <section id="about" className="py-20 bg-gradient-to-r from-blue-50 to-blue-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="relative">
            {/* Decorative geometric elements */}
            <div className="absolute top-10 left-10 w-64 h-64 bg-blue-100 rounded-full opacity-40"></div>
            <div className="absolute top-0 right-20 w-32 h-32 bg-blue-500 rounded-full"></div>
            <div className="absolute bottom-20 right-10 w-48 h-48 bg-gray-100 rounded-full opacity-60"></div>
            <div className="absolute bottom-0 left-1/4 w-24 h-24 bg-orange-500 rounded-full"></div>
            
            {/* Images layout - matching reference */}
            <div className="relative mb-16">
             {/* Top left image with orange accent square */}
              <div className="absolute top-0 left-20 z-20">
                <img
                  src="\pexels-brett-sayles-2881232.svg"
                  alt="Real estate professional"
                  className="w-48 h-32 object-cover rounded-lg shadow-lg"
                />
                <div className="absolute -bottom-3 -left-3 w-8 h-8 bg-orange-500 rounded"></div>
              </div>
              
              {/* Blue accent square - top center */}
              <div className="absolute top-8 left-80 z-10">
                <div className="w-12 h-12 bg-blue-500 rounded"></div>
              </div>
              
              {/* Center large image */}
              <div className="absolute top-16 left-1/2 transform -translate-x-1/2 z-20">
                <img
                  src="\pexels-andres-ayrton-6578391.svg"
                  alt="Team consultation"
                  className="w-64 h-40 object-cover rounded-lg shadow-lg"
                />
              </div>
              
              {/* Right image with orange accent */}
              <div className="absolute top-4 right-20 z-20">
                <img
                  src="\pexels-fauxels-3182834.svg"
                  alt="Happy clients"
                  className="w-48 h-32 object-cover rounded-lg shadow-lg"
                />
                <div className="absolute -bottom-3 -right-3 w-6 h-6 bg-orange-500 rounded"></div>
              </div>
              
              
              {/* Blue accent square - bottom left */}
              <div className="absolute bottom-0 left-32 z-10">
                <div className="w-16 h-16 bg-blue-300 rounded opacity-60"></div>
              </div>
              
              {/* Blue L-shaped accent - top right */}
              <div className="absolute top-0 right-32 z-10">
                <div className="w-12 h-3 bg-blue-500 rounded"></div>
                <div className="w-3 h-12 bg-blue-500 rounded mt-1"></div>
              </div>
            </div>
            
            {/* Content */}
            <div className="text-center relative z-30 pt-72">
              <h2 className="text-4xl font-bold text-blue-500 mb-8">About US</h2>
              <p className="text-base text-gray-600 max-w-2xl mx-auto mb-8 leading-relaxed">
                Fifteen years of experience in real estate, excellent customer service and a 
                commitment to work hard, listen and follow through. We provide quality service to 
                build relationships with clients and, more importantly, maintain those relationships 
                by communicating effectively.
              </p>
              <button className="bg-white border-2 border-blue-500 text-blue-500 hover:bg-blue-500 hover:text-white font-medium py-2 px-6 rounded transition-all duration-300">
                LEARN MORE
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Our Projects */}
      <section id="projects" className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Project</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              We know what buyers are looking for and suggest projects that will bring clients top dollar 
              for the sale of their homes.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {projects.slice(0, 8).map((project) => (
              <div key={project.id} className="group relative overflow-hidden rounded-lg shadow-lg hover:shadow-xl transition-all duration-300">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="absolute bottom-4 left-4 text-white">
                    <h3 className="font-semibold">{project.title}</h3>
                    <p className="text-sm opacity-90">{project.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section id="testimonials" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Happy Clients</h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {testimonials.map((testimonial) => (
              <div key={testimonial.id} className="bg-white rounded-lg shadow-lg p-6 text-center hover:shadow-xl transition-shadow">
                <img
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="w-20 h-20 rounded-full mx-auto mb-4 object-cover"
                />
                <div className="flex justify-center mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                <p className="text-gray-600 mb-4 text-sm leading-relaxed">
                  "{testimonial.content}"
                </p>
                <h4 className="font-bold text-gray-900">{testimonial.name}</h4>
                <p className="text-sm text-gray-500">{testimonial.role}</p>
                <p className="text-sm text-gray-500">{testimonial.company}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
       <section className="py-20 bg-gray-900 text-white">
  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <div className="relative text-center mb-12">
      <h2
  className="text-3xl font-bold mb-8 text-white px-8 py-16 rounded w-full"
  style={{
    backgroundImage: 'url("/Rectangle.svg")',
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center',
    minHeight: '300px', 
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    textAlign: 'center',
  }}
>
  Learn more about our listing process, as well as our <br />
  additional staging and design work.
</h2>
      <button className="bg-white text-gray-900 hover:bg-gray-100 font-semibold py-3 px-8 rounded transition-colors">
        LEARN MORE
      </button>
    </div>
  </div>
</section>

      {/* Newsletter Section */}
      <section className="py-12 bg-blue-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center">
            {/* Navigation Links */}
            <nav className="flex space-x-8">
              <a href="#home" className="text-white hover:text-blue-200 transition-colors">Home</a>
              <a href="#services" className="text-white hover:text-blue-200 transition-colors">Services</a>
              <a href="#projects" className="text-white hover:text-blue-200 transition-colors">Projects</a>
              <a href="#testimonials" className="text-white hover:text-blue-200 transition-colors">Testimonials</a>
              <a href="#contact" className="text-white hover:text-blue-200 transition-colors">Contact</a>
            </nav>
            
            {/* Newsletter Subscription */}
            <div className="flex items-center space-x-4">
              <span className="text-white font-medium">Subscribe Us</span>
              {newsletterSubmitted ? (
                <div className="text-green-300 font-semibold">
                  Thank you for subscribing!
                </div>
              ) : (
                <form onSubmit={handleNewsletterSubmit} className="flex items-center space-x-2">
                  <input
                    type="email"
                    placeholder="Enter Email Address"
                    className="px-4 py-2 rounded border-0 text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-300"
                    value={newsletterEmail}
                    onChange={(e) => setNewsletterEmail(e.target.value)}
                    required
                  />
                  <button
                    type="submit"
                    className="bg-white text-blue-600 px-4 py-2 rounded hover:bg-gray-100 transition-colors font-medium"
                  >
                    Subscribe
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer id="contact" className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
              <p className="text-gray-400">
                © 2024 Real Trust. All rights reserved.
              </p>
            </div>
        </div>
      </footer>
    </div>
  );
};

export default LandingPage;
