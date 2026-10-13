export interface Project {
  id: string;
  title: string;
  category: 'Web & Software' | 'MIS & Data Systems' | 'Community Tech';
  shortDesc: string;
  fullDesc: string;
  technologies: string[];
  role: string;
  period: string;
  impactMetrics?: string[];
  keyFeatures: string[];
  architectureNotes?: string;
  githubUrl?: string;
  liveUrl?: string;
  featured?: boolean;
}

export interface ExperienceItem {
  id: string;
  role: string;
  organization: string;
  unit: string;
  period: string;
  location: string;
  type: 'Volunteering & Leadership' | 'Technical & ICT';
  highlights: string[];
  skillsUsed: string[];
}

export interface Certification {
  id: string;
  title: string;
  issuer: string;
  issueDate: string;
  description: string;
  credentialUrl?: string;
  category: 'Leadership & Soft Skills' | 'Health & Safety' | 'Climate & Tech';
}

export interface DigitalCompetence {
  area: string;
  scoreLevel: string;
  levelNum: number;
  maxLevel: number;
  description: string;
  proficiency: 'Advanced' | 'Intermediate';
}

export interface LanguageSkill {
  language: string;
  isNative?: boolean;
  listening: string;
  reading: string;
  spokenProduction: string;
  spokenInteraction: string;
  writing: string;
}

export interface ProfileData {
  fullName: string;
  headline: string;
  statusKicker: string;
  bio: string;
  secondaryBio: string;
  email: string;
  location: string;
  university: string;
  currentCity: string;
  homeCountry: string;
  nationality: string;
  dateOfBirth: string;
  academicDegree: string;
  fieldOfStudy: string;
  currentStatus: string;
  githubUrl: string;
  linkedinUrl: string;
  academicSpecialization?: string;
  globalAdaptability?: string;
}
