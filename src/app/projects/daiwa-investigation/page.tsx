'use client';

import Link from 'next/link';
import { ArrowLeftIcon, ArrowTopRightOnSquareIcon } from '@heroicons/react/24/outline';

export default function DaiwaInvestigation() {
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
            Daiwa Bank Investigation
          </h1>
          <div className="flex flex-wrap gap-4 text-sm text-slate-600 mb-6">
            <span className="px-3 py-1 bg-red-100 text-red-800 rounded-full">1995</span>
            <span className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full">NY Federal Reserve</span>
            <span className="px-3 py-1 bg-purple-100 text-purple-800 rounded-full">$1.1 Billion Loss</span>
          </div>
          <p className="text-xl text-slate-600 leading-relaxed">
            As part of Arthur Andersen specialist investigation team, I contributed to the forensic investigation 
            commissioned by the Federal Reserve Bank of New York into one of the largest unauthorized trading losses in banking history.
          </p>
        </header>

        {/* Overview */}
        <section className="bg-white rounded-lg shadow-md p-8 mb-8">
          <h2 className="text-2xl font-semibold text-slate-800 mb-6">Investigation Overview</h2>
          
          <div className="grid md:grid-cols-2 gap-8 mb-8">
            <div>
              <h3 className="text-lg font-medium text-slate-800 mb-3">The Scandal</h3>
              <ul className="space-y-2 text-slate-600">
                <li>• $1.1 billion in unauthorized trading losses</li>
                <li>• Perpetrated by Toshihide Iguchi in New York office</li>
                <li>• Losses concealed over multiple years (1984-1995)</li>
                <li>• Involved unauthorized sale of customer securities</li>
                <li>• Bank management attempted cover-up after discovery</li>
              </ul>
            </div>
            
            <div>
              <h3 className="text-lg font-medium text-slate-800 mb-3">Investigation Timeline</h3>
              <ul className="space-y-2 text-slate-600">
                <li>• July 17, 1995: Iguchi confessed to bank president</li>
                <li>• September 18, 1995: Losses reported to Federal Reserve</li>
                <li>• October 2, 1995: Fed ordered closure of US operations</li>
                <li>• November 2, 1995: 24-count federal indictment filed</li>
                <li>• Investigation team included Arthur Andersen specialists</li>
              </ul>
            </div>
          </div>

          <div className="border-t border-slate-200 pt-6">
            <h3 className="text-lg font-medium text-slate-800 mb-4">Key Investigation Findings</h3>
            <div className="bg-slate-50 rounded-lg p-6">
              <p className="text-slate-700 mb-4">
                The investigation revealed systematic failures in oversight, internal controls, and regulatory compliance:
              </p>
              <ul className="space-y-2 text-slate-600">
                <li>• Over $375 million in unauthorized customer securities sales</li>
                <li>• Bank submitted false financial statements to Federal Reserve</li>
                <li>• Management failed to report criminal activity to authorities</li>
                <li>• Complete breakdown of segregation of duties and controls</li>
                <li>• Institutional attempt to conceal losses after discovery</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Criminal Charges & Consequences */}
        <section className="bg-white rounded-lg shadow-md p-8 mb-8">
          <h2 className="text-2xl font-semibold text-slate-800 mb-6">Criminal Charges & Consequences</h2>
          
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-lg font-medium text-slate-800 mb-4">Federal Charges</h3>
              <div className="bg-red-50 rounded-lg p-4 mb-4">
                <h4 className="font-medium text-red-800 mb-2">24-Count Federal Indictment</h4>
                <ul className="text-sm text-red-700 space-y-1">
                  <li>• Conspiracy to defraud Federal Reserve</li>
                  <li>• Mail and wire fraud</li>
                  <li>• Obstructing examination of financial institution</li>
                  <li>• Falsification of bank records</li>
                  <li>• Misprision of felonies</li>
                </ul>
              </div>
            </div>
            
            <div>
              <h3 className="text-lg font-medium text-slate-800 mb-4">Regulatory Actions</h3>
              <ul className="space-y-3 text-slate-600">
                <li className="flex items-start gap-2">
                  <span className="w-2 h-2 bg-red-500 rounded-full mt-2 flex-shrink-0"></span>
                  <span>Daiwa Bank expelled from all US operations by February 1996</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="w-2 h-2 bg-red-500 rounded-full mt-2 flex-shrink-0"></span>
                  <span>Federal and state enforcement orders issued</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="w-2 h-2 bg-red-500 rounded-full mt-2 flex-shrink-0"></span>
                  <span>International diplomatic incident between US and Japan</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="w-2 h-2 bg-red-500 rounded-full mt-2 flex-shrink-0"></span>
                  <span>CEO resignation and criminal convictions</span>
                </li>
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
                <span className="text-2xl font-bold text-red-600">🏛️</span>
              </div>
              <h3 className="font-semibold text-slate-800 mb-2">Regulatory Strengthening</h3>
              <p className="text-slate-600 text-sm">
                Enhanced Federal Reserve oversight and reporting requirements for foreign banks operating in the US.
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-blue-600">🔍</span>
              </div>
              <h3 className="font-semibold text-slate-800 mb-2">Forensic Standards</h3>
              <p className="text-slate-600 text-sm">
                Investigation methodology became template for major financial institution fraud investigations
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-green-600">🌐</span>
              </div>
              <h3 className="font-semibold text-slate-800 mb-2">International Cooperation</h3>
              <p className="text-slate-600 text-sm">
                Strengthened international banking supervision and cross-border regulatory cooperation protocols
              </p>
            </div>
          </div>
        </section>

        {/* Investigation Methodology */}
        <section className="bg-white rounded-lg shadow-md p-8 mb-8">
          <h2 className="text-2xl font-semibold text-slate-800 mb-6">Investigation Methodology</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-lg font-medium text-slate-800 mb-4">Technical Expertise</h3>
              <div className="flex flex-wrap gap-2 mb-4">
                {[
                  "Financial Investigation",
                  "Forensic Accounting", 
                  "Regulatory Investigation",
                  "Banking Operations",
                  "Fraud Analysis"
                ].map((tech) => (
                  <span key={tech} className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm">
                    {tech}
                  </span>
                ))}
              </div>
            </div>
            
            <div>
              <h3 className="text-lg font-medium text-slate-800 mb-4">Investigation Focus Areas</h3>
              <ul className="space-y-2 text-slate-600">
                <li>• Forensic analysis of trading records and positions</li>
                <li>• Documentation of unauthorized securities transactions</li>
                <li>• Assessment of internal control failures</li>
                <li>• Analysis of management knowledge and response</li>
                <li>• Evaluation of regulatory compliance breaches</li>
              </ul>
            </div>
          </div>
        </section>

        {/* References & Further Reading */}
        <section className="bg-white rounded-lg shadow-md p-8">
          <h2 className="text-2xl font-semibold text-slate-800 mb-6">References & Further Reading</h2>
          <div className="space-y-4">
            <a 
              href="https://www.lectlaw.com/files/cas60.htm"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 p-4 border border-slate-200 rounded-lg hover:bg-slate-50 transition-colors"
            >
              <div className="flex-1">
                <h4 className="font-medium text-slate-800">Criminal Complaint & Indictment Against Daiwa Bank</h4>
                <p className="text-slate-600 text-sm">Complete legal documentation of the federal charges</p>
              </div>
              <ArrowTopRightOnSquareIcon className="h-5 w-5 text-slate-400" />
            </a>
            
            <a 
              href="https://www.federalreserve.gov/boarddocs/press/enforcement/2003/20030505/default.htm"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 p-4 border border-slate-200 rounded-lg hover:bg-slate-50 transition-colors"
            >
              <div className="flex-1">
                <h4 className="font-medium text-slate-800">Federal Reserve: Termination of Enforcement Orders</h4>
                <p className="text-slate-600 text-sm">Official Federal Reserve documentation on case resolution</p>
              </div>
              <ArrowTopRightOnSquareIcon className="h-5 w-5 text-slate-400" />
            </a>
            
            <a 
              href="https://www.linkedin.com/pulse/well-known-international-banking-scandal-daiwa-harish-g-r-"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 p-4 border border-slate-200 rounded-lg hover:bg-slate-50 transition-colors"
            >
              <div className="flex-1">
                <h4 className="font-medium text-slate-800">International Banking Scandal Analysis</h4>
                <p className="text-slate-600 text-sm">Contemporary analysis of the Daiwa Bank scandal and its implications</p>
              </div>
              <ArrowTopRightOnSquareIcon className="h-5 w-5 text-slate-400" />
            </a>
            
            <a 
              href="https://www.lectlaw.com/files/cur45.htm"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 p-4 border border-slate-200 rounded-lg hover:bg-slate-50 transition-colors"
            >
              <div className="flex-1">
                <h4 className="font-medium text-slate-800">Press Release: Criminal Indictment of Daiwa Bank</h4>
                <p className="text-slate-600 text-sm">Original press release announcing the federal criminal charges</p>
              </div>
              <ArrowTopRightOnSquareIcon className="h-5 w-5 text-slate-400" />
            </a>
          </div>
        </section>
      </div>
    </div>
  );
}