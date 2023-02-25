/* Change this file to get your personal Porfolio */
import emoji from "react-easy-emoji";

// Website related settings
const settings = {
  isSplash: true, // Change this to false if you don't want Splash screen.
};

//SEO Related settings
const seo = {
  title: "Somanath's Portfolio",
  description:
    "A passionate Full Stack  Developer(.NET) 🚀 having an experience of building Responsive Websites and Mobile applications with Angular / Reactjs / React Native and some other cool libraries and frameworks.",
  og: {
    title: "Somanath Havinal Portfolio",
    type: "website",
    url: "https://linktr.ee/somu75",
  },
};

//Home Page
const greeting = {
  username:"Somanath",
  title: "Somanath Havinal",
  logo_name: "Somanath Havinal",
  subTitle:(
    "A passionate Full Stack  Developer(.NET)  having an experience of building Responsive Websites and Mobile applications with Angular /  and some other .NET cool libraries and frameworks/UI-UX Designs."),
   resumeLink:
    "https://somuappu75.github.io/somuresume/",
  portfolio_repository: "https://somuappu75.github.io/somuresume/",
  githubProfile: "https://somuappu75.github.io/somuresume/",
  
};


const socialMediaLinks = [
  //"https://www.linkedin.com/in/somanath-havinal-37922a172/",
  // "https://www.facebook.com/somanath.havinal/",




  {
    name: "Github",
    link: "https://github.com/somuappu75",
    fontAwesomeIcon: "fa-github", // Reference https://fontawesome.com/icons/github?style=brands
    backgroundColor: "#181717", // Reference https://simpleicons.org/?q=github
  },
  {
    name: "LinkedIn",
    link: "https://www.linkedin.com/in/somanath-havinal-37922a172/",
    fontAwesomeIcon: "fa-linkedin-in", // Reference https://fontawesome.com/icons/linkedin-in?style=brands
    backgroundColor: "#0077B5", // Reference https://simpleicons.org/?q=linkedin
  },
  
  {
    name: "Gmail",
    link: "mailto:somusp75@gmail.com",
    fontAwesomeIcon: "fa-google", // Reference https://fontawesome.com/icons/google?style=brands
    backgroundColor: "#D14836", // Reference https://simpleicons.org/?q=gmail
  },
  {
    name: "Facebook",
    link: "https://www.facebook.com/somanath.havinal/",
    fontAwesomeIcon: "fa-facebook-f", // Reference https://fontawesome.com/icons/facebook-f?style=brands
    backgroundColor: "#1877F2", // Reference https://simpleicons.org/?q=facebook
  },
  {
    name: "Instagram",
    link: "https://www.instagram.com/somu_havinal/",
    fontAwesomeIcon: "fa-instagram", // Reference https://fontawesome.com/icons/instagram?style=brands
    backgroundColor: "#E4405F", // Reference https://simpleicons.org/?q=instagram
  },
  {
    name: "Instagram",
    link: "https://www.instagram.com/somu_havinal/",
    fontAwesomeIcon: "fa-phone", // Reference https://fontawesome.com/icons/instagram?style=brands
    backgroundColor: "red", // Reference https://simpleicons.org/?q=instagram
  },
];

const skills = {
  data: [
    {
      title: ".Net Frameworks-Asp.net core-MVC",
      fileName: "DataScienceImg",
      skills: [
        "⚡ Developing highly scalable production ready models for various deeplearning and statistical use cases",
        "⚡ Experience of working with Computer Vision and NLP projects",
        "⚡ Complex quantitative modelling for dynamic forecasting and time series analysis",
      ],
      softwareSkills: [
        
        {
          skillName: ".NET",
          fontAwesomeClassname: "simple-icons:csharp",
          style: {
            color: "#239120",
          },
        },
        {
          skillName: "MVC",
          fontAwesomeClassname: "simple-icons:asp",
          style: {
            backgroundColor: "",
          },
        },
        {
          skillName: "Java",
          fontAwesomeClassname: "ion-logo-java",
          style: {
            backgroundColor: "transparent",
            color: "#3776AB",
          },
        },
      ],
    },


    
    {
      title: "Full Stack Development",
      fileName: "FullStackImg",
      skills: [
        "⚡ Building responsive website front end using Angular-Typescript",
        "⚡ Developing mobile applications using Android Studio, .net apps and solo android apps using Kotlin",
        "⚡ Creating application backend .Net",
      ],
      softwareSkills: [
        {
          skillName: "ANGULAR",
          fontAwesomeClassname: "simple-icons:angular",
          style: {
            color: "#DD0031",
          },
        },
        {
          skillName: "HTML5",
          fontAwesomeClassname: "simple-icons:html5",
          style: {
            color: "#E34F26",
          },
        },
        {
          skillName: "CSS3",
          fontAwesomeClassname: "fa-css3",
          style: {
            color: "#1572B6",
          },
        },
        {
          skillName: "WORDPRESS",
          fontAwesomeClassname: "simple-icons:wordpress",
          style: {
            color: "#21759B",
          },
        },
        {
          skillName: "BOOTSTRAP",
          fontAwesomeClassname: "simple-icons:bootstrap",
          style: {
            color: "#7952B3",
          },
        },
        {
          skillName: "JavaScript",
          fontAwesomeClassname: "simple-icons:javascript",
          style: {
            backgroundColor: "red",
            color: "#F7DF1E",
          },
        },
        {
          skillName: "Mysql",
          fontAwesomeClassname: "simple-icons:mysql",
          style: {
            color: "#4479A1",
          },
        },
        {
          skillName: "ReactJS-Learning",
          fontAwesomeClassname: "simple-icons:react",
          style: {
            color: "#61DAFB",
          },
        },
        
        
      ],
    },
    
    {
      title: "UI/UX Design",
      fileName: "DesignImg",
      skills: [
        "⚡ Designing highly attractive user interface for mobile and web applications",
        "⚡ Designing, gathering and evaluates user requirements in collaboration with Product Design Ideas.",
        "⚡ Creating the flow of application functionalities to optimize user experience",
      ],
      softwareSkills: [
        {
          skillName: "Adobe XD",
          fontAwesomeClassname: "simple-icons:adobexd",
          style: {
            color: "#FF61F6",
          },
        },

        {
          skillName: "Figma",
          fontAwesomeClassname: "simple-icons:figma",
          style: {
            color: "#F24E1E",
          },
        },
        
        
      ],
    },
    {
      title: "Tech-Stuff-Tools",
      fileName: "DataScienceImg",
      skills: [
        "⚡ Developing highly scalable production ready models for various deeplearning and statistical use cases",
        "⚡ Experience of working with Functionality Requirements projects",
        
      ],
      softwareSkills: [
        
        {
          skillName: "Postman",
          fontAwesomeClassname: "simple-icons:postman",
          style: {
            
            color: "#FF6C37",
          },
        },
        {
          skillName: "Camunda-Modeler",
          fontAwesomeClassname: "simple-icons:c",
          style: {
            backgroundColor: "white",
          },
        },
        {
          skillName: "Jira",
          fontAwesomeClassname: "simple-icons:jira",
          style: {
            backgroundColor: "",
            color: "#0052CC",
          },
        },
        {
          skillName: "confluence",
          fontAwesomeClassname: "simple-icons:confluence",
          style: {
            color: "#172B4D",
          },
        },
        {
          skillName: "Git",
          fontAwesomeClassname: "simple-icons:github",
          style: {
            color: "#172B4D",
          },
        },
      ],
    },

  ],
};


//education2 page
const competitiveSites = {
  description:"Completed B.E",
  competitiveSites: [
    {
      siteName: "HackerRank",
      iconifyClassname: "simple-icons:hackerrank",
      style: {
        color: "#2EC866",
      },
      profileLink: "",
    },

    {
      siteName: "Hackerearth",
      iconifyClassname: "simple-icons:hackerearth",
      style: {
        color: "#323754",
      },
      profileLink: "",
    },
    // 
  ],
};

const degrees = {
  degrees: [
    {
      title: "Visvesvaraya Technological University-KLE BELGAUM",
      subtitle: "B.E. in Computer Engineering",
      logo_path: "univercity_logo.png",
      alt_name: "KLE DR MS Sheshgiri-Belgaum",
      duration: "2017 -2020 -DR MSSCET ",
      descriptions: [
        "⚡ I have studied basic software engineering subjects like DS, Algorithms, DBMS, OS, CA, AI etc.",
        "⚡ Apart from this, I have done courses Full Stack We development,and Full Stack Development(.NET).",
      ],
      website_link: "https://www.klescet.ac.in/",
    },
    {
      title: "Department OF Technical Education",
      subtitle: "Diploma in Computer Science",
      logo_path: "dte_logo.png",
      alt_name: "KLE Mahalingpur",
      duration: "2014 -2017-KLE Mahalingpur",
      descriptions: [
        "⚡ I have taken varity of courses related to Web Development which correspond to Explainable web, Graphical User Interface, Computer Graphics.",
        "⚡ Apart from this, I have also done my own projects. As part of it, I have worked on creating new code in HTMl and CSS.",
        "⚡ During my time at university, I was also associated with multimedia department. As part of it, get some hands-on It.",
      ],
      website_link: "https://www.klepolymlp.org/",
    },
    {
      title: "SSLC",
      subtitle: "Secondary School",
      logo_path: "sslc_logo.png",
      alt_name: "Rampur",
      duration: "2000 - 2012",
      descriptions: [
        "⚡ Apart from this,I have Good Kabaddi player always self-motivated ",
        "⚡ During my time at university, I was also associated with drama and short films. As part of it, I have worked on some documentry films.",
      ],
      website_link: "https://kseab.karnataka.gov.in/",
    },
  ],
  
};

const certifications = {
  certifications: [
    {
      title: "Web Development",
      subtitle: "- web Development",
      logo_path: "stanford_logo.png",
      certificate_link:
        "",
      alt_name: "ATIL Belgaum",
      color_code: "#8C151599",
    },
    {
      title: "Full Satck .Net",
      subtitle: "-Full Stack",
      logo_path: "deeplearning_ai_logo.png",
      certificate_link:
        "",
      alt_name: "Fullstack(.net)",
      color_code: "#00000099",
    },
    
  ],
};

// Experience Page
const experience = {
  title: "Experience",
  subtitle: "Work, Internship and Volunteership",
  description:
    "I have worked with many evolving startups as ML and DL Developer, Designer and Software Architect. I have also worked with some well established companies mostly as AI Developer. I love organising events and that is why I am also involved with many opensource communities as a representative.",
  header_image_path: "experience.svg",
  sections: [
    {
      title: "Work",
      experiences: [
        {
          title: "Analyst Programmer(.Net)",
          company: "Xceedance Consulting India Private Limited ",
          company_url: "https://xceedance.com/",
          logo_path: "legato_logo.png",
          duration: "MAY 2022 - PRESENT",
          location: "Bangalore, Karnataka",
          description:
            "  dfsafasfsaf.",
          color: "#0879bf",
        },
      
      ],
    },
    {
      title: "Internships",
      experiences: [
        {
          title: "Web Developing Full-stack",
          company: "Playtech Belgaum.",
          company_url: "https://playtech.in/",
          logo_path: "playtech.jpg",
          duration: "May 2018 - Sept 2018",
          location: "Belgaum, Karnataka",
          description:
            "Worked on some Live projects and aslo hands-on experience on Web-Domain",
          color: "#ee3c26",
        },
       
      ],
    },
    // {
    //   title: "Volunteerships",
    //   experiences: [
    //     {
    //       title: "Google Explore ML Facilitator",
    //       company: "Google",
    //       company_url: "https://about.google/",
    //       logo_path: "google_logo.png",
    //       duration: "June 2019 - April 2020",
    //       location: "Hyderabad, Telangana",
    //       description:
    //         "Explore Machine Learning (ML) is a Google-sponsored program for university students to get started with Machine Learning. The curriculum offers 3 tracks of ML Content (Beginner, Intermediate, Advanced) and relies on university student facilitators to train other students on campus and to build opensource projects under this program.",
    //       color: "#4285F4",
    //     },
    //     
    //     //
    //     // 
    //     // 
    //   ],
    // },
  ],
};


// Projects Page
const projectsHeader = {
  title: "Projects",
  description:
    "My projects makes use of vast variety of latest technology tools. My best experience is to create Data Science projects and deploy them to web applications using cloud infrastructure.",
  avatar_image_path: "projects_image.svg",
};

const publicationsHeader = {
  title: "Publications",
  description:
    "I have worked on and published a few research papers and publications of my own.",
  avatar_image_path: "projects_image.svg",
};

const publications = {
  data: [
    {
      id: "MDEwOlJlcG9zaXRvcnkyNDU0NjcyNzQ=",
      name: "Artificial Intelligence Paper",
      createdAt: "2020-03-06T16:26:54Z",
      description: "Paper Written on Artificial Intelligence published in xyz ",
      url:
        "https://www.andrewng.org/publications/building-high-level-features-using-large-scale-unsupervised-learning/",
    },
    // {
    //   id: "MDEwOlJlcG9zaXRvcnkyNDU0NjcyNzi=",
    //   name: "Artificial Intelligence Paper",
    //   createdAt: "2020-03-06T16:26:54Z",
    //   description: "Paper Written on Artificial Intelligence published in xyz ",
    //   url:
    //     "https://www.andrewng.org/publications/building-high-level-features-using-large-scale-unsupervised-learning/",
    // },
    // {
    //   id: "MDEwOlJlcG9zaXRvcnkyNDU0NjcyNze=",
    //   name: "Artificial Intelligence Paper",
    //   createdAt: "2020-03-06T16:26:54Z",
    //   description: "Paper Written on Artificial Intelligence published in xyz ",
    //   url:
    //     "https://www.andrewng.org/publications/building-high-level-features-using-large-scale-unsupervised-learning/",
    // },
    // {
    //   id: "MDEwOlJlcG9zaXRvcnkyNDU0NjcyNzt=",
    //   name: "Artificial Intelligence Paper",
    //   createdAt: "2020-03-06T16:26:54Z",
    //   description: "Paper Written on Artificial Intelligence published in xyz ",
    //   url:
    //     "https://www.andrewng.org/publications/building-high-level-features-using-large-scale-unsupervised-learning/",
    // },
    // {
    //   id: "MDEwOlJlcG9zaXRvcnkyNDU0NjcyNzb=",
    //   name: "Artificial Intelligence Paper",
    //   createdAt: "2020-03-06T16:26:54Z",
    //   description: "Paper Written on Artificial Intelligence published in xyz ",
    //   url:
    //     "https://www.andrewng.org/publications/building-high-level-features-using-large-scale-unsupervised-learning/",
    // },
  ],
};

// Contact Page
const contactPageData = {
  contactSection: {
    title: "Contact Me",
    profile_image_path: "somu2 (1).png",
    description:
      "Hi Thanks For Visiting My SIte Feel Free To ask Me anything related to Web Applications",
  },
  blogSection: {
    title: "Blogs",
    subtitle:
      "Some Of My Digital FootPrints-Please Visit.I have Implemented some of practice purpose and deployed ",
    link: "",
    avatar_image_path: "blogs_image.svg",
  },
  addressSection: {
    title: "Address",
    subtitle:
      "Near Kudure Tota,satti Road,Athani-591304",
    avatar_image_path: "address_image.svg",
    location_map_link: "https://goo.gl/maps/rVTdNscoxFMMxL2Y9",
  },
  phoneSection: {
    title: "Phone Number",
    subtitle: "Get In Touch",
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
