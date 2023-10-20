"use client";
import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import ProjectCard from "./ProjectCard";
import ProjectTag from "./ProjectTag";

const projectsData = [
  {
    id: 1,
    title: "Organiza",
    description: "Ferramenta de controle e gerenciamento de finanças pessoais projetada para ajudar os usuários a rastrear e gerenciar com eficiência suas receitas, despesas e investimentos. Originalmente criado como um projeto em grupo para uma disciplina de frontend da faculdade, usando Next.js 13, Server-Side Rendering (SSR), Material-UI (MUI) e autenticação.",
    image: "/images/projects/organiza.png",
    tag: ["Todos", "FrontEnd"],
    gitUrl: "https://github.com/gaabrieltorres7/frontend-organiza",
    previewUrl: "https://www.figma.com/file/1otb7NbrInQl5HA1CNoOFd/Projeto-Organiza?type=design&node-id=0-1&mode=design",
  },
  {
    id: 2,
    title: "Gerenciador de Tarefas",
    description: "Esta API é para usuários que desejam gerenciar tarefas diárias. Utilizei NestJS, autenticação JWT, logging, swagger, PostgreSQL e Kafka com Docker, uso de guards, uploads de arquivos utilizando Multer e envio de e-mails com nodemailer através de um microsserviço para notificações de tarefas.",
    image: "/images/projects/tasks.jpg",
    tag: ["Todos", "BackEnd"],
    gitUrl: "https://github.com/gaabrieltorres7/task-manager-nestjs",
    previewUrl: "https://github.com/gaabrieltorres7/task-manager-nestjs",
    
  },
  {
    id: 3,
    title: "Gympass",
    description: "Este projeto é uma API RESTful construída em NodeJS e fastify que emula a funcionalidade de um aplicativo Gympass. Ao longo do projeto, aprendi diversas boas práticas em desenvolvimento de software, incluindo: princípios SOLID (inversão de dependência),  factory e repository patterns, mocking, testes unitários/e2e utilizando vitest e CI.",
    image: "/images/projects/gym.jpg",
    tag: ["Todos", "BackEnd"],
    gitUrl: "https://github.com/gaabrieltorres7/ts-gympass-api",
    previewUrl: "https://github.com/gaabrieltorres7/ts-gympass-api",
  },
  {
    id: 4,
    title: "Pedal Connect",
    description: "API que possibilita a criação de encontro de pedaladas pelos usuários, além disso outros usuários poderão visualizar esses pedais e se inscrever neles para que no dia marcado aqueles que se inscreveram possam pedalar em grupo. Utilizei princípios SOLID, Node.js/TypeScript, Express, PostgreSQL, Docker, autenticação JWT e testes unitários.",
    image: "/images/projects/riderize2.jpg",
    tag: ["Todos", "BackEnd"],
    gitUrl: "https://github.com/gaabrieltorres7/riderize",
    previewUrl: "https://github.com/gaabrieltorres7/riderize",
  },
  // {
  //   id: 5,
  //   title: "",
  //   description: "",
  //   image: "/images/projects/5.png",
  //   tag: ["All", "Web"],
  //   gitUrl: "/",
  //   previewUrl: "/",
  // },
  // {
  //   id: 6,
  //   title: "",
  //   description: "",
  //   image: "",
  //   tag: ["All", "Web"],
  //   gitUrl: "/",
  //   previewUrl: "/",
  // },
];

const ProjectsSection = () => {
  const [tag, setTag] = useState("Todos");
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const handleTagChange = (newTag: string) => {
    setTag(newTag);
  };

  const filteredProjects = projectsData.filter((project) =>
    project.tag.includes(tag)
  );

  const cardVariants = {
    initial: { y: 50, opacity: 0 },
    animate: { y: 0, opacity: 1 },
  };

  return (
    <section id="projects">
      <h2 className="text-center text-4xl font-bold text-white mt-4 mb-8 md:mb-12">
        Meus Projetos
      </h2>
      <div className="text-white flex flex-row justify-center items-center gap-2 py-6">
        <ProjectTag
          onClick={handleTagChange}
          name="Todos"
          isSelected={tag === "Todos"}
        />
        <ProjectTag
          onClick={handleTagChange}
          name="FrontEnd"
          isSelected={tag === "FrontEnd"}
        />
        <ProjectTag
          onClick={handleTagChange}
          name="BackEnd"
          isSelected={tag === "BackEnd"}
        />
      </div>
      <ul ref={ref} className="grid md:grid-cols-3 gap-8 md:gap-12">
        {filteredProjects.map((project, index) => (
          <motion.li
            key={index}
            variants={cardVariants}
            initial="initial"
            animate={isInView ? "animate" : "initial"}
            transition={{ duration: 0.3, delay: index * 0.4 }}
          >
            <ProjectCard
              key={project.id}
              title={project.title}
              description={project.description}
              imgUrl={project.image}
              gitUrl={project.gitUrl}
              previewUrl={project.previewUrl}
            />
          </motion.li>
        ))}
      </ul>
    </section>
  );
};

export default ProjectsSection;
