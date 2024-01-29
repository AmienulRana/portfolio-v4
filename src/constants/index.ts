import type {
  TNavLink,
  TExperience,
  TProject,
} from "../types";

import {
  strt,
  armada,
  aedu,
  dilo,
  learning,
  nginep,
  creo,
  app_aedu,
  movie_app,
  hris,
  receipe,
  marketplace,
  car_rental,
  invitation,
  netflix,
  landing_page,
  online_shop,
  topup_game,
  callyuk
} from "../assets";


export const navLinks: TNavLink[] = [
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


const technologies = [
  {
    title: "React",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
  },
  {
    title: "Javascript",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg",
  },
  {
    title: "React Native",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
  },
  {
    title: "NextJS",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original-wordmark.svg",
    style: { filter: "invert(1)" },
  },
  {
    title: "Typescript",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg",
  },
  {
    title: "Redux",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/redux/redux-original.svg",
  },
  {
    title: "Vue",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vuejs/vuejs-original.svg",
  },
  {
    title: "NodeJS",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg",
  },
  {
    title: "MongoDB",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg",
  },
  {
    title: "ExpressJS",
    style: { filter: "invert(1)" },
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg",
  },
  {
    title: "GraphQL",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/graphql/graphql-plain.svg",
  },
  {
    title: "Redis",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/redis/redis-plain.svg",
  },
  {
    title: "Jest",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/jest/jest-plain.svg",
  },
  {
    title: "HTML",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg",
  },
  {
    title: "CSS",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg",
  },

  {
    title: "Sass",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/sass/sass-original.svg",
  },
  {
    title: "TailwindCSS",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-plain.svg",
  },
 
  {
    title: "Git",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg",
  },
  {
    title: "Bootstrap",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-plain.svg",
  },
];

const experiences: TExperience[] = [
  {
    title: "Frontend Enginner",
    companyName: "aedu+ (Contract)",
    icon: aedu,
    iconBg: "#383E56",
    date: "June 2023 - Now",
    link:'https://learning.aedu.id/about-us',
    points: [
      "Create website education and website community for Aedu.",
      "Developed and maintained responsive and user-friendly web applications.",
      "Optimization of performance, accessibility, website SEO based on Google Light Speed.",
      "Create testing for app and web and create documentation for review by PM / CTO.",
      "Create mobile applications education using React native.",
      "Setup Google console for publish Application to Play Store.",
      "Code optimization to make it easier to read and develop in the future.",
      "Skills: Nextjs, Typescript, Tailwind css, React Native, Expo Environment, Google Play Console, Testing, Android Development",
    ],
  },
  {
    title: "Frontend Developer",
    companyName: "STRT Button (Contract)",
    icon: strt,
    iconBg: "#E6DEDD",
    date: "Jan 2021 - Feb 2022",
    link: 'https://www.strtbutton.com/',
    points: [
      "Create Decentralized Applications with Next Js",
      "Developed and maintained responsive and user-friendly web applications",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Using front-end technologies such as NextJs, Typescript, and Tailwind css, and adhered to industry best practices for coding standards",
      "Participating in code reviews and providing constructive feedback to other developers.",
      "Implemented and maintained version control using Git, allowing for seamless collaboration with the development team.",
      "Skills: Nextjs, Typescript, Tailwind css, Web3.js, etheir.js, Rainbowkit.",
    ],
  },
  {
    title: "Full Stack Developer",
    companyName: "Armada Vision (Full Time)",
    icon: armada,
    iconBg: "#383E56",
    date: "August 2022 - Feb 2023",
    link: 'https://mufidahgroup.com/',
    points: [
      "Create HRIS Management Project with Vuejs for Frontend and Expressjs for the Backend.",
      "Develop and maintained web application systems.",
      "Implement Clean Code in Environment.",
      "Create reusable component for future use.",
      "Skills: Vue, Vuex, Tailwind css, Express Js (Node Js), Mongodb.",
    ],
  },
  {
    title: "Full Stack Developer",
    companyName: "DILo Medan (Internship) *now name of company is indigo",
    icon: dilo,
    iconBg: "#E6DEDD",
    date: "July 2021 - Oct 2021 ",
    link: 'https://indigo.id/',
    points: [
      "Build and maintaince website using Reactjs.",
      "Collaborate with other Developers and UI/UX to update the website and create new features.",
      "Learning technologies I don't yet understand like Reactjs, Express, MongoDb, and the, Rest API.",
      "Metting with DILo Manager in digital invitation website builder as my final project.",
    ],
  },
];


const projects: TProject[] = [
  {
    name: "Call Yuk",
    description:
      "The meeting application provides a seamless platform for individuals and teams to collaborate. The application supports video, audio calls and real-time chat.",
    tags: [
      {
        name: "next-js",
        color: "blue-text-gradient",
      },
      {
        name: "tailwind",
        color: "green-text-gradient",
      },
      {
        name: "typescript",
        color: "pink-text-gradient",
      },
      {
        name: "peer-js",
        color: "blue-text-gradient",
      },
      {
        name: "socket.io",
        color: "green-text-gradient",
      },
      {
        name: "mongodb",
        color: "pink-text-gradient",
      },
    ],
    image: callyuk,
    sourceCodeLink: "https://call-yuk.vercel.app/",
  },
  {
    name: "Learning Course",
    description:
      "Online course website offers easy access to a variety of courses. Users can learn through videos, readings, and exams on topics ranging from technical skills to soft skills.",
    tags: [
      {
        name: "next-js",
        color: "blue-text-gradient",
      },
      {
        name: "tailwind",
        color: "green-text-gradient",
      },
      {
        name: "typescript",
        color: "pink-text-gradient",
      },
      {
        name: "react-query",
        color: "blue-text-gradient",
      },
    ],
    image: learning,
    sourceCodeLink: "https://learning.aedu.id/",
  },
  {
    name: "Nginep",
    description:
      "Explore the world with our hotel booking platform inspired by Airbnb! Easily book accommodation, manage personalized trips and more",
    tags: [
      {
        name: "next-js",
        color: "blue-text-gradient",
      },
      {
        name: "tailwind",
        color: "green-text-gradient",
      },
      {
        name: "typescript",
        color: "pink-text-gradient",
      },
      {
        name: "prisma",
        color: "blue-text-gradient",
      },
      {
        name: "mongodb",
        color: "green-text-gradient",
      },
      {
        name: "zustand",
        color: "pink-text-gradient",
      },
    ],
    image: nginep,
    sourceCodeLink: "https://amienul-nginep.vercel.app/",
  },  
  {
    name: "Creo Defi",
    description:
      "The dApp website offers staking, airdrop participation, token swapping, and an NFT builder for quick and versatile decentralized financial.",
    tags: [
      {
        name: "next-js",
        color: "blue-text-gradient",
      },
      {
        name: "typescript",
        color: "green-text-gradient",
      },
      {
        name: "thirdweb",
        color: "pink-text-gradient",
      },
      {
        name: "wagmi",
        color: "blue-text-gradient",
      },
      {
        name: "tailwind",
        color: "green-text-gradient",
      },
      {
        name: "rainbowkit",
        color: "pink-text-gradient",
      },
    ],
    image: creo,
    sourceCodeLink: "https://creo-defi.vercel.app/",
  },
  {
    name: "App aedu+",
    description:
      "This application is the result of the transformation of the 3 website menus above (learning, community, enterprise), all the features on the website are also in this application",
    tags: [
      {
        name: "react-native",
        color: "blue-text-gradient",
      },
      {
        name: "expo",
        color: "green-text-gradient",
      },
      {
        name: "javascript",
        color: "pink-text-gradient",
      },
      {
        name: "css",
        color: "blue-text-gradient",
      },
    ],
    image: app_aedu,
    sourceCodeLink: "https://expo.dev/accounts/amienulrana/projects/aedu-plus/builds/c32d6b4f-b7d8-41ff-acb7-b6ebd2523479",
  },
  {
    name: "Movie app",
    description:
      "This app you can browse trending, upcoming and top rated movies, you can see the details of a movie and the cast person, and you can even search any movie you want.",
    tags: [
      {
        name: "react-native",
        color: "blue-text-gradient",
      },
      {
        name: "javascript",
        color: "green-text-gradient",
      },
      {
        name: "expo",
        color: "pink-text-gradient",
      },
      {
        name: "nativewind",
        color: "blue-text-gradient",
      },
      {
        name: "tmdb",
        color: "green-text-gradient",
      },
    ],
    image: movie_app,
    sourceCodeLink: "https://expo.dev/accounts/amienulrana/projects/app-ui/builds/73b3a127-9092-431b-8de6-9368860f84e3",
  },
  {
    name: "HRIS Management",
    description:
      "The HRIS management website simplifies HR tasks, including payslip generation, attendance tracking, and leave management for efficient human resource operations.",
    tags: [
      {
        name: "vue-js",
        color: "blue-text-gradient",
      },
      {
        name: "vuex",
        color: "green-text-gradient",
      },
      {
        name: "express-js",
        color: "pink-text-gradient",
      },
      {
        name: "mongodb",
        color: "blue-text-gradient",
      },
      {
        name: "tailwind",
        color: "green-text-gradient",
      },
    ],
    image: hris,
    sourceCodeLink: "https://mufidahgroup.com/",
  },
  {
    name: "Recipe App",
    description:
      "From quick and easy weekday meals to impressive gourmet dishes, this app provides step-by-step instructions, ingredient lists, and stunning visuals to guide you through each culinary adventure.",
      tags: [
        {
          name: "react-native",
          color: "blue-text-gradient",
        },
        {
          name: "javascript",
          color: "green-text-gradient",
        },
        {
          name: "expo",
          color: "pink-text-gradient",
        },
        {
          name: "nativewind",
          color: "blue-text-gradient",
        },
        {
          name: "themealdb",
          color: "green-text-gradient",
        },
      ],
    image: receipe,
    sourceCodeLink: "https://amienulrana-v3.vercel.app/notfound",
  },
  {
    name: "Marketplace",
    description:
      "The integrated marketplace website features seamless Raja Ongkir integration, allowing users to easily check shipping costs for their purchases. and dashboard to create product.",
      tags: [
        {
          name: "vue-js",
          color: "blue-text-gradient",
        },
        {
          name: "vuex",
          color: "green-text-gradient",
        },
        {
          name: "express-js",
          color: "pink-text-gradient",
        },
        {
          name: "tailwind",
          color: "blue-text-gradient",
        },
        {
          name: "mongodb",
          color: "green-text-gradient",
        },
      ],
    image: marketplace,
    sourceCodeLink: "https://marketplace-one-blue.vercel.app/",
  },
  {
    name: "Topup game",
    description:
      "This personal project involves the creation of a game top-up website designed for simulation purposes. Users can experience the process of buying game vouchers in a simulated environment.",
      tags: [
        {
          name: "next-js",
          color: "blue-text-gradient",
        },
        {
          name: "typescript",
          color: "green-text-gradient",
        },
        {
          name: "mongodb",
          color: "pink-text-gradient",
        },
        {
          name: "express-js",
          color: "blue-text-gradient",
        },
        {
          name: "css",
          color: "green-text-gradient",
        },
      ],
    image: topup_game,
    sourceCodeLink: "https://topupgame-pearl.vercel.app/",
  },  
  {
    name: "Car Rental",
    description:
      "The personal project car rental website offers a simplified platform for renting cars, catering to individual needs.",
      tags: [
        {
          name: "next-js",
          color: "blue-text-gradient",
        },
        {
          name: "typescript",
          color: "green-text-gradient",
        },
        {
          name: "tailwind",
          color: "pink-text-gradient",
        },
        {
          name: "headless-ui",
          color: "blue-text-gradient",
        },
      ],
    image: car_rental,
    sourceCodeLink: "https://cars-rental-v2-amienulrana.vercel.app/",
  },
  {
    name: "Invitation Digital",
    description:
      "The digital invitation website allows quick guest check-ins through scanning, providing administrators with instant access to arrival information.",
      tags: [
        {
          name: "react-js",
          color: "blue-text-gradient",
        },
        {
          name: "express-js",
          color: "pink-text-gradient",
        },
        {
          name: "mongodb",
          color: "blue-text-gradient",
        },
        {
          name: "reactstrap",
          color: "green-text-gradient",
        },
      ],
    image: invitation,
    sourceCodeLink: "https://amienulrana-v3.vercel.app/notfound",
  },
  {
    name: "Netflix Clone",
    description:
      "cloned netflix website with several features, namely, auth with github and google, watch videos, and like videos.",
      tags: [
        {
          name: "next-js",
          color: "blue-text-gradient",
        },
        {
          name: "prisma",
          color: "pink-text-gradient",
        },
        {
          name: "typescript",
          color: "blue-text-gradient",
        },
        {
          name: "tailwind",
          color: "green-text-gradient",
        },
        {
          name: "mongodb",
          color: "pink-text-gradient",
        },
        {
          name: "next-auth",
          color: "blue-text-gradient",
        },
      ],
    image: netflix,
    sourceCodeLink: "https://movie-app-amienul.vercel.app/auth",
  },
  {
    name: "Landing Page",
    description:
      "The personal project furniture landing page is a visually appealing website showcasing a diverse range of furniture products.",
      tags: [
        {
          name: "html",
          color: "blue-text-gradient",
        },
        {
          name: "css",
          color: "pink-text-gradient",
        },
        {
          name: "javascript",
          color: "blue-text-gradient",
        },
        {
          name: "tailwind",
          color: "green-text-gradient",
        },
      ],
    image: landing_page,
    sourceCodeLink: "https://amienulrana.github.io/companyprofile/",
  },
  {
    name: "Online Shop",
    description:
      "online shop personal website as an exercise in creating a website using the latest bootstrap.",
      tags: [
        {
          name: "html",
          color: "blue-text-gradient",
        },
        {
          name: "css",
          color: "pink-text-gradient",
        },
        {
          name: "javascript",
          color: "blue-text-gradient",
        },
        {
          name: "bootstrap",
          color: "green-text-gradient",
        },
      ],
    image: online_shop,
    sourceCodeLink: "https://amienulrana.github.io/hefa-store/",
  },

];

export { technologies, experiences, projects };
