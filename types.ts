export interface Project {
    id: number;
    title: string;
    description: string;
    tech: string[];
    category: 'Full Stack' | 'ML/AI' | 'IoT' | 'Mobile' | 'Other';
    link?: string;
}

export interface ExperienceItem {
    id: number;
    role: string;
    company: string;
    period: string;
    description: string;
}

export interface SocialLink {
    platform: string;
    url: string;
    icon: string;
}

export interface EducationItem {
    id: number;
    institution: string;
    degree: string;
    year: string;
}

export interface VolunteeringItem {
    id: number;
    role: string;
    organization: string;
    period: string;
    description: string;
}