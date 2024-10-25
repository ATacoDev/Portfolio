import ProjectCard from "./ProjectCard";

const works = [
    {
      imgSrc: '/images/Campus.svg',
      title: 'Campus',
      description: 'Campus is an all-in-one app that helps college students and staff manage activities, track achievements, and stay connected with campus resources and announcements.',
      tags: ['PostgreSQL', 'ExpressJS', 'React', 'NodeJS'],
      projectLink: 'https://github.com/ATacoDev/Campus'
    },
    {
      imgSrc: '/images/Gradify.svg',
      title: 'Gradify',
      description: "We've all had hardships in our education. Gradify is here to show you that you're not alone!",
      tags: ['PostgreSQL', 'ExpressJS', 'React', 'NodeJS'],
      projectLink: 'https://devpost.com/software/gradify'
    },
    {
      imgSrc: '/images/RAB.svg',
      title: 'Roll A Ball',
      description: 'A horror ball adventure game written in Unity with C#',
      tags: ['Unity', 'C#'],
      projectLink: 'https://jadjohnson.wixsite.com/atacodev/portfolio-collections/my-portfolio/project-title-6'
    },
    {
      imgSrc: '/images/Sick.svg',
      title: 'Sick.',
      description: 'Save Rural Light in this rouge-like adventure game!',
      tags: ['Unity', 'C#'],
      projectLink: 'https://github.com/ATacoDev/Sick.'
    },
    {
      imgSrc: '/images/PythonG.svg',
      title: 'Python Genetic Algorithm Visualizer',
      description: 'A genetic algorithm visualizer written in Python',
      tags: ['Python'],
      projectLink: 'https://github.com/ATacoDev/SchoolProjects/blob/master/CPSC390/JadenJohnsonProject2.ipynb'
    },
    {
      imgSrc: '/images/Mario.svg',
      title: 'The Mario Project',
      description: 'Chapman Universities notorious Data Strucutures and Algorithms assignment... The Mario Project',
      tags: ['C++'],
      projectLink: 'https://github.com/ATacoDev/SchoolProjects/tree/master/CPSC350/MarioProject'
    },
    
  ];

const Work = () => {
  return (
    <section 
    id="work"
    className="section"
    >
        <div className="container">


            <h2 className="headline-2 mb-8">
                My Project Highlights
            </h2>

            <div className="grid gap-x-4 gap-y-5 grid-cols-[repeat(auto-fill,_minmax(280px,_1fr))]">
                {works.map(({ imgSrc, title, description, tags, projectLink}, key) => (
                    <ProjectCard
                    key={key}
                    imgSrc={imgSrc}
                    title={title}
                    description={description}
                    tags={tags}
                    projectLink={projectLink}
                    />
                ))}
            </div>

        </div>
    </section>
  )
}

export default Work
