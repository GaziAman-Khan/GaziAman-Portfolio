export const profile = {
  name: 'Gazi Aman Khan',
  title: 'AI/ML Engineer | Data Analyst',
  tagline: 'Data Analytics · Machine Learning · Generative AI',
  intro:
    "I'm Gazi — a Computer Science graduate who enjoys solving problems with data and AI. From analyzing real-world datasets to building machine learning models and deploying Generative AI applications, I like turning ideas into practical solutions.",
  email: 'gazikhaan15@gmail.com',
  phone: '9521857892',
  location: 'Udaipur, India',
  linkedin: 'https://www.linkedin.com/in/gazi-aman-khan-35a098250/',
  github: 'https://github.com/GaziAman-Khan',
};

export const aboutSidebar = [
  { label: 'EDUCATION', value: 'B.Tech in Computer Science' },
  { label: 'BASED IN', value: 'Udaipur, India' },
  { label: 'FOCUS', value: 'Data Analytics · Machine Learning · Generative AI' },
  { label: 'LOOKING FOR', value: 'Data Analyst / AI-ML Engineer opportunities' },
];

export const aboutParagraphs = [
  "I am a Computer Science graduate with hands-on experience across Data Analytics, Machine Learning, and Generative AI. I work with Python, SQL, Power BI, Excel, Machine Learning, and Generative AI technologies to build practical, data-driven solutions.",
  "I have worked on projects involving data cleaning, exploratory data analysis, KPI analysis, ETL, predictive modeling, dashboards, NLP, and Retrieval-Augmented Generation. I have also built and deployed an end-to-end RAG-based PDF question-answering application using FastAPI, Gemini, Qdrant, and Streamlit.",
  "My goal is to use data and AI to solve practical problems and build useful solutions. I am a recent B.Tech graduate currently looking for opportunities in Data Analytics, AI/ML Engineering, and related roles.",
];

export const skillCategories = [
  {
    number: '01',
    title: 'Programming & Tools',
    skills: ['Python', 'SQL', 'Pandas', 'NumPy', 'Matplotlib', 'Scikit-learn', 'Excel', 'Jupyter Notebook', 'Git', 'GitHub'],
  },
  {
    number: '02',
    title: 'Data Analytics',
    skills: ['Data Cleaning', 'Exploratory Data Analysis (EDA)', 'KPI Analysis', 'ETL', 'Feature Engineering', 'Predictive Modeling', 'Statistical Analysis'],
  },
  {
    number: '03',
    title: 'Visualization & BI',
    skills: ['Power BI', 'Power BI Dashboards', 'DAX (Basics)', 'Power Query'],
  },
  {
    number: '04',
    title: 'AI / Machine Learning',
    skills: ['Machine Learning', 'Generative AI', 'Retrieval-Augmented Generation (RAG)', 'Natural Language Processing (NLP)', 'NLP Fundamentals'],
  },
  {
    number: '05',
    title: 'RAG / AI Development',
    skills: ['FastAPI', 'Gemini', 'Gemini Embeddings', 'Qdrant Vector Database', 'Streamlit', 'Semantic Search'],
  },
];

export const education = [
  {
    degree: 'B.Tech in Computer Science',
    institution: 'Techno India NJR Institute of Technology',
    period: '2021 – 2025',
    location: 'Udaipur',
  },
  {
    degree: 'Senior Secondary (XII), CBSE',
    institution: 'Central Academy School',
    period: '2019 – 2020',
    location: 'Udaipur',
  },
];

export type Project = {
  id: string;
  number: string;
  title: string;
  category: string;
  technologies: string[];
  problem: string;
  description: string;
  metric?: string;
  github: string;
  liveDemo?: string;
  featured?: boolean;
  image: string;
  imageAlt: string;
};

export const projects: Project[] = [
  {
    id: 'rag-pdf-qa',
    number: '01',
    title: 'RAG-Based PDF Q&A Application',
    category: 'Generative AI / RAG',
    technologies: ['FastAPI', 'Qdrant', 'Gemini', 'Streamlit', 'Render'],
    problem: 'Enable intelligent document retrieval and question answering from unstructured PDF content.',
    description:
      "Built and deployed an end-to-end Retrieval-Augmented Generation (RAG) application using FastAPI, Gemini Embeddings, Qdrant Vector Database, and Streamlit for semantic PDF search and context-aware answers. Designed a complete document ingestion and retrieval pipeline including PDF chunking, vector embedding generation, similarity search, and cloud deployment using Render and Streamlit Community Cloud.",
    metric: 'End-to-end deployed RAG system',
    github: 'https://github.com/GaziAman-Khan/RAG-learn-code',
    liveDemo: '#',
    featured: true,
    image: 'https://images.pexels.com/photos/30530415/pexels-photo-30530415.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    imageAlt: 'Laptop displaying an AI chat interface for document question answering',
  },
  {
    id: 'pricing-churn',
    number: '02',
    title: 'Pricing & Churn Prediction',
    category: 'Machine Learning',
    technologies: ['Python', 'Scikit-learn', 'NumPy', 'Pandas', 'ML', 'Seaborn', 'Matplotlib'],
    problem: 'Understand factors influencing pricing and customer churn in a rental marketplace.',
    description:
      "Developed churn and pricing models achieving 87% accuracy and 0.42 RMSE, with 12% improved performance through tuning. Identified key retention and pricing drivers using statistical and feature importance analysis.",
    metric: '87% accuracy · 0.42 RMSE',
    github: 'https://github.com/GaziAman-Khan/Airbnb-Price-Prediction-and-Customer-Churn-Analysis',
    image: 'https://images.pexels.com/photos/270623/pexels-photo-270623.png?auto=compress&cs=tinysrgb&h=650&w=940',
    imageAlt: 'Close-up of Python code on a computer screen',
  },
  {
    id: 'text-classification',
    number: '03',
    title: 'Text Classification & Sentiment Analysis',
    category: 'NLP / Machine Learning',
    technologies: ['Python', 'TF-IDF', 'Scikit-learn', 'NLTK', 'Seaborn', 'Matplotlib'],
    problem: 'Classify text data for sentiment analysis and multi-category news classification.',
    description:
      "Built TF-IDF models on 50k+ samples, achieving approximately 90% accuracy on IMDb and approximately 65% accuracy on news classification using Logistic Regression. Outperformed baseline models by approximately 3–5% and validated results using cross-validation and key evaluation metrics.",
    metric: '~90% accuracy on IMDb · 50k+ samples',
    github: 'https://github.com/GaziAman-Khan/NLP-text-classification',
    image: 'https://images.pexels.com/photos/4816921/pexels-photo-4816921.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    imageAlt: 'Colorful programming code on a computer screen',
  },
  {
    id: 'retail-sql',
    number: '04',
    title: 'Retail Performance Analysis',
    category: 'Data Analytics / SQL',
    technologies: ['SQL', 'CTEs', 'Window Functions'],
    problem: 'Analyze branch-level revenue and customer behavior to identify high-performing outlets.',
    description:
      "Executed advanced SQL analyses to evaluate revenue, customer patterns, and branch KPIs, identifying the top 37% revenue-contributing outlets. Optimized query execution by 30%, improving reporting efficiency.",
    metric: 'Top 37% outlets identified · 30% faster queries',
    github: 'https://github.com/GaziAman-Khan/Walmart-sales-SQL-analysis',
    image: 'https://images.pexels.com/photos/6777536/pexels-photo-6777536.png?auto=compress&cs=tinysrgb&h=650&w=940',
    imageAlt: 'Indoor market aisle representing retail performance analysis',
  },
  {
    id: 'flight-dashboard',
    number: '05',
    title: 'Operational Performance Dashboard',
    category: 'Data Analytics / Power BI',
    technologies: ['Power BI', 'DAX', 'Power Query'],
    problem: 'Monitor flight delays and operational KPIs to identify inefficiencies.',
    description:
      "Built a multi-page dashboard analyzing delays, routes, and KPIs using 100k+ flight records and uncovered 15% delay hotspots. Implemented Row-Level Security (RLS) and a clean data model to improve accuracy and secure role-based access.",
    metric: '100k+ records · 15% delay hotspots uncovered',
    github: 'https://github.com/GaziAman-Khan/Airline-Data-Management-and-Analysis-Using-Power-BI-',
    image: 'https://images.pexels.com/photos/16562841/pexels-photo-16562841.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    imageAlt: 'Modern airplane docked at an airport terminal',
  },
  {
    id: 'ev-analysis',
    number: '06',
    title: 'Electric Vehicles Market Analysis',
    category: 'Data Analytics / Python',
    technologies: ['Python', 'EDA', 'Statistical Analysis', 'NumPy', 'Seaborn', 'Pandas', 'Matplotlib'],
    problem: 'Identify factors influencing EV adoption and pricing across multiple vehicle segments.',
    description:
      "Analyzed multi-year EV data to identify key adoption and pricing drivers and uncovered 22% performance variance across segments. Built a recommendation model improving price-feature alignment by 18%, enabling data-backed product insights.",
    metric: '22% variance uncovered · 18% better alignment',
    github: 'https://github.com/GaziAman-Khan/EV-Car-sales-data-analysis',
    image: 'https://images.pexels.com/photos/4678065/pexels-photo-4678065.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    imageAlt: 'Electric vehicle charging station',
  },
];

export const certifications = [
  'AI Fluency for Students — Anthropic',
  'Data Science Training — Internshala Trainings',
  'Data Driven — Machine Learning Training',
  'NLP Essentials — Applications to Real-World Problems Training',
  'Deep Learning Data-Intensive Training',
  'Data Management and Analysis with MS Excel Training - Internshala',
  'Data Visualization with Power BI Training',
  'Python Data Preparation & Analysis Training - Internshala',
  'SQL for Data Analysis and Insights Training - Internshala',
];

export const navItems = [
  { label: 'Work', href: '#work' },
  { label: 'About', href: '#about' },
  { label: 'Skills', href: '#skills' },
  { label: 'Education', href: '#education' },
  { label: 'Certifications', href: '#certifications' },
  { label: 'Contact', href: '#contact' },
];
