import { Project, ExperienceItem, SocialLink, EducationItem, VolunteeringItem } from './types';

export const SOCIAL_LINKS: SocialLink[] = [
    { platform: 'GitHub', url: 'https://github.com/nipunlnick', icon: 'Github' },
    { platform: 'LinkedIn', url: 'https://linkedin.com/in/pvnipunlakshitha', icon: 'Linkedin' },
    { platform: 'Email', url: 'mailto:pvnipunlakshitha@gmail.com', icon: 'Mail' }
];

export const SKILLS = [
    "JavaScript", "Python", "Java", "React", "Node.js", 
    "MongoDB", "MySQL", "C", "C++", "IoT", 
    "Machine Learning", "React Native", "Android Studio", 
    "Firebase", "Figma", "Postman", "Git", "Next.js", "Tailwind CSS"
];

export const EXPERIENCE_DATA: ExperienceItem[] = [
    {
        id: 1,
        role: "Software Developer",
        company: "ITS Data Link Pvt Ltd",
        period: "May 2025 – Aug 2025",
        description: "Developed and maintained full-stack applications, improving system efficiency and user experience. Collaborated with cross-functional teams to deliver customized solutions."
    },
    {
        id: 2,
        role: "Intern",
        company: "Sri Lanka Water Partnership",
        period: "Jan 2025 – May 2025",
        description: "Redesigned the organization's website and built a custom CMS/Admin panel using React and Node.js for streamlined content management."
    }
];

export const PROJECTS_DATA: Project[] = [
    {
        id: 1,
        title: "Chat with Funds",
        description: "AI-powered grant discovery platform helping users find funding opportunities via text/PDF search. Includes an admin dashboard for grant management.",
        tech: ["React", "Node.js", "AI/LLM", "MongoDB"],
        category: "Full Stack",
        link: "https://chatwithfunds.com"
    },
    {
        id: 2,
        title: "SLWP CMS Redesign",
        description: "Complete overhaul of the Sri Lanka Water Partnership website with a custom Content Management System for resources and reports.",
        tech: ["React", "Node.js", "MySQL", "Tailwind"],
        category: "Full Stack"
    },
    {
        id: 3,
        title: "Point-of-Sale Mobile App",
        description: "Mobile app for POS services including real-time inventory management, customer management, and receipt creation.",
        tech: ["Java", "Android Studio", "Firebase"],
        category: "Mobile"
    },
    {
        id: 4,
        title: "Parcel Management System",
        description: "Mobile application integrated with IoT devices for real-time parcel tracking.",
        tech: ["React Native", "IoT", "Mobile"],
        category: "Mobile"
    },
    {
        id: 5,
        title: "Customer Churn Prediction",
        description: "Banking sector analytics tool using Logistic Regression and SVM models to predict customer retention.",
        tech: ["Python", "Scikit-Learn", "Pandas", "ML"],
        category: "ML/AI",
        link: "https://github.com/nipunlnick/Predicting-Customer-Churn"
    },
    {
        id: 6,
        title: "Automated Medicine Dispenser",
        description: "IoT solution using Atmega32 & C, integrated with a stepper motor, alarm system, and GSM SIM900A for SMS reminders.",
        tech: ["C", "Atmega32", "GSM", "IoT"],
        category: "IoT",
        link: "https://github.com/nipunlnick/Medicine-Dispenser-interfacing-atmega32"
    },
    {
        id: 7,
        title: "Smart Clock & Alarm Bee App",
        description: "ESP32-based smart clock integrated with Firebase and a custom Android app for remote control and QR authentication.",
        tech: ["C++", "ESP32", "Java", "Android Studio", "Firebase"],
        category: "IoT",
        link: "https://github.com/nipunlnick/Alarm-Bee"
    },
    {
        id: 8,
        title: "Stock Price Monitor",
        description: "Real-time scraping engine with automated email alerts for stock market fluctuations using Python.",
        tech: ["Python", "BeautifulSoup", "SMTP"],
        category: "ML/AI",
        link: "https://github.com/nipunlnick/Stock-Price-Monitor"
    }
];

export const EDUCATION_DATA: EducationItem[] = [
    {
        id: 1,
        institution: "University of Colombo",
        degree: "BSc (Hons) in Electronic and Information Technology",
        year: "Graduate"
    },
    {
        id: 2,
        institution: "SITC Campus",
        degree: "Diploma in Cyber Security and Ethical Hacking",
        year: "Completed"
    },
    {
        id: 3,
        institution: "Mahinda College, Galle",
        degree: "G.C.E (A/L) - Physical Science Stream (3Bs)",
        year: "2019"
    },
];

export const VOLUNTEERING_DATA: VolunteeringItem[] = [
    {
        id: 1,
        role: "IT Director - Founding Board",
        organization: "UOC Ventures Club",
        period: "Jun 2023 – Nov 2024",
        description: "Spearheaded IT operations and digital infrastructure for the newly established club."
    },
    {
        id: 2,
        role: "Joint Director - IT",
        organization: "Rotaract Club of Faculty of Science, UOC",
        period: "Jul 2022 – Jul 2023",
        description: "Led IT initiatives and supported digital transformation for club projects."
    },
    {
        id: 3,
        role: "Marketing Director",
        organization: "Leo Club of UOC Faculty of Science",
        period: "Jul 2022 – Jul 2023",
        description: "Directed marketing campaigns and digital promotions, increasing visibility."
    }
];