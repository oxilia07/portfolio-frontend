import React from 'react';
import ProjectCard from './ProjectCard';

const projectData = [
  {
    name: 'Online Library Information System',
    description:
      'A system designed to simplify the process of borrowing and returning books online.'
  },
  {
    name: 'E-Commerce Website',
    description:
      'A platform to showcase and sell products with a user-friendly interface.'
  },
  {
    name: 'Personal Portfolio',
    description: 'A personal website showcasing my projects and skills.'
  }
];

const Projects = () => (
  <section className='projects section' id='projects'>
    <h2 className='section-title'>Projects</h2>
    <div className='projects__container bd-grid'>
      {projectData.map((project, index) => (
        <ProjectCard key={index} project={project} />
      ))}
    </div>
  </section>
);

export default Projects;
