import {
    mobile,
    backend,
    creator,
    web,
    tailwind,
    nodejs,
    mongodb,
    git,
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
      title: "History",
    },
    {
      id: "contact",
      title: "Contact",
    },
  ];
  
  const services = [
    {
      title: "FrontEnd Developer",
      icon: web,
    },
    {
      title: "BackEnd Developer",
      icon: mobile,
    },
    {
      title: "Self-Taught Programmer",
      icon: backend,
    },
    {
      title: "freelancer",
      icon: creator,
    },
  ];
  
  const technologies = [

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
      name: "docker",
      icon: docker,
    },
  ];
  
  const experiences = [
    {
      title: "Pertama kali saya mengenal Coding",
      company_name: "Struktur Data dan Algoritma",
      icon: starbucks,
      iconBg: "#383E56",
      date: "Maret 2021",
    },
    {
      title: "Mulai tertarik dan belajar web programming Otodidak",
      company_name: "Html & Css",
      icon: tesla,
      iconBg: "#E6DEDD",
      date: "Mei 2021",
    },
    {
      title: "Menguasai Bahasa Pemrograman frontEnd dan backEnd",
      company_name: "Javascript, php, frameworks dan Database",
      icon: shopify,
      iconBg: "#383E56",
      date: "Jan 2022",
    },
    {
      title: "Full stack Developer & Freelancer",
      company_name: "Terus Berdoa dan tetap belajar",
      icon: meta,
      iconBg: "#E6DEDD",
      date: "Jan 2023 - Present",
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
      name: "Coffe Shop",
      description:
        "Website Coffe shop yang saya kembangkan menggunakan teknologi Html, Css dan juga javaScript ini memiliki tampilan yang menarik serta terdapat informasi tentang berbagai macam jenis dan harga kopi yang tersedia di website tersebut.",
      tags: [
        {
          name: "Javascript",
          color: "blue-text-gradient",
        },
        {
          name: "Html",
          color: "green-text-gradient",
        },
        {
          name: "Css",
          color: "pink-text-gradient",
        },
      ],
      image: carrent,
      source_code_link: "https://panji-simple-cofee-shop.vercel.app",
    },
    {
      name: "Wedding Invitation",
      description:
        "Web Aplikasi undangan pernikahan yang mempunyai berbagai fitur menarik seperti countdown dengan JQuery fitur fadeIn-fadeOut dengan Bulma serta integrasi javascript dan Scss yang cukup banyak sehingga memungkinkan web tersebut untuk terlihat lebih dinamis",
      tags: [
        {
          name: "Javascript",
          color: "blue-text-gradient",
        },
        {
          name: "JQuery",
          color: "green-text-gradient",
        },
        {
          name: "Scss",
          color: "pink-text-gradient",
        },
      ],
      image: jobit,
      source_code_link: "https://wedding-alfan-dewi.vercel.app",
    },
    {
      name: "Youtube Clone",
      description:
        "Sebuah Website Youtube tiruan dengan fitur yang cukup banyak dan mempunyai fungsi yang hampir mirip dengan Youtube. web ini memungkinan pengguna untuk bisa mencari kontent creator siapapun di Youtube dengan fitur Search, applikasi ini saya kembangkan dengan React,NextJS,RapidApi,Vite dan masih banyak lagi teknologi lainnya",
      tags: [
        {
          name: "nextjs",
          color: "blue-text-gradient",
        },
        {
          name: "RapidApi",
          color: "green-text-gradient",
        },
        {
          name: "Tailwind",
          color: "pink-text-gradient",
        },
      ],
      image: tripguide,
      source_code_link: "https://youtube-clone-beryl-eta.vercel.app",
    },
  ];
  
  export { services, technologies, experiences, testimonials, projects };