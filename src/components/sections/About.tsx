import React from 'react';
import Container from '../ui/Container';
import { Award, BookOpen, Users, Lightbulb } from 'lucide-react';

const About: React.FC = () => {
  return (
    <section id="about" className="py-20 bg-gray-50 dark:bg-gray-800">
      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-4xl mb-6">
              About Me
            </h2>
            <div className="space-y-6 text-gray-600 dark:text-gray-300">
              <p>
                As a UX Strategist with over 8 years of experience, I bridge the gap between user needs and business goals to create meaningful digital experiences. My approach combines strategic thinking with deep user empathy to solve complex problems.
              </p>
              <p>
                I've collaborated with startups, Fortune 500 companies, and everything in between across fintech, healthcare, e-commerce, and SaaS industries. My work has helped organizations increase conversion rates, improve user satisfaction, and achieve their strategic objectives.
              </p>
              <p>
                Beyond UX, I'm passionate about design systems, accessibility, and emerging technologies. I regularly speak at industry events and mentor aspiring UX professionals.
              </p>
            </div>
            
            <div className="mt-10 grid grid-cols-2 gap-6">
              <div className="flex flex-col">
                <span className="text-4xl font-bold text-blue-600">8+</span>
                <span className="text-sm text-gray-600 dark:text-gray-400">Years Experience</span>
              </div>
              <div className="flex flex-col">
                <span className="text-4xl font-bold text-blue-600">50+</span>
                <span className="text-sm text-gray-600 dark:text-gray-400">Projects Completed</span>
              </div>
              <div className="flex flex-col">
                <span className="text-4xl font-bold text-blue-600">30%</span>
                <span className="text-sm text-gray-600 dark:text-gray-400">Avg. Conversion Increase</span>
              </div>
              <div className="flex flex-col">
                <span className="text-4xl font-bold text-blue-600">12</span>
                <span className="text-sm text-gray-600 dark:text-gray-400">Industry Awards</span>
              </div>
            </div>
          </div>
          
          <div className="space-y-8">
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white">My Expertise</h3>
            <div className="space-y-6">
              <div className="flex gap-4">
                <div className="mt-1 flex-shrink-0 flex items-center justify-center w-12 h-12 rounded-lg bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-300">
                  <Users size={24} />
                </div>
                <div>
                  <h4 className="text-lg font-medium text-gray-900 dark:text-white">User Research & Testing</h4>
                  <p className="text-gray-600 dark:text-gray-300">
                    Uncovering deep user insights through qualitative and quantitative research methods.
                  </p>
                </div>
              </div>
              
              <div className="flex gap-4">
                <div className="mt-1 flex-shrink-0 flex items-center justify-center w-12 h-12 rounded-lg bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-300">
                  <Lightbulb size={24} />
                </div>
                <div>
                  <h4 className="text-lg font-medium text-gray-900 dark:text-white">Strategic UX Planning</h4>
                  <p className="text-gray-600 dark:text-gray-300">
                    Developing comprehensive UX strategies that align with business objectives.
                  </p>
                </div>
              </div>
              
              <div className="flex gap-4">
                <div className="mt-1 flex-shrink-0 flex items-center justify-center w-12 h-12 rounded-lg bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-300">
                  <BookOpen size={24} />
                </div>
                <div>
                  <h4 className="text-lg font-medium text-gray-900 dark:text-white">Information Architecture</h4>
                  <p className="text-gray-600 dark:text-gray-300">
                    Creating intuitive structures that make complex information easily navigable.
                  </p>
                </div>
              </div>
              
              <div className="flex gap-4">
                <div className="mt-1 flex-shrink-0 flex items-center justify-center w-12 h-12 rounded-lg bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-300">
                  <Award size={24} />
                </div>
                <div>
                  <h4 className="text-lg font-medium text-gray-900 dark:text-white">UX Leadership</h4>
                  <p className="text-gray-600 dark:text-gray-300">
                    Guiding teams and stakeholders through user-centered design processes.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default About;