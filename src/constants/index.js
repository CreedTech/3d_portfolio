import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  docker,
  meta,
  starbucks,
  tesla,
  shopify,
  carrent,
  jobit,
  tripguide,
  threejs,
  fudap,
  vanguard,
  zummit,
  dowell,
  aptech,
  upwork
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Mobile Developer",
    icon: mobile,
  },
  {
    title: "Web Developer",
    icon: web,
  },
  {
    title: "Frontend Developer",
    icon: creator,
  },
  {
    title: "FullStack (FE Heavy)",
    icon: backend,
  },
];

const technologies = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Redux Toolkit",
    icon: redux,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "Three JS",
    icon: threejs,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "figma",
    icon: figma,
  },
  {
    name: "docker",
    icon: docker,
  },
];

const experiences = [
  {
    title: "Junior Web Development Instructor",
    company_name: "Aptech",
    icon: aptech,
    iconBg: "#383E56",
    date: "April 2020 - August 2021",
    points: [
      "Coached and mentored team members to facilitate career development, satisfaction, and increased organizational impact.",
      "Contributed to the department's success by recommending successful strategies to meet academic and student needs",
      "Provided valuable coaching and mentorship to aspiring web developers, contributing to their career development and satisfaction.",
      "Leveraged expertise to recommend successful strategies aligned with academic and student needs, resulting in improved outcomes.",
    ],
  },
  {
    title: "Front End Developer",
    company_name: "Zummit Africa Inc",
    icon: zummit,
    iconBg: "#E6DEDD",
    date: "August, 2022 - Dec 2022",
    points: [
      "Developed user-friendly software solutions, focusing on enhancing accessibility and responsiveness.",
      "Adhered to established coding standards, ensuring efficient debugging, thorough documentation, and seamless system maintenance.",
      "Optimized websites for backward and cross-browser compatibility, providing a consistent experience for users.",
      "Collaborated with team members to identify and implement process improvements and develop effective tools.",
    ],
  },
  {
    title: "React Native Mobile Developer",
    company_name: "Fudap Co. Limited",
    icon: fudap,
    iconBg: "#383E56",
    date: "Nov 2022 - May 2023",
    points: [
      "Designed user-friendly software to improve accessibility and responsiveness.",
      "Used established coding standards to streamline debugging, documentation, and system maintenance.",
      "Optimized mobile app to improve backward and cross-platform compatibility.",
      "Worked with backend developers using API to transfer information across the app.",
      "Developed mobile applications using Agile and continuous delivery processes to refine the quality and improve output.",
      "Documented code changes in manuals to orient developers and users",
    ],
  },
  {
    title: "Freelancer",
    company_name: "Upwork, Offline",
    icon: upwork,
    iconBg: "#E6DEDD",
    date: "March 2019 - Present",
    points: [
      "Increased website traffic by 40% through search engine optimization (SEO) strategies, resulting in improved online visibility and lead generation for the client.",
      "Reduced website load time by 50% through performance optimization techniques, leading to improved user engagement and lower bounce rates.",
      "Enhanced page speed and overall performance of websites.",
      "Optimized websites for backward and cross-browser compatibility, ensuring a seamless user experience across multiple platforms.",
      "Resolved critical software bugs and technical issues within tight deadlines, ensuring smooth project delivery and client satisfaction.",
    ],
  },
  {
    title: "Mobile & Web Developer",
    company_name: "Vanguard Media Limited",
    icon: vanguard,
    iconBg: "#E6DEDD",
    date: "December 2022 - November 2023",
    points: [
      "Developed highly intuitive and responsive user interfaces to improve accessibility and user experience.",
      "Implemented industry-standard coding practices, ensuring efficient debugging, thorough documentation, and seamless system maintenance.",
      "Optimized mobile applications to ensure seamless operation across various platforms and versions.",
      "Produced comprehensive code documentation, facilitating smooth onboarding for developers and users.",
    ],
  },
  {
    title: "React Developer",
    company_name: "Dowell Research UK Limited",
    icon: dowell,
    iconBg: "#E6DEDD",
    date: "August 2023 - Present",
    points: [
      "Developed and maintained NPM packages and plugins used widely in the organization.",
      "Developed highly intuitive and responsive user interfaces to improve accessibility and user experience.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
];

const testimonials = [
  {
    testimonial:
      "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
    name: "Sara Lee",
    designation: "CFO",
    company: "Acme Co",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their clients' success like Rick does.",
    name: "Chris Brown",
    designation: "COO",
    company: "DEF Corp",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    testimonial:
      "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
    name: "Lisa Wang",
    designation: "CTO",
    company: "456 Enterprises",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
  },
];

const projects = [
  {
    name: "Car Rent",
    description:
      "Web-based platform that allows users to search, book, and manage car rentals from various providers, providing a convenient and efficient solution for transportation needs.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "mongodb",
        color: "green-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
    ],
    image: carrent,
    source_code_link: "https://github.com/",
  },
  {
    name: "Job IT",
    description:
      "Web application that enables users to search for job openings, view estimated salary ranges for positions, and locate available jobs based on their current location.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "restapi",
        color: "green-text-gradient",
      },
      {
        name: "scss",
        color: "pink-text-gradient",
      },
    ],
    image: jobit,
    source_code_link: "https://github.com/",
  },
  {
    name: "Trip Guide",
    description:
      "A comprehensive travel booking platform that allows users to book flights, hotels, and rental cars, and offers curated recommendations for popular destinations.",
    tags: [
      {
        name: "nextjs",
        color: "blue-text-gradient",
      },
      {
        name: "supabase",
        color: "green-text-gradient",
      },
      {
        name: "css",
        color: "pink-text-gradient",
      },
    ],
    image: tripguide,
    source_code_link: "https://github.com/",
  },
];

export { services, technologies, experiences, testimonials, projects };
