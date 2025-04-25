import React from 'react';
import { ArrowRight } from 'lucide-react';
import Container from '../ui/Container';
import Button from '../ui/Button';

const Hero: React.FC = () => {
  return (
    <section 
      id="home" 
      className="relative min-h-screen pt-20 flex items-center bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800"
    >
      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center py-16 lg:py-24">
          <div className="space-y-8">
            <div>
              <div className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-blue-100 text-blue-800 dark:bg-blue-900/30 dark:text-blue-300 mb-6">
                UX Strategist & Designer
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-gray-900 dark:text-white leading-tight">
                Creating digital experiences that <span className="text-blue-600">people love</span>
              </h1>
            </div>
            <p className="text-lg text-gray-600 dark:text-gray-300 max-w-xl">
              I transform complex problems into intuitive digital experiences through strategic thinking and user-centered design.
            </p>
            <div className="flex flex-wrap gap-4">
              <Button 
                variant="primary"
                size="lg"
                className="group"
                onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
              >
                Get in touch
                <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Button>
              <Button 
                variant="outline"
                size="lg"
                onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
              >
                View my work
              </Button>
            </div>
          </div>
          <div className="relative">
            <div className="relative h-[450px] md:h-[550px] w-full overflow-hidden rounded-2xl shadow-xl">
              <img 
                src="https://images.pexels.com/photos/3184292/pexels-photo-3184292.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" 
                alt="UX Design Process" 
                className="w-full h-full object-cover"
              />
              {/* Overlay gradient */}
              <div className="absolute inset-0 bg-gradient-to-tr from-blue-600/20 to-transparent"></div>
            </div>
            {/* Decorative elements */}
            <div className="absolute -top-6 -left-6 w-24 h-24 bg-blue-100 dark:bg-blue-900/30 rounded-xl -z-10"></div>
            <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-teal-100 dark:bg-teal-900/30 rounded-xl -z-10"></div>
          </div>
        </div>
      </Container>
      
      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center animate-bounce">
        <span className="text-sm text-gray-500 dark:text-gray-400 mb-2">Scroll</span>
        <svg 
          xmlns="http://www.w3.org/2000/svg" 
          className="h-6 w-6 text-gray-500 dark:text-gray-400" 
          fill="none" 
          viewBox="0 0 24 24" 
          stroke="currentColor"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
        </svg>
      </div>
    </section>
  );
};

export default Hero;