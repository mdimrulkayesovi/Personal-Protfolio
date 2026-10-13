import React, { useState } from 'react';
import { ProfileData } from '../types/portfolio';
import { X, Printer, Download, Copy, Check, FileText, ArrowLeft } from 'lucide-react';
import avatarImage from '../assets/images/regenerated_image_1791900405836.jpg';

interface ResumeModalProps {
  isOpen: boolean;
  onClose: () => void;
  profile: ProfileData;
}

export const ResumeModal: React.FC<ResumeModalProps> = ({ isOpen, onClose, profile }) => {
  const [copied, setCopied] = useState(false);

  if (!isOpen) return null;

  const handlePrint = () => {
    window.print();
  };

  const handleCopySummary = () => {
    const text = `
MD IMRUL KAYES OVI - CURRICULUM VITAE
Email: ${profile.email}
Address: ${profile.location}
Nationality: ${profile.nationality} | Date of birth: ${profile.dateOfBirth}

EDUCATION
- Bachelor of Science (B.Sc.) in Computer Science (Undergraduate)

LANGUAGES
- Bengali (Mother tongue)
- English (C2 Proficient / C1 Writing)
- Urdu (C1 Spoken / A1 Writing)
- Hindi (C1 Spoken / A1 Writing)

VOLUNTEERING & LEADERSHIP
- Red Crescent Youth, Gazipur Unit Volunteer (2023 – Present)
  * MIS ICT-related technical support
  * Vaccination registration coordination with City Corporation
  * Dengue awareness & sanitation with BRAC
  * First Aid support and Y-Adapt climate resilience
- Rani Bilasmoni Red Crescent School Team (2017 – 2023)
  * Team Leader (2021 – 2023)

DIGITAL COMPETENCE (EU DigComp 2.1)
- Information and data literacy: Level 6 / 6 (Advanced)
- Problem solving: Level 6 / 6 (Advanced)
- Communication and collaboration: Level 5 / 6 (Advanced)
- Safety: Level 5 / 6 (Advanced)
- Digital content creation: Level 4 / 6 (Intermediate)

CERTIFICATIONS
- Skills to Succeed (BYLC)
- Mindfulness for Professionals (BYLC)
- Basic Life Support & First Aid Training (BDRCS)
    `.trim();

    navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-stone-900/70 backdrop-blur-xs flex items-center justify-center p-3 sm:p-6 no-print-overlay">
      <div className="bg-white rounded-2xl border border-stone-200 max-w-4xl w-full max-h-[92vh] flex flex-col shadow-2xl relative">
        
        {/* Top Action Bar (no-print) */}
        <div className="no-print p-4 sm:p-5 border-b border-stone-200 flex items-center justify-between bg-stone-50 rounded-t-2xl">
          <div className="flex items-center gap-2">
            <div className="w-7 h-7 rounded-lg bg-blue-700 text-white flex items-center justify-center font-bold text-xs">
              eu
            </div>
            <div>
              <h3 className="text-sm font-bold text-stone-900">
                Official Europass CV Format
              </h3>
              <p className="text-xs text-stone-500">
                Synchronized with Md Imrul Kayes Ovi's verified curriculum vitae
              </p>
            </div>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={handleCopySummary}
              className="px-3 py-1.5 text-xs font-medium text-stone-700 bg-white border border-stone-200 rounded-lg hover:bg-stone-50 transition-colors inline-flex items-center gap-1.5"
            >
              {copied ? <Check className="w-3.5 h-3.5 text-emerald-600" /> : <Copy className="w-3.5 h-3.5" />}
              <span>{copied ? 'Copied' : 'Copy Text'}</span>
            </button>
            <button
              onClick={handlePrint}
              className="px-3 py-1.5 text-xs font-semibold text-white bg-blue-700 hover:bg-blue-800 rounded-lg transition-colors inline-flex items-center gap-1.5"
            >
              <Printer className="w-3.5 h-3.5" />
              <span>Print / Save PDF</span>
            </button>
            <button
              onClick={onClose}
              className="p-1.5 text-stone-400 hover:text-stone-700 rounded-lg transition-colors"
              aria-label="Close CV preview"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Scrollable Document Area */}
        <div id="resume-print-area" className="flex-1 overflow-y-auto p-6 sm:p-10 font-sans text-stone-800 space-y-8 bg-white">
          
          {/* Header */}
          <div className="border-b border-stone-300 pb-6 flex flex-col sm:flex-row sm:items-start justify-between gap-6">
            <div className="flex items-start gap-5">
              {/* Europass Photo Avatar */}
              <div className="w-20 h-24 sm:w-24 sm:h-28 rounded-lg overflow-hidden bg-stone-100 border border-stone-300 shrink-0 shadow-2xs">
                <img
                  src={avatarImage}
                  alt={profile.fullName}
                  className="w-full h-full object-cover object-center"
                />
              </div>

              <div className="space-y-1">
                <h1 className="text-2xl sm:text-3xl font-extrabold text-stone-900 tracking-tight">
                  {profile.fullName.toUpperCase()}
                </h1>
                <div className="text-xs text-stone-600 space-y-0.5 pt-1">
                  <div><span className="font-semibold text-stone-700">Date of birth:</span> {profile.dateOfBirth} &nbsp;|&nbsp; <span className="font-semibold text-stone-700">Place of birth:</span> Gazipur, Bangladesh</div>
                  <div><span className="font-semibold text-stone-700">Nationality:</span> {profile.nationality} &nbsp;|&nbsp; <span className="font-semibold text-stone-700">Gender:</span> Male</div>
                  <div><span className="font-semibold text-stone-700">Email:</span> <a href={`mailto:${profile.email}`} className="text-blue-700 underline">{profile.email}</a></div>
                  <div><span className="font-semibold text-stone-700">Address:</span> {profile.location}</div>
                </div>
              </div>
            </div>

            {/* Europass Branding Flag Mark */}
            <div className="shrink-0 flex items-center gap-2 border border-blue-100 bg-blue-50/50 px-3 py-2 rounded-lg self-start">
              <div className="w-5 h-5 rounded-full bg-blue-700 flex items-center justify-center text-white text-[10px] font-bold">
                ★
              </div>
              <span className="text-xs font-bold text-blue-900 tracking-tight">europass</span>
            </div>
          </div>

          {/* Education & Current Degree */}
          <section className="print-break-inside-avoid">
            <h2 className="text-xs font-bold uppercase tracking-wider text-stone-900 border-b border-stone-200 pb-1 mb-3">
              EDUCATION AND TRAINING
            </h2>
            <div className="space-y-4 text-xs">
              <div>
                <div className="font-bold text-stone-900 text-sm">
                  {profile.academicDegree.toUpperCase()}
                </div>
                <div className="text-stone-700 font-semibold">
                  Shandong University of Technology (SDUT) — Zibo, Shandong, China
                </div>
                <div className="text-stone-600 font-medium">Field of study: {profile.fieldOfStudy} (Undergraduate)</div>
                <div className="text-stone-500 mt-0.5">
                  Focusing on Algorithms, Data Structures, Object-Oriented Software Engineering, Relational Database Management, and Web Technologies. International student from Bangladesh.
                </div>
              </div>

              <div className="pt-2">
                <div className="font-bold text-stone-900">
                  RED CROSS RED CRESCENT BASIC AND FIRST AID TRAINING — Bangladesh Red Crescent Society (BDRCS)
                </div>
                <div className="text-stone-600 mt-0.5">
                  <span className="font-semibold">Field of study:</span> Basic Life Support (BLS), Wound Management, Bleeding Control, Bone Fracture & Immobilization
                </div>
                <div className="text-stone-500">Website: https://bdrcs.org/</div>
              </div>
            </div>
          </section>

          {/* Volunteering & Experience */}
          <section className="print-break-inside-avoid">
            <h2 className="text-xs font-bold uppercase tracking-wider text-stone-900 border-b border-stone-200 pb-1 mb-3">
              VOLUNTEERING & LEADERSHIP
            </h2>
            <div className="space-y-4 text-xs">
              <div>
                <div className="flex justify-between items-baseline">
                  <span className="font-bold text-stone-900 text-sm">Red Crescent Youth, Gazipur Unit Volunteer</span>
                  <span className="font-semibold text-stone-600">2023 – 2026</span>
                </div>
                <div className="text-stone-500 mb-1">Gazipur, Bangladesh</div>
                <p className="text-stone-700 leading-relaxed">
                  Actively engaged in humanitarian and development initiatives. Notable highlights include collaborating with the City Corporation to manage the vaccination registration programme and partnering with BRAC to lead Dengue awareness and cleaning campaigns. Provided immediate First Aid support during local football matches. Utilized training in Management Information Systems (MIS) to provide essential ICT-related technical support to the unit and implemented a climate adaptation project following Y-Adapt certification.
                </p>
              </div>

              <div className="pt-2">
                <div className="flex justify-between items-baseline">
                  <span className="font-bold text-stone-900 text-sm">Rani Bilasmoni Red Crescent School Team</span>
                  <span className="font-semibold text-stone-600">2017 – 2023</span>
                </div>
                <div className="text-stone-500 mb-1">Gazipur, Bangladesh</div>
                <p className="text-stone-700 leading-relaxed">
                  Started as a dedicated volunteer in 2017 and progressed to become the Team Leader in 2021, where I successfully coordinated school-level activities, first aid drills, and led the volunteer team.
                </p>
              </div>
            </div>
          </section>

          {/* Digital Skills Test Results */}
          <section className="print-break-inside-avoid">
            <h2 className="text-xs font-bold uppercase tracking-wider text-stone-900 border-b border-stone-200 pb-1 mb-3">
              DIGITAL SKILLS TEST RESULTS (The Digital Competence Framework 2.1)
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs">
              <div className="flex justify-between p-2 bg-stone-50 border border-stone-200 rounded">
                <span className="text-stone-700">Information and data literacy</span>
                <span className="font-bold text-stone-900">ADVANCED Level 6 / 6</span>
              </div>
              <div className="flex justify-between p-2 bg-stone-50 border border-stone-200 rounded">
                <span className="text-stone-700">Problem solving</span>
                <span className="font-bold text-stone-900">ADVANCED Level 6 / 6</span>
              </div>
              <div className="flex justify-between p-2 bg-stone-50 border border-stone-200 rounded">
                <span className="text-stone-700">Communication and collaboration</span>
                <span className="font-bold text-stone-900">ADVANCED Level 5 / 6</span>
              </div>
              <div className="flex justify-between p-2 bg-stone-50 border border-stone-200 rounded">
                <span className="text-stone-700">Safety</span>
                <span className="font-bold text-stone-900">ADVANCED Level 5 / 6</span>
              </div>
              <div className="flex justify-between p-2 bg-stone-50 border border-stone-200 rounded sm:col-span-2">
                <span className="text-stone-700">Digital content creation</span>
                <span className="font-bold text-stone-900">INTERMEDIATE Level 4 / 6</span>
              </div>
            </div>
          </section>

          {/* Languages */}
          <section className="print-break-inside-avoid">
            <h2 className="text-xs font-bold uppercase tracking-wider text-stone-900 border-b border-stone-200 pb-1 mb-3">
              LANGUAGE SKILLS
            </h2>
            <div className="text-xs space-y-2">
              <div>
                <span className="font-semibold text-stone-800">Mother tongue(s):</span> BENGALI
              </div>
              <div className="overflow-x-auto">
                <table className="w-full text-left border-collapse border border-stone-200 text-[11px]">
                  <thead>
                    <tr className="bg-stone-100 text-stone-700">
                      <th className="p-2 border border-stone-200">Language</th>
                      <th className="p-2 border border-stone-200">Listening</th>
                      <th className="p-2 border border-stone-200">Reading</th>
                      <th className="p-2 border border-stone-200">Spoken Prod.</th>
                      <th className="p-2 border border-stone-200">Spoken Inter.</th>
                      <th className="p-2 border border-stone-200">Writing</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="p-2 border border-stone-200 font-bold">ENGLISH</td>
                      <td className="p-2 border border-stone-200">C2</td>
                      <td className="p-2 border border-stone-200">C2</td>
                      <td className="p-2 border border-stone-200">C2</td>
                      <td className="p-2 border border-stone-200">C2</td>
                      <td className="p-2 border border-stone-200">C1</td>
                    </tr>
                    <tr>
                      <td className="p-2 border border-stone-200 font-bold">URDU</td>
                      <td className="p-2 border border-stone-200">C1</td>
                      <td className="p-2 border border-stone-200">A1</td>
                      <td className="p-2 border border-stone-200">C1</td>
                      <td className="p-2 border border-stone-200">C1</td>
                      <td className="p-2 border border-stone-200">A1</td>
                    </tr>
                    <tr>
                      <td className="p-2 border border-stone-200 font-bold">HINDI</td>
                      <td className="p-2 border border-stone-200">C1</td>
                      <td className="p-2 border border-stone-200">A1</td>
                      <td className="p-2 border border-stone-200">C1</td>
                      <td className="p-2 border border-stone-200">C1</td>
                      <td className="p-2 border border-stone-200">A1</td>
                    </tr>
                    <tr>
                      <td className="p-2 border border-stone-200 font-bold">CHINESE (MANDARIN)</td>
                      <td className="p-2 border border-stone-200">Conversational</td>
                      <td className="p-2 border border-stone-200">Elementary</td>
                      <td className="p-2 border border-stone-200">Conversational</td>
                      <td className="p-2 border border-stone-200">Conversational</td>
                      <td className="p-2 border border-stone-200">Elementary</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </section>

          {/* Certifications */}
          <section className="print-break-inside-avoid">
            <h2 className="text-xs font-bold uppercase tracking-wider text-stone-900 border-b border-stone-200 pb-1 mb-3">
              CERTIFICATIONS & PROFESSIONAL TRAINING
            </h2>
            <div className="space-y-3 text-xs">
              <div>
                <div className="font-bold text-stone-900">Bangladesh Youth Leadership Center (BYLC), 19/05/2025</div>
                <div className="font-semibold text-stone-700">Skills to Succeed</div>
                <p className="text-stone-600">
                  Underwent intensive training on workplace readiness, focusing on leadership dynamics, time management and professional etiquette to enhance organizational effectiveness.
                </p>
              </div>

              <div>
                <div className="font-bold text-stone-900">Bangladesh Youth Leadership Center (BYLC), 31/05/2025</div>
                <div className="font-semibold text-stone-700">Mindfulness for Professionals</div>
                <p className="text-stone-600">
                  Gained insights into maintaining work-life balance and improving concentration through mindful breathing and listening techniques.
                </p>
              </div>

              <div>
                <div className="font-bold text-stone-900">Y-Adapt Climate Adaptation Certification</div>
                <p className="text-stone-600">
                  Red Cross Red Crescent Climate Centre certified youth adaptation facilitator.
                </p>
              </div>
            </div>
          </section>

          {/* General Skills */}
          <section className="print-break-inside-avoid">
            <h2 className="text-xs font-bold uppercase tracking-wider text-stone-900 border-b border-stone-200 pb-1 mb-3">
              ORGANIZATIONAL & TECHNICAL SKILLS
            </h2>
            <div className="text-xs text-stone-700 leading-relaxed">
              Microsoft Word · Microsoft Excel (Advanced Data Modeling & Analysis) · Outlook · Organizational and Planning Skills · Microsoft Office 365 · Good Listener and Communicator · Team-work Oriented · C/C++ · Python · Web Technologies (React, Tailwind CSS, TypeScript, SQL)
            </div>
          </section>

        </div>

      </div>
    </div>
  );
};
