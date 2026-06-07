const data = {
  name: "PRASHANTH B",
  title: "Software Engineer | Python Full Stack Developer | AI & Data Enthusiast",
  email: "prashanthb0704@gmail.com",
  phone: "+91 9945766988",
  location: "Bangalore",
  linkedin: "https://www.linkedin.com/in/prashanth-b-81b075390/",
  github: "https://github.com/prashanthb0704",

  objective:
    "Computer Science (AI&ML) graduate with strong foundations in software development, Python programming,database management, data analysis, web technologies, and machine learning. Skilled in developing applications,analyzing data, building database-driven solutions, and solving technical challenges through efficient programming practices. Seeking an opportunity to contribute across software engineering, AI-driven solutions, data analytics,and emerging technologies while continuously expanding technical expertise.",

  experience : [
    {
      id: 1,
      role: "Machine Learning Intern",
      company: "Unified Mentor Pvt. Ltd.",
      start: "Nov-2024",
      end: "April-2025",
      points: [
        "Worked with Python-based analytical and data-processing workflows.",
        "Performed data preprocessing, validation, and exploratory analysis on structured datasets.",
        "Assisted in workflow optimization and technical documentation activities.",
        "Supported data-driven projects through analysis, evaluation, and reporting.",
      ],
    },
    {
      id: 2,
      role: "Python Full Stack Development Technical Training Course ",
      company: "Py-spiders",
      location: "Bangalore",
      points: [
       "Developed applications using Python, Django, SQL, HTML, CSS, and JavaScript.",
       "Built database-driven solutions and implemented CRUD functionalities.",
       "Strengthened problem-solving, debugging, and software development skills through practical projects.",
       "Worked with backend development, database integration, and application deployment concepts."
      ],
    },
  ],

  education: [
    {
      id: 1,
      degree: "B.E. in Computer Science (AI&ML) ",
      school: "Don Bosco Institute of Technology, Bengaluru",
      start: "2022",
      end: "2025"
    },
  ],

  skills: {
    "Programming Language": ["Python"],
    Frontend: ["React", "JavaScript", "HTML", "CSS", "Tailwind CSS"],
    Backend: ["Django", "Django REST Framework (DRF)", "REST APIs"],
    "Software Development": ["Object-oriented Programming (OOP)", "Exception Handling", "File Handling", "DataStructures", "Software Development Life Cycle (SDLC)", "Debugging & Troubleshooting"],
    "AI, Machine Learning & Data Science" : ["Data Analysis", "Data Preprocessing", "Exploratory Data Analysis (EDA)","Data Visualization", "Model Evaluation", "Scikit-learn", "TensorFlow", "XG-Boost", "Pandas", "NumPy", "Matplotlib"],
    Database: ["SQL", "Oracle Database", "MySQL", "PostgreSQL", "Query Optimization", "CRUD Operations"],
    Tools : ["Git", "GitHub", "Jupyter Notebook","VS Code"],
    Cloud : ["AWS(Basics)"],
    "Computer Networking" : ["TCP/IP", "DNS", "DHCP", "VPN", "System Troubleshooting"]

  },

  projects: [
    {
      id: 1,
      name: " Personal Portfolio Website",
      desc: "Built a responsive portfolio web application from scratch using React and component-based architecture to showcase projects and technical skills.Managed version control via Git/GitHub and configured an automated CI/CD pipeline using Vercel for instant, seamless production deployments.",
      tech : ["React"],
      github: "https://github.com/prashanthb0704/Portfoilio",
      live: "https://portfoilio-six-gamma.vercel.app/",
     
    },
    {
      id: 2,
      name: "job-tracker",
      desc: "Developed a full-stack job application tracking system with a Django REST API backend and React frontend. Features include real-time status updates (Applied/Interview/Offer/Rejected), search and filter functionality, and a stats dashboard. Deployed backend on Railway and frontend on Vercel.",
      tech: ["Django REST Framework", "React", "Tailwind CSS", "SQLite"],
      github: "https://github.com/prashanthb0704/job-tracker",
      live: "https://job-tracker-p7us3sb2o-prashanth-b.vercel.app/",
    },
    {
       id: 3,
       name: "Cyber Sheild",
       desc: "Enhanced a Flask-based ML tool integrating IDS, phishing detection, and a vulnerability scanner; improved the scanner by integrating new rules, reducing false positives by 15% while maintaining high detection accuracy." ,
       tech: ["Flask", "Machine Learning", "Cybersecurity"], 
      },
    {
      id: 4,
      name: "Email Spam Detection System",
      desc: "Developed a Python-based email spam detection system to classify email text as spam or legitimate messages using text preprocessing and classification techniques. Automated email filtering and analysis to improve detection efficiency, message organization, and data analysis accuracy.",
      tech: ["Python", "Machine learning"],
      github: null,
      live: null,
    },
  ],

  certifications: [
    {
      id: 1,
      name: "Python full stack developer",
      issuer: "Pyspiders",
      link: "https://drive.google.com/file/d/1ZpgrKsHRLOCVvP4WUoFOQHyc3iD-goT-/view?usp=drive_link"
      
    },
    {
      id: 2,
      name: "Machine learning intern",
      issuer: "unified mentors",
      link : "https://drive.google.com/file/d/1c2I40TPK3TCgsylu_TM9IzrB5wb3ZOOY/view?usp=drive_link",
      link : "https://drive.google.com/file/d/1FX8er6ghFa2JFojSZS6mXZ2yJ_NUgKJP/view?usp=drive_link"
      
    },
   
  ],
};

export default data;