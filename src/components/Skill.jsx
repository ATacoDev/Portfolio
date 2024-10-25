import SkillCard from "./SkillCard";

const skillItem = [
    {
      imgSrc: 'images/html5.svg',
      label: 'HTML',
      desc: 'User Interface'
    },
    {
      imgSrc: 'images/css3.svg',
      label: 'CSS',
      desc: 'User Interface'
    },
    {
      imgSrc: 'images/javascript.svg',
      label: 'JavaScript',
      desc: 'Interaction'
    },
    {
      imgSrc: 'images/nodejs.svg',
      label: 'NodeJS',
      desc: 'Web Server'
    },
    {
      imgSrc: 'images/expressjs.svg',
      label: 'ExpressJS',
      desc: 'Node Framework'
    },
    {
      imgSrc: 'images/postgres.svg',
      label: 'PostgreSQL',
      desc: 'Database'
    },
    {
      imgSrc: 'images/react.svg',
      label: 'React',
      desc: 'Framework'
    },
    {
      imgSrc: 'images/cpp.svg',
      label: 'C++',
      desc: 'Programming Language'
    },
    {
      imgSrc: 'images/CSharp.svg',
      label: 'C#',
      desc: 'Programming Language'
    },
    {
      imgSrc: 'images/python.svg',
      label: 'Python',
      desc: 'Programming Language'
    },
    {
      imgSrc: 'images/unity.svg',
      label: 'Unity',
      desc: 'Development Environment'
    },
    {
      imgSrc: 'images/git.svg',
      label: 'Git',
      desc: 'Version Control'
    },
  ];

const Skill = () => {
  return (
    <section className="section">
        <div className="container">
            <h2 className="headline-2">
                Tools That I Use
            </h2>
            
            <p className="text-zinc-400 mt-3 mb-8 max-w-[50ch]">
                These are the programming languages and environment tools that I use to create my projects. Take a look!
            </p>

            <div className="grid gap-3 grid-cols-[repeat(auto-fill,_minmax(250px,_1fr))]">
                {
                    skillItem.map(({ imgSrc, label, desc}, key) => (
                        <SkillCard
                        key={key}
                            imgSrc={imgSrc}
                            label={label}
                            desc={desc}
                        />
                    ))
                }
            </div>

        </div>
    </section>
  )
}

export default Skill
