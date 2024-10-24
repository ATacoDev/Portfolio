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
            <div className="flex flex-wrap items-center gap-4
            md:gap-7">
                {
                    aboutItems.map(({ label, number}, key) => (
                        <div key={key}>
                            <div className="flex items-center md:mb-2">
                                <span className="text-2xl font-semibold
                                md:text-4xl">{number}</span>
                                <span className="text-sky-400
                                font-semibold md:text-3xl">+</span>
                            </div>

                            <p className="text-sm text-zinc-400">{label}</p>
                        </div>
                    ))
                }

                <img 
                src="/images/logo.svg" 
                alt="Logo" 
                width={30}
                height={30}
                className="ml-auto md:w-[40px] md:h-[40px]" 
                />
            </div>
        </div>

        </div>
    </section>
  )
}

export default About
