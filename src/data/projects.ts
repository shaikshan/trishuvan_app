import { Project } from '../types';

export const projects: Project[] = [
  {
    id: '1',
    title: 'AI Report Generator',
    description: 'Automated report generation system using Gemini API and n8n workflow automation',
    technologies: ['Gemini API', 'n8n', 'Node.js', 'PostgreSQL']
  },
  {
    id: '2',
    title: 'SQL Sales Dashboard',
    description: 'Interactive sales analytics dashboard with real-time data processing',
    technologies: ['PostgreSQL', 'Power BI', 'DAX', 'Python']
  },
  {
    id: '3',
    title: 'GenAI Customer Chatbot',
    description: 'Intelligent customer service chatbot powered by LangChain',
    technologies: ['LangChain', 'OpenAI', 'FastAPI', 'React']
  },
  {
    id: '4',
    title: 'Employee Attrition Predictor',
    description: 'Machine learning model to predict employee turnover',
    technologies: ['Python', 'Scikit-learn', 'Pandas', 'Flask']
  },
  {
    id: '5',
    title: 'Resume Analyzer',
    description: 'NLP-powered resume screening and ranking system',
    technologies: ['NLP', 'spaCy', 'TensorFlow', 'React']
  }
];
