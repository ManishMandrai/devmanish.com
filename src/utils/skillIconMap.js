// Import all the icons your projects use
import { 
  FaReact, 
  FaNodeJs, 
  FaPython, 
  FaJava, 
  FaDocker, 
  FaAws,
  FaGitAlt,
  FaGithub
} from 'react-icons/fa'

import {
  SiTailwindcss,
  SiJavascript,
  SiTypescript,
  SiNextdotjs,
  SiVuedotjs,
  SiAngular,
  SiMongodb,
  SiPostgresql,
  SiMysql,
  SiFirebase,
  SiSupabase,
  SiGraphql,
  SiRedux,
  SiJest,
  SiCypress,
  SiFigma,
  SiAdobe,
  SiWordpress,
  SiPhp,
  SiLaravel,
  SiDjango,
  SiFlask,
  SiSpring,
  SiKubernetes,
  SiTerraform,
  SiJenkins,
  SiPrometheus,
  SiGrafana
} from 'react-icons/si'

// Map skill names to their corresponding icons
const skillIconMap = {
  // Frontend
  'React': FaReact,
  'React.js': FaReact,
  'TailwindCSS': SiTailwindcss,
  'Tailwind': SiTailwindcss,
  'JavaScript': SiJavascript,
  'JS': SiJavascript,
  'TypeScript': SiTypescript,
  'TS': SiTypescript,
  'Next.js': SiNextdotjs,
  'NextJS': SiNextdotjs,
  'Vue.js': SiVuedotjs,
  'Vue': SiVuedotjs,
  'Angular': SiAngular,
  'Redux': SiRedux,
  
  // Backend
  'Node.js': FaNodeJs,
  'Node': FaNodeJs,
  'Python': FaPython,
  'Django': SiDjango,
  'Flask': SiFlask,
  'Java': FaJava,
  'Spring': SiSpring,
  'PHP': SiPhp,
  'Laravel': SiLaravel,
  
  // Databases
  'MongoDB': SiMongodb,
  'PostgreSQL': SiPostgresql,
  'Postgres': SiPostgresql,
  'MySQL': SiMysql,
  'Firebase': SiFirebase,
  'Supabase': SiSupabase,
  
  // DevOps & Tools
  'Docker': FaDocker,
  'Kubernetes': SiKubernetes,
  'AWS': FaAws,
  'Git': FaGitAlt,
  'GitHub': FaGithub,
  'GraphQL': SiGraphql,
  'Jest': SiJest,
  'Cypress': SiCypress,
  'Figma': SiFigma,
  'Adobe XD': SiAdobe,
  
  // Add more as you use them
}

// Fallback icon if skill name not found
import { FaCode } from 'react-icons/fa'
const FALLBACK_ICON = FaCode

export function getSkillIcon(skillName) {
  return skillIconMap[skillName] || FALLBACK_ICON
}