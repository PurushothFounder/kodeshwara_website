import React, { useState, useEffect } from 'react';
import { ChevronDown, Download, Star, Trophy, Users, Shield, Play, Menu, X, CheckCircle, Award, Target, Zap, Rocket, TrendingUp } from 'lucide-react';

const KodeshwaraFantasyWebsite = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const [activeFormat, setActiveFormat] = useState('T20');

  // Logo placeholder - you'll need to add your actual logo
  const logo = "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='40' height='40' viewBox='0 0 40 40'%3E%3Crect width='40' height='40' rx='8' fill='%233B82F6'/%3E%3Ctext x='20' y='28' text-anchor='middle' fill='white' font-size='24' font-weight='bold'%3EK%3C/text%3E%3C/svg%3E";

  // Scroll to section handler
  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setActiveSection(sectionId);
      setIsMenuOpen(false);
    }
  };

  // Handle scroll for active section
  useEffect(() => {
    const handleScroll = () => {
      const sections = ['home', 'features', 'how-to-play', 'prizes', 'download'];
      const scrollPosition = window.scrollY + 100;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const offsetTop = element.offsetTop;
          const offsetHeight = element.offsetHeight;

          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Fantasy points data based on your backend
  const fantasyPoints = {
    T10: {
      batting: {
        basic: [
          { action: "Run", points: "+1" },
          { action: "Boundary (4)", points: "+1" },
          { action: "Six", points: "+2" },
          { action: "Duck", points: "-2" }
        ],
        milestones: [
          { runs: "30 runs", points: "+8" },
          { runs: "50 runs", points: "+16" },
          { runs: "100 runs", points: "+25" }
        ],
        strikeRate: [
          { range: "190+ SR", points: "+6" },
          { range: "170-189 SR", points: "+4" },
          { range: "150-169 SR", points: "+2" },
          { range: "71-80 SR", points: "-2" },
          { range: "61-70 SR", points: "-4" },
          { range: "Below 60 SR", points: "-6" }
        ]
      },
      bowling: {
        basic: [
          { action: "Wicket", points: "+25" },
          { action: "Maiden Over", points: "+16" },
          { action: "LBW/Bowled Bonus", points: "+8" }
        ],
        milestones: [
          { wickets: "2 wickets", points: "+8" },
          { wickets: "3 wickets", points: "+16" },
          { wickets: "4+ wickets", points: "+16" }
        ],
        economy: [
          { rate: "Under 7.0", points: "+6" },
          { rate: "7.01-8.0", points: "+4" },
          { rate: "8.01-9.0", points: "+2" },
          { rate: "14.0-15.0", points: "-2" },
          { rate: "15.01-16.0", points: "-4" },
          { rate: "Above 16.0", points: "-6" }
        ]
      }
    },
    T20: {
      batting: {
        basic: [
          { action: "Run", points: "+1" },
          { action: "Boundary (4)", points: "+1" },
          { action: "Six", points: "+2" },
          { action: "Duck", points: "-2" }
        ],
        milestones: [
          { runs: "30 runs", points: "+4" },
          { runs: "50 runs", points: "+8" },
          { runs: "100 runs", points: "+16" }
        ],
        strikeRate: [
          { range: "170+ SR", points: "+6" },
          { range: "150-169 SR", points: "+4" },
          { range: "130-149 SR", points: "+2" },
          { range: "71-100 SR", points: "-2" },
          { range: "61-70 SR", points: "-4" },
          { range: "Below 60 SR", points: "-6" }
        ]
      },
      bowling: {
        basic: [
          { action: "Wicket", points: "+25" },
          { action: "Maiden Over", points: "+12" },
          { action: "LBW/Bowled Bonus", points: "+8" }
        ],
        milestones: [
          { wickets: "3 wickets", points: "+4" },
          { wickets: "4 wickets", points: "+8" },
          { wickets: "5+ wickets", points: "+12" }
        ],
        economy: [
          { rate: "Under 5.0", points: "+6" },
          { rate: "5.01-6.0", points: "+4" },
          { rate: "6.01-7.0", points: "+2" },
          { rate: "10.0-11.0", points: "-2" },
          { rate: "11.01-12.0", points: "-4" },
          { rate: "Above 12.0", points: "-6" }
        ]
      }
    },
    ODI: {
      batting: {
        basic: [
          { action: "Run", points: "+1" },
          { action: "Boundary (4)", points: "+1" },
          { action: "Six", points: "+2" },
          { action: "Duck", points: "-3" }
        ],
        milestones: [
          { runs: "50 runs", points: "+4" },
          { runs: "100 runs", points: "+8" }
        ],
        strikeRate: [
          { range: "140+ SR", points: "+6" },
          { range: "120-139 SR", points: "+4" },
          { range: "100-119 SR", points: "+2" },
          { range: "41-50 SR", points: "-2" },
          { range: "31-40 SR", points: "-4" },
          { range: "Below 30 SR", points: "-6" }
        ]
      },
      bowling: {
        basic: [
          { action: "Wicket", points: "+25" },
          { action: "Maiden Over", points: "+4" },
          { action: "LBW/Bowled Bonus", points: "+8" }
        ],
        milestones: [
          { wickets: "4 wickets", points: "+4" },
          { wickets: "5 wickets", points: "+8" },
          { wickets: "6+ wickets", points: "+12" }
        ],
        economy: [
          { rate: "Under 2.5", points: "+6" },
          { rate: "2.51-3.5", points: "+4" },
          { rate: "3.51-4.5", points: "+2" },
          { rate: "7.0-8.0", points: "-2" },
          { rate: "8.01-9.0", points: "-4" },
          { rate: "Above 9.0", points: "-6" }
        ]
      }
    }
  };

  const Header = () => (
    <header className="fixed top-0 w-full bg-white/95 backdrop-blur-sm z-50 shadow-lg">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          {/* Logo */}
         <div className="flex items-center space-x-2">
          <img 
            src={logo} 
            alt="Kodeshwara Fantasy Cricket Logo" 
            className="w-10 h-10 rounded-lg object-contain"
          />
          <div className="font-bold text-xl text-gray-800">
            Kodeshwara <span className="text-blue-600">Fantasy</span>
          </div>
        </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            {['home', 'features', 'how-to-play', 'prizes', 'download'].map((section) => (
              <button
                key={section}
                onClick={() => scrollToSection(section)}
                className={`capitalize transition-colors ${
                  activeSection === section
                    ? 'text-blue-600 font-semibold'
                    : 'text-gray-600 hover:text-blue-600'
                }`}
              >
                {section.replace('-', ' ')}
              </button>
            ))}
          </nav>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t">
            <nav className="flex flex-col space-y-4">
              {['home', 'features', 'how-to-play', 'prizes', 'download'].map((section) => (
                <button
                  key={section}
                  onClick={() => scrollToSection(section)}
                  className={`capitalize text-left transition-colors ${
                    activeSection === section
                      ? 'text-blue-600 font-semibold'
                      : 'text-gray-600 hover:text-blue-600'
                  }`}
                >
                  {section.replace('-', ' ')}
                </button>
              ))}
            </nav>
          </div>
        )}
      </div>
    </header>
  );

  const HeroSection = () => (
    <section id="home" className="pt-20 pb-16 bg-gradient-to-br from-blue-50 to-purple-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="text-center lg:text-left">
            
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
              The Next Big Thing in
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">
                {' '}Fantasy Cricket
              </span>
            </h1>
            <p className="text-xl text-gray-700 mb-8 leading-relaxed">
              Be among the first to experience India's most innovative fantasy cricket platform. 
              Built by cricket lovers, for cricket lovers. Your cricket knowledge deserves better rewards!
            </p>
            
            {/* Startup Stats */}
            <div className="grid grid-cols-3 gap-4 mb-8">
              <div className="text-center">
                <div className="text-2xl font-bold text-blue-600 flex items-center justify-center">
                  <TrendingUp className="w-6 h-6 mr-1" />
                  NEW
                </div>
                <div className="text-sm text-gray-600">Fresh Launch</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-green-600">1%</div>
                <div className="text-sm text-gray-600">Lifetime Referral</div>
              </div>
            </div>

            {/* Early Adopter Benefits */}
            <div className="bg-gradient-to-r from-yellow-100 to-orange-100 rounded-lg p-4 mb-8">
              <h3 className="font-bold text-orange-800 mb-2">🚀 Early Bird Benefits:</h3>
              <ul className="text-sm text-orange-700 space-y-1">
                <li>• Be first to join our growing community</li>
                <li>• Shape the platform with your feedback</li>
                <li>• Exclusive early adopter contests</li>
                <li>• Priority customer support</li>
              </ul>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <button
                onClick={() => scrollToSection('download')}
                className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-lg font-semibold hover:shadow-lg transform hover:scale-105 transition-all duration-200 flex items-center justify-center space-x-2"
              >
                <Download className="w-5 h-5" />
                <span>Join the Revolution</span>
              </button>
              <button
                onClick={() => scrollToSection('how-to-play')}
                className="border-2 border-blue-600 text-blue-600 px-8 py-4 rounded-lg font-semibold hover:bg-blue-600 hover:text-white transition-all duration-200 flex items-center justify-center space-x-2"
              >
                <Play className="w-5 h-5" />
                <span>How to Play</span>
              </button>
            </div>
          </div>

          {/* Right Content - App Preview */}
          <div className="relative">
            <div className="relative mx-auto w-80 h-96 bg-gradient-to-br from-gray-800 to-gray-900 rounded-3xl p-4 shadow-2xl">
              <div className="w-full h-full bg-gradient-to-br from-blue-600 to-purple-600 rounded-2xl overflow-hidden relative">
                {/* Mock App Screen */}
                <div className="absolute inset-0 bg-white/10 backdrop-blur-sm">
                  <div className="p-6 text-white">
                    <h3 className="text-lg font-bold mb-4">Coming Soon</h3>
                    <div className="space-y-3">
                      <div className="bg-white/20 rounded-lg p-3">
                        <div className="flex justify-between items-center">
                          <span className="text-sm">IPL 2026</span>
                          <span className="text-xs bg-green-400 text-green-900 px-2 py-1 rounded">Ready</span>
                        </div>
                      </div>
                      <div className="bg-white/20 rounded-lg p-3">
                        <div className="text-sm">Early Access</div>
                        <div className="text-2xl font-bold">Available Now</div>
                      </div>
                      <div className="bg-white/20 rounded-lg p-3">
                        <div className="text-sm">Welcome Bonus</div>
                        <div className="text-xl font-bold">₹50 Free</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Floating Elements */}
            <div className="absolute -bottom-4 -left-4 bg-green-400 text-green-900 px-3 py-1 rounded-full text-sm font-semibold animate-pulse">
              100% Safe
            </div>
            <div className="absolute -top-4 -right-4 bg-orange-400 text-orange-900 px-3 py-1 rounded-full text-sm font-semibold animate-bounce">
              Just Launched!
            </div>
          </div>
        </div>
      </div>
    </section>
  );

  const FeaturesSection = () => (
    <section id="features" className="py-16 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            Built Different, Built Better
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            We're not just another fantasy app. We're revolutionizing how cricket fans play and win.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {[
            {
              icon: <Shield className="w-8 h-8" />,
              title: "Enterprise-Grade Security",
              description: "Built with the same security standards as banking apps. Your data and money are protected by military-grade encryption."
            },
            {
              icon: <Zap className="w-8 h-8" />,
              title: "Lightning Fast Performance",
              description: "Optimized for speed and efficiency. Create teams, join contests, and track scores in milliseconds, not minutes."
            },
            {
              icon: <Users className="w-8 h-8" />,
              title: "Growing Community",
              description: "Join our passionate community of cricket enthusiasts. Together, we're building the future of fantasy cricket."
            },
            {
              icon: <Trophy className="w-8 h-8" />,
              title: "Fair & Transparent",
              description: "Every contest is fair, every calculation is transparent. No hidden algorithms, just pure cricket knowledge rewarded."
            },
            {
              icon: <Target className="w-8 h-8" />,
              title: "Smart Scoring System",
              description: "Advanced scoring that rewards true cricket understanding. Different formats, different strategies, different rewards."
            },
            {
              icon: <Award className="w-8 h-8" />,
              title: "Lifetime Earnings",
              description: "Industry-first lifetime referral system. Refer once, earn forever. Help us grow, and we'll help you earn."
            }
          ].map((feature, index) => (
            <div key={index} className="bg-gray-50 p-8 rounded-xl hover:shadow-lg transition-shadow duration-300">
              <div className="text-blue-600 mb-4">{feature.icon}</div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">{feature.title}</h3>
              <p className="text-gray-600 leading-relaxed">{feature.description}</p>
            </div>
          ))}
        </div>

        {/* Vision Section */}
        <div className="mt-16 bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-8 text-white text-center">
          <h3 className="text-2xl font-bold mb-4">Our Vision for the Future</h3>
          <p className="text-lg opacity-90 max-w-3xl mx-auto leading-relaxed">
            We envision a fantasy cricket ecosystem where every cricket fan can turn their passion into prosperity. 
            With cutting-edge technology, fair play, and community-first approach, we're building a platform that 
            will set new standards for the entire industry.
          </p>
        </div>
      </div>
    </section>
  );

  const HowToPlaySection = () => (
    <section id="how-to-play" className="py-16 bg-gradient-to-br from-blue-50 to-purple-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            Simple to Start, Rewarding to Master
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Join the revolution in just 4 simple steps. No complicated rules, just pure cricket fun!
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {[
            {
              step: "1",
              title: "Download & Sign Up",
              description: "Get the app, sign up with your mobile number, and claim your ₹50 welcome bonus instantly",
              icon: <Users className="w-6 h-6" />
            },
            {
              step: "2",
              title: "Create Your Team",
              description: "Pick 11 players within 100 credits budget. Use your cricket knowledge to build the perfect squad",
              icon: <Trophy className="w-6 h-6" />
            },
            {
              step: "3",
              title: "Join Contests",
              description: "Start with free contests or invest small amounts. Choose contests that match your comfort level",
              icon: <Star className="w-6 h-6" />
            },
            {
              step: "4",
              title: "Win & Withdraw",
              description: "Watch your players perform and climb the leaderboard. Withdraw winnings instantly to your bank",
              icon: <CheckCircle className="w-6 h-6" />
            }
          ].map((step, index) => (
            <div key={index} className="text-center">
              <div className="relative mx-auto w-20 h-20 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full flex items-center justify-center text-white font-bold text-2xl mb-4">
                {step.step}
                <div className="absolute -top-2 -right-2 bg-white rounded-full p-2 text-blue-600">
                  {step.icon}
                </div>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">{step.title}</h3>
              <p className="text-gray-600 leading-relaxed">{step.description}</p>
            </div>
          ))}
        </div>

        {/* Fantasy Points System */}
        <div className="bg-white rounded-2xl p-8 shadow-lg">
          <h3 className="text-3xl font-bold text-gray-900 mb-8 text-center">Advanced Scoring System</h3>
          
          {/* Format Selector */}
          <div className="flex justify-center mb-8">
            <div className="bg-gray-100 rounded-lg p-1">
              {['T10', 'T20', 'ODI'].map((format) => (
                <button
                  key={format}
                  onClick={() => setActiveFormat(format)}
                  className={`px-6 py-2 rounded-md font-semibold transition-all ${
                    activeFormat === format
                      ? 'bg-blue-600 text-white shadow-md'
                      : 'text-gray-600 hover:text-blue-600'
                  }`}
                >
                  {format}
                </button>
              ))}
            </div>
          </div>

          {/* Format Info */}
          <div className="text-center mb-8">
            <p className="text-gray-600">
              Points system tailored for {activeFormat} cricket format - rewarding smart cricket knowledge
              {activeFormat === 'ODI' && (
                <span className="block text-sm mt-1 text-blue-600">
                  * Test format coming soon with enhanced milestone rewards
                </span>
              )}
            </p>
          </div>

          {/* Points Breakdown */}
          <div className="grid lg:grid-cols-3 gap-8">
            {/* Batting Points */}
            <div className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-xl p-6">
              <h4 className="text-xl font-bold text-green-700 mb-6 flex items-center">
                <span className="bg-green-100 p-2 rounded-lg mr-3">🏏</span>
                Batting Rewards
              </h4>
              
              {/* Basic Points */}
              <div className="mb-6">
                <h5 className="font-semibold text-green-600 mb-3">Basic Scoring</h5>
                <div className="space-y-2">
                  {fantasyPoints[activeFormat].batting.basic.map((item, index) => (
                    <div key={index} className="flex justify-between text-sm">
                      <span className="text-gray-700">{item.action}</span>
                      <span className="font-semibold text-green-600">{item.points}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Milestones */}
              <div className="mb-6">
                <h5 className="font-semibold text-green-600 mb-3">Milestones</h5>
                <div className="space-y-2">
                  {fantasyPoints[activeFormat].batting.milestones.map((item, index) => (
                    <div key={index} className="flex justify-between text-sm">
                      <span className="text-gray-700">{item.runs}</span>
                      <span className="font-semibold text-green-600">{item.points}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Strike Rate */}
              <div>
                <h5 className="font-semibold text-green-600 mb-3">Strike Rate Bonus</h5>
                <div className="space-y-2">
                  {fantasyPoints[activeFormat].batting.strikeRate.map((item, index) => (
                    <div key={index} className="flex justify-between text-sm">
                      <span className="text-gray-700">{item.range}</span>
                      <span className={`font-semibold ${item.points.startsWith('+') ? 'text-green-600' : 'text-red-600'}`}>
                        {item.points}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Bowling Points */}
            <div className="bg-gradient-to-br from-purple-50 to-violet-50 rounded-xl p-6">
              <h4 className="text-xl font-bold text-purple-700 mb-6 flex items-center">
                <span className="bg-purple-100 p-2 rounded-lg mr-3">⚡</span>
                Bowling Rewards
              </h4>
              
              {/* Basic Points */}
              <div className="mb-6">
                <h5 className="font-semibold text-purple-600 mb-3">Basic Scoring</h5>
                <div className="space-y-2">
                  {fantasyPoints[activeFormat].bowling.basic.map((item, index) => (
                    <div key={index} className="flex justify-between text-sm">
                      <span className="text-gray-700">{item.action}</span>
                      <span className="font-semibold text-purple-600">{item.points}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Milestones */}
              <div className="mb-6">
                <h5 className="font-semibold text-purple-600 mb-3">Wicket Milestones</h5>
                <div className="space-y-2">
                  {fantasyPoints[activeFormat].bowling.milestones.map((item, index) => (
                    <div key={index} className="flex justify-between text-sm">
                      <span className="text-gray-700">{item.wickets}</span>
                      <span className="font-semibold text-purple-600">{item.points}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Economy Rate */}
              <div>
                <h5 className="font-semibold text-purple-600 mb-3">Economy Rate Bonus</h5>
                <div className="space-y-2">
                  {fantasyPoints[activeFormat].bowling.economy.map((item, index) => (
                    <div key={index} className="flex justify-between text-sm">
                      <span className="text-gray-700">{item.rate}</span>
                      <span className={`font-semibold ${item.points.startsWith('+') ? 'text-purple-600' : 'text-red-600'}`}>
                        {item.points}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Fielding & Other Points */}
            <div className="bg-gradient-to-br from-blue-50 to-cyan-50 rounded-xl p-6">
              <h4 className="text-xl font-bold text-blue-700 mb-6 flex items-center">
                <span className="bg-blue-100 p-2 rounded-lg mr-3">🥎</span>
                Fielding & Others
              </h4>
              
              {/* Fielding */}
              <div className="mb-6">
                <h5 className="font-semibold text-blue-600 mb-3">Fielding</h5>
                <div className="space-y-2 text-sm">
                  <div className="flex justify-between">
                    <span className="text-gray-700">Catch</span>
                    <span className="font-semibold text-blue-600">+8</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-700">Stumping</span>
                    <span className="font-semibold text-blue-600">+12</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-700">Run Out (Direct)</span>
                    <span className="font-semibold text-blue-600">+12</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-700">Run Out (Indirect)</span>
                    <span className="font-semibold text-blue-600">+6</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-700">3+ Catches Bonus</span>
                    <span className="font-semibold text-blue-600">+4</span>
                  </div>
                </div>
              </div>

              {/* Captain & Vice-Captain */}
              <div className="mb-6">
                <h5 className="font-semibold text-blue-600 mb-3">Leadership</h5>
                <div className="space-y-2 text-sm">
                  <div className="flex justify-between">
                    <span className="text-gray-700">Captain</span>
                    <span className="font-semibold text-blue-600">2x Points</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-700">Vice-Captain</span>
                    <span className="font-semibold text-blue-600">1.5x Points</span>
                  </div>
                </div>
              </div>

              {/* Playing Status */}
              <div>
                <h5 className="font-semibold text-blue-600 mb-3">Playing Status</h5>
                <div className="space-y-2 text-sm">
                  <div className="flex justify-between">
                    <span className="text-gray-700">Playing11 or Impact Player</span>
                    <span className="font-semibold text-blue-600">+4</span>
                  </div>
                </div>
              </div>

              {/* Note */}
              <div className="mt-6 p-3 bg-yellow-50 rounded-lg">
                <p className="text-xs text-yellow-700">
                  <strong>Note:</strong> Minimum balls/overs required for SR/ER bonus varies by format
                </p>
              </div>
            </div>
          </div>

          {/* Additional Info */}
          <div className="mt-8 text-center">
            <div className="bg-gray-50 rounded-lg p-4">
              <h5 className="font-semibold text-gray-800 mb-2">Coming Soon</h5>
              <p className="text-sm text-gray-600">
                Test cricket format with special milestones: 100 runs (+20 points), 160 runs (+25 points), 
                and 5-day match optimized scoring system
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );

  const PrizesSection = () => (
    <section id="prizes" className="py-16 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            Start Small, Dream Big
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Begin your journey with our beginner-friendly contests and grow towards bigger prizes as our community expands
          </p>
        </div>

        <div className="grid md:grid-cols-5 gap-6 mb-12">
          {[
            {
              type: "Practice League",
              entry: "FREE",
              prize: "Learn & Practice",
              participants: "10-50 players",
              gradient: "from-green-500 to-emerald-600",
              badge: "Perfect for Beginners"
            },
            {
              type: "Starter Contest",
              entry: "₹5 - ₹25",
              prize: "₹10 - ₹50",
              participants: "2-20 players",
              gradient: "from-yellow-500 to-orange-600",
              badge: "Low Risk, Real Rewards"
            },
            {
              type: "Growing League",
              entry: "₹10 - ₹100",
              prize: "₹25 - ₹500",
              participants: "10-100 players",
              gradient: "from-blue-500 to-cyan-600",
              badge: "Building Community"
            },
            {
              type: "Rising Stars",
              entry: "₹25 - ₹250",
              prize: "₹100 - ₹1000",
              participants: "50-200 players",
              gradient: "from-purple-500 to-indigo-600",
              badge: "Growing Prize Pool"
            },
            {
              type: "Future Mega",
              entry: "Coming Soon",
              prize: "₹10,000+",
              participants: "1000+ players",
              gradient: "from-red-500 to-pink-600",
              badge: "The Dream Contest"
            }
          ].map((contest, index) => (
            <div key={index} className="relative overflow-hidden rounded-2xl shadow-lg">
              <div className={`bg-gradient-to-br ${contest.gradient} p-6 text-white relative`}>
                {contest.badge && (
                  <div className="absolute -top-2 -right-2 bg-white text-gray-800 text-xs font-bold px-2 py-1 rounded-lg transform rotate-12">
                    {contest.badge}
                  </div>
                )}
                <h3 className="text-xl font-bold mb-4">{contest.type}</h3>
                <div className="space-y-2">
                  <div className="flex justify-between text-sm">
                    <span>Entry:</span>
                    <span className="font-semibold">{contest.entry}</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span>Prize:</span>
                    <span className="font-semibold">{contest.prize}</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span>Players:</span>
                    <span className="font-semibold">{contest.participants}</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Lifetime Referral System */}
        <div className="bg-gradient-to-r from-yellow-50 to-orange-50 rounded-2xl p-8 mb-12">
          <h3 className="text-3xl font-bold text-gray-900 mb-6 text-center">
            🚀 Revolutionary Referral System - Earn for Life!
          </h3>
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <h4 className="text-xl font-semibold text-orange-600 mb-4">How Our System Works:</h4>
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-start space-x-3">
                  <span className="text-green-500 font-bold">✓</span>
                  <span>Invite friends to join our growing community</span>
                </li>
                <li className="flex items-start space-x-3">
                  <span className="text-green-500 font-bold">✓</span>
                  <span>Earn <strong>1% of their net winnings</strong> forever</span>
                </li>
                <li className="flex items-start space-x-3">
                  <span className="text-green-500 font-bold">✓</span>
                  <span>Works on all contests (excluding Mega contests)</span>
                </li>
                <li className="flex items-start space-x-3">
                  <span className="text-green-500 font-bold">✓</span>
                  <span>Earnings come from platform growth, not user's winnings</span>
                </li>
              </ul>
            </div>
            <div className="bg-white rounded-xl p-6 shadow-lg">
              <h4 className="text-lg font-semibold text-gray-900 mb-4">Future Potential:</h4>
              <div className="space-y-2 text-sm">
                <div className="flex justify-between">
                  <span>If you refer:</span>
                  <span className="font-bold text-blue-600">100 active users</span>
                </div>
                <div className="flex justify-between">
                  <span>Their avg monthly net winning:</span>
                  <span className="font-bold text-green-600">₹1,000 each</span>
                </div>
                <div className="flex justify-between">
                  <span>Your monthly earning (1%):</span>
                  <span className="font-bold text-orange-600">₹10 × 100 = ₹1000</span>
                </div>
                <div className="border-t pt-2 mt-3">
                  <div className="flex justify-between text-lg font-bold">
                    <span>Yearly Passive Income:</span>
                    <span className="text-purple-600">₹12,000+ 🎯</span>
                  </div>
                </div>
              </div>
              <div className="mt-4 text-xs text-gray-500 text-center">
                * As our platform grows, so does your earning potential!
              </div>
            </div>
          </div>
        </div>

        {/* Growth Vision */}
        <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-8 text-white text-center">
          <h3 className="text-2xl font-bold mb-4">🌟 Our Growth Promise</h3>
          <p className="text-lg opacity-90 mb-6">
            We're starting small, but we're thinking big! As our community grows, prize pools will expand, 
            contests will get bigger, and your earning potential will multiply.
          </p>
          <div className="grid md:grid-cols-3 gap-6 text-center">
            <div>
              <div className="text-3xl font-bold mb-2">Phase 1</div>
              <div className="text-sm opacity-75">Launch & Learn</div>
              <div className="text-xs opacity-60 mt-1">₹5-₹1000 contests</div>
            </div>
            <div>
              <div className="text-3xl font-bold mb-2">Phase 2</div>
              <div className="text-sm opacity-75">Scale & Grow</div>
              <div className="text-xs opacity-60 mt-1">₹10,000+ prizes</div>
            </div>
            <div>
              <div className="text-3xl font-bold mb-2">Phase 3</div>
              <div className="text-sm opacity-75">Dominate Market</div>
              <div className="text-xs opacity-60 mt-1">₹1L+ mega contests</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );

  const DownloadSection = () => (
    <section id="download" className="py-16 bg-gradient-to-br from-blue-600 to-purple-700 text-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">
            Join the Fantasy Cricket Revolution
          </h2>
          <p className="text-xl opacity-90 max-w-2xl mx-auto">
            Be among the first to experience the future of fantasy cricket. Download now and start your journey!
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div>
            <div className="space-y-6 mb-8">
              {[
                "🚀 Fresh launch with cutting-edge features",
                "⚡ Ultra-fast app built for performance",
                "🔒 Bank-grade security from day one",
                "💰 Instant withdrawals (when you win!)",
                "🎯 Real-time updates and live scoring",
                "🏆 Start with ₹50 welcome bonus"
              ].map((feature, index) => (
                <div key={index} className="flex items-center space-x-3">
                  <div className="flex-shrink-0 w-6 h-6 bg-white/20 rounded-full flex items-center justify-center">
                    <CheckCircle className="w-4 h-4" />
                  </div>
                  <span className="text-lg">{feature}</span>
                </div>
              ))}
            </div>

            {/* Download Buttons */}
            <div className="space-y-4">
              <a
                href="http://kodeshwara-backend.onrender.com/api/v1/download/app?code=USERTV"
                className="inline-flex items-center justify-center w-full sm:w-auto bg-white text-blue-600 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-all duration-200 space-x-3 group"
              >
                <Download className="w-6 h-6 group-hover:animate-bounce" />
                <div className="text-left">
                  <div className="text-sm">Download for</div>
                  <div className="text-lg font-bold">Android</div>
                </div>
              </a>
              
              <div className="text-sm opacity-75">
                * iOS version in development - coming soon!
              </div>
              
              {/* Early Adopter Badge */}
              <div className="inline-flex items-center bg-gradient-to-r from-yellow-400 to-orange-400 text-yellow-900 px-4 py-2 rounded-full text-sm font-semibold">
                <Star className="w-4 h-4 mr-2" />
                Early Adopter Status Unlocked
              </div>
            </div>
          </div>

          {/* Right Content - QR Code */}
          <div className="text-center">
            <div className="bg-white p-8 rounded-2xl shadow-2xl inline-block">
              <div className="w-48 h-48 bg-gray-200 rounded-lg flex items-center justify-center mb-4">
                {/* QR Code Placeholder */}
                <div className="text-gray-500">
                  <div className="grid grid-cols-8 gap-1">
                    {Array.from({ length: 64 }).map((_, i) => (
                      <div
                        key={i}
                        className={`w-2 h-2 ${
                          Math.random() > 0.5 ? 'bg-black' : 'bg-white'
                        }`}
                      />
                    ))}
                  </div>
                </div>
              </div>
              <div className="text-gray-900 font-semibold">
                Scan to Join Revolution
              </div>
            </div>
          </div>
        </div>

        {/* Startup Stats */}
        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          {[
            { label: "Launch Date", value: "2025" },
            { label: "Welcome Bonus", value: "₹50" },
            { label: "Security Level", value: "Bank-Grade" },
            { label: "Growth Target", value: "1M Users" }
          ].map((stat, index) => (
            <div key={index}>
              <div className="text-3xl font-bold mb-2">{stat.value}</div>
              <div className="opacity-75">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );

  const Footer = () => (
    <footer className="bg-gray-900 text-white py-12">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="md:col-span-2">
            <div className="flex items-center space-x-2 mb-4">
              <img 
                  src={logo} 
                  alt="Kodeshwara Fantasy Cricket Logo" 
                  className="w-8 h-8 rounded-lg object-contain"
                />
              <div className="font-bold text-xl">
                Kodeshwara <span className="text-blue-400">Fantasy</span>
              </div>
            </div>
            <p className="text-gray-400 mb-4 leading-relaxed">
              India's newest fantasy cricket platform, built with passion by cricket lovers for cricket lovers. 
              We're just getting started, but we're committed to revolutionizing how you play fantasy cricket.
            </p>
            <div className="text-sm text-gray-500">
              Operated by Baskaran Services OPC Private Limited
              <br />
              Established 2025, Chennai, Tamil Nadu, India
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold text-lg mb-4">Quick Links</h3>
            <ul className="space-y-2 text-gray-400">
              <li><button onClick={() => scrollToSection('home')} className="hover:text-white transition-colors">Home</button></li>
              <li><button onClick={() => scrollToSection('features')} className="hover:text-white transition-colors">Features</button></li>
              <li><button onClick={() => scrollToSection('how-to-play')} className="hover:text-white transition-colors">How to Play</button></li>
              <li><button onClick={() => scrollToSection('download')} className="hover:text-white transition-colors">Download</button></li>
            </ul>
          </div>

          {/* Support */}
          <div>
            <h3 className="font-semibold text-lg mb-4">Support</h3>
            <ul className="space-y-2 text-gray-400">
              <li><a href="https://kodeshwara-backend.onrender.com/api/v1/terms-and-conditions" className="hover:text-white transition-colors" target="_blank" rel="noopener noreferrer">Terms & Conditions</a></li>
              <li><a href="mailto:kodeshwarafantasy@gmail.com" className="hover:text-white transition-colors">Contact Support</a></li>
              <li><span className="text-green-400">🌱 Growing Platform</span></li>
            </ul>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-gray-800 mt-8 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="text-gray-400 text-sm mb-4 md:mb-0">
              © 2025 Baskaran Services OPC Private Limited. All rights reserved. 
              <span className="block mt-1 text-green-400">🚀 Launched with love from Chennai</span>
            </div>
            <div className="flex space-x-6">
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <span className="sr-only">Facebook</span>
                📘
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <span className="sr-only">Instagram</span>
                📷
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <span className="sr-only">YouTube</span>
                📺
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );

  return (
    <div className="min-h-screen bg-white">
      <Header />
      <HeroSection />
      <FeaturesSection />
      <HowToPlaySection />
      <PrizesSection />
      <DownloadSection />
      <Footer />
    </div>
  );
};

export default KodeshwaraFantasyWebsite;
