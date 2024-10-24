import ProjectCard from "./ProjectCard";

const works = [
    {
      imgSrc: '/images/DotiRockWall.png',
      title: 'Campus',
      tags: ['PostgreSQL', 'ExpressJS', 'React', 'NodeJS'],
      projectLink: 'https://github.com/ATacoDev/Campus'
    },
    {
      imgSrc: '/images/Gradify.jpg',
      title: 'Gradify',
      tags: ['PostgreSQL', 'ExpressJS', 'React', 'NodeJS'],
      projectLink: 'https://devpost.com/software/gradify'
    },
    {
      imgSrc: '/images/project-3.jpg',
      title: 'Roll A Ball',
      tags: ['Unity', 'C#'],
      projectLink: 'https://jadjohnson.wixsite.com/atacodev/portfolio-collections/my-portfolio/project-title-6'
    },
    {
      imgSrc: '/images/project-4.jpg',
      title: 'Real state website',
      tags: ['Web-design', 'Development'],
      projectLink: 'https://github.com/codewithsadee-org/wealthome'
    },
    {
      imgSrc: '/images/project-5.jpg',
      title: 'eCommerce website',
      tags: ['eCommerce', 'Development'],
      projectLink: 'https://github.com/codewithsadee/anon-ecommerce-website'
    },
    {
      imgSrc: '/images/project-6.jpg',
      title: 'vCard Personal portfolio',
      tags: ['Web-design', 'Development'],
      projectLink: 'https://github.com/codewithsadee/vcard-personal-portfolio'
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
                {works.map(({ imgSrc, title, tags, projectLink}, key) => (
                    <ProjectCard
                    key={key}
                    imgSrc={imgSrc}
                    title={title}
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
