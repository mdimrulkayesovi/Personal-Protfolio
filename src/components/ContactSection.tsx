import React, { useState } from 'react';
import { Mail, Copy, Check, Send, MapPin, Calendar, MessageSquare, ExternalLink } from 'lucide-react';
import { ProfileData } from '../types/portfolio';

interface ContactSectionProps {
  profile: ProfileData;
}

export const ContactSection: React.FC<ContactSectionProps> = ({ profile }) => {
  const [copied, setCopied] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    inquiryType: 'Internship Opportunity',
    subject: '',
    message: ''
  });
  const [submitted, setSubmitted] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(profile.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulate submission and construct mailto link as fallback option
    setSubmitted(true);
  };

  return (
    <section id="contact" className="py-16 md:py-24 bg-stone-100/60 border-b border-stone-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Left Column: Direct Info (5 cols) */}
          <div className="lg:col-span-5 space-y-6">
            <div>
              <div className="text-xs font-semibold uppercase tracking-wider text-stone-500 mb-2">
                Initiate Contact
              </div>
              <h2 className="text-3xl sm:text-4xl font-bold text-stone-900 tracking-tight">
                Let's connect & collaborate.
              </h2>
              <p className="mt-3 text-sm sm:text-base text-stone-600 leading-relaxed">
                Whether you have an internship opportunity, a community technology project, or an academic research idea, I'd welcome the chance to speak.
              </p>
            </div>

            <div className="bg-white p-6 rounded-2xl border border-stone-200 space-y-4">
              
              {/* Copy Email Box */}
              <div>
                <span className="text-xs font-semibold text-stone-500 block mb-1">Direct Email Address</span>
                <div className="flex items-center justify-between gap-2 p-2.5 bg-stone-50 rounded-xl border border-stone-200">
                  <span className="text-xs font-mono font-medium text-stone-800 truncate">
                    {profile.email}
                  </span>
                  <button
                    onClick={handleCopyEmail}
                    className="p-1.5 text-stone-600 hover:text-stone-900 hover:bg-white rounded-lg transition-colors shrink-0"
                    title="Copy email to clipboard"
                  >
                    {copied ? <Check className="w-4 h-4 text-emerald-600" /> : <Copy className="w-4 h-4" />}
                  </button>
                </div>
              </div>

              {/* Location */}
              <div className="flex items-start gap-3 pt-2">
                <MapPin className="w-4 h-4 text-stone-400 mt-0.5 shrink-0" />
                <div className="text-xs text-stone-600">
                  <span className="font-semibold text-stone-800 block">Current Location</span>
                  <span>{profile.location}</span>
                  <span className="block text-[11px] text-stone-400 mt-0.5">Shandong University of Technology Campus, Zibo</span>
                </div>
              </div>

              {/* Status */}
              <div className="flex items-start gap-3">
                <Calendar className="w-4 h-4 text-stone-400 mt-0.5 shrink-0" />
                <div className="text-xs text-stone-600">
                  <span className="font-semibold text-stone-800 block">Response Window</span>
                  <span>Typically responds within 24 business hours (China Standard Time / GMT+8)</span>
                </div>
              </div>

            </div>
          </div>

          {/* Right Column: Contact Form (7 cols) */}
          <div className="lg:col-span-7 bg-white p-6 sm:p-8 rounded-2xl border border-stone-200 shadow-xs">
            {submitted ? (
              <div className="py-12 text-center space-y-4">
                <div className="w-12 h-12 bg-emerald-50 text-emerald-700 rounded-full flex items-center justify-center mx-auto border border-emerald-200">
                  <Check className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-bold text-stone-900">
                  Message Prepared!
                </h3>
                <p className="text-sm text-stone-600 max-w-md mx-auto">
                  Thank you for reaching out, <span className="font-semibold">{formData.name}</span>. You can also send this directly via your email client using the button below.
                </p>
                <div className="pt-2 flex justify-center gap-3">
                  <a
                    href={`mailto:${profile.email}?subject=${encodeURIComponent(formData.subject || formData.inquiryType)}&body=${encodeURIComponent(`Hi Ovi,\n\n${formData.message}\n\nBest regards,\n${formData.name} (${formData.email})`)}`}
                    className="px-4 py-2 text-xs font-semibold text-white bg-stone-900 rounded-lg hover:bg-stone-800 transition-colors inline-flex items-center gap-1.5"
                  >
                    <Mail className="w-3.5 h-3.5" />
                    <span>Open in Email Client</span>
                  </a>
                  <button
                    onClick={() => {
                      setSubmitted(false);
                      setFormData({ name: '', email: '', inquiryType: 'Software Engineering Internship', subject: '', message: '' });
                    }}
                    className="px-4 py-2 text-xs font-medium text-stone-700 bg-stone-100 rounded-lg hover:bg-stone-200 transition-colors"
                  >
                    Send Another
                  </button>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-semibold text-stone-700 mb-1">
                      Your Name
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Dr. Rahman / Professor Chen / Alex Smith"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full px-3 py-2 text-xs border border-stone-300 rounded-lg focus:outline-none focus:ring-1 focus:ring-stone-900"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-stone-700 mb-1">
                      Your Email Address
                    </label>
                    <input
                      type="email"
                      required
                      placeholder="name@organization.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full px-3 py-2 text-xs border border-stone-300 rounded-lg focus:outline-none focus:ring-1 focus:ring-stone-900"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-semibold text-stone-700 mb-1">
                      Inquiry Category
                    </label>
                    <select
                      value={formData.inquiryType}
                      onChange={(e) => setFormData({ ...formData, inquiryType: e.target.value })}
                      className="w-full px-3 py-2 text-xs border border-stone-300 rounded-lg focus:outline-none focus:ring-1 focus:ring-stone-900 bg-white"
                    >
                      <option>Software Engineering Internship</option>
                      <option>Academic & Research Collaboration (SDUT)</option>
                      <option>Full-Stack & MIS Consultation</option>
                      <option>International Student Tech Network</option>
                      <option>Red Crescent / Humanitarian Inquiry</option>
                      <option>General Connection</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-stone-700 mb-1">
                      Subject
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Software Internship Opportunity"
                      value={formData.subject}
                      onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                      className="w-full px-3 py-2 text-xs border border-stone-300 rounded-lg focus:outline-none focus:ring-1 focus:ring-stone-900"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-stone-700 mb-1">
                    Your Message
                  </label>
                  <textarea
                    rows={4}
                    required
                    placeholder="Describe your project, team, or opportunity..."
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full px-3 py-2 text-xs border border-stone-300 rounded-lg focus:outline-none focus:ring-1 focus:ring-stone-900"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full py-2.5 px-4 text-xs font-semibold text-white bg-stone-900 rounded-lg hover:bg-stone-800 transition-colors shadow-xs inline-flex items-center justify-center gap-2"
                >
                  <Send className="w-3.5 h-3.5" />
                  <span>Send Message to Ovi</span>
                </button>
              </form>
            )}
          </div>

        </div>

      </div>
    </section>
  );
};
