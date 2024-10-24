const aboutItems = [
    {
      label: 'Lines Coded',
      number: 2
    },
    {
      label: 'League Games lost',
      number: 100000
    }
  ];

const About = () => {
  return (
    <section
        id="about"
        className="section"
    >
        <div className="container">


        <div className="bg-zinc-800/50 p-7 rounded-2xl
        md:p-12">
            <p className="text-zinc-300 mb-4 md:mb-8
            md:text-xl md:max-w-[60ch]">
                Welcome! I&apos;m Jaden Johnson, I will be putting the rest of my about me here once I am done developing my portfolio website. Please feel free to keep checking in to see how it's going!
            </p>
            <div className="">
                {
                    aboutItems.map(({ label, number}, key) => (
                        <div key={key}>
                            <div className="">
                                <span className="">{number}</span>
                                <span className="">+</span>
                            </div>

                            <p className="">{label}</p>
                        </div>
                    ))
                }

                <img 
                src="/images/logo.svg" 
                alt="Logo" 
                width={30}
                height={30}
                className="" 
                />
            </div>
        </div>

        </div>
    </section>
  )
}

export default About
