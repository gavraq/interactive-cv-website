'use client';

import Link from 'next/link';
import { ArrowLeftIcon, ArrowTopRightOnSquareIcon } from '@heroicons/react/24/outline';

export default function BaringsInvestigation() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-blue-100">
      <div className="max-w-4xl mx-auto px-6 py-12">
        {/* Back Navigation */}
        <div className="mb-8">
          <Link 
            href="/"
            className="inline-flex items-center gap-2 text-blue-600 hover:text-blue-800 transition-colors"
          >
            <ArrowLeftIcon className="h-5 w-5" />
            Back to CV
          </Link>
        </div>

        {/* Header */}
        <header className="mb-12">
          <h1 className="text-4xl font-bold text-slate-800 mb-4">
            Barings Bank Investigation
          </h1>
          <div className="flex flex-wrap gap-4 text-sm text-slate-600 mb-6">
            <span className="px-3 py-1 bg-red-100 text-red-800 rounded-full">1995</span>
            <span className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full">Bank of England</span>
            <span className="px-3 py-1 bg-purple-100 text-purple-800 rounded-full">£827 Million Loss</span>
          </div>
          <p className="text-xl text-slate-600 leading-relaxed">
            As part of Arthur Andersen's specialist investigation team, I contributed to the comprehensive investigation 
            commissioned by the Bank of England into one of the most significant banking collapses of the 20th century.
          </p>
        </header>

        {/* Overview */}
        <section className="bg-white rounded-lg shadow-md p-8 mb-8">
          <h2 className="text-2xl font-semibold text-slate-800 mb-6">Investigation Overview</h2>
          
          <div className="grid md:grid-cols-2 gap-8 mb-8">
            <div>
              <h3 className="text-lg font-medium text-slate-800 mb-3">The Crisis</h3>
              <ul className="space-y-2 text-slate-600">
                <li>• Barings Bank declared insolvent on February 26, 1995</li>
                <li>• Total losses of £827 million ($1.3 billion)</li>
                <li>• Caused by unauthorized trading by Nick Leeson in Singapore</li>
                <li>• Losses were twice the bank's available trading capital</li>
                <li>• 233-year-old merchant bank collapsed overnight</li>
              </ul>
            </div>
            
            <div>
              <h3 className="text-lg font-medium text-slate-800 mb-3">Investigation Team</h3>
              <ul className="space-y-2 text-slate-600">
                <li>• Bank of England's Board of Banking Supervision</li>
                <li>• Arthur Andersen specialist investigation unit</li>
                <li>• JP Morgan derivatives and risk management experts</li>
                <li>• Legal representatives and regulatory specialists</li>
                <li>• Investigation launched the day after collapse</li>
              </ul>
            </div>
          </div>

          <div className="border-t border-slate-200 pt-6">
            <h3 className="text-lg font-medium text-slate-800 mb-4">Key Findings</h3>
            <div className="bg-slate-50 rounded-lg p-6">
              <p className="text-slate-700 mb-4">
                The investigation revealed "virtual total failure of risk management systems and controls, 
                and managerial confusion" within the Barings Group. Critical discoveries included:
              </p>
              <ul className="space-y-2 text-slate-600">
                <li>• Over £200 million in unrecognized losses at end of December 1994</li>
                <li>• Cumulative losses grew to £827 million by February 27, 1995</li>
                <li>• Complete breakdown of internal controls and risk monitoring</li>
                <li>• Management failed to understand or control Singapore operations</li>
                <li>• External auditors and regulators also missed warning signs</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Impact & Legacy */}
        <section className="bg-white rounded-lg shadow-md p-8 mb-8">
          <h2 className="text-2xl font-semibold text-slate-800 mb-6">Impact & Legacy</h2>
          
          <div className="grid md:grid-cols-3 gap-6">
            <div className="text-center">
              <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-red-600">1</span>
              </div>
              <h3 className="font-semibold text-slate-800 mb-2">Regulatory Reform</h3>
              <p className="text-slate-600 text-sm">
                Led to major reforms in banking supervision and risk management across the UK financial system
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-blue-600">2</span>
              </div>
              <h3 className="font-semibold text-slate-800 mb-2">Global Standards</h3>
              <p className="text-slate-600 text-sm">
                Became textbook case study for risk management failures, influencing banking practices worldwide
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-green-600">3</span>
              </div>
              <h3 className="font-semibold text-slate-800 mb-2">Modern Controls</h3>
              <p className="text-slate-600 text-sm">
                Investigation findings directly influenced development of modern operational risk management frameworks
              </p>
            </div>
          </div>
        </section>

        {/* Technologies & Skills */}
        <section className="bg-white rounded-lg shadow-md p-8 mb-8">
          <h2 className="text-2xl font-semibold text-slate-800 mb-6">Investigation Methodology</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-lg font-medium text-slate-800 mb-4">Technical Analysis</h3>
              <div className="flex flex-wrap gap-2 mb-4">
                {[
                  "Financial Investigation",
                  "Risk Management Analysis", 
                  "Regulatory Compliance",
                  "Banking Operations",
                  "Crisis Management"
                ].map((tech) => (
                  <span key={tech} className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm">
                    {tech}
                  </span>
                ))}
              </div>
            </div>
            
            <div>
              <h3 className="text-lg font-medium text-slate-800 mb-4">Investigation Scope</h3>
              <ul className="space-y-2 text-slate-600">
                <li>• Analysis of trading positions and risk exposures</li>
                <li>• Review of internal control systems and procedures</li>
                <li>• Assessment of management oversight and governance</li>
                <li>• Evaluation of regulatory supervision effectiveness</li>
                <li>• Documentation of systematic control failures</li>
              </ul>
            </div>
          </div>
        </section>

        {/* References & Further Reading */}
        <section className="bg-white rounded-lg shadow-md p-8">
          <h2 className="text-2xl font-semibold text-slate-800 mb-6">References & Further Reading</h2>
          <div className="space-y-4">
            <a 
              href="https://www.gov.uk/government/publications/report-into-the-collapse-of-barings-bank"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 p-4 border border-slate-200 rounded-lg hover:bg-slate-50 transition-colors"
            >
              <div className="flex-1">
                <h4 className="font-medium text-slate-800">Official Bank of England Report</h4>
                <p className="text-slate-600 text-sm">Report into the collapse of Barings Bank - UK Government</p>
              </div>
              <ArrowTopRightOnSquareIcon className="h-5 w-5 text-slate-400" />
            </a>
            
            <a 
              href="https://www.rba.gov.au/publications/bulletin/1995/nov/1.html"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 p-4 border border-slate-200 rounded-lg hover:bg-slate-50 transition-colors"
            >
              <div className="flex-1">
                <h4 className="font-medium text-slate-800">Implications of the Barings Collapse for Bank Supervisors</h4>
                <p className="text-slate-600 text-sm">Reserve Bank of Australia analysis of regulatory implications</p>
              </div>
              <ArrowTopRightOnSquareIcon className="h-5 w-5 text-slate-400" />
            </a>
            
            <a 
              href="https://www.britannica.com/event/bankruptcy-of-Barings-Bank"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 p-4 border border-slate-200 rounded-lg hover:bg-slate-50 transition-colors"
            >
              <div className="flex-1">
                <h4 className="font-medium text-slate-800">Britannica: Bankruptcy of Barings Bank</h4>
                <p className="text-slate-600 text-sm">Comprehensive overview of the collapse and its significance</p>
              </div>
              <ArrowTopRightOnSquareIcon className="h-5 w-5 text-slate-400" />
            </a>
          </div>
        </section>
      </div>
    </div>
  );
}