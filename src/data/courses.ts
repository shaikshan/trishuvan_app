import { Course } from '../types';

export const courses: Course[] = [
  {
    id: '1',
    title: 'AI Tool Kit',
    slug: 'ai-tool-kit',
    highlights: ['15+ Tools', 'ChatGPT', 'Gemini', 'Prompt Engineering', 'Task Automation'],
    price: 999,
    dateEN: '19 Oct',
    dateTE: '26 Oct',
    duration: '4 Weekends',
    description:
      'Master 15+ AI Tools & Automate Tasks Using Prompt Engineering. Learn to leverage ChatGPT, Gemini, and other cutting-edge AI tools to boost your productivity.',
    curriculum: [
      'Introduction to AI Tools',
      'ChatGPT Advanced Techniques',
      'Gemini API Integration',
      'Prompt Engineering Mastery',
      'Automation Workflows',
      'Real-world Applications'
    ],
    image: '/images/courses/ai-tool-kit.jpg',
    isFeatured: true
  },
  {
    id: '2',
    title: 'SQL Mastery',
    slug: 'sql-mastery',
    highlights: ['Joins', 'CTEs', 'Window Functions', 'PostgreSQL', 'Query Optimization'],
    price: 999,
    dateEN: '1 Nov',
    dateTE: '8 Nov',
    duration: '4 Weekends',
    description:
      'Master SQL from basics to advanced concepts. Learn PostgreSQL, complex queries, and database optimization techniques.',
    curriculum: [
      'SQL Fundamentals',
      'Advanced Joins & Subqueries',
      'Window Functions',
      'CTEs and Recursive Queries',
      'Query Optimization',
      'Real Database Projects'
    ],
    image: '/images/courses/sql-mastery.jpg',
    isFeatured: true
  },
  {
    id: '3',
    title: 'Python for AI',
    slug: 'python-for-ai',
    highlights: ['NumPy', 'Pandas', 'APIs', 'Data Processing', 'Python Basics'],
    price: 999,
    dateEN: '15 Nov',
    dateTE: '22 Nov',
    duration: '4 Weekends',
    description:
      'Learn Python programming with focus on AI and data science. Master NumPy, Pandas, and API integration.',
    curriculum: [
      'Python Fundamentals',
      'NumPy for Numerical Computing',
      'Pandas Data Analysis',
      'API Integration',
      'Data Processing',
      'AI Project Setup'
    ],
    image: '/images/courses/python-for-ai.jpg',
    isFeatured: true
  },
  {
    id: '4',
    title: 'Power BI',
    slug: 'power-bi',
    highlights: ['DAX', 'Data Modeling', 'Storytelling', 'Dashboards', 'Visualization'],
    price: 999,
    dateEN: '29 Nov',
    dateTE: '6 Dec',
    duration: '4 Weekends',
    description:
      'Create stunning data visualizations and interactive dashboards. Master DAX and data modeling techniques.',
    curriculum: [
      'Power BI Basics',
      'Data Modeling',
      'DAX Fundamentals',
      'Advanced Visualizations',
      'Dashboard Design',
      'Data Storytelling'
    ],
    image: '/images/courses/power-bi.jpg',
    isFeatured: true
  },
  {
    id: '5',
    title: 'Machine Learning',
    slug: 'machine-learning',
    highlights: ['Regression', 'Classification', 'Model Deployment', 'Scikit-learn'],
    price: 999,
    dateEN: '29 Nov',
    dateTE: '6 Dec',
    duration: '6 Weekends',
    description:
      'Build, train, and deploy machine learning models. Learn regression, classification, and model deployment.',
    curriculum: [
      'ML Fundamentals',
      'Supervised Learning',
      'Regression Models',
      'Classification Algorithms',
      'Model Evaluation',
      'Deployment Strategies'
    ],
    image: '/images/courses/machine-learning.jpg',
    isFeatured: true
  },
  {
    id: '6',
    title: 'Gen AI & Agentic AI',
    slug: 'gen-ai-agentic',
    highlights: ['LangChain', 'RAG', 'AI Agents', 'LLMs', 'Prompt Engineering'],
    price: 999,
    dateEN: '13 Dec',
    dateTE: '20 Dec',
    duration: '6 Weekends',
    description:
      'Build your own AI agents and LangChain workflows. Master the future of artificial intelligence.',
    curriculum: [
      'Introduction to Gen AI',
      'LLM Fundamentals',
      'LangChain Framework',
      'RAG Implementation',
      'Building AI Agents',
      'Production Deployment'
    ],
    image: '/images/courses/gen-ai-agentic.jpg',
    isFeatured: true
  }
];
