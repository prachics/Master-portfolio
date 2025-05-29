/* Change this file to get your personal Porfolio */

// Website related settings
const settings = {
  isSplash: false, // Change this to false if you don't want Splash screen.
};

//SEO Related settings
const seo = {
  title: "Prachi's Portfolio",
  description:
    "A passionate individual who always thrives to work on end to end products which develop sustainable and scalable social and technical systems to create impact.",
  og: {
    title: "Prachi Saibewar Portfolio",
    type: "website",
    url: "",
  },
};

//Home Page
const greeting = {
  title: "Prachi Saibewar",
  logo_name: "prachisaibewar",
  nickname: "",
  subTitle:
    "A passionate individual who always thrives to work on end to end products which develop sustainable and scalable social and technical systems to create impact.",
  resumeLink:
    "https://drive.google.com/file/d/1ycrj66r1nVVAsf74RfV3MnYWcDfs12fW/view?usp=sharing",
  portfolio_repository: "https://github.com/prachics/masterPortfolio",
  githubProfile: "https://github.com/prachics",
};

const socialMediaLinks = [
  /* Your Social Media Link */

  {
    name: "Github",
    link: "https://github.com/prachics",
    fontAwesomeIcon: "fa-github", // Reference https://fontawesome.com/icons/github?style=brands
    backgroundColor: "#181717", // Reference https://simpleicons.org/?q=github
  },
  {
    name: "LinkedIn",
    link: "https://www.linkedin.com/in/prachi-saibewar/",
    fontAwesomeIcon: "fa-linkedin-in", // Reference https://fontawesome.com/icons/linkedin-in?style=brands
    backgroundColor: "#0077B5", // Reference https://simpleicons.org/?q=linkedin
  },
  {
    name: "Gmail",
    link: "mailto:saibewarprachi@gmail.com",
    fontAwesomeIcon: "fa-google", // Reference https://fontawesome.com/icons/google?style=brands
    backgroundColor: "#D14836", // Reference https://simpleicons.org/?q=gmail
  },
];

const skills = {
  data: [
    {
      title: "Full Stack Development",
      fileName: "FullStackImg",
      skills: [
        "⚡ Built real-time chat app using React, Node.js, Express, MongoDB & JWT",
        "⚡ Developed Twitter Sentiment Analysis application with Python & Flask",
        "⚡ Crafted portfolio and project demos with React, Tailwind CSS & Framer Motion",
      ],
      softwareSkills: [
        {
          skillName: "ReactJS",
          fontAwesomeClassname: "simple-icons:react",
          style: { color: "#61DAFB" },
        },
        {
          skillName: "NodeJS",
          fontAwesomeClassname: "logos-nodejs",
          style: { backgroundColor: "transparent", color: "#339933" },
        },
        {
          skillName: "ExpressJS",
          fontAwesomeClassname: "simple-icons:express",
          style: { backgroundColor: "transparent", color: "#000000" },
        },
        {
          skillName: "MongoDB",
          fontAwesomeClassname: "simple-icons:mongodb",
          style: { color: "#47A248" },
        },
        {
          skillName: "JWT",
          fontAwesomeClassname: "simple-icons:jsonwebtokens",
          style: { backgroundColor: "transparent" },
        },
        {
          skillName: "Python",
          fontAwesomeClassname: "ion-logo-python",
          style: { backgroundColor: "transparent", color: "#3776AB" },
        },
        {
          skillName: "Flask",
          fontAwesomeClassname: "simple-icons:flask",
          style: { backgroundColor: "transparent" },
        },
      ],
    },
    {
      title: "Oracle EBS & PL/SQL Development",
      fileName: "EBSReportingImg",
      skills: [
        "⚡ Customized Oracle EBS modules (PO, INV, AP, OM) and optimized PL/SQL processes",
        "⚡ Developed and maintained Oracle Reports 10g, Report Builder, XML/BI Publisher",
        "⚡ Refactored PL/SQL packages to reduce load times by 80% and cut support tickets in half",
      ],
      softwareSkills: [
        {
          skillName: "Oracle PL/SQL",
          fontAwesomeClassname: "simple-icons:oracle",
          style: { backgroundColor: "transparent", color: "#F80000" },
        },
        {
          skillName: "Oracle Reports",
          fontAwesomeClassname: "devicon:oracle",
          style: { backgroundColor: "transparent" },
        },

        {
          skillName: "SQL Developer",
          fontAwesomeClassname: "simple-icons:jetbrains",
          style: { backgroundColor: "transparent", color: "#000000" },
        },
        {
          skillName: "Java",
          fontAwesomeClassname: "logos-java",
          style: { backgroundColor: "transparent", color: "#5382A1" },
        },
      ],
    },
    {
      title: "Cloud & DevOps",
      fileName: "CloudDevOpsImg",
      skills: [
        "⚡ Deployed and managed applications on AWS (EC2, S3, Lambda)",
        "⚡ Containerized services with Docker and orchestrated with Kubernetes",
        "⚡ Automated CI/CD pipelines using GitHub Actions and Terraform",
      ],
      softwareSkills: [
        {
          skillName: "AWS",
          fontAwesomeClassname: "simple-icons:amazonaws",
          style: { color: "#FF9900" },
        },
        {
          skillName: "Docker",
          fontAwesomeClassname: "simple-icons:docker",
          style: { color: "#2496ED" },
        },
        {
          skillName: "Kubernetes",
          fontAwesomeClassname: "simple-icons:kubernetes",
          style: { color: "#326CE5" },
        },
        {
          skillName: "Terraform",
          fontAwesomeClassname: "simple-icons:terraform",
          style: { color: "#623CE4" },
        },
        {
          skillName: "Linux",
          fontAwesomeClassname: "simple-icons:linux",
          style: { backgroundColor: "transparent", color: "#FCC624" },
        },
      ],
    },
    {
      title: "Data Science & Machine Learning",
      fileName: "DataScienceImg",
      skills: [
        "⚡ Implemented customer segmentation with K-Means & hierarchical clustering",
        "⚡ Built disease classification using Naïve Bayes & CNN, achieving 92% accuracy",
        "⚡ Contributed to AlphaCore open-source graph algorithm in Python & R",
      ],
      softwareSkills: [
        {
          skillName: "TensorFlow",
          fontAwesomeClassname: "logos-tensorflow",
          style: { backgroundColor: "transparent" },
        },
        {
          skillName: "PyTorch",
          fontAwesomeClassname: "logos-pytorch",
          style: { backgroundColor: "transparent" },
        },
        {
          skillName: "scikit-learn",
          fontAwesomeClassname: "simple-icons:scikitlearn",
          style: { backgroundColor: "transparent" },
        },
        {
          skillName: "Pandas",
          fontAwesomeClassname: "simple-icons:pandas",
          style: { backgroundColor: "transparent" },
        },
        {
          skillName: "NetworkX",
          fontAwesomeClassname: "simple-icons:networkx",
          style: { backgroundColor: "transparent" },
        },
      ],
    },
  ],
};
export default skills;

// Education Page
const competitiveSites = {
  competitiveSites: [
    {
      siteName: "LeetCode",
      iconifyClassname: "simple-icons:leetcode",
      style: {
        color: "#F79F1B",
      },
      profileLink: "https://leetcode.com/u/prachis888/",
    },
  ],
};

const degrees = {
  degrees: [
    {
      title: "Savitribai Phule Pune University",
      subtitle: "B.E. in Computer Science",
      logo_path: "SPPU.jpeg",
      alt_name: "SPPU",
      duration: "2016 - 2020",
      descriptions: [
        "⚡ Graduated with First Class honors, building strong foundations in Data Structures, Algorithms, Database Systems, and Computer Networking.",
        "⚡ Completed key projects including an academic 'Dark and Light Mode Calculator' and disease classification using Naïve Bayes & CNN.",
      ],
      website_link: "https://www.unipune.ac.in",
    },
    {
      title: "University of Central Florida",
      subtitle: "M.S. in Computer Science",
      logo_path: "UCF.jpg",
      alt_name: "UCF",
      duration: "2023 - 2025",
      descriptions: [
        "⚡ Maintaining a 3.9 GPA while specializing in Machine Learning, Deep Learning, and Advanced Computer Architecture.",
        "⚡ Serving as Graduate Teaching Assistant for Data Structures & Algorithms, mentoring undergraduates and running lab sessions.",
        "⚡ Conducted research contributions to the AlphaCore graph algorithm—published improvements in NetworkX and co-authored PR documentation.",
      ],
      website_link: "https://www.ucf.edu/",
    },
  ],
};

const certifications = {
  certifications: [],
};

// Experience Page
const experience = {
  title: "Experience",
  subtitle: "Work, Open Source Contributions and Volunteership",
  description:
    "I've driven key enterprise software improvements as a Senior Systems Engineer, contributed to open-source graph libraries, and supported academic programs as a Teaching and Research Assistant.",
  header_image_path: "experience.svg",
  sections: [
    {
      title: "Work",
      work: true,
      experiences: [
        {
          title: "Senior Systems Engineer",
          company: "Infosys",
          company_url: "https://www.infosys.com/en/",
          logo_path: "infy.jpg",
          duration: "April 2021 - July 2023",
          location: "Pune, India",
          description:
            "• Built a React + TypeScript purchase-order portal using Node.js/Express and Oracle REST Data Services to handle 3K daily orders and improve load times by 25%.\n" +
            "• Enhanced a Fortune 500 supplier dashboard with optimized React components, achieving 90% user satisfaction.\n" +
            "• Leveraged AWS (S3, EC2, Lambda) for secure data storage and serverless automation, boosting data-processing throughput by 20%.\n" +
            "• Authored unit/integration tests in Jest and Postman, raising API coverage to 90% and reducing defects by 30%.\n" +
            "• Delivered Member Portal feature two weeks ahead of schedule, driving a 25% uptick in user engagement.\n" +
            "• Refactored Oracle PL/SQL packages and triggers, improving query performance by 30%.",
          color: "#000000",
        },
        {
          title: "Research Assistant",
          company: "University of Central Florida",
          company_url: "https://cdl.ucf.edu",
          logo_path: "UCF.jpg",
          duration: "Jan 2025 – Apr 2025",
          location: "Orlando, Florida",
          description:
            "• Extended and optimized centrality and modularity functions in NetworkX's AlphaCore module, boosting node-ranking precision by 20%.\n" +
            "• Managed Git workflows (feature branching, PRs, code reviews) across AlphaCore and NetworkX, streamlining collaboration.\n" +
            "• Implemented Mahalanobis depth fallback and feature-extraction flexibility, and increased test coverage with pytest.",
          color: "#0879bf",
        },
        {
          title: "Teaching Assistant",
          company: "University of Central Florida",
          company_url: "https://cdl.ucf.edu",
          logo_path: "UCF.jpg",
          duration: "Jan 2025 – Apr 2025",
          location: "Orlando, Florida",
          description:
            "• Mentored 50+ students in Machine Learning labs, focusing on data preprocessing, feature engineering, and model evaluation.\n" +
            "• Conducted interactive workshops and one-on-one tutoring, improving average student lab scores by 15%.\n" +
            "• Designed and graded assignments on financial dataset analysis using Matplotlib and Seaborn to reinforce core concepts.",

          color: "#9b1578",
        },
      ],
    },
    {
      title: "Open Source Contributions",
      experiences: [
        {
          title: "NetworkX Contributor",
          company: "NetworkX",
          company_url: "https://networkx.org",
          logo_path: "networkx.png",
          duration: "March 2024 – Present",
          location: "Remote",
          description:
            "• Submitted and merged PRs adding robust covariance inversion fallbacks and performance optimizations to AlphaCore.\n" +
            "• Wrote unit tests and documentation, raising test coverage to 95%.\n" +
            "• Collaborated with maintainers on code reviews and roadmap planning.",
          color: "#1F2952",
        },
        {
          title: "iGraph Contributor",
          company: "iGraph",
          company_url: "https://igraph.org",
          logo_path: "igraph.png",
          duration: "July 2024 – Present",
          location: "Remote",
          description:
            "• Enhanced Python interface documentation and example scripts for graph analytics.\n" +
            "• Fixed bugs in graph generation utilities, improving library reliability.\n" +
            "• Guided new contributors through issue triage and code reviews.",
          color: "#61C86F",
        },
      ],
    },
    {
      title: "Volunteerships & Memberships",
      experiences: [
        {
          title: "Developer Member",
          company: "WomenTech Network",
          company_url: "https://www.womentech.net",
          logo_path: "womentech.jpeg",
          duration: "Jan 2024 - Present",
          location: "Remote",
          description:
            "• Participate in monthly hackathons and workshops to support women in tech.\n" +
            "• Mentor junior members on career development and interview preparation.\n" +
            "• Co-present panels on AI ethics and diversity at virtual conferences.",
          color: "#0C9D58",
        },
        {
          title: "Developer Program Member",
          company: "Computer Society of India",
          company_url: "https://www.csi-india.org",
          logo_path: "csi.jpeg",
          duration: "July 2017 - Sept 2020",
          location: "Remote",
          description:
            "• Attend and present at local CSI meetups on distributed systems and ML.\n" +
            "• Volunteer in organizing the annual CSI conference and coding competitions.\n" +
            "• Network with professionals to stay current on industry best practices.",
          color: "#181717",
        },
      ],
    },
  ],
};

// Projects Page
const projectsHeader = {
  title: "Projects",
  description:
    "My projects makes use of vast variety of latest technology tools. My best experience is to create Data Science projects and deploy them to web applications using cloud infrastructure.",
  avatar_image_path: "projects_image.svg",
};

// Empty publications data to maintain compatibility
const publicationsHeader = {
  title: "",
  description: "",
  avatar_image_path: "",
};

const publications = {
  data: [],
};

// Contact Page
const contactPageData = {
  contactSection: {
    title: "Contact Me",
    profile_image_path: "Prachi_Saibewar.JPG",
    description:
      "I'm actively seeking new opportunities in Software Development and Data Science. Whether you have a question or just want to say hi, I'll try my best to get back to you! Feel free to connect with me on LinkedIn or drop me an email.",
  },
  blogSection: {
    title: "",
    subtitle: "",
    link: "",
    avatar_image_path: "",
  },
  addressSection: {
    title: "",
    subtitle: "",
    locality: "",
    country: "",
    region: "",
    postalCode: "",
    streetAddress: "",
    avatar_image_path: "",
    location_map_link: "",
  },
  phoneSection: {
    title: "",
    subtitle: "",
  },
};

export {
  settings,
  seo,
  greeting,
  socialMediaLinks,
  skills,
  competitiveSites,
  degrees,
  certifications,
  experience,
  projectsHeader,
  publicationsHeader,
  publications,
  contactPageData,
};
