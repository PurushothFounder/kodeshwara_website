import React, { useState, useEffect } from 'react';
import { ChevronDown, Download, Star, Trophy, Users, Shield, Play, Menu, X, CheckCircle, Award, Target, Zap } from 'lucide-react';
import logo from './assets/images/icon.png'; 

const KodeshwaraFantasyWebsite = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const [activeFormat, setActiveFormat] = useState('T20');

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
              Play Fantasy
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">
                {' '}Cricket
              </span>
              <br />
              Win Real Cash
            </h1>
            <p className="text-xl text-gray-700 mb-8 leading-relaxed">
              Join millions of cricket fans in India's most exciting fantasy cricket platform. 
              Create your dream team, showcase your cricket knowledge, and win amazing prizes!
            </p>
            
            {/* Stats */}
            <div className="grid grid-cols-3 gap-4 mb-8">
              <div className="text-center">
                <div className="text-2xl font-bold text-blue-600">1M+</div>
                <div className="text-sm text-gray-600">Active Users</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-purple-600">₹50L+</div>
                <div className="text-sm text-gray-600">Prizes Won</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-green-600">Lifetime</div>
                <div className="text-sm text-gray-600">Referral Earnings</div>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <a
                href="https://kodeshwara-backend.onrender.com/api/v1/refer?code=USERTV"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-lg font-semibold hover:shadow-lg transform hover:scale-105 transition-all duration-200 flex items-center justify-center space-x-2"
              >
                <Download className="w-5 h-5" />
                <span>Download App</span>
              </a>
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
                    <h3 className="text-lg font-bold mb-4">Live Match</h3>
                    <div className="space-y-3">
                      <div className="bg-white/20 rounded-lg p-3">
                        <div className="flex justify-between items-center">
                          <span className="text-sm">IND vs AUS</span>
                          <span className="text-xs">Live</span>
                        </div>
                      </div>
                      <div className="bg-white/20 rounded-lg p-3">
                        <div className="text-sm">Your Team Rank</div>
                        <div className="text-2xl font-bold">#247</div>
                      </div>
                      <div className="bg-white/20 rounded-lg p-3">
                        <div className="text-sm">Points</div>
                        <div className="text-xl font-bold">87.5</div>
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
            Why Choose Kodeshwara Fantasy?
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Experience the ultimate fantasy cricket platform with cutting-edge features and seamless gameplay
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {[
            {
              icon: <Shield className="w-8 h-8" />,
              title: "100% Safe & Secure",
              description: "Your data and money are completely secure with bank-grade encryption and RBI-approved payment gateways."
            },
            {
              icon: <Zap className="w-8 h-8" />,
              title: "Instant Withdrawals",
              description: "Withdraw your winnings instantly to your bank account. No waiting, no hassle, just pure convenience."
            },
            {
              icon: <Users className="w-8 h-8" />,
              title: "Multi-Format Support",
              description: "Play fantasy cricket across T20, T10, ODI, and Test matches with format-specific scoring systems."
            },
            {
              icon: <Trophy className="w-8 h-8" />,
              title: "Mega Contests",
              description: "Join mega contests with prize pools worth lakhs. More participants, bigger prizes!"
            },
            {
              icon: <Target className="w-8 h-8" />,
              title: "Live Scoring",
              description: "Real-time updates and live scoring to track your team's performance during matches."
            },
            {
              icon: <Award className="w-8 h-8" />,
              title: "Lifetime Referral System",
              description: "Earn 1% from your referrals' net winnings for life! Refer once, earn forever from their contest wins."
            }
          ].map((feature, index) => (
            <div key={index} className="bg-gray-50 p-8 rounded-xl hover:shadow-lg transition-shadow duration-300">
              <div className="text-blue-600 mb-4">{feature.icon}</div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">{feature.title}</h3>
              <p className="text-gray-600 leading-relaxed">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );

  const HowToPlaySection = () => (
    <section id="how-to-play" className="py-16 bg-gradient-to-br from-blue-50 to-purple-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            How to Play Fantasy Cricket
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Get started in just 4 simple steps and start winning real cash prizes
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {[
            {
              step: "1",
              title: "Create Team",
              description: "Select 11 players from both teams within the given budget of 100 credits",
              icon: <Users className="w-6 h-6" />
            },
            {
              step: "2",
              title: "Join Contest",
              description: "Choose from various contests based on your budget and skill level",
              icon: <Trophy className="w-6 h-6" />
            },
            {
              step: "3",
              title: "Watch & Win",
              description: "Watch the live match and see your team climb up the leaderboard",
              icon: <Star className="w-6 h-6" />
            },
            {
              step: "4",
              title: "Collect Winnings",
              description: "Withdraw your winnings instantly to your bank account",
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
          <h3 className="text-3xl font-bold text-gray-900 mb-8 text-center">Fantasy Points System</h3>
          
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
              Points optimized for {activeFormat} cricket format
              {activeFormat === 'ODI' && (
                <span className="block text-sm mt-1 text-blue-600">
                  * Test format points coming soon with 100 & 160 run milestones
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
                Batting Points
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
                Bowling Points
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
            Win Amazing Prizes
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Multiple contest formats with guaranteed prize pools and instant payouts
          </p>
        </div>

        <div className="grid md:grid-cols-5 gap-6 mb-12">
          {[
            {
              type: "Head to Head",
              entry: "₹10 - ₹1000",
              prize: "Winner takes all",
              participants: "2 players",
              gradient: "from-green-500 to-emerald-600"
            },
            {
              type: "Winner Takes All",
              entry: "₹25 - ₹500",
              prize: "₹50 - ₹1000",
              participants: "3-20 players",
              gradient: "from-yellow-500 to-orange-600"
            },
            {
              type: "Hot Contest",
              entry: "₹50 - ₹250",
              prize: "₹200 - ₹1000",
              participants: "10-50 players",
              gradient: "from-red-500 to-pink-600"
            },
            {
              type: "Small League",
              entry: "₹25 - ₹500",
              prize: "₹100 - ₹2000",
              participants: "5-100 players",
              gradient: "from-blue-500 to-cyan-600"
            },
            {
              type: "Mega Contest",
              entry: "₹50 - ₹2000",
              prize: "₹10,000+",
              participants: "1000+ players",
              gradient: "from-purple-500 to-indigo-600"
            }
          ].map((contest, index) => (
            <div key={index} className="relative overflow-hidden rounded-2xl shadow-lg">
              <div className={`bg-gradient-to-br ${contest.gradient} p-6 text-white`}>
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
            🎯 Lifetime Referral System - Earn Forever!
          </h3>
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <h4 className="text-xl font-semibold text-orange-600 mb-4">How It Works:</h4>
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-start space-x-3">
                  <span className="text-green-500 font-bold">✓</span>
                  <span>Refer your friends to Kodeshwara Fantasy</span>
                </li>
                <li className="flex items-start space-x-3">
                  <span className="text-green-500 font-bold">✓</span>
                  <span>Earn <strong>1% of their net winnings</strong> for life</span>
                </li>
                <li className="flex items-start space-x-3">
                  <span className="text-green-500 font-bold">✓</span>
                  <span>Works on all contests except Mega</span>
                </li>
                <li className="flex items-start space-x-3">
                  <span className="text-green-500 font-bold">✓</span>
                  <span>Money comes from platform profit, not user's winning</span>
                </li>
              </ul>
            </div>
            <div className="bg-white rounded-xl p-6 shadow-lg">
              <h4 className="text-lg font-semibold text-gray-900 mb-4">Example Calculation:</h4>
              <div className="space-y-2 text-sm">
                <div className="flex justify-between">
                  <span>Friends Referred:</span>
                  <span className="font-bold text-blue-600">1000 users</span>
                </div>
                <div className="flex justify-between">
                  <span>Avg Monthly Net Winning per Friend:</span>
                  <span className="font-bold text-green-600">₹10,000</span>
                </div>
                <div className="flex justify-between">
                  <span>Your Monthly Earning (1%):</span>
                  <span className="font-bold text-orange-600">₹100 × 1000 = ₹1,00,000</span>
                </div>
                <div className="border-t pt-2 mt-3">
                  <div className="flex justify-between text-lg font-bold">
                    <span>Lifetime Passive Income:</span>
                    <span className="text-purple-600">UNLIMITED! 🚀</span>
                  </div>
                </div>
              </div>
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
            Download Kodeshwara Fantasy
          </h2>
          <p className="text-xl opacity-90 max-w-2xl mx-auto">
            Available for Android devices. Start playing fantasy cricket and win real cash today!
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div>
            <div className="space-y-6 mb-8">
              {[
                "📱 Easy to use interface",
                "⚡ Lightning fast app performance",
                "🔒 100% secure transactions",
                "💰 Instant withdrawals",
                "🎯 Real-time match updates",
                "🏆 Multiple contest formats"
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
                href="https://kodeshwara-backend.onrender.com/api/v1/refer?code=USERTV"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center w-full sm:w-auto bg-white text-blue-600 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-all duration-200 space-x-3"
              >
                <Download className="w-6 h-6" />
                <div className="text-left">
                  <div className="text-sm">Download for</div>
                  <div className="text-lg font-bold">Android</div>
                </div>
              </a>
              
              <div className="text-sm opacity-75">
                * iOS version coming soon
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
                Scan to Download
              </div>
            </div>
          </div>
        </div>

        {/* App Stats */}
        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          {[
            { label: "Downloads", value: "1M+" },
            { label: "Rating", value: "4.5★" },
            { label: "Users", value: "500K+" },
            { label: "Contests", value: "1000+" }
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
              India's most trusted fantasy cricket platform. Play with skill, win with strategy. 
              Join millions of cricket fans and turn your cricket knowledge into real winnings.
            </p>
            <div className="text-sm text-gray-500">
              Operated by Baskaran Services OPC Private Limited
              <br />
              Registered in 2025, Chennai, Tamil Nadu, India
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
            </ul>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-gray-800 mt-8 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="text-gray-400 text-sm mb-4 md:mb-0">
              © 2025 Baskaran Services OPC Private Limited. All rights reserved.
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
