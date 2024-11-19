import React from 'react';

const ProjectCard = ({ project }) => (
  <div className='project__card'>
    <h3 className='project__name'>{project.name}</h3>
    <p className='project__description'>{project.description}</p>
  </div>
);

export default ProjectCard;
