import React, { useState } from 'react';
import { ProfileData } from '../types/portfolio';
import { X, Save, RotateCcw, Check, Sparkles } from 'lucide-react';

interface ProfileCustomizerModalProps {
  isOpen: boolean;
  onClose: () => void;
  profile: ProfileData;
  onSave: (updated: ProfileData) => void;
  onReset: () => void;
}

export const ProfileCustomizerModal: React.FC<ProfileCustomizerModalProps> = ({
  isOpen,
  onClose,
  profile,
  onSave,
  onReset
}) => {
  const [formData, setFormData] = useState<ProfileData>(profile);
  const [savedNotice, setSavedNotice] = useState(false);

  if (!isOpen) return null;

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSave(formData);
    setSavedNotice(true);
    setTimeout(() => {
      setSavedNotice(false);
      onClose();
    }, 800);
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-stone-900/60 backdrop-blur-xs flex items-center justify-center p-4">
      <div className="bg-white rounded-2xl border border-stone-200 max-w-xl w-full max-h-[90vh] flex flex-col shadow-2xl relative">
        
        {/* Modal Header */}
        <div className="p-6 border-b border-stone-200 flex items-center justify-between">
          <div>
            <h3 className="text-lg font-bold text-stone-900">
              Customize Your Portfolio Profile
            </h3>
            <p className="text-xs text-stone-500">
              Update your details anytime. Changes persist locally in your browser.
            </p>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 text-stone-400 hover:text-stone-700 rounded-lg transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Form Body */}
        <form onSubmit={handleSubmit} className="flex-1 overflow-y-auto p-6 space-y-4 text-xs">
          <div>
            <label className="block font-semibold text-stone-700 mb-1">Full Name</label>
            <input
              type="text"
              name="fullName"
              value={formData.fullName}
              onChange={handleChange}
              className="w-full px-3 py-2 border border-stone-300 rounded-lg focus:outline-none focus:ring-1 focus:ring-stone-900"
              required
            />
          </div>

          <div>
            <label className="block font-semibold text-stone-700 mb-1">Status Kicker / Top Badge</label>
            <input
              type="text"
              name="statusKicker"
              value={formData.statusKicker}
              onChange={handleChange}
              className="w-full px-3 py-2 border border-stone-300 rounded-lg focus:outline-none focus:ring-1 focus:ring-stone-900"
            />
          </div>

          <div>
            <label className="block font-semibold text-stone-700 mb-1">Degree & Field</label>
            <input
              type="text"
              name="academicDegree"
              value={formData.academicDegree}
              onChange={handleChange}
              className="w-full px-3 py-2 border border-stone-300 rounded-lg focus:outline-none focus:ring-1 focus:ring-stone-900"
            />
          </div>

          <div>
            <label className="block font-semibold text-stone-700 mb-1">Email Address</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="w-full px-3 py-2 border border-stone-300 rounded-lg focus:outline-none focus:ring-1 focus:ring-stone-900"
              required
            />
          </div>

          <div>
            <label className="block font-semibold text-stone-700 mb-1">University / Campus</label>
            <input
              type="text"
              name="university"
              value={formData.university || ''}
              onChange={handleChange}
              placeholder="e.g. Shandong University of Technology (SDUT), China"
              className="w-full px-3 py-2 border border-stone-300 rounded-lg focus:outline-none focus:ring-1 focus:ring-stone-900"
            />
          </div>

          <div>
            <label className="block font-semibold text-stone-700 mb-1">Location / Residence</label>
            <input
              type="text"
              name="location"
              value={formData.location}
              onChange={handleChange}
              placeholder="e.g. Zibo, Shandong, China (Origin: Gazipur, Bangladesh)"
              className="w-full px-3 py-2 border border-stone-300 rounded-lg focus:outline-none focus:ring-1 focus:ring-stone-900"
            />
          </div>

          <div>
            <label className="block font-semibold text-stone-700 mb-1">Primary Bio</label>
            <textarea
              name="bio"
              rows={3}
              value={formData.bio}
              onChange={handleChange}
              className="w-full px-3 py-2 border border-stone-300 rounded-lg focus:outline-none focus:ring-1 focus:ring-stone-900 text-xs leading-relaxed"
            />
          </div>

          <div>
            <label className="block font-semibold text-stone-700 mb-1">Secondary Experience Bio</label>
            <textarea
              name="secondaryBio"
              rows={2}
              value={formData.secondaryBio}
              onChange={handleChange}
              className="w-full px-3 py-2 border border-stone-300 rounded-lg focus:outline-none focus:ring-1 focus:ring-stone-900 text-xs leading-relaxed"
            />
          </div>

          {/* Action Row */}
          <div className="pt-4 border-t border-stone-200 flex items-center justify-between">
            <button
              type="button"
              onClick={() => {
                if (window.confirm('Reset all profile details to original CV defaults?')) {
                  onReset();
                  onClose();
                }
              }}
              className="px-3 py-2 text-xs font-medium text-stone-600 hover:text-stone-900 inline-flex items-center gap-1.5"
            >
              <RotateCcw className="w-3.5 h-3.5" />
              <span>Reset Defaults</span>
            </button>

            <div className="flex items-center gap-2">
              <button
                type="button"
                onClick={onClose}
                className="px-4 py-2 text-xs font-medium text-stone-600 hover:text-stone-900"
              >
                Cancel
              </button>
              <button
                type="submit"
                className="px-4 py-2 text-xs font-semibold text-white bg-stone-900 hover:bg-stone-800 rounded-lg transition-colors inline-flex items-center gap-1.5 shadow-xs"
              >
                {savedNotice ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Save className="w-3.5 h-3.5" />}
                <span>{savedNotice ? 'Saved!' : 'Save Profile'}</span>
              </button>
            </div>
          </div>
        </form>

      </div>
    </div>
  );
};
