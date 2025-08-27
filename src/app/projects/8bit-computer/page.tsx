'use client';

import { useState } from 'react';
import Link from 'next/link';
import { ArrowLeftIcon, ArrowTopRightOnSquareIcon, ChevronDownIcon, ChevronRightIcon, CpuChipIcon, CodeBracketIcon, LightBulbIcon } from '@heroicons/react/24/outline';
import projectData from '@/data/8bit-computer-project.json';

interface ExpandableSection {
  id: string;
  isExpanded: boolean;
}

export default function EightBitComputerProject() {
  const [expandedSections, setExpandedSections] = useState<ExpandableSection[]>([
    { id: 'overview', isExpanded: true }
  ]);

  const toggleSection = (sectionId: string) => {
    setExpandedSections(prev => {
      const existing = prev.find(section => section.id === sectionId);
      if (existing) {
        return prev.map(section => 
          section.id === sectionId ? { ...section, isExpanded: !section.isExpanded } : section
        );
      } else {
        return [...prev, { id: sectionId, isExpanded: true }];
      }
    });
  };

  const isExpanded = (sectionId: string) => {
    return expandedSections.find(section => section.id === sectionId)?.isExpanded || false;
  };

  const { project } = projectData;

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-blue-100">
      <div className="max-w-5xl mx-auto px-6 py-12">
        {/* Navigation */}
        <nav className="mb-8">
          <Link 
            href="/"
            className="inline-flex items-center gap-2 text-slate-600 hover:text-slate-800 transition-colors"
          >
            <ArrowLeftIcon className="h-5 w-5" />
            Back to CV
          </Link>
        </nav>

        {/* Header */}
        <header className="mb-12">
          <div className="flex items-center gap-3 mb-6">
            <CpuChipIcon className="h-12 w-12 text-indigo-600" />
            <div>
              <h1 className="text-4xl font-bold text-slate-800">{project.title}</h1>
              <p className="text-xl text-slate-600 mt-2">{project.subtitle}</p>
            </div>
          </div>
          
          <div className="bg-white rounded-lg shadow-md p-8">
            <p className="text-lg text-slate-600 leading-relaxed mb-6">
              {project.description}
            </p>
            
            <div className="flex items-center gap-4 text-slate-600">
              <div className="flex items-center gap-2">
                <LightBulbIcon className="h-5 w-5 text-yellow-500" />
                <span className="font-medium">Inspired by:</span>
                <a 
                  href={project.inspiration.url}
                  className="text-indigo-600 hover:text-indigo-800 transition-colors"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {project.inspiration.source} <ArrowTopRightOnSquareIcon className="h-4 w-4 inline" />
                </a>
              </div>
            </div>
          </div>
        </header>

        {/* Project Overview */}
        <section className="mb-12">
          <div className="bg-white rounded-lg shadow-md overflow-hidden">
            <div 
              className="p-6 cursor-pointer hover:bg-slate-50 transition-colors border-b border-slate-200"
              onClick={() => toggleSection('overview')}
            >
              <div className="flex items-center justify-between">
                <h2 className="text-2xl font-bold text-slate-800 flex items-center gap-3">
                  <CpuChipIcon className="h-7 w-7 text-indigo-600" />
                  Project Overview
                </h2>
                {isExpanded('overview') ? (
                  <ChevronDownIcon className="h-6 w-6 text-slate-400" />
                ) : (
                  <ChevronRightIcon className="h-6 w-6 text-slate-400" />
                )}
              </div>
            </div>
            
            {isExpanded('overview') && (
              <div className="p-6 animate-fadeIn">
                <div className="grid md:grid-cols-2 gap-8">
                  <div>
                    <h3 className="font-semibold text-slate-800 mb-4">Project Details</h3>
                    <div className="space-y-3">
                      <div className="flex justify-between">
                        <span className="text-slate-600">Duration:</span>
                        <span className="font-medium text-slate-800">{project.overview.duration}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-slate-600">Complexity:</span>
                        <span className="font-medium text-slate-800">{project.overview.complexity}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-slate-600">Cost:</span>
                        <span className="font-medium text-slate-800">{project.overview.cost}</span>
                      </div>
                    </div>
                  </div>
                  
                  <div>
                    <h3 className="font-semibold text-slate-800 mb-4">Key Learning Outcome</h3>
                    <p className="text-slate-600 leading-relaxed">
                      {project.overview.learningOutcome}
                    </p>
                  </div>
                </div>
              </div>
            )}
          </div>
        </section>

        {/* Technical Architecture */}
        <section className="mb-12">
          <div className="bg-white rounded-lg shadow-md overflow-hidden">
            <div 
              className="p-6 cursor-pointer hover:bg-slate-50 transition-colors border-b border-slate-200"
              onClick={() => toggleSection('architecture')}
            >
              <div className="flex items-center justify-between">
                <h2 className="text-2xl font-bold text-slate-800 flex items-center gap-3">
                  <CodeBracketIcon className="h-7 w-7 text-blue-600" />
                  Technical Architecture
                </h2>
                {isExpanded('architecture') ? (
                  <ChevronDownIcon className="h-6 w-6 text-slate-400" />
                ) : (
                  <ChevronRightIcon className="h-6 w-6 text-slate-400" />
                )}
              </div>
            </div>
            
            {isExpanded('architecture') && (
              <div className="p-6 animate-fadeIn">
                <div className="grid md:grid-cols-2 gap-8 mb-8">
                  <div className="bg-slate-50 rounded-lg p-6">
                    <h3 className="font-semibold text-slate-800 mb-4">System Specifications</h3>
                    <div className="space-y-2">
                      <div className="flex justify-between">
                        <span className="text-slate-600">Architecture:</span>
                        <span className="font-medium text-slate-800">{project.technicalDetails.architecture}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-slate-600">Memory:</span>
                        <span className="font-medium text-slate-800">{project.technicalDetails.memorySize}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-slate-600">Clock Speed:</span>
                        <span className="font-medium text-slate-800">{project.technicalDetails.clockSpeed}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-slate-600">Bus Width:</span>
                        <span className="font-medium text-slate-800">{project.technicalDetails.busWidth}</span>
                      </div>
                    </div>
                  </div>
                  
                  <div className="bg-slate-50 rounded-lg p-6">
                    <h3 className="font-semibold text-slate-800 mb-4">Instruction Set</h3>
                    <div className="grid grid-cols-2 gap-2 text-sm">
                      {project.technicalDetails.instructionSet.map((instruction, index) => (
                        <div key={index} className="bg-white px-3 py-1 rounded border font-mono text-slate-700">
                          {instruction}
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>
        </section>

        {/* Components */}
        <section className="mb-12">
          <div className="bg-white rounded-lg shadow-md overflow-hidden">
            <div 
              className="p-6 cursor-pointer hover:bg-slate-50 transition-colors border-b border-slate-200"
              onClick={() => toggleSection('components')}
            >
              <div className="flex items-center justify-between">
                <h2 className="text-2xl font-bold text-slate-800">System Components</h2>
                {isExpanded('components') ? (
                  <ChevronDownIcon className="h-6 w-6 text-slate-400" />
                ) : (
                  <ChevronRightIcon className="h-6 w-6 text-slate-400" />
                )}
              </div>
            </div>
            
            {isExpanded('components') && (
              <div className="p-6 animate-fadeIn">
                <div className="grid md:grid-cols-2 gap-6">
                  {project.components.map((component, index) => (
                    <div key={index} className="border border-slate-200 rounded-lg p-6">
                      <h3 className="text-lg font-semibold text-slate-800 mb-3">{component.name}</h3>
                      <p className="text-slate-600 mb-4">{component.description}</p>
                      
                      <div className="mb-4">
                        <h4 className="font-medium text-slate-700 mb-2">Technologies:</h4>
                        <div className="flex flex-wrap gap-2">
                          {component.technologies.map((tech, techIndex) => (
                            <span
                              key={techIndex}
                              className="px-2 py-1 bg-blue-100 text-blue-800 rounded-full text-xs"
                            >
                              {tech}
                            </span>
                          ))}
                        </div>
                      </div>
                      
                      <div>
                        <h4 className="font-medium text-slate-700 mb-2">Key Learnings:</h4>
                        <ul className="space-y-1 text-sm">
                          {component.keyLearnings.map((learning, learningIndex) => (
                            <li key={learningIndex} className="flex items-start gap-2">
                              <span className="w-1.5 h-1.5 bg-green-500 rounded-full mt-2 flex-shrink-0"></span>
                              <span className="text-slate-600">{learning}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        </section>

        {/* Programming Examples */}
        <section className="mb-12">
          <div className="bg-white rounded-lg shadow-md overflow-hidden">
            <div 
              className="p-6 cursor-pointer hover:bg-slate-50 transition-colors border-b border-slate-200"
              onClick={() => toggleSection('programming')}
            >
              <div className="flex items-center justify-between">
                <h2 className="text-2xl font-bold text-slate-800 flex items-center gap-3">
                  <CodeBracketIcon className="h-7 w-7 text-green-600" />
                  Assembly Programming Examples
                </h2>
                {isExpanded('programming') ? (
                  <ChevronDownIcon className="h-6 w-6 text-slate-400" />
                ) : (
                  <ChevronRightIcon className="h-6 w-6 text-slate-400" />
                )}
              </div>
            </div>
            
            {isExpanded('programming') && (
              <div className="p-6 animate-fadeIn">
                <div className="space-y-8">
                  {project.programmingExamples.map((example, index) => (
                    <div key={index} className="border border-slate-200 rounded-lg p-6">
                      <h3 className="text-lg font-semibold text-slate-800 mb-3">{example.name}</h3>
                      <p className="text-slate-600 mb-4">{example.description}</p>
                      
                      <div className="bg-slate-900 rounded-lg p-4 overflow-x-auto">
                        <pre className="text-green-400 font-mono text-sm">
                          {example.assemblyCode.map((line, lineIndex) => (
                            <div key={lineIndex} className="flex">
                              <span className="text-slate-500 mr-4 w-8 text-right">{lineIndex + 1}</span>
                              <span>{line}</span>
                            </div>
                          ))}
                        </pre>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        </section>

        {/* Challenges & Solutions */}
        <section className="mb-12">
          <div className="bg-white rounded-lg shadow-md overflow-hidden">
            <div 
              className="p-6 cursor-pointer hover:bg-slate-50 transition-colors border-b border-slate-200"
              onClick={() => toggleSection('challenges')}
            >
              <div className="flex items-center justify-between">
                <h2 className="text-2xl font-bold text-slate-800">Challenges & Solutions</h2>
                {isExpanded('challenges') ? (
                  <ChevronDownIcon className="h-6 w-6 text-slate-400" />
                ) : (
                  <ChevronRightIcon className="h-6 w-6 text-slate-400" />
                )}
              </div>
            </div>
            
            {isExpanded('challenges') && (
              <div className="p-6 animate-fadeIn">
                <div className="space-y-6">
                  {project.challenges.map((item, index) => (
                    <div key={index} className="border-l-4 border-orange-500 pl-6">
                      <h3 className="text-lg font-semibold text-slate-800 mb-2">
                        Challenge: {item.challenge}
                      </h3>
                      <p className="text-slate-600 mb-3">
                        <span className="font-medium text-green-700">Solution:</span> {item.solution}
                      </p>
                      <p className="text-slate-600">
                        <span className="font-medium text-blue-700">Learning:</span> {item.learning}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        </section>

        {/* Personal Reflection */}
        <section className="mb-12">
          <div className="bg-gradient-to-r from-indigo-50 to-blue-50 rounded-lg p-8">
            <h2 className="text-2xl font-bold text-slate-800 mb-6">Personal Reflection</h2>
            
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="font-semibold text-slate-800 mb-3">Motivation</h3>
                <p className="text-slate-600 leading-relaxed mb-6">
                  {project.personalReflection.motivation}
                </p>
                
                <h3 className="font-semibold text-slate-800 mb-3">Skills Developed</h3>
                <p className="text-slate-600 leading-relaxed">
                  {project.personalReflection.skillsDeveloped}
                </p>
              </div>
              
              <div>
                <h3 className="font-semibold text-slate-800 mb-3">Time Management</h3>
                <p className="text-slate-600 leading-relaxed mb-6">
                  {project.personalReflection.timeManagement}
                </p>
                
                <div className="bg-white rounded-lg p-4 border-l-4 border-indigo-500">
                  <h4 className="font-medium text-slate-800 mb-2">Proudest Moment</h4>
                  <p className="text-slate-600 italic">
                    &ldquo;{project.personalReflection.proudestMoment}&rdquo;
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Future Plans */}
        <section className="mb-12">
          <div className="bg-white rounded-lg shadow-md p-8">
            <h2 className="text-2xl font-bold text-slate-800 mb-6">Future Enhancements</h2>
            <div className="grid md:grid-cols-2 gap-4">
              {project.futurePlans.map((plan, index) => (
                <div key={index} className="flex items-start gap-3 p-4 bg-slate-50 rounded-lg">
                  <span className="w-2 h-2 bg-purple-500 rounded-full mt-2 flex-shrink-0"></span>
                  <span className="text-slate-600">{plan}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Career Connections */}
        <section className="mb-12">
          <div className="bg-gradient-to-r from-green-50 to-emerald-50 rounded-lg p-8">
            <h2 className="text-2xl font-bold text-slate-800 mb-6">Career Connections</h2>
            
            <div className="space-y-6">
              <div>
                <h3 className="font-semibold text-green-800 mb-2">Current Role Impact</h3>
                <p className="text-slate-700 leading-relaxed">
                  {project.connections.currentRole}
                </p>
              </div>
              
              <div>
                <h3 className="font-semibold text-green-800 mb-2">AI Career Goals</h3>
                <p className="text-slate-700 leading-relaxed">
                  {project.connections.aiCareerGoals}
                </p>
              </div>
              
              <div>
                <h3 className="font-semibold text-green-800 mb-2">Continuous Learning</h3>
                <p className="text-slate-700 leading-relaxed">
                  {project.connections.continuousLearning}
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Resources */}
        <section className="mb-12">
          <div className="bg-white rounded-lg shadow-md p-8">
            <h2 className="text-2xl font-bold text-slate-800 mb-6">Resources & References</h2>
            <div className="space-y-4">
              {project.resources.map((resource, index) => (
                <div key={index} className="flex items-start gap-4 p-4 bg-slate-50 rounded-lg">
                  <ArrowTopRightOnSquareIcon className="h-5 w-5 text-blue-500 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-medium text-slate-800 mb-1">{resource.name}</h3>
                    <p className="text-slate-600 text-sm mb-2">{resource.description}</p>
                    {resource.url && (
                      <a 
                        href={resource.url}
                        className="text-blue-600 hover:text-blue-800 text-sm transition-colors"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        Visit Resource →
                      </a>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Footer Navigation */}
        <footer className="flex justify-between items-center pt-8 border-t border-slate-200">
          <Link 
            href="/"
            className="inline-flex items-center gap-2 text-slate-600 hover:text-slate-800 transition-colors"
          >
            <ArrowLeftIcon className="h-5 w-5" />
            Back to CV
          </Link>
          
          <div className="text-slate-500 text-sm">
            Built with passion for learning and understanding
          </div>
        </footer>
      </div>
    </div>
  );
}