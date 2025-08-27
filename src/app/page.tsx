'use client';

import { useState } from 'react';
import Link from 'next/link';
import cvData from '@/data/cv-data.json';
import { ChevronDownIcon, ChevronRightIcon, ArrowTopRightOnSquareIcon, MapPinIcon, EnvelopeIcon } from '@heroicons/react/24/outline';

interface ExpandableExperience {
  id: string;
  isExpanded: boolean;
}

export default function Home() {
  const [expandedExperiences, setExpandedExperiences] = useState<ExpandableExperience[]>([]);

  const toggleExperience = (experienceId: string) => {
    setExpandedExperiences(prev => {
      const existing = prev.find(exp => exp.id === experienceId);
      if (existing) {
        return prev.map(exp => 
          exp.id === experienceId ? { ...exp, isExpanded: !exp.isExpanded } : exp
        );
      } else {
        return [...prev, { id: experienceId, isExpanded: true }];
      }
    });
  };

  const isExpanded = (experienceId: string) => {
    return expandedExperiences.find(exp => exp.id === experienceId)?.isExpanded || false;
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-blue-100">
      <div className="max-w-4xl mx-auto px-6 py-12">
        {/* Header */}
        <header className="text-center mb-12">
          <h1 className="text-5xl font-bold text-slate-800 mb-4">
            {cvData.personalInfo.name}
          </h1>
          <h2 className="text-2xl text-slate-600 mb-6">
            {cvData.personalInfo.title}
          </h2>
          <div className="flex flex-wrap justify-center gap-6 text-slate-600">
            <div className="flex items-center gap-2">
              <MapPinIcon className="h-5 w-5" />
              {cvData.personalInfo.location}
            </div>
            <div className="flex items-center gap-2">
              <EnvelopeIcon className="h-5 w-5" />
              {cvData.personalInfo.email}
            </div>
            <a 
              href={cvData.personalInfo.linkedin}
              className="flex items-center gap-2 hover:text-blue-600 transition-colors"
              target="_blank"
              rel="noopener noreferrer"
            >
              <ArrowTopRightOnSquareIcon className="h-5 w-5" />
              LinkedIn
            </a>
          </div>
        </header>

        {/* Summary */}
        <section className="mb-12">
          <div className="bg-white rounded-lg shadow-md p-8">
            <h3 className="text-xl font-semibold text-slate-800 mb-4">Professional Summary</h3>
            <p className="text-slate-600 leading-relaxed text-lg">
              {cvData.personalInfo.summary}
            </p>
          </div>
        </section>

        {/* Experience */}
        <section className="mb-12">
          <h3 className="text-2xl font-bold text-slate-800 mb-6">Professional Experience</h3>
          <div className="space-y-4">
            {cvData.experience.map((exp) => (
              <div key={exp.id} className="bg-white rounded-lg shadow-md overflow-hidden">
                <div 
                  className={`p-6 ${exp.isExpandable ? 'cursor-pointer hover:bg-slate-50' : ''} transition-colors`}
                  onClick={exp.isExpandable ? () => toggleExperience(exp.id) : undefined}
                >
                  <div className="flex justify-between items-start">
                    <div className="flex-1">
                      <div className="flex items-center gap-2">
                        <h4 className="text-xl font-semibold text-slate-800">{exp.title}</h4>
                        {exp.isExpandable && (
                          <div className="text-slate-400">
                            {isExpanded(exp.id) ? (
                              <ChevronDownIcon className="h-5 w-5" />
                            ) : (
                              <ChevronRightIcon className="h-5 w-5" />
                            )}
                          </div>
                        )}
                      </div>
                      <p className="text-blue-600 font-medium mb-1">{exp.company}</p>
                      <p className="text-slate-500 text-sm mb-2">{exp.duration} • {exp.location}</p>
                      <p className="text-slate-600">{exp.summary}</p>
                    </div>
                  </div>
                  
                  {exp.isExpandable && isExpanded(exp.id) && exp.details && (
                    <div className="mt-6 pt-6 border-t border-slate-200 animate-fadeIn">
                      {exp.details.achievements && (
                        <div className="mb-6">
                          <h5 className="font-semibold text-slate-800 mb-3">Key Achievements</h5>
                          <ul className="space-y-2">
                            {exp.details.achievements.map((achievement, index) => (
                              <li key={index} className="flex items-start gap-2">
                                <span className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0"></span>
                                <span className="text-slate-600">{achievement}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      )}
                      
                      {exp.details.technologies && (
                        <div className="mb-6">
                          <h5 className="font-semibold text-slate-800 mb-3">Technologies & Skills</h5>
                          <div className="flex flex-wrap gap-2">
                            {exp.details.technologies.map((tech, index) => (
                              <span
                                key={index}
                                className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm"
                              >
                                {tech}
                              </span>
                            ))}
                          </div>
                        </div>
                      )}
                      
                      {exp.details.keyProjects && (
                        <div>
                          <h5 className="font-semibold text-slate-800 mb-3">Notable Projects</h5>
                          <div className="space-y-3">
                            {exp.details.keyProjects.map((project, index) => (
                              <div key={index} className="bg-slate-50 rounded-lg p-4">
                                <h6 className="font-medium text-slate-800 mb-1">{project.name}</h6>
                                <p className="text-slate-600 text-sm mb-2">{project.description}</p>
                                <div className="flex flex-wrap gap-1">
                                  {project.technologies.map((tech, techIndex) => (
                                    <span
                                      key={techIndex}
                                      className="px-2 py-1 bg-slate-200 text-slate-700 rounded text-xs"
                                    >
                                      {tech}
                                    </span>
                                  ))}
                                </div>
                              </div>
                            ))}
                          </div>
                        </div>
                      )}
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Skills */}
        <section className="mb-12">
          <h3 className="text-2xl font-bold text-slate-800 mb-6">Skills & Expertise</h3>
          <div className="grid md:grid-cols-2 gap-6">
            {Object.entries(cvData.skills).map(([category, skills]) => (
              <div key={category} className="bg-white rounded-lg shadow-md p-6">
                <h4 className="text-lg font-semibold text-slate-800 mb-4 capitalize">
                  {category.replace(/([A-Z])/g, ' $1').trim()}
                </h4>
                <div className="space-y-2">
                  {skills.map((skill, index) => (
                    <div key={index} className="flex items-center gap-2">
                      <span className="w-2 h-2 bg-green-500 rounded-full flex-shrink-0"></span>
                      <span className="text-slate-600">{skill}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Projects */}
        <section className="mb-12">
          <h3 className="text-2xl font-bold text-slate-800 mb-6">Featured Projects</h3>
          <div className="grid md:grid-cols-2 gap-6">
            {cvData.projects.filter(project => project.featured).map((project) => (
              <div key={project.id} className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow">
                <h4 className="text-xl font-semibold text-slate-800 mb-3">{project.name}</h4>
                <p className="text-slate-600 mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech, index) => (
                    <span
                      key={index}
                      className="px-2 py-1 bg-purple-100 text-purple-800 rounded-full text-sm"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                <div className="flex justify-between items-center">
                  <span className={`px-2 py-1 rounded-full text-sm ${
                    project.status === 'Completed' ? 'bg-green-100 text-green-800' :
                    project.status === 'In Production' ? 'bg-blue-100 text-blue-800' :
                    'bg-yellow-100 text-yellow-800'
                  }`}>
                    {project.status}
                  </span>
                  {project.hasDetailPage && (
                    <Link 
                      href={`/projects/${project.id}`}
                      className="text-blue-600 hover:text-blue-800 font-medium transition-colors"
                    >
                      View Details →
                    </Link>
                  )}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Interests */}
        <section className="mb-12">
          <h3 className="text-2xl font-bold text-slate-800 mb-6">Interests & Passion Projects</h3>
          <div className="grid md:grid-cols-2 gap-4">
            {cvData.interests.map((interest) => (
              <div key={interest.id} className="bg-white rounded-lg shadow-md p-6">
                {interest.isClickable ? (
                  <Link href={interest.detailPage || '#'} className="block hover:bg-slate-50 transition-colors -m-6 p-6 rounded-lg">
                    <div className="flex items-center justify-between">
                      <div>
                        <h4 className="text-lg font-semibold text-slate-800 mb-2">{interest.name}</h4>
                        <p className="text-slate-600">{interest.description}</p>
                      </div>
                      <ArrowTopRightOnSquareIcon className="h-5 w-5 text-blue-500 flex-shrink-0" />
                    </div>
                  </Link>
                ) : (
                  <div>
                    <h4 className="text-lg font-semibold text-slate-800 mb-2">{interest.name}</h4>
                    <p className="text-slate-600">{interest.description}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </section>

        {/* Education */}
        <section className="mb-12">
          <h3 className="text-2xl font-bold text-slate-800 mb-6">Education</h3>
          <div className="bg-white rounded-lg shadow-md p-6">
            {cvData.education.map((edu, index) => (
              <div key={index}>
                <h4 className="text-lg font-semibold text-slate-800">{edu.degree}</h4>
                <p className="text-blue-600 font-medium">{edu.institution}</p>
                <p className="text-slate-500 mb-3">
                  {edu.duration} • {edu.location === "United Kingdom" ? "🇬🇧" : "🇿🇦"} {edu.location}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* Footer */}
        <footer className="text-center text-slate-500 pt-8 border-t border-slate-200">
          <p>Built with Next.js, TypeScript, and Tailwind CSS</p>
          <p className="mt-2">Last updated: {new Date().toLocaleDateString()}</p>
        </footer>
      </div>
    </div>
  );
}
