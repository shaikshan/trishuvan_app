import { Internship } from '../types';

export const internships: Internship[] = [
  {
    id: '1',
    title: 'AI Automation Intern',
    duration: '6 Weeks',
    focus: 'Build GenAI Bots',
    tools: ['ChatGPT', 'Zapier', 'n8n', 'Gemini'],
    image: '/images/internships/ai-automation.jpg'
  },
  {
    id: '2',
    title: 'Data Science Associate',
    duration: '6 Weeks',
    focus: 'Build Dashboards',
    tools: ['Python', 'Power BI', 'SQL', 'Pandas'],
    image: '/images/internships/data-science.jpg'
  },
  {
    id: '3',
    title: 'MLOps Engineer',
    duration: '8 Weeks',
    focus: 'Deploy AI Models',
    tools: ['Docker', 'FastAPI', 'AWS', 'Kubernetes'],
    image: '/images/internships/mlops.jpg'
  },
  {
    id: '4',
    title: 'Prompt Engineer',
    duration: '4 Weeks',
    focus: 'LLM Optimization',
    tools: ['Gemini', 'LangChain', 'ChatGPT', 'Claude'],
    image: '/images/internships/prompt-engineer.jpg'
  }
];
