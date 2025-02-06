import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { FaReact } from "react-icons/fa";
import { LuGraduationCap } from "react-icons/lu";
import westpakbagsImg from "@/public/westpakbags.png";
import kharismagarmindoImg from "@/public/kharismagarmindo.png";
import ekamulyaImg from "@/public/ekamulya.png";

export const links = [
  {
    name: "Home",
    hash: "#home",
  },
  {
    name: "About",
    hash: "#about",
  },
  {
    name: "Projects",
    hash: "#projects",
  },
  {
    name: "Skills",
    hash: "#skills",
  },
  {
    name: "Experience",
    hash: "#experience",
  },
  {
    name: "Contact",
    hash: "#contact",
  },
] as const;

export const experiencesData = [
  {
    title: "Informatic Engineering",
    location: "Bandung Technology University",
    description:
      "I graduated from college with a bachelor's degree.",
    icon: React.createElement(CgWorkAlt),
    date: "2024",
  },
  {
    title: "Front-End Developer",
    location: "Orlando, FL",
    description:
      "I worked as a front-end developer for 2 years in 1 job and 1 year in another job. I also upskilled to the full stack.",
    icon: React.createElement(CgWorkAlt),
    date: "2019 - 2021",
  },
  {
    title: "Full-Stack Developer",
    location: "Houston, TX",
    description:
      "I'm now a full-stack developer working as a freelancer. My stack includes React, Next.js, TypeScript, Tailwind, Prisma and MongoDB. I'm open to full-time opportunities.",
    icon: React.createElement(CgWorkAlt),
    date: "2021 - present",
  },
] as const;

export const projectsData = [
  {
    title: "Westpakbags E-Commerce",
    description:
      "I worked as a full-stack developer on this startup project for 1 years. Users can give public feedback to companies.",
    tags: ["Wordpress", "E-Commerce", "Payment Gateway", "Shipping Courier", "Warehouse", ],
    imageUrl: westpakbagsImg,
  },
  {
    title: "Kharisma Group Company Profile",
    description:
      "Job board for remote developer jobs. I was the front-end developer. It has features like filtering, sorting and pagination.",
    tags: ["React", "TypeScript", "Next.js", "Tailwind", "Redux"],
    imageUrl: kharismagarmindoImg,
  },
  {
    title: "Eka Mulya Company Profile",
    description:
      "A public web app for quick analytics on text. It shows word count, character count and social media post limits.",
    tags: ["React", "Next.js", "SQL", "Tailwind", "Framer"],
    imageUrl: ekamulyaImg,
  },
] as const;

export const skillsData = [
  "HTML",
  "CSS",
  "MySQL",
  "PHP",
  "Wordpress",
  "E-Commerce",
  "JavaScript",
  "React",
  "Next.js",
  "Git",
  "IT Support",
  "Helpdesk",
  "Phone Repair",
  "Unlock",
  "Troubleshooting",
  "Hardware",
  "Software",
  "Networking",
  "Mikrotik",
  "Cisco",
  "Google Cloud Platform",
  "Amazon Web Service",
  "SDWAN Velo CLoud",
  "Apps Support",
] as const;
