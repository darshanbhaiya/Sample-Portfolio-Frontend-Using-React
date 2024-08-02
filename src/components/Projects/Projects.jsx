import React from 'react';
import './Projects.css'; 
import ProjectCard from './ProjectCard'; 

const projectData = [
  {
    id: 1,
    title: 'How To Make Flyer Design',
    description: 'Lorem Ipsum Dolor Sit Amet, Consec Adipisicing Elit Awd And Lorem Ipsum...',
    imageUrl: 'https://images.pexels.com/photos/374074/pexels-photo-374074.jpeg',
    technologies: ['Typescript', 'ReactJs', 'NextJs', 'CSS', 'HTML', 'MongoDB'],
  },
  {
    id: 2,
    title: 'How To Make Flyer Design',
    description: 'Lorem Ipsum Dolor Sit Amet, Consec Adipisicing Elit Awd And Lorem Ipsum...',
    imageUrl: 'https://images.pexels.com/photos/3861972/pexels-photo-3861972.jpeg',
    technologies: ['Typescript', 'ReactJs', 'NextJs', 'CSS', 'HTML', 'MongoDB'],
  },
  {
    id: 3,
    title: 'How To Make Flyer Design',
    description: 'Lorem Ipsum Dolor Sit Amet, Consec Adipisicing Elit Awd And Lorem Ipsum...',
    imageUrl: 'https://images.pexels.com/photos/1181675/pexels-photo-1181675.jpeg',
    technologies: ['Typescript', 'ReactJs', 'NextJs', 'CSS', 'HTML', 'MongoDB'],
  },
  {
    id: 4,
    title: 'How To Make Flyer Design',
    description: 'Lorem Ipsum Dolor Sit Amet, Consec Adipisicing Elit Awd And Lorem Ipsum...',
    imageUrl: 'https://images.pexels.com/photos/693859/pexels-photo-693859.jpeg',
    technologies: ['Typescript', 'ReactJs', 'NextJs', 'CSS', 'HTML', 'MongoDB'],
  },
  {
    id: 5,
    title: 'How To Make Flyer Design',
    description: 'Lorem Ipsum Dolor Sit Amet, Consec Adipisicing Elit Awd And Lorem Ipsum...',
    imageUrl: 'https://images.pexels.com/photos/209151/pexels-photo-209151.jpeg',
    technologies: ['Typescript', 'ReactJs', 'NextJs', 'CSS', 'HTML', 'MongoDB'],
  },
  {
    id: 6,
    title: 'How To Make Flyer Design',
    description: 'Lorem Ipsum Dolor Sit Amet, Consec Adipisicing Elit Awd And Lorem Ipsum...',
    imageUrl: 'https://images.pexels.com/photos/574073/pexels-photo-574073.jpeg',
    technologies: ['Typescript', 'ReactJs', 'NextJs', 'CSS', 'HTML', 'MongoDB'],
  }
];

const Projects = () => {
  return (
    <div className="projects" id="projects">
      <h1>Projects</h1>
      <p>
        Amet Minim Mollit Non Deserunt Ullamco Est Sit Aliqua Dolor Do Amet Sint. Velit Officia
        Consequat Duis Enim Velit Mollit. Lorem Ipsum
      </p>
      <br /><br />
      <div className="project-cards">
        {projectData.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>
    </div>
  );
};

export default Projects;
