import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { GraduationCap } from 'lucide-react';
// import { CoachingIcon, CommunityIcon } from './components/CustomIcons';
import './App.css';

// Custom Icon Component for SVG files in public/icons/
const CustomIcon = ({ name, className }: { name: string; className?: string }) => (
  <img 
    src={`/icons/${name}.svg`} 
    alt={name}
    className={className}
  />
);

// Example of how to use your custom icons:
// Replace Brain with CoachingIcon:
// <CoachingIcon className="w-10 h-10 text-[#63D7E4] relative z-10" />
// 
// Replace Network with CommunityIcon:
// <CommunityIcon className="w-10 h-10 text-[#63D7E4] relative z-10" />

function App() {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    // Set loaded state after a small delay for animations
    const timer = setTimeout(() => {
      setIsLoaded(true);
    }, 100);
    
    return () => {
      clearTimeout(timer);
    };
  }, []);

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.3
      }
    }
  };

  const item = {
    hidden: { opacity: 0, y: 30 },
    show: { opacity: 1, y: 0 }
  };

  return (
    <div className="flex flex-col min-h-screen relative bg-[#1a1a2e]">
      {/* Globally blurred overlay with reduced blur for better performance */}
      <div 
        className="fixed inset-0 z-0 bg-[#1a1a2e]/70"
        style={{
          willChange: "transform",
          transform: "translateZ(0)",
          backfaceVisibility: "hidden"
        }}
      />

      {/* Hero Section */}
      <section 
        id="hero" 
        className="relative min-h-screen flex items-center justify-center px-6 py-12 z-10"
      >
        <div className="container mx-auto max-w-4xl">
          <motion.div 
            className="text-center"
            initial="hidden"
            animate={isLoaded ? "show" : "hidden"}
            variants={container}
          >
            {/* Main Headline */}
            <motion.h1 
              variants={item}
              className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-white mb-8 leading-tight font-montserrat"
            >
              The <span className="inline-block text-white font-extrabold">Salesforce</span>{" "}
              <span className="inline-block text-white font-extrabold">Solopreneur</span>
              <br />
              <span className="inline-block text-transparent bg-clip-text bg-gradient-to-r from-[#00BDC9] to-[#63D7E4] font-extrabold">Blueprint</span>
            </motion.h1>
            
            {/* Subtitle with MVRK Line */}
            <motion.div variants={item} className="mb-16">
              <a href="#ready" className="inline-block">
                <p className="text-lg md:text-xl lg:text-2xl text-gray-300 mb-4 font-poppins hover:text-[#63D7E4] transition-colors duration-300 cursor-pointer">
                  Next Cohort Starting In Fall of 2025
                </p>
              </a>
              <div className="w-32 h-1 bg-gradient-to-r from-[#00BDC9] to-[#63D7E4] mx-auto"></div>
            </motion.div>

            {/* The Blueprint Section */}
            <motion.div variants={item} className="mb-12">
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6 font-montserrat">
                The <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00BDC9] to-[#63D7E4]">Blueprint</span>
              </h2>
              <p className="text-lg md:text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed font-poppins">
                This is a life-long program, designed to help you launch and operate your solo 
                Salesforce business with confidence. All members benefit from the 3 pillars of the 
                program for life. No monthly subscriptions - only one upfront payment.
              </p>
            </motion.div>
            
            {/* CTA Buttons */}
            <motion.div variants={item} className="flex flex-wrap gap-4 justify-center">
              <a 
                href="#ready" 
                className="px-8 py-3 bg-gradient-to-r from-[#00BDC9] to-[#63D7E4] text-white font-bold rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 flex items-center gap-2"
              >
                <span>Inquire Now</span>
              </a>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* The 3 Pillars Section */}
      <section 
        id="pillars" 
        className="relative py-24 overflow-hidden section-wrapper z-10"
      >
        {/* Background elements */}
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-b from-[#1a1a2e]/80 via-[#1a1a2e] to-[#1a1a2e]/90" />
        </div>
        
        <div className="container mx-auto px-6 z-10 relative">
          {/* Section label */}
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            viewport={{ once: true, margin: "-100px" }}
            className="flex items-center justify-center mb-8"
          >
            <span className="px-6 py-2 bg-gradient-to-r from-[#00BDC9]/20 to-[#63D7E4]/20 text-[#63D7E4] text-lg font-bold rounded-full border border-[#63D7E4]/30 shadow-lg">
              The 3 Pillars
            </span>
          </motion.div>


          {/* Desktop Layout - 3 Cards Side by Side */}
          <div className="hidden md:grid md:grid-cols-3 gap-8 w-full max-w-6xl mx-auto">
            {/* Course Pillar */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              viewport={{ once: true, margin: "-100px" }}
              className="relative px-1 group"
            >
              <div className="bg-[#252542]/40 backdrop-blur-md rounded-xl p-6 h-full border border-white/5 shadow-lg hover:border-[#00BDC9]/30 transition-all duration-300 focus-within:ring-2 focus-within:ring-[#00BDC9]/50 hover:shadow-2xl hover:shadow-[#00BDC9]/10 hover:scale-[1.02]">
                
                {/* Decorative background elements */}
                <div className="absolute top-4 right-4 w-16 h-16 bg-gradient-to-br from-[#00BDC9]/5 to-[#63D7E4]/5 rounded-full blur-xl"></div>
                <div className="absolute bottom-4 left-4 w-12 h-12 bg-gradient-to-br from-[#63D7E4]/5 to-[#00BDC9]/5 rounded-full blur-lg"></div>
                
                <div className="pt-6 relative z-10">
                  <div className="mb-4 flex items-center justify-center">
                    <div className="w-20 h-20 rounded-full flex items-center justify-center bg-gradient-to-br from-[#00BDC9]/20 to-[#63D7E4]/30 relative overflow-hidden group-hover:scale-110 transition-transform duration-300">
                      <div className="absolute inset-0 bg-gradient-to-br from-[#00BDC9]/10 to-[#63D7E4]/10 animate-pulse"></div>
                      <CustomIcon name="Hat" className="w-10 h-10 brightness-0 invert relative z-10" />
                    </div>
                  </div>
                  <h3 className="text-xl font-semibold mb-3 text-[#63D7E4] text-center font-montserrat">Course</h3>
                  
                  <p className="text-base text-gray-300 leading-relaxed tracking-wide text-center font-poppins">
                    Lessons to help you get your business ready, find your first clients, and deliver real value. Resources and templates to save you time and money. This is a real <span className="text-[#00BDC9] font-semibold">blueprint</span> to set your foundation for success. All members get access to the latest version of the course for life.
                  </p>
                  
                </div>
              </div>
            </motion.div>

            {/* Coaching Pillar */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true, margin: "-100px" }}
              className="relative px-1 group"
            >
              <div className="bg-[#252542]/40 backdrop-blur-md rounded-xl p-6 h-full border border-white/5 shadow-lg hover:border-[#00BDC9]/30 transition-all duration-300 focus-within:ring-2 focus-within:ring-[#00BDC9]/50 hover:shadow-2xl hover:shadow-[#63D7E4]/10 hover:scale-[1.02]">
                
                {/* Decorative background elements */}
                <div className="absolute top-4 right-4 w-16 h-16 bg-gradient-to-br from-[#63D7E4]/5 to-[#00BDC9]/5 rounded-full blur-xl"></div>
                <div className="absolute bottom-4 left-4 w-12 h-12 bg-gradient-to-br from-[#00BDC9]/5 to-[#63D7E4]/5 rounded-full blur-lg"></div>
                
                <div className="pt-6 relative z-10">
                  <div className="mb-4 flex items-center justify-center">
                    <div className="w-20 h-20 rounded-full flex items-center justify-center bg-gradient-to-br from-[#63D7E4]/20 to-[#00BDC9]/30 relative overflow-hidden group-hover:scale-110 transition-transform duration-300">
                      <div className="absolute inset-0 bg-gradient-to-br from-[#63D7E4]/10 to-[#00BDC9]/10 animate-pulse"></div>
                      <CustomIcon name="Whistle" className="w-10 h-10 brightness-0 invert relative z-10" />
                    </div>
                  </div>
                  <h3 className="text-xl font-semibold mb-3 text-[#63D7E4] text-center font-montserrat">Coaching</h3>
                  
                  <p className="text-base text-gray-300 leading-relaxed tracking-wide text-center font-poppins">
                    Weekly group coaching sessions with Vuk Stajic to discuss course material, dive into strategy, and brainstorm solutions to your most pressing problems. This is where you put the lessons to action. All members get access to coaching sessions for life.
                  </p>
                  
                </div>
              </div>
            </motion.div>

            {/* Community Pillar */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              viewport={{ once: true, margin: "-100px" }}
              className="relative px-1 group"
            >
              <div className="bg-[#252542]/40 backdrop-blur-md rounded-xl p-6 h-full border border-white/5 shadow-lg hover:border-[#00BDC9]/30 transition-all duration-300 focus-within:ring-2 focus-within:ring-[#00BDC9]/50 hover:shadow-2xl hover:shadow-[#00BDC9]/10 hover:scale-[1.02]">
                
                {/* Decorative background elements */}
                <div className="absolute top-4 right-4 w-16 h-16 bg-gradient-to-br from-[#00BDC9]/5 to-[#63D7E4]/5 rounded-full blur-xl"></div>
                <div className="absolute bottom-4 left-4 w-12 h-12 bg-gradient-to-br from-[#63D7E4]/5 to-[#00BDC9]/5 rounded-full blur-lg"></div>
                
                <div className="pt-6 relative z-10">
                  <div className="mb-4 flex items-center justify-center">
                    <div className="w-20 h-20 rounded-full flex items-center justify-center bg-gradient-to-br from-[#63D7E4]/20 to-[#00BDC9]/30 relative overflow-hidden group-hover:scale-110 transition-transform duration-300">
                      <div className="absolute inset-0 bg-gradient-to-br from-[#63D7E4]/10 to-[#00BDC9]/10 animate-pulse"></div>
                      <CustomIcon name="Community" className="w-10 h-10 brightness-0 invert relative z-10" />
                    </div>
                  </div>
                  <h3 className="text-xl font-semibold mb-3 text-[#63D7E4] text-center font-montserrat">Community</h3>
                  
                  <p className="text-base text-gray-300 leading-relaxed tracking-wide text-center font-poppins">
                    Build your business in a supportive environment. Collaborate with other members that are on the same path. This is your opportunity to grow your business around other leaders. All members have access to the community for life.
                  </p>
                  
                </div>
              </div>
            </motion.div>
          </div>

          {/* Mobile Layout - Vertical Stack */}
          <div className="md:hidden space-y-6 max-w-lg mx-auto">
            {/* Course Pillar Mobile */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              viewport={{ once: true, margin: "-50px" }}
              className="relative px-1 group"
            >
              <div className="bg-[#252542]/40 backdrop-blur-md rounded-xl p-6 h-full border border-white/5 shadow-lg">
                <div className="pt-6 relative z-10">
                  <div className="mb-4 flex items-center justify-center">
                    <div className="w-20 h-20 rounded-full flex items-center justify-center bg-gradient-to-br from-[#00BDC9]/20 to-[#63D7E4]/30 relative overflow-hidden">
                      <CustomIcon name="Hat" className="w-10 h-10 brightness-0 invert relative z-10" />
                    </div>
                  </div>
                  <h3 className="text-xl font-semibold mb-3 text-[#63D7E4] text-center font-montserrat">Course</h3>
                  <p className="text-base text-gray-300 leading-relaxed tracking-wide text-center font-poppins">
                    Lessons to help you get your business ready, find your first clients, and deliver real value. Resources and templates to save you time and money. This is a real <span className="text-[#00BDC9] font-semibold">blueprint</span> to set your foundation for success. All members get access to the latest version of the course for life.
                  </p>
                </div>
              </div>
            </motion.div>

            {/* Coaching Pillar Mobile */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true, margin: "-50px" }}
              className="relative px-1 group"
            >
              <div className="bg-[#252542]/40 backdrop-blur-md rounded-xl p-6 h-full border border-white/5 shadow-lg">
                <div className="pt-6 relative z-10">
                                      <div className="mb-4 flex items-center justify-center">
                      <div className="w-20 h-20 rounded-full flex items-center justify-center bg-gradient-to-br from-[#63D7E4]/20 to-[#00BDC9]/30 relative overflow-hidden">
                        <CustomIcon name="Whistle" className="w-10 h-10 brightness-0 invert relative z-10" />
                      </div>
                    </div>
                  <h3 className="text-xl font-semibold mb-3 text-[#63D7E4] text-center font-montserrat">Coaching</h3>
                  <p className="text-base text-gray-300 leading-relaxed tracking-wide text-center font-poppins">
                    Weekly group coaching sessions with Vuk Stajic to discuss course material, dive into strategy, and brainstorm solutions to your most pressing problems. This is where you put the lessons to action. All members get access to coaching sessions for life.
                  </p>
                </div>
              </div>
            </motion.div>

            {/* Community Pillar Mobile */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              viewport={{ once: true, margin: "-50px" }}
              className="relative px-1 group"
            >
              <div className="bg-[#252542]/40 backdrop-blur-md rounded-xl p-6 h-full border border-white/5 shadow-lg">
                <div className="pt-6 relative z-10">
                  <div className="mb-4 flex items-center justify-center">
                    <div className="w-20 h-20 rounded-full flex items-center justify-center bg-gradient-to-br from-[#63D7E4]/20 to-[#00BDC9]/30 relative overflow-hidden">
                      <CustomIcon name="Community" className="w-10 h-10 brightness-0 invert relative z-10" />
                    </div>
                  </div>
                  <h3 className="text-xl font-semibold mb-3 text-[#63D7E4] text-center font-montserrat">Community</h3>
                  <p className="text-base text-gray-300 leading-relaxed tracking-wide text-center font-poppins">
                    Build your business in a supportive environment. Collaborate with other members that are on the same path. This is your opportunity to grow your business around other leaders. All members have access to the community for life.
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Course Section */}
      <section 
        id="course" 
        className="relative py-24 overflow-hidden section-wrapper z-10"
      >
        {/* Background elements */}
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-b from-[#1a1a2e]/80 via-[#1a1a2e] to-[#1a1a2e]/90" />
        </div>
        
        <div className="container mx-auto px-6 z-10 relative">
          {/* Section Title */}
          <motion.h2 
            className="text-4xl font-bold text-center text-white mb-8 md:text-5xl font-montserrat"
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.1 }}
            viewport={{ once: true, margin: "-100px" }}
          >
            <span className="text-[#63D7E4]">Course</span>
          </motion.h2>
          
          {/* Supporting Paragraph */}
          <motion.div 
            className="max-w-[800px] mx-auto px-6 text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.2 }}
            viewport={{ once: true, margin: "-100px" }}
          >
            <p className="text-base text-gray-300 leading-relaxed tracking-wide font-poppins">
              This is a modern course, developed over years and built to help you launch your business confidently. With clear lessons based on real experience. And resources and templates that have been client tested. This is your <span className="text-[#00BDC9] font-semibold">blueprint</span> to success.
            </p>
          </motion.div>
          
          {/* Desktop Layout - 2 Cards Side by Side */}
          <div className="hidden md:grid md:grid-cols-2 gap-8 w-full max-w-6xl mx-auto">
            {/* Lessons & Stories */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              viewport={{ once: true, margin: "-100px" }}
              className="relative group"
            >
              <div className="bg-[#252542]/40 backdrop-blur-md rounded-xl border border-white/5 shadow-lg p-6 h-full hover:border-[#00BDC9]/30 transition-all duration-300 focus-within:ring-2 focus-within:ring-[#00BDC9]/50 hover:shadow-2xl hover:shadow-[#00BDC9]/10 hover:scale-[1.02]">
                {/* Decorative background elements */}
                <div className="absolute top-4 right-4 w-12 h-12 bg-gradient-to-br from-[#00BDC9]/5 to-[#63D7E4]/5 rounded-full blur-lg"></div>
                <div className="absolute bottom-4 left-4 w-8 h-8 bg-gradient-to-br from-[#63D7E4]/5 to-[#00BDC9]/5 rounded-full blur-md"></div>
                
                <div className="relative z-10">
                  <div className="mb-4 flex items-center justify-center">
                    <div className="w-16 h-16 rounded-full flex items-center justify-center bg-gradient-to-br from-[#00BDC9]/20 to-[#63D7E4]/30 relative overflow-hidden group-hover:scale-110 transition-transform duration-300">
                      <div className="absolute inset-0 bg-gradient-to-br from-[#00BDC9]/10 to-[#63D7E4]/10 animate-pulse"></div>
                      <CustomIcon name="Bulb" className="w-8 h-8 brightness-0 invert relative z-10" />
                    </div>
                  </div>
                  <h4 className="text-lg font-semibold mb-4 text-[#63D7E4] text-center font-montserrat">Lessons & Stories</h4>
                  <p className="text-base text-gray-300 leading-relaxed tracking-wide text-center mb-4 font-poppins">
                    The course focuses on the 4 phases of launching and running your business:
                  </p>
                  
                  {/* Enhanced phase list with icons */}
                  <div className="space-y-3">
                    <div className="flex items-center text-gray-300 text-sm font-poppins">
                      <div className="w-2 h-2 bg-[#00BDC9] rounded-full mr-3 flex-shrink-0"></div>
                      <span>Finding Your Niche & Your Confidence</span>
                    </div>
                    <div className="flex items-center text-gray-300 text-sm font-poppins">
                      <div className="w-2 h-2 bg-[#63D7E4] rounded-full mr-3 flex-shrink-0"></div>
                      <span>Building Your Business</span>
                    </div>
                    <div className="flex items-center text-gray-300 text-sm font-poppins">
                      <div className="w-2 h-2 bg-[#00BDC9] rounded-full mr-3 flex-shrink-0"></div>
                      <span>Finding Clients & Delivering Projects</span>
                    </div>
                    <div className="flex items-center text-gray-300 text-sm font-poppins">
                      <div className="w-2 h-2 bg-[#63D7E4] rounded-full mr-3 flex-shrink-0"></div>
                      <span>Establishing Long Term Success</span>
                    </div>
                  </div>
                  
                </div>
              </div>
            </motion.div>

            {/* Resources & Templates */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true, margin: "-100px" }}
              className="relative group"
            >
              <div className="bg-[#252542]/40 backdrop-blur-md rounded-xl border border-white/5 shadow-lg p-6 h-full hover:border-[#00BDC9]/30 transition-all duration-300 focus-within:ring-2 focus-within:ring-[#00BDC9]/50 hover:shadow-2xl hover:shadow-[#63D7E4]/10 hover:scale-[1.02]">
                {/* Decorative background elements */}
                <div className="absolute top-4 right-4 w-12 h-12 bg-gradient-to-br from-[#63D7E4]/5 to-[#00BDC9]/5 rounded-full blur-lg"></div>
                <div className="absolute bottom-4 left-4 w-8 h-8 bg-gradient-to-br from-[#00BDC9]/5 to-[#63D7E4]/5 rounded-full blur-md"></div>
                
                <div className="relative z-10">
                  <div className="mb-4 flex items-center justify-center">
                    <div className="w-16 h-16 rounded-full flex items-center justify-center bg-gradient-to-br from-[#63D7E4]/20 to-[#00BDC9]/30 relative overflow-hidden group-hover:scale-110 transition-transform duration-300">
                      <div className="absolute inset-0 bg-gradient-to-br from-[#63D7E4]/10 to-[#00BDC9]/10 animate-pulse"></div>
                      <CustomIcon name="Treasure" className="w-8 h-8 brightness-0 invert relative z-10" />
                    </div>
                  </div>
                  <h4 className="text-lg font-semibold mb-4 text-[#63D7E4] text-center font-montserrat">Resources & Templates</h4>
                  <p className="text-base text-gray-300 leading-relaxed tracking-wide text-center mb-4 font-poppins">
                    You are provided with many resources and templates that save you time and money, including:
                  </p>
                  
                  {/* Enhanced resource list with icons */}
                  <div className="space-y-3">
                    <div className="flex items-center text-gray-300 text-sm font-poppins">
                      <div className="w-2 h-2 bg-[#63D7E4] rounded-full mr-3 flex-shrink-0"></div>
                      <span>Master Service Agreement</span>
                    </div>
                    <div className="flex items-center text-gray-300 text-sm font-poppins">
                      <div className="w-2 h-2 bg-[#00BDC9] rounded-full mr-3 flex-shrink-0"></div>
                      <span>Statements of Work</span>
                    </div>
                    <div className="flex items-center text-gray-300 text-sm font-poppins">
                      <div className="w-2 h-2 bg-[#63D7E4] rounded-full mr-3 flex-shrink-0"></div>
                      <span>Pitch Decks</span>
                    </div>
                    <div className="flex items-center text-gray-300 text-sm font-poppins">
                      <div className="w-2 h-2 bg-[#00BDC9] rounded-full mr-3 flex-shrink-0"></div>
                      <span>Runway Budget</span>
                    </div>
                  </div>
                  
                </div>
              </div>
            </motion.div>
          </div>

          {/* Mobile Layout - Vertical Stack */}
          <div className="md:hidden space-y-8 max-w-lg mx-auto">
            {/* Lessons & Stories Mobile */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              viewport={{ once: true, margin: "-50px" }}
              className="relative px-1 group"
            >
              <div className="bg-[#252542]/40 backdrop-blur-md rounded-xl p-6 h-full border border-white/5 shadow-lg">
                <div className="pt-6 relative z-10">
                  <div className="mb-4 flex items-center justify-center">
                    <div className="w-20 h-20 rounded-full flex items-center justify-center bg-gradient-to-br from-[#00BDC9]/20 to-[#63D7E4]/30 relative overflow-hidden">
                      <CustomIcon name="Bulb" className="w-10 h-10 brightness-0 invert relative z-10" />
                    </div>
                  </div>
                  <h4 className="text-xl font-semibold mb-4 text-[#63D7E4] text-center font-montserrat">Lessons & Stories</h4>
                  <p className="text-base text-gray-300 leading-relaxed tracking-wide text-center mb-4 font-poppins">
                    The course focuses on the 4 phases of launching and running your business:
                  </p>
                  
                  {/* Enhanced phase list with icons */}
                  <div className="space-y-3">
                    <div className="flex items-center text-gray-300 text-sm font-poppins">
                      <div className="w-2 h-2 bg-[#00BDC9] rounded-full mr-3 flex-shrink-0"></div>
                      <span>Finding Your Niche & Your Confidence</span>
                    </div>
                    <div className="flex items-center text-gray-300 text-sm font-poppins">
                      <div className="w-2 h-2 bg-[#63D7E4] rounded-full mr-3 flex-shrink-0"></div>
                      <span>Building Your Business</span>
                    </div>
                    <div className="flex items-center text-gray-300 text-sm font-poppins">
                      <div className="w-2 h-2 bg-[#00BDC9] rounded-full mr-3 flex-shrink-0"></div>
                      <span>Finding Clients & Delivering Projects</span>
                    </div>
                    <div className="flex items-center text-gray-300 text-sm font-poppins">
                      <div className="w-2 h-2 bg-[#63D7E4] rounded-full mr-3 flex-shrink-0"></div>
                      <span>Establishing Long Term Success</span>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Resources & Templates Mobile */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true, margin: "-50px" }}
              className="relative px-1 group"
            >
              <div className="bg-[#252542]/40 backdrop-blur-md rounded-xl p-6 h-full border border-white/5 shadow-lg">
                <div className="pt-6 relative z-10">
                  <div className="mb-4 flex items-center justify-center">
                    <div className="w-20 h-20 rounded-full flex items-center justify-center bg-gradient-to-br from-[#63D7E4]/20 to-[#00BDC9]/30 relative overflow-hidden">
                      <CustomIcon name="Treasure" className="w-10 h-10 brightness-0 invert relative z-10" />
                    </div>
                  </div>
                  <h4 className="text-xl font-semibold mb-4 text-[#63D7E4] text-center font-montserrat">Resources & Templates</h4>
                  <p className="text-base text-gray-300 leading-relaxed tracking-wide text-center mb-4 font-poppins">
                    You are provided with many resources and templates that save you time and money, including:
                  </p>
                  
                  {/* Enhanced resource list with icons */}
                  <div className="space-y-3">
                    <div className="flex items-center text-gray-300 text-sm font-poppins">
                      <div className="w-2 h-2 bg-[#63D7E4] rounded-full mr-3 flex-shrink-0"></div>
                      <span>Master Service Agreement</span>
                    </div>
                    <div className="flex items-center text-gray-300 text-sm font-poppins">
                      <div className="w-2 h-2 bg-[#00BDC9] rounded-full mr-3 flex-shrink-0"></div>
                      <span>Statements of Work</span>
                    </div>
                    <div className="flex items-center text-gray-300 text-sm font-poppins">
                      <div className="w-2 h-2 bg-[#63D7E4] rounded-full mr-3 flex-shrink-0"></div>
                      <span>Pitch Decks</span>
                    </div>
                    <div className="flex items-center text-gray-300 text-sm font-poppins">
                      <div className="w-2 h-2 bg-[#00BDC9] rounded-full mr-3 flex-shrink-0"></div>
                      <span>Runway Budget</span>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Coaching Section */}
      <section 
        id="coaching" 
        className="relative py-24 overflow-hidden section-wrapper z-10"
      >
        {/* Background elements */}
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-b from-[#1a1a2e]/80 via-[#1a1a2e] to-[#1a1a2e]/90" />
        </div>
        
        <div className="container mx-auto px-6 z-10 relative">
          {/* Section Title */}
          <motion.h2 
            className="text-4xl font-bold text-center text-white mb-8 md:text-5xl font-montserrat"
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.1 }}
            viewport={{ once: true, margin: "-100px" }}
          >
            <span className="text-[#63D7E4]">Coaching</span>
          </motion.h2>
          
          {/* Supporting Paragraph */}
          <motion.div 
            className="max-w-[800px] mx-auto px-6 text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.2 }}
            viewport={{ once: true, margin: "-100px" }}
          >
            <p className="text-base text-gray-300 leading-relaxed tracking-wide font-poppins">
              A course is nothing without a coach. Vuk hosts weekly group syncs and frequent focused workshops. Attend at your own pace and get live feedback to help you succeed.
            </p>
          </motion.div>

          {/* Desktop Layout - 2 Cards Side by Side */}
          <div className="hidden md:grid md:grid-cols-2 gap-8 w-full max-w-6xl mx-auto">
            {/* Weekly Sync */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              viewport={{ once: true, margin: "-100px" }}
              className="relative group"
            >
              <div className="bg-[#252542]/40 backdrop-blur-md rounded-xl border border-white/5 shadow-lg p-6 h-full hover:border-[#00BDC9]/30 transition-all duration-300 focus-within:ring-2 focus-within:ring-[#00BDC9]/50 hover:shadow-2xl hover:shadow-[#00BDC9]/10 hover:scale-[1.02]">
                <div className="mb-4 flex items-center justify-center">
                                      <div className="w-16 h-16 rounded-full flex items-center justify-center bg-gradient-to-br from-[#00BDC9]/20 to-[#63D7E4]/30 relative overflow-hidden group-hover:scale-110 transition-transform duration-300">
                      <div className="absolute inset-0 bg-gradient-to-br from-[#00BDC9]/10 to-[#63D7E4]/10 animate-pulse"></div>
                      <CustomIcon name="Meeting" className="w-8 h-8 brightness-0 invert relative z-10" />
                    </div>
                </div>
                <h4 className="text-lg font-semibold mb-4 text-[#63D7E4] text-center font-montserrat">Weekly Sync</h4>
                <p className="text-base text-gray-300 leading-relaxed tracking-wide text-center font-poppins mb-4">
                  This is your time to ask questions about your current challenges. On a first-come-first-serve basis, questions from members will be discussed in an open and collaborative manner. Even when you don't have a question, you will benefit from seeing others overcome their obstacles.
                </p>
                
              </div>
            </motion.div>

            {/* Workshops */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true, margin: "-100px" }}
              className="relative group"
            >
              <div className="bg-[#252542]/40 backdrop-blur-md rounded-xl border border-white/5 shadow-lg p-6 h-full hover:border-[#00BDC9]/30 transition-all duration-300 focus-within:ring-2 focus-within:ring-[#00BDC9]/50 hover:shadow-2xl hover:shadow-[#00BDC9]/10 hover:scale-[1.02]">
                <div className="mb-4 flex items-center justify-center">
                  <div className="w-16 h-16 rounded-full flex items-center justify-center bg-gradient-to-br from-[#63D7E4]/20 to-[#00BDC9]/30 relative overflow-hidden group-hover:scale-110 transition-transform duration-300">
                    <div className="absolute inset-0 bg-gradient-to-br from-[#63D7E4]/10 to-[#00BDC9]/10 animate-pulse"></div>
                    <CustomIcon name="Workshop" className="w-8 h-8 brightness-0 invert relative z-10" />
                  </div>
                </div>
                <h4 className="text-lg font-semibold mb-4 text-[#63D7E4] text-center font-montserrat">Workshops</h4>
                <p className="text-base text-gray-300 leading-relaxed tracking-wide text-center font-poppins mb-4">
                  Specific topics and hands on learning, all in a collaborative environment. These sessions are for members that have completed the course and have their <span className="text-[#00BDC9] font-semibold">blueprint</span> established. These workshops ensure continuing learning and strategic development.
                </p>
                
              </div>
            </motion.div>
          </div>

          {/* Mobile Layout - Vertical Stack */}
          <div className="md:hidden space-y-8 max-w-lg mx-auto">
            {/* Weekly Sync Mobile */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              viewport={{ once: true, margin: "-50px" }}
              className="relative px-1 group"
            >
              <div className="bg-[#252542]/40 backdrop-blur-md rounded-xl p-6 h-full border border-white/5 shadow-lg">
                <div className="pt-6 relative z-10">
                  <div className="mb-4 flex items-center justify-center">
                    <div className="w-20 h-20 rounded-full flex items-center justify-center bg-gradient-to-br from-[#00BDC9]/20 to-[#63D7E4]/30">
                      <CustomIcon name="Meeting" className="w-10 h-10 brightness-0 invert relative z-10" />
                    </div>
                  </div>
                                      <h4 className="text-xl font-semibold mb-4 text-[#63D7E4] text-center font-montserrat">Weekly Sync</h4>
                  <p className="text-base text-gray-300 leading-relaxed tracking-wide text-center font-poppins">
                    This is your time to ask questions about your current challenges. On a first-come-first-serve basis, questions from members will be discussed in an open and collaborative manner. Even when you don't have a question, you will benefit from seeing others overcome their obstacles.
                  </p>
                </div>
              </div>
            </motion.div>

            {/* Workshops Mobile */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true, margin: "-50px" }}
              className="relative px-1 group"
            >
              <div className="bg-[#252542]/40 backdrop-blur-md rounded-xl p-6 h-full border border-white/5 shadow-lg">
                <div className="pt-6 relative z-10">
                  <div className="mb-4 flex items-center justify-center">
                    <div className="w-20 h-20 rounded-full flex items-center justify-center bg-gradient-to-br from-[#63D7E4]/20 to-[#00BDC9]/30">
                      <CustomIcon name="Workshop" className="w-10 h-10 brightness-0 invert" />
                    </div>
                  </div>
                                      <h4 className="text-xl font-semibold mb-4 text-[#63D7E4] text-center font-montserrat">Workshops</h4>
                                      <p className="text-base text-gray-300 leading-relaxed tracking-wide text-center font-poppins">
                      Specific topics and hands on learning, all in a collaborative environment. These sessions are for members that have completed the course and have their <span className="text-[#00BDC9] font-semibold">blueprint</span> established. These workshops ensure continuing learning and strategic development.
                    </p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Community Section */}
      <section 
        id="community" 
        className="relative py-24 overflow-hidden section-wrapper z-10"
      >
        {/* Background elements */}
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-b from-[#1a1a2e]/80 via-[#1a1a2e] to-[#1a1a2e]/90" />
        </div>
        
        <div className="container mx-auto px-6 z-10 relative">
          {/* Section Title */}
          <motion.h2 
            className="text-4xl font-bold text-center text-white mb-8 md:text-5xl font-montserrat"
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.1 }}
            viewport={{ once: true, margin: "-100px" }}
          >
            <span className="text-[#63D7E4]">Community</span>
          </motion.h2>
          
          {/* Supporting Paragraph */}
          <motion.div 
            className="max-w-[800px] mx-auto px-6 text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.2 }}
            viewport={{ once: true, margin: "-100px" }}
          >
            <p className="text-base text-gray-300 leading-relaxed tracking-wide font-poppins">
              No one succeeds alone. We are a community of likeminded experts who have their own specific vision for bringing value to our clients. We have our own Discord server for members.
            </p>
          </motion.div>


          
          {/* Desktop Layout - 2 Cards Side by Side */}
          <div className="hidden md:grid md:grid-cols-2 gap-8 w-full max-w-6xl mx-auto">
            {/* Supportive Network */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              viewport={{ once: true, margin: "-100px" }}
              className="relative group"
            >
              <div className="bg-[#252542]/40 backdrop-blur-md rounded-xl border border-white/5 shadow-lg p-6 h-full hover:border-[#00BDC9]/30 transition-all duration-300 focus-within:ring-2 focus-within:ring-[#00BDC9]/50 hover:shadow-2xl hover:shadow-[#00BDC9]/10 hover:scale-[1.02]">
                <div className="mb-4 flex items-center justify-center">
                  <div className="w-16 h-16 rounded-full flex items-center justify-center bg-gradient-to-br from-[#00BDC9]/20 to-[#63D7E4]/30 relative overflow-hidden group-hover:scale-110 transition-transform duration-300">
                    <div className="absolute inset-0 bg-gradient-to-br from-[#00BDC9]/10 to-[#63D7E4]/10 animate-pulse"></div>
                    <CustomIcon name="SupportNetwork" className="w-8 h-8 brightness-0 invert relative z-10" />
                  </div>
                </div>
                <h4 className="text-lg font-semibold mb-4 text-[#63D7E4] text-center font-montserrat">Supportive Network</h4>
                <p className="text-base text-gray-300 leading-relaxed tracking-wide text-center font-poppins mb-4">
                  No challenge you face will be yours alone. You have a network of people ready to assist you. And likewise, you have the opportunity to help others with their journey. Through co-learning, we all grow together.
                </p>
                
              </div>
            </motion.div>

            {/* Collaborative Environment */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true, margin: "-100px" }}
              className="relative group"
            >
              <div className="bg-[#252542]/40 backdrop-blur-md rounded-xl border border-white/5 shadow-lg p-6 h-full hover:border-[#00BDC9]/30 transition-all duration-300 focus-within:ring-2 focus-within:ring-[#00BDC9]/50 hover:shadow-2xl hover:shadow-[#00BDC9]/10 hover:scale-[1.02]">
                <div className="mb-4 flex items-center justify-center">
                  <div className="w-16 h-16 rounded-full flex items-center justify-center bg-gradient-to-br from-[#63D7E4]/20 to-[#00BDC9]/30 relative overflow-hidden group-hover:scale-110 transition-transform duration-300">
                    <div className="absolute inset-0 bg-gradient-to-br from-[#63D7E4]/10 to-[#00BDC9]/10 animate-pulse"></div>
                    <CustomIcon name="Collaborative" className="w-8 h-8 brightness-0 invert relative z-10" />
                  </div>
                </div>
                <h4 className="text-lg font-semibold mb-4 text-[#63D7E4] text-center font-montserrat">Collaborative Environment</h4>
                <p className="text-base text-gray-300 leading-relaxed tracking-wide text-center font-poppins mb-4">
                  We are all professionals with our own niche expertise. As we uncover opportunities to help clients, we can rely on each other to bring value to our clients. As a community, we can do more.
                </p>
                
              </div>
            </motion.div>
          </div>

          {/* Mobile Layout - Vertical Stack */}
          <div className="md:hidden space-y-8 max-w-lg mx-auto">
            {/* Supportive Network Mobile */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              viewport={{ once: true, margin: "-50px" }}
              className="relative px-1 group"
            >
              <div className="bg-[#252542]/40 backdrop-blur-md rounded-xl p-6 h-full border border-white/5 shadow-lg">
                <div className="pt-6 relative z-10">
                  <div className="mb-4 flex items-center justify-center">
                    <div className="w-20 h-20 rounded-full flex items-center justify-center bg-gradient-to-br from-[#00BDC9]/20 to-[#63D7E4]/30">
                      <CustomIcon name="SupportNetwork" className="w-10 h-10 brightness-0 invert relative z-10" />
                    </div>
                  </div>
                                      <h4 className="text-xl font-semibold mb-4 text-[#63D7E4] text-center font-montserrat">Supportive Network</h4>
                  <p className="text-base text-gray-300 leading-relaxed tracking-wide text-center font-poppins">
                    No challenge you face will be yours alone. You have a network of people ready to assist you. And likewise, you have the opportunity to help others with their journey. Through co-learning, we all grow together.
                  </p>
                </div>
              </div>
            </motion.div>

            {/* Collaborative Environment Mobile */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true, margin: "-50px" }}
              className="relative px-1 group"
            >
              <div className="bg-[#252542]/40 backdrop-blur-md rounded-xl p-6 h-full border border-white/5 shadow-lg">
                <div className="pt-6 relative z-10">
                  <div className="mb-4 flex items-center justify-center">
                    <div className="w-20 h-20 rounded-full flex items-center justify-center bg-gradient-to-br from-[#63D7E4]/20 to-[#00BDC9]/30">
                      <CustomIcon name="Collaborative" className="w-10 h-10 brightness-0 invert" />
                    </div>
                  </div>
                                      <h4 className="text-xl font-semibold mb-4 text-[#63D7E4] text-center font-montserrat">Collaborative Environment</h4>
                                      <p className="text-base text-gray-300 leading-relaxed tracking-wide text-center font-poppins">
                      We are all professionals with our own niche expertise. As we uncover opportunities to help clients, we can rely on each other to bring value to our clients. As a community, we can do more.
                    </p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Are You Ready Section */}
      <section 
        id="ready" 
        className="relative py-24 overflow-hidden section-wrapper z-10"
      >
        {/* Background elements */}
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-b from-[#1a1a2e]/80 via-[#1a1a2e] to-[#1a1a2e]/90" />
        </div>
        
        <div className="container mx-auto px-6 z-10 relative">
          {/* Section Title */}
          <motion.h2 
            className="text-4xl font-bold text-center text-white mb-8 md:text-5xl font-montserrat"
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.1 }}
            viewport={{ once: true, margin: "-100px" }}
          >
            Are You <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00BDC9] to-[#63D7E4]">Ready?</span>
          </motion.h2>
          
          {/* Supporting Paragraph */}
          <motion.div 
            className="max-w-[800px] mx-auto px-6 text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.2 }}
            viewport={{ once: true, margin: "-100px" }}
          >
            <p className="text-base text-gray-300 leading-relaxed tracking-wide font-poppins mb-4">
              This program is for seasoned Salesforce experts ready and willing to create their own business.
            </p>
            <p className="text-base text-gray-300 leading-relaxed tracking-wide font-poppins mb-4">
              We have a strict criteria for membership. This criteria ensures our members have a community of likeminded people that are on parallel journeys.
            </p>
            <p className="text-base text-gray-300 leading-relaxed tracking-wide font-poppins font-semibold mb-4">
              When you are in, you are in for life.
            </p>
            <p className="text-base text-gray-300 leading-relaxed tracking-wide font-poppins">
              To see if you are ready to join the next cohort, we have developed a self-assessment which will give you an understand of the criteria we use to gauge readiness.
            </p>
          </motion.div>
          
          {/* Enhanced CTA Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            viewport={{ once: true, margin: "-100px" }}
            className="flex flex-col items-center space-y-6"
          >
            {/* Professional indicators */}
            <div className="flex items-center space-x-8 text-sm text-gray-400 mb-4">
              <div className="flex items-center">
                <div className="w-2 h-2 bg-[#00BDC9] rounded-full mr-2"></div>
                <span>Self-Assessment</span>
              </div>
              <div className="flex items-center">
                <div className="w-2 h-2 bg-[#63D7E4] rounded-full mr-2"></div>
                <span>Instant Results</span>
              </div>
              <div className="flex items-center">
                <div className="w-2 h-2 bg-[#00BDC9] rounded-full mr-2"></div>
                <span>No Commitment</span>
              </div>
            </div>
            
            {/* Enhanced CTA Button */}
            <div className="relative group">
              <div className="absolute -inset-0.5 bg-gradient-to-r from-[#00BDC9] to-[#63D7E4] rounded-lg blur opacity-75 group-hover:opacity-100 transition duration-300"></div>
              <a 
                href="https://zfrmz.eu/rE4W92hKWnoBzvCJ6spX" 
                target="_blank"
                rel="noopener noreferrer"
                className="relative px-8 py-4 bg-gradient-to-r from-[#00BDC9] to-[#63D7E4] text-white font-bold rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 text-lg font-montserrat flex items-center space-x-2 group"
              >
                <span>Take The Assessment</span>
                <div className="w-2 h-2 bg-white rounded-full group-hover:scale-110 transition-transform duration-300"></div>
              </a>
            </div>
            
            {/* Trust indicators */}
            <div className="flex items-center space-x-4 text-xs text-gray-500">
              <div className="flex items-center">
                <div className="w-1 h-1 bg-[#63D7E4] rounded-full mr-1"></div>
                <span>Secure & Private</span>
              </div>
              <div className="flex items-center">
                <div className="w-1 h-1 bg-[#00BDC9] rounded-full mr-1"></div>
                <span>Takes 3-5 minutes</span>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}

export default App;
