
import React from 'react';
import { PaletteIcon } from './components/icons/PaletteIcon';
import { GearIcon } from './components/icons/GearIcon';
import { CloudIcon } from './components/icons/CloudIcon';
import { DatabaseIcon } from './components/icons/DatabaseIcon';
import { WrenchIcon } from './components/icons/WrenchIcon';
import { RocketIcon } from './components/icons/RocketIcon';
import { MobileIcon } from './components/icons/MobileIcon';

export interface Project {
  title: string;
  tagline: string;
  category: string;
  image: string;
  span: string;
  link: string;
}

export const PROJECTS_DATA: Project[] = [
  {
    title: 'Full Stack DevOps Pipeline',
    tagline: 'Integrated DevOps tooling with a full-stack app, featuring Kubernetes, Helm, Jenkins, and SonarQube for automated CI/CD.',
    category: 'DevOps & Full Stack',
    image: 'https://images.unsplash.com/photo-1542382257-80dedb725088?ixlib=rb-4.0.3&q=85&fm=jpg&crop=entropy&cs=srgb&w=800',
    span: 'col-span-1 md:col-span-2 lg:col-span-2',
    link: 'https://github.com/PrinceShawtz/todos-multi-devops',
  },
  {
    title: 'Reusable IaC Modules for Azure',
    tagline: 'Built modular Terraform modules for provisioning Azure resources, ensuring consistent, version-controlled infrastructure.',
    category: 'Cloud & IaC',
    image: 'https://images.unsplash.com/photo-1517694712202-14dd9538aa97?ixlib=rb-4.0.3&q=85&fm=jpg&crop=entropy&cs=srgb&w=800',
    span: 'col-span-1',
    link: 'https://github.com/PrinceShawtz/Terraform-Azure',
  },
  {
    title: 'Social Media Blog API',
    tagline: 'Designed and built a RESTful API backend using Java and Spring Boot, featuring authentication, CRUD, and layered architecture.',
    category: 'Backend Development',
    image: 'https://images.unsplash.com/photo-1550439062-609e1531270e?ixlib=rb-4.0.3&q=85&fm=jpg&crop=entropy&cs=srgb&w=800',
    span: 'col-span-1',
    link: 'https://github.com/PrinceShawtz/PrinceShawtz-pep-spring-project',
  },
    {
    title: 'Mobile Real Estate App',
    tagline: 'A mobile-first real estate listing app built with Flutter and a REST API, focused on clean architecture and scalability.',
    category: 'Mobile & Full Stack',
    image: 'https://images.unsplash.com/photo-1581291518857-4e27b48ff24e?ixlib=rb-4.0.3&q=85&fm=jpg&crop=entropy&cs=srgb&w=800',
    span: 'col-span-1',
    link: 'https://github.com/PrinceShawtz/Real-estate-app',
  },
  {
    title: 'AI-Powered News Validator',
    tagline: 'A full-stack application that leverages AI/ML to detect and classify fake news articles, featuring a React frontend and Python backend.',
    category: 'Full Stack & AI',
    image: 'https://images.unsplash.com/photo-1677756119517-756a188d2d94?ixlib=rb-4.0.3&q=85&fm=jpg&crop=entropy&cs=srgb&w=800',
    span: 'col-span-1 md:col-span-2 lg:col-span-2',
    link: 'https://github.com/PrinceShawtz/News-Validator',
  },
  {
    title: 'Authenticated Task Manager',
    tagline: 'A complete full-stack To-Do application featuring user authentication, database integration, and a responsive React UI.',
    category: 'Full Stack Web',
    image: 'https://images.unsplash.com/photo-1587620962725-abab7fe55159?ixlib=rb-4.0.3&q=85&fm=jpg&crop=entropy&cs=srgb&w=800',
    span: 'col-span-1',
    link: 'https://github.com/PrinceShawtz/Full-stack-todo-app-with-user-login-and-database/tree/main',
  },
  {
    title: 'Interactive Portfolio Website',
    tagline: 'This very site, built with React, TypeScript, and Tailwind CSS. Designed for a high-impact, tech-forward aesthetic with custom animations.',
    category: 'Frontend & Design',
    image: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?ixlib=rb-4.0.3&q=85&fm=jpg&crop=entropy&cs=srgb&w=800',
    span: 'col-span-1',
    link: 'https://github.com/PrinceShawtz/my-portfolio-website',
  },
];

export interface SkillCategory {
  title: string;
  Icon: React.FC<React.SVGProps<SVGSVGElement>>;
  skills: string[];
}

export const SKILLS_DATA: SkillCategory[] = [
  {
    title: 'Front-End',
    Icon: PaletteIcon,
    skills: ['React', 'Next.js', 'Angular', 'Vue.js', 'TypeScript', 'JavaScript', 'HTML5', 'CSS3', 'TailwindCSS'],
  },
  {
    title: 'Back-End',
    Icon: GearIcon,
    skills: ['Node.js', 'Java', '.NET', 'Spring Boot', 'Python', 'Go (Golang)', 'GraphQL', 'Microservices'],
  },
  {
    title: 'Mobile Development',
    Icon: MobileIcon,
    skills: ['Flutter', 'React Native', 'Swift', 'Kotlin', 'Dart', 'Firebase'],
  },
  {
    title: 'Cloud & DevOps',
    Icon: CloudIcon,
    skills: ['Docker', 'Kubernetes', 'AWS', 'GCP', 'Azure', 'Jenkins', 'Terraform', 'ARM Templates', 'Ansible', 'IaC', 'Prometheus', 'Grafana'],
  },
  {
    title: 'Databases',
    Icon: DatabaseIcon,
    skills: ['MySQL', 'PostgreSQL', 'MongoDB', 'Redis', 'Elasticsearch', 'Microsoft SQL', 'PL/SQL', 'Informatica'],
  },
  {
    title: 'Version Control',
    Icon: WrenchIcon,
    skills: ['Git', 'GitHub', 'GitLab', 'CI/CD'],
  },
  {
    title: 'Other',
    Icon: RocketIcon,
    skills: ['REST APIs', 'System Design', 'AI/ML', 'Automation', 'Agile/Scrum'],
  },
];


export interface Experience {
  role: string;
  company: string;
  duration: string;
  description: string[];
}

export const EXPERIENCE_DATA: Experience[] = [
    {
        role: 'Senior Backend Engineer',
        company: 'Revature',
        duration: 'Jan 2025 - Present',
        description: [
            'Backend Leadership: Led a team to develop secure Node.js APIs integrated with DB2, improving data integrity and boosting response times by 30%.',
            'Infrastructure & Architecture: Architected Java-based backend services for health insurance platforms and implemented AWS cloud solutions that reduced system downtime by 15%.',
            'Efficiency & Quality: Optimized application performance using TypeScript and GraphQL, while designing comprehensive tests that improved live error detection by 20%.',
        ],
    },
    {
        role: 'Senior Software Engineer',
        company: 'M46 Brands',
        duration: 'April 2021 - Oct 2024',
        description: [
            'Cloud & Reliability: Spearheaded AWS cloud implementations to achieve 99.9% uptime and reduce operational costs across full-stack Java and React applications.',
            'Performance Engineering: Engineered GraphQL-based data services that expedited integration processes and improved overall system performance by 35%.',
            'Process Improvement: Led the adoption of Agile Methodologies, resulting in a 25% increase in team productivity and faster delivery cycles.',
        ],
    },
    {
        role: 'Full Stack Engineer',
        company: 'Macrosoft',
        duration: 'Mar 2019 - December 2020',
        description: [
            'Cloud Automation: Developed AWS deployment strategies that utilized automation to reduce deployment timeframes by 40%.',
            'User Engagement: Delivered Node.js and React solutions alongside user-friendly HTML/CSS interfaces, resulting in a 30% increase in user engagement.',
            'Security & Data: Optimized database retrieval times using DB2 and enhanced platform trustworthiness through robust API design and encryption practices',
        ],
    },
    {
        role: 'Software Engineer',
        company: 'Lunar Launch Labs (L^3)',
        duration: 'April 2018 - December 2018',
        description: [
            'Full-Stack Development: Contributed to Java and React applications while developing responsive web designs to optimize accessibility and user engagement.',
            'Infrastructure Support: Played a key role in setting up AWS infrastructure and GraphQL services to improve the reliability and scalability of data exchanges.',
            'Collaborative Delivery: Worked within cross-functional teams using Agile sprints and version control to ensure consistent project delivery and codebase traceability.',
        ],
    },  
];
