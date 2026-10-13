import { ProfileData, Project, ExperienceItem, Certification, DigitalCompetence, LanguageSkill } from '../types/portfolio';

export const initialProfileData: ProfileData = {
  fullName: 'Md Imrul Kayes Ovi',
  headline: 'Computer Science Undergraduate @ Shandong University of Technology · International Student in China',
  statusKicker: 'CS Undergraduate @ SDUT · International Student in China · From Bangladesh',
  bio: 'Computer Science undergraduate at Shandong University of Technology (SDUT) in Zibo, Shandong, China, originally from Bangladesh. Combining rigorous international computer science coursework in algorithms, data structures, and full-stack software development with 9 years (2017–2026) of proven youth leadership and Management Information Systems (MIS) service.',
  secondaryBio: 'Experienced in real-world technical coordination, municipal data systems with Gazipur City Corporation and BRAC, and certified in leadership and problem solving (Level 6/6 in EU DigComp). Currently focused on modern software engineering, cross-cultural tech collaboration, and global internship opportunities.',
  email: 'mdimrulkayesovi@gmail.com',
  location: 'Zibo, Shandong, China (Origin: Gazipur, Bangladesh)',
  university: 'Shandong University of Technology (SDUT)',
  currentCity: 'Zibo, Shandong, China',
  homeCountry: 'Bangladesh',
  nationality: 'Bangladeshi',
  dateOfBirth: '23/11/2007',
  academicDegree: 'Bachelor of Science (B.Sc.) in Computer Science & Technology',
  fieldOfStudy: 'Computer Science & Technology',
  academicSpecialization: 'Algorithms, Software Engineering, Database Systems & MIS',
  globalAdaptability: 'International Student in China · Global Tech Perspective · Multilingual (English C2, Bengali Native, Chinese, Hindi, Urdu)',
  currentStatus: 'International Undergraduate in China · Open to Global Internships & Research',
  githubUrl: 'https://github.com',
  linkedinUrl: 'https://linkedin.com',
};

export const projectsData: Project[] = [
  {
    id: 'rc-mis-system',
    title: 'Red Crescent Unit MIS & Volunteer Operations Portal',
    category: 'MIS & Data Systems',
    shortDesc: 'A centralized data management and deployment system for tracking volunteer rosters, inventory, and emergency response assignments across Gazipur unit.',
    fullDesc: 'Developed to address logistical bottlenecks during regional emergency mobilization. Replaced paper logs and disconnected spreadsheets with a structured Management Information System (MIS) enabling quick personnel lookups, role dispatch, and automated volunteer activity reporting.',
    technologies: ['React', 'TypeScript', 'Tailwind CSS', 'SQL / Relational DB', 'REST APIs', 'MS Excel Integration'],
    role: 'Lead Developer & MIS Administrator',
    period: '2024 – 2025',
    impactMetrics: [
      'Over 120+ active volunteers coordinated seamlessly',
      'Reduced emergency deployment dispatch time by 40%',
      'Integrated real-time roster sync for rapid disaster drills'
    ],
    keyFeatures: [
      'Role-based dashboard for unit coordinators and squad leaders',
      'Volunteer skill matrix & emergency first-aid readiness filter',
      'Exportable reporting module compliant with BDRCS administrative formats',
      'Offline-capable tabular data caching during field connectivity drops'
    ],
    architectureNotes: 'Built with a clean component architecture with local SQLite/IndexedDB offline caching, synced to cloud endpoints. Uses responsive tables with tabular figures for inventory and personnel counts.',
    githubUrl: 'https://github.com',
    liveUrl: '#',
    featured: true
  },
  {
    id: 'dengue-surveillance-map',
    title: 'Community Dengue Outbreak & Sanitation Tracker',
    category: 'Community Tech',
    shortDesc: 'Geo-enabled awareness and sanitation tracking dashboard created during joint BDRCS and BRAC cleanliness campaigns in Gazipur.',
    fullDesc: 'Partnering with BRAC and the City Corporation, this platform helped map dengue larval breeding hotspots, coordinate neighborhood vector cleanup drives, and provide citizens with actionable prevention guides in Bengali and English.',
    technologies: ['JavaScript', 'HTML5 / CSS3', 'Leaflet Maps API', 'Chart.js', 'GeoJSON', 'Bilingual UI'],
    role: 'Technical Coordinator & Data Analyst',
    period: '2023 – 2024',
    impactMetrics: [
      'Covered 14 municipal wards across Gazipur City Corporation',
      'Helped direct sanitation volunteer squads to high-risk zones',
      'Over 5,000 households reached through coordinated campaigns'
    ],
    keyFeatures: [
      'Interactive risk density heatmap of urban waterlogging zones',
      'Volunteer clean-up verification with photo submission log',
      'Bilingual prevention pamphlets & symptom evaluation checklist',
      'Data summaries presented directly to municipal health liaisons'
    ],
    architectureNotes: 'Client-side spatial visualization utilizing lightweight GeoJSON polygons of Gazipur wards to deliver instant performance on modest mobile devices in the field.',
    githubUrl: 'https://github.com',
    liveUrl: '#',
    featured: true
  },
  {
    id: 'y-adapt-climate-hub',
    title: 'Y-Adapt Youth Climate Resilience Platform',
    category: 'Community Tech',
    shortDesc: 'Interactive climate adaptation resource hub built following official Y-Adapt certification to mobilize youth toward flood and weather resilience.',
    fullDesc: 'Built in alignment with the Red Cross Red Crescent Climate Centre Y-Adapt methodology. Guides student teams through structured climate vulnerability assessments and provides templates for actionable micro-projects in flood-prone industrial districts.',
    technologies: ['TypeScript', 'React', 'Tailwind CSS', 'Lucide Icons', 'Local Storage State'],
    role: 'Project Initiator & Web Engineer',
    period: '2024',
    impactMetrics: [
      'Certified Y-Adapt action plan implemented in Gazipur',
      'Supported 6 youth action proposals for local drainage monitoring',
      'Interactive guidance tool utilized across school workshops'
    ],
    keyFeatures: [
      'Step-by-step 7-stage Y-Adapt climate action plan builder',
      'Interactive vulnerability matrix scoring system',
      'Resource directory with disaster risk reduction guidelines',
      'Print-ready project summary generator for school coordinators'
    ],
    architectureNotes: 'Single-page responsive architecture with persistent state machines tracking team progression through assessment, solution design, and field implementation.',
    githubUrl: 'https://github',
    liveUrl: '#',
    featured: true
  },
  {
    id: 'algo-lab-toolkit',
    title: 'Algorithmic Data Structures & Performance Lab',
    category: 'Web & Software',
    shortDesc: 'Interactive suite demonstrating fundamental data structures, graph traversals, and algorithmic problem-solving in modern C++ and Python.',
    fullDesc: 'A rigorous academic project created during Computer Science undergraduate coursework. Focuses on visual step-by-step execution of sorting algorithms, tree traversals (BST, AVL), shortest-path algorithms (Dijkstra, BFS), and Big-O computational benchmarks.',
    technologies: ['C++', 'Python', 'TypeScript', 'Web Workers', 'Canvas API', 'Algorithm Analysis'],
    role: 'Solo Developer & CS Student',
    period: '2024 – 2025',
    impactMetrics: [
      'Implemented 25+ standard algorithms with rigorous test suites',
      'Visual comparative benchmark tool with millisecond execution timers',
      'Extensively documented for university study group workshops'
    ],
    keyFeatures: [
      'Step-by-step state debugger with playback controls (play, pause, step)',
      'Real-time comparison of theoretical vs empirical Big-O runtimes',
      'Dynamic input generator for best, average, and worst-case permutations',
      'Clean syntax-highlighted code snippets side-by-side with execution graph'
    ],
    architectureNotes: 'Separation of algorithm computation into dedicated Web Workers to ensure seamless 60fps rendering of canvas visualizers without blocking UI thread.',
    githubUrl: 'https://github.com',
    liveUrl: '#',
    featured: false
  },
  {
    id: 'first-aid-quick-guide',
    title: 'Emergency First Aid Field Guide (PWA)',
    category: 'Web & Software',
    shortDesc: 'Offline-ready emergency medical protocol reference tool for field volunteers, based on BDRCS Basic Life Support standards.',
    fullDesc: 'Designed for use during sports events, school drills, and community emergencies. Provides rapid, panic-free tap navigation for Basic Life Support (BLS), wound management, severe hemorrhage control, and bone fracture immobilization.',
    technologies: ['TypeScript', 'PWA / Service Worker', 'Tailwind CSS', 'Accessible Audio Prompts'],
    role: 'Developer & Certified First Aider',
    period: '2023 – 2024',
    impactMetrics: [
      'Field-tested during local football match First Aid medical posts',
      'Zero latency: 100% functional without cellular internet connectivity',
      'High-contrast visual aid designed for rapid 5-second retrieval'
    ],
    keyFeatures: [
      'Instant cardiopulmonary resuscitation (CPR) rhythm metronome (100–120 bpm)',
      'Step-by-step wound pressure and tourniquet protocol instructions',
      'Quick triage color-coding and emergency telephone quick-dials',
      'High contrast sunlight-readable interface design'
    ],
    architectureNotes: 'Progressive Web App with cache-first service worker architecture ensuring 100% uptime in remote or disaster-hit zones.',
    githubUrl: 'https://github.com',
    liveUrl: '#',
    featured: false
  },
  {
    id: 'city-vaccine-reg-system',
    title: 'Municipal Vaccination Registration Support System',
    category: 'MIS & Data Systems',
    shortDesc: 'Assisted Gazipur City Corporation with high-throughput citizen intake, record verification, and digital receipt dispatch.',
    fullDesc: 'Collaborated with municipal health teams during mass immunization drives. Engineered standardized data intake spreadsheets, error-checking formulas, and citizen lookup sheets to eliminate registration bottlenecks and duplicate entries.',
    technologies: ['Advanced MS Excel', 'VBA / Scripting', 'Data Cleaning', 'Data Entry Protocols', 'MIS'],
    role: 'Technical Lead Volunteer',
    period: '2023',
    impactMetrics: [
      'Helped process thousands of citizen records accurately',
      'Eliminated duplicate records through automated lookup validation',
      'Recognized by Gazipur Unit coordinator for digital precision'
    ],
    keyFeatures: [
      'Automated validation checks for national identification numbers',
      'Live batch statistics showing daily target fulfillment rates',
      'Rapid search and filter capabilities for citizen queue managers'
    ],
    architectureNotes: 'Robust spreadsheet data model with strict cell validations, lookup logic, and automated daily rollups.',
    githubUrl: 'https://github.com',
    liveUrl: '#',
    featured: false
  }
];

export const experienceData: ExperienceItem[] = [
  {
    id: 'rc-gazipur-unit',
    role: 'Unit Volunteer & ICT / MIS Technical Support',
    organization: 'Red Crescent Youth, Bangladesh Red Crescent Society (BDRCS)',
    unit: 'Gazipur Unit',
    period: '2023 – 2026',
    location: 'Gazipur, Bangladesh',
    type: 'Technical & ICT',
    highlights: [
      'Utilized specialized training in Management Information Systems (MIS) to deliver essential ICT-related technical support to the Gazipur unit.',
      'Collaborated closely with Gazipur City Corporation to coordinate and manage the high-volume vaccination registration program.',
      'Partnered with BRAC to spearhead community Dengue awareness campaigns, environmental sanitation, and neighborhood cleaning drives.',
      'Delivered immediate on-site First Aid support during local sports events and community football tournaments.',
      'Executed youth climate resilience projects in the municipality following official Y-Adapt certification.'
    ],
    skillsUsed: ['MIS Management', 'ICT Support', 'Public Sector Collaboration', 'First Aid (BLS)', 'Climate Adaptation']
  },
  {
    id: 'rc-rani-bilasmoni-leader',
    role: 'Team Leader',
    organization: 'Rani Bilasmoni Red Crescent School Team',
    unit: 'School Youth Wing',
    period: '2021 – 2023',
    location: 'Gazipur, Bangladesh',
    type: 'Volunteering & Leadership',
    highlights: [
      'Promoted to Team Leader after 4 years of dedicated volunteering; led and mentored a corps of student volunteers.',
      'Successfully coordinated all school-level humanitarian events, blood donation awareness seminars, and emergency evacuation drills.',
      'Maintained communication between school administration, students, and district Red Crescent officials.',
      'Trained younger students in fundamental first aid, teamwork, and civic responsibility.'
    ],
    skillsUsed: ['Youth Leadership', 'Event Coordination', 'Public Speaking', 'Team Mentorship', 'Disaster Preparedness']
  },
  {
    id: 'rc-rani-bilasmoni-volunteer',
    role: 'Student Volunteer',
    organization: 'Rani Bilasmoni Red Crescent School Team',
    unit: 'School Youth Wing',
    period: '2017 – 2021',
    location: 'Gazipur, Bangladesh',
    type: 'Volunteering & Leadership',
    highlights: [
      'Joined Red Crescent Youth in November 2017, participating in hygiene awareness, health campaigns, and school safety initiatives.',
      'Assisted senior team leads during annual disaster drills and community outreach days.'
    ],
    skillsUsed: ['Community Service', 'Basic First Aid', 'Team Collaboration', 'Organization']
  }
];

export const certificationsData: Certification[] = [
  {
    id: 'cert-bylc-skills',
    title: 'Skills to Succeed',
    issuer: 'Bangladesh Youth Leadership Center (BYLC)',
    issueDate: '19/05/2025',
    description: 'Underwent intensive training on workplace readiness, focusing on leadership dynamics, time management, professional communication, and etiquette to enhance organizational effectiveness.',
    category: 'Leadership & Soft Skills',
    credentialUrl: 'https://bylc.org'
  },
  {
    id: 'cert-bylc-mindfulness',
    title: 'Mindfulness for Professionals',
    issuer: 'Bangladesh Youth Leadership Center (BYLC)',
    issueDate: '31/05/2025',
    description: 'Gained structured insights into maintaining work-life balance, stress resilience, and improving sustained focus through mindful listening and concentration techniques.',
    category: 'Leadership & Soft Skills',
    credentialUrl: 'https://bylc.org'
  },
  {
    id: 'cert-bdrcs-firstaid',
    title: 'Red Cross Red Crescent Basic and First Aid Training',
    issuer: 'Bangladesh Red Crescent Society (BDRCS)',
    issueDate: 'Certified',
    description: 'Field of study: Basic Life Support (BLS), Wound Management, Bleeding Control, Bone Fracture & Immobilization. Certified to provide emergency care.',
    category: 'Health & Safety',
    credentialUrl: 'https://bdrcs.org'
  },
  {
    id: 'cert-yadapt-climate',
    title: 'Y-Adapt Climate Adaptation Certification',
    issuer: 'Red Cross Red Crescent Climate Centre / BDRCS',
    issueDate: 'Certified',
    description: 'Trained to develop and lead youth-driven climate adaptation initiatives to protect vulnerable urban and rural communities from extreme weather hazards.',
    category: 'Climate & Tech',
    credentialUrl: 'https://climatecentre.org'
  }
];

export const digitalCompetencies: DigitalCompetence[] = [
  {
    area: 'Information and Data Literacy',
    scoreLevel: 'Level 6 / 6',
    levelNum: 6,
    maxLevel: 6,
    proficiency: 'Advanced',
    description: 'Advanced mastery in browsing, searching, critically evaluating, managing, and organizing data, information, and digital content across complex environments.'
  },
  {
    area: 'Problem Solving',
    scoreLevel: 'Level 6 / 6',
    levelNum: 6,
    maxLevel: 6,
    proficiency: 'Advanced',
    description: 'Advanced capacity to resolve technical problems, identify technology needs, creatively use digital tools to solve domain issues, and address digital competence gaps.'
  },
  {
    area: 'Communication and Collaboration',
    scoreLevel: 'Level 5 / 6',
    levelNum: 5,
    maxLevel: 6,
    proficiency: 'Advanced',
    description: 'Advanced ability to interact, share, engage in citizenship through digital services, and collaborate effectively using diverse digital tools and social media.'
  },
  {
    area: 'Safety and Security',
    scoreLevel: 'Level 5 / 6',
    levelNum: 5,
    maxLevel: 6,
    proficiency: 'Advanced',
    description: 'Advanced ability to protect devices, personal data, privacy, health, and well-being in digital environments, alongside environmental awareness of digital tech.'
  },
  {
    area: 'Digital Content Creation',
    scoreLevel: 'Level 4 / 6',
    levelNum: 4,
    maxLevel: 6,
    proficiency: 'Intermediate',
    description: 'Solid capability in creating and editing digital content, integrating data models, understanding copyright/licenses, and applying programmatic rules.'
  }
];

export const languageSkills: LanguageSkill[] = [
  {
    language: 'Bengali',
    isNative: true,
    listening: 'Native',
    reading: 'Native',
    spokenProduction: 'Native',
    spokenInteraction: 'Native',
    writing: 'Native'
  },
  {
    language: 'English',
    isNative: false,
    listening: 'C2 (Mastery)',
    reading: 'C2 (Mastery)',
    spokenProduction: 'C2 (Mastery)',
    spokenInteraction: 'C2 (Mastery)',
    writing: 'C1 (Effective Operational)'
  },
  {
    language: 'Urdu',
    isNative: false,
    listening: 'C1 (Proficient)',
    reading: 'A1 (Basic)',
    spokenProduction: 'C1 (Proficient)',
    spokenInteraction: 'C1 (Proficient)',
    writing: 'A1 (Basic)'
  },
  {
    language: 'Hindi',
    isNative: false,
    listening: 'C1 (Proficient)',
    reading: 'A1 (Basic)',
    spokenProduction: 'C1 (Proficient)',
    spokenInteraction: 'C1 (Proficient)',
    writing: 'A1 (Basic)'
  },
  {
    language: 'Chinese (Mandarin)',
    isNative: false,
    listening: 'Conversational / Campus Immersion',
    reading: 'Elementary / HSK Track',
    spokenProduction: 'Conversational / Daily Living',
    spokenInteraction: 'Conversational / Living in Zibo, China',
    writing: 'Elementary Characters'
  }
];

export const technicalSkillsList = [
  {
    category: 'Computer Science & Software',
    skills: ['C / C++', 'Python', 'JavaScript (ES6+)', 'TypeScript', 'Data Structures & Algorithms', 'Object-Oriented Programming (OOP)', 'Database Systems & SQL']
  },
  {
    category: 'Web & Frontend Engineering',
    skills: ['React', 'Tailwind CSS', 'HTML5 / Semantic Web', 'CSS3 / Modern Layouts', 'RESTful API Integration', 'Responsive Design', 'Git & GitHub']
  },
  {
    category: 'MIS & Productivity Systems',
    skills: ['Management Information Systems (MIS)', 'Microsoft Excel (Advanced Formulas & Models)', 'Microsoft Word', 'Microsoft Outlook', 'Microsoft Office 365', 'Data Verification & Auditing']
  },
  {
    category: 'Leadership & Professional Competencies',
    skills: ['Volunteer Coordination', 'Public Speaking & Presentations', 'Workplace Readiness & Etiquette (BYLC)', 'Disaster Response Protocols', 'Basic Life Support (BLS) & First Aid', 'Team Collaboration']
  }
];
