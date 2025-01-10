interface SocialLink {
  platform: string;
  url: string;
  icon: string;
}

interface Skill {
  name: string;
  level: number; // 1-100
  category: 'frontend' | 'backend' | 'tools' | 'soft-skills';
  icon?: string;
}

interface Project {
  id: string;
  title: string;
  description: string;
  longDescription?: string;
  technologies: string[];
  githubUrl?: string;
  liveUrl?: string;
  imageUrl: string;
  featured: boolean;
  startDate: string;
  endDate?: string;
  galleryImages?: string[];
}

interface Experience {
  company: string;
  position: string;
  location: string;
  startDate: string;
  endDate?: string;
  description: string;
  achievements: string[];
  technologies: string[];
}

interface Education {
  institution: string;
  degree: string;
  field: string;
  startDate: string;
  endDate: string;
  location: string;
  achievements?: string[];
  imageUrl: string;
}

interface Certificate {
  name: string;
  issuer: string;
  date: string;
  url?: string;
  imageUrl?: string;
}

export const personalData = {
  name: "Tumelo Thinane",
  title: "Full Stack Developer",
  email: "tumelothinane13@gmail.com",
  location: "South Africa",
  about: `Passionate full-stack developer with expertise in modern web technologies. 
         Committed to creating efficient, scalable, and user-friendly applications.`,
  avatarUrl: "https://avatars.githubusercontent.com/u/103751735?v=4",
  socialLinks: [
    {
      platform: "GitHub",
      url: "https://github.com/Tumelo2748",
      icon: "github"
    },
    {
      platform: "LinkedIn",
      url: "https://linkedin.com/in/selepe-thinane",
      icon: "linkedin"
    },
    // {
    //   platform: "Twitter",
    //   url: "https://twitter.com/yourusername",
    //   icon: "twitter"
    // }
  ] as SocialLink[]
};

export const skills: Skill[] = [
  {
    name: "React",
    level: 90,
    category: "frontend",
    icon: "react"
  },
  {
    name: "TypeScript",
    level: 85,
    category: "frontend",
    icon: "typescript"
  },
  {
    name: "Node.js",
    level: 80,
    category: "backend",
    icon: "nodejs"
  },
  {
    name: "Python",
    level: 75,
    category: "backend",
    icon: "python"
  },
  {
    name: "Docker",
    level: 70,
    category: "tools",
    icon: "docker"
  }
];

export const projects: Project[] = [
  {
    id: "1",
    title: "ReapplyMe",
    description: "A full-stack job application platform with Personalized Emails and AI features",
    longDescription: `Built a complete modern web application designed to streamline the job application process by providing intelligent tools for managing job applications, generating personalized emails, and tracking career progress.`,
    technologies: ["React", "Node.js", "MongoDB", "Stripe"],
    githubUrl: "https://github.com/Tumelo2748/ReapplyMe",
    liveUrl: "https://reapplyme.netlify.app",
    imageUrl: "/projects/ecommerce.jpg",
    galleryImages: [
      "/projects/reapplyme-dashboard.png",
      "/projects/reapplyme-email.png",
      "/projects/reapplyme-analytics.png"
    ],
    featured: true,
    startDate: "2023-01",
    endDate: "2023-06"
  },
  {
    id: "2",
    title: "Task Management App",
    description: "A collaborative task management application",
    technologies: ["Vue.js", "Firebase", "Tailwind CSS"],
    githubUrl: "https://github.com/yourusername/project2",
    imageUrl: "/projects/task-app.jpg",
    featured: true,
    startDate: "2022-09",
    endDate: "2022-12"
  }
];

export const experience: Experience[] = [
  {
    company: "Tech Company",
    position: "Senior Full Stack Developer",
    location: "City, Country",
    startDate: "2022-01",
    endDate: "Present",
    description: "Lead developer for multiple high-impact projects",
    achievements: [
      "Reduced application load time by 40% through optimization",
      "Led a team of 5 developers in delivering major features",
      "Implemented CI/CD pipeline reducing deployment time by 60%"
    ],
    technologies: ["React", "Node.js", "AWS", "Docker"]
  },
  {
    company: "Startup Inc",
    position: "Frontend Developer",
    location: "City, Country",
    startDate: "2020-06",
    endDate: "2021-12",
    description: "Developed and maintained multiple web applications",
    achievements: [
      "Built responsive web applications using modern frameworks",
      "Improved website performance scores by 25%"
    ],
    technologies: ["React", "TypeScript", "SASS"]
  }
];

export const education: Education[] = [
  {
    institution: "University Name",
    degree: "Bachelor's Degree",
    field: "Computer Science",
    startDate: "2016",
    endDate: "2020",
    location: "City, Country",
    achievements: [
      "Graduated with Honors",
      "Led University Programming Club"
    ],
    imageUrl: "https://w7.pngwing.com/pngs/67/123/png-transparent-university-of-johannesburg-university-of-the-witwatersrand-auckland-park-technikon-witwatersrand-student-text-people-logo.png"
  }
];

export const certificates: Certificate[] = [
  {
    name: "AWS Certified Developer",
    issuer: "Amazon Web Services",
    date: "2023",
    url: "https://aws.amazon.com/certification/verify",
    imageUrl: "/certificates/aws-dev.png"
  },
  {
    name: "Professional Scrum Master I",
    issuer: "Scrum.org",
    date: "2022",
    url: "https://www.scrum.org/certificates",
    imageUrl: "/certificates/psm1.png"
  }
];