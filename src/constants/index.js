import {
  frontend,
  backend,
  ux,
  prototyping,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  git,
  figma,
  docker,
  postgresql,
  rubyrails,
  graphql,
  komikult,
  leaderboard,
  math,
  movie,
  nyeusi,
  coverhunt,
  } from '../assets';

export const navLinks = [
  {
    id: 'about',
    title: 'About',
  },
  {
    id: 'projects',
    title: 'Projects',
  },
  {
    id: 'contact',
    title: 'Contact',
  },
];

const services = [
  {
    title: 'Frontend Developer',
    icon: frontend,
  },
  {
    title: 'HTML',
    icon: backend,
  },
  {
    title: 'JavaScript',
    icon: ux,
  },
  {
    title: 'CSS',
    icon: prototyping,
  },
];

const technologies = [
  {
    name: 'HTML 5',
    icon: html,
  },
  {
    name: 'CSS 3',
    icon: css,
  },
  {
    name: 'JavaScript',
    icon: javascript,
  },
  {
    name: 'TypeScript',
    icon: typescript,
  },
  {
    name: 'React JS',
    icon: reactjs,
  },
  {
    name: 'Redux Toolkit',
    icon: redux,
  },
  {
    name: 'Tailwind CSS',
    icon: tailwind,
  },
  {
    name: 'Node JS',
    icon: nodejs,
  },
  {
    name: 'Rails',
    icon: rubyrails,
  },
  {
    name: 'graphql',
    icon: graphql,
  },
  {
    name: 'postgresql',
    icon: postgresql,
  },
  {
    name: 'git',
    icon: git,
  },
  {
    name: 'figma',
    icon: figma,
  },
  {
    name: 'docker',
    icon: docker,
  },
];

const experiences = [
  {
    title: 'Student',
    company_name: 'UrbanUniversity',
    icon: coverhunt,
    iconBg: '#333333',
    date: 'From May 2024 to the present',
  },
  
];

const projects = [
  {
    id: 'project-1',
    name: 'OnlineStore',
    description: 'Module No.10. JS: asynchrony',
    tags: [
      {
        name: 'react',
        color: 'blue-text-gradient',
      },
      {
        name: 'mongodb',
        color: 'green-text-gradient',
      },
      {
        name: 'tailwind',
        color: 'pink-text-gradient',
      },
    ],
    image: komikult,
    repo: 'https://github.com/GrAnton-78/mod_10...-',
    demo: 'https://github.com/GrAnton-78/mod_10...-',
  },
  {
    id: 'project-2',
    name: 'Cross-browser',
    description:
      'Module No. 7. Advanced layout',
    tags: [
      {
        name: 'react',
        color: 'blue-text-gradient',
      },
      {
        name: 'restapi',
        color: 'green-text-gradient',
      },
      {
        name: 'scss',
        color: 'pink-text-gradient',
      },
    ],
    image: leaderboard,
    repo: 'https://github.com/GrAnton-78/dz-6',
    demo: 'https://github.com/GrAnton-78/dz-6',
  },
  {
    id: 'project-3',
    name: 'Custom Form',
    description: 'Module 5. JS: base+',
    tags: [
      {
        name: 'nextjs',
        color: 'blue-text-gradient',
      },
      {
        name: 'supabase',
        color: 'green-text-gradient',
      },
      {
        name: 'css',
        color: 'pink-text-gradient',
      },
    ],
    image: math,
    repo: 'https://github.com/GrAnton-78/dz-5',
    demo: 'https://github.com/GrAnton-78/dz-5',
  },
  {
    id: 'project-4',
    name: 'My first job',
    description: `Module No.1. Basic HTML`,
    tags: [
      {
        name: 'nextjs',
        color: 'blue-text-gradient',
      },
      {
        name: 'supabase',
        color: 'green-text-gradient',
      },
      {
        name: 'css',
        color: 'pink-text-gradient',
      },
    ],
    image: movie,
    repo: 'https://github.com/GrAnton-78/dz1-1',
    demo: 'https://github.com/GrAnton-78/dz1-1',
  },
  {
    id: 'project-5',
    name: 'Beginning',
    description:
      'Module No.2. Web layout.',
    tags: [
      {
        name: 'nextjs',
        color: 'blue-text-gradient',
      },
      {
        name: 'supabase',
        color: 'green-text-gradient',
      },
      {
        name: 'css',
        color: 'pink-text-gradient',
      },
    ],
    image: nyeusi,
    repo: 'https://github.com/GrAnton-78/dz2',
    demo: 'https://github.com/GrAnton-78/dz2',
  },
];

export { services, technologies, experiences, projects };
