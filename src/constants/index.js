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
      title: "Full-Stack Developer",
      icon: web,
    },
    {
      title: "React js Developer",
      icon: mobile,
    },
    {
      title: "Node js Developer",
      icon: backend,
    },
    {
      title: "c++ proficiency",
      icon: creator,
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
      name: "C++",
      icon: typescript,
    },
    {
      name: "React JS",
      icon: reactjs,
    },
    {
      name: "Redux",
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
      name: "MySQL",
      icon: threejs,
    },
    {
      name: "git",
      icon: git,
    },
    {
      name: "Java",
      icon: figma,
    },
    {
      name: "python",
      icon: docker,
    },
  ];
  
  const experiences = [
    {
      title: "Intern",
      company_name: "Cadence Design Systems",
      icon: meta,
      iconBg: "#E6DEDD",
      date: "May 08 - August 30",
      points: [
        "Developing and maintaining web applications using Node.js and other related technologies.",
        "Implementing responsive design and ensuring cross-browser compatibility.",
        "build project Titled: Innovative Corporate Social Networking Platform with Recognition and Appreciation System",
        "acquired knowledge and practical experience with python automation and Linux virtual Machine "
      ],
    },
  ];
  
  const testimonials = [
    {
      testimonial:
        "Rashita is not only a diligent student but also a polite and respectful individual. Their interactions with peers and teachers contribute positively to our classroom environment.",
      name: "Ms Richa Jaiswal",
      designation: "Training and Placement incharge",
      company: "college",
      image: "https://media.licdn.com/dms/image/D4D03AQH3ECo-7fQYcw/profile-displayphoto-shrink_800_800/0/1686728999170?e=1703721600&v=beta&t=I7528qc386U-lKKW_ekZA6wUhJ_D6sS_akJZ55KIH6U",
    },
    {
      testimonial:
        "I've had the pleasure of witnessing Rashita's exceptional leadership qualities during group projects. They excel at collaborating, taking initiative, and ensuring the success of their peers.",
      name: "Dr Bipin Pandey",
      designation: "HOD",
      company: "college",
      image: "https://media.licdn.com/dms/image/C4E03AQHGMAbejCy8SA/profile-displayphoto-shrink_800_800/0/1589711324826?e=1703721600&v=beta&t=8HXOQNDnmFB1IrQZnkIyHSOSWESMm5CwaAEGa0dtcsQ",
    },
    {
      testimonial:
        "Beyond their academic pursuits, Rashita is actively involved in various extracurricular activities, showcasing their well-rounded character and commitment to personal growth.",
      name: "Dr Ritu Soryan",
      designation: "Dean",
      company: "college",
      image: "https://media.licdn.com/dms/image/D4D03AQEzRzyYbMnWjg/profile-displayphoto-shrink_800_800/0/1695207147215?e=1703721600&v=beta&t=63FKlPZeitPOeI_eEcaes1qPF9MNM8c7lN7d-AJ91v4",
    },
  ];
  
  const projects = [
    {
      name: "Shopping Cart Site",
      description:
        "A shopping cart website designed with a focus on user experience. It offers a seamless shopping journey, with an intuitive interface and attractive design for easy product selection incorporating user-friendly features ensuring satisfying and hassle-free shopping experience for customers.",
      tags: [
        {
          name: "reactjs",
          color: "blue-text-gradient",
        },
        {
          name: "redux",
          color: "green-text-gradient",
        },
        {
          name: "tailwind",
          color: "pink-text-gradient",
        },
      ],
      image: "https://user-images.githubusercontent.com/29988949/66098968-923f9000-e559-11e9-8691-cd5c2b181ca1.png",
      source_code_link: "https://github.com/Rashitaguglani",
    },
    {
      name: "Blog App",
      description:
        "An innovative Corporate Social Networking Platform, serving as a blog app, with an integrated Recognition and Appreciation System. This unique platform fosters a collaborative environment for professionals to connect, share insights, and acknowledge one another's contributions.",
      tags: [
        {
          name: "Nodejs",
          color: "blue-text-gradient",
        },
        {
          name: "Expressjs",
          color: "green-text-gradient",
        },
        {
          name: "mongoosh",
          color: "pink-text-gradient",
        },
      ],
      image: "https://codeastro.com/wp-content/uploads/2022/01/CodeAstro-Thumbnail_Twitter-Clone-PHP-MySQL.jpg",
      source_code_link: "https://github.com/Rashitaguglani",
    },
    {
      name: "StudyNotion",
      description:
        "An online education platform that caters to both instructors and students. This versatile site enables users to buy courses and engage in their studies. It provides a comprehensive learning experience and administrative control for managing the platform.",
      tags: [
        {
          name: "reactjs",
          color: "blue-text-gradient",
        },
        {
          name: "nodejs",
          color: "green-text-gradient",
        },
        {
          name: "mongoDB",
          color: "pink-text-gradient",
        },
      ],
      image: "https://res.cloudinary.com/upwork-cloud/image/upload/c_scale,w_1000/v1692618191/catalog/1693587757761150976/l4etvdwk6fp0jmmh2iar.jpg",
      source_code_link: "https://github.com/Rashitaguglani",
    },
  ];
  
  export { services, technologies, experiences, testimonials, projects };