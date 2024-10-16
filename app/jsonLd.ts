import { Person, CreativeWork, WithContext, WebPage } from "schema-dts"

const person: Person = {
  "@type": "Person",
  "name": "Thomas Loyan",
  "url": "https://thomasloyan.com",
  "jobTitle": "Frontend Developer",
  "sameAs": [
    "https://github.com/tloyan",
  ]
}

const creativeWork: CreativeWork = {
  "@type": "CreativeWork",
  "name": "Bloc Preview Card",
  "description": "Bloc Preview Card built as part of a Frontend Mentor Challenge, using Typescript, Next.js, and Tailwind CSS.",
  "datePublished": new Date().toISOString().split('T')[0],
  "image": "https://bloc-preview-card.tloyan.com/preview.jpg",
  "inLanguage": "en",
  "author": {
    "@type": "Person",
    "name": "Thomas Loyan",
    "url": "https://thomasloyan.com"
  }
}

export const jsonLd: WithContext<WebPage> = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "name": "Bloc Preview Card | Frontend Mentor Challenge | Thomas Loyan",
    "description": "Frontend Mentor Challenge: Bloc Preview Card built with Typescript, Next.js, Tailwind CSS.",
    "url": "https://bloc-preview-card.tloyan.com/",
    "creator": person,
    "publisher": person,
    "mainEntity": creativeWork,
    "keywords": [
      "Next.js",
      "React",
      "JavaScript",
      "TypeScript",
      "Tailwind CSS",
      "Responsive Design",
      "Responsive web design",
      "Frontend developer",
      "Fullstack developer",
      "Thomas Loyan",
      "Thomas Loyan developer",
      "Bloc Preview Card",
      "Frontend Mentor solution",
      "Freelance"
    ]
  }