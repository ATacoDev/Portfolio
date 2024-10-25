import { ButtonPrimary } from "./Button";

const sitemap = [
    {
      label: 'Home',
      href: '#home'
    },
    {
      label: 'About',
      href: '#about'
    },
    {
      label: 'Work',
      href: '#work'
    },
    {
      label: 'Contact me',
      href: '#contact'
    }
  ];
  
  const socials = [
    {
      label: 'GitHub',
      href: 'https://github.com/ATacoDev'
    },
    {
      label: 'LinkedIn',
      href: 'https://www.linkedin.com/in/jaden-johnson-991194200/'
    },
    {
      label: 'Instagram',
      href: 'https://www.instagram.com/itzjadenjohnson/'
    }
  ];

const Footer = () => {
  return (
    <footer className="section">
        <div className="container">
            <div className="lg:grid lg:grid-cols-2">
                <div className="mb-10">
                    <h2 className="headline-1 mb-8 lg:max-w-[12ch]">
                        Check out my socials!
                    </h2>

                    {/* <ButtonPrimary
                        href="mailto:johnsonj0721@gmail.com"
                        label="Start project"
                        icon="chevron_right"
                    /> */}
                </div>

                <div className="grid grid-cols-2 gap-4 lg:pl-20">

                <div>
                    <p className="mb-2">Sitemap</p>

                    <ul>
                        {sitemap.map(({ label, href}, key) => (
                            <li key={key}>
                                <a 
                                href={href} 
                                className="block text-sm text-zinc-400
                                py-1 transition-colors hover:text-zinc-200"
                                >
                                    {label}
                                </a>
                            </li>
                        ))}
                    </ul>
                </div>

                <div>
                    <p className="mb-2">Socials</p>

                    <ul>
                        {socials.map(({ label, href}, key) => (
                            <li key={key}>
                                <a 
                                href={href} 
                                target="_blank"
                                className="block text-sm text-zinc-400
                                py-1 transition-colors hover:text-zinc-200"
                                >
                                    {label}
                                </a>
                            </li>
                        ))}
                    </ul>
                </div>

                </div>

            </div>

            <div className="flex items-center justify-between pt-10 mb-8">
                <a href="" className="footer-logo">
                    <img 
                    src="images/taco.svg" 
                    width={40}
                    height={40}
                    alt="Logo"
                    />
                </a>

                <p className="text-zinc-500 text-sm">
                    &copy; 2024 <span className="text-zinc-200">ATacoDev</span>
                </p>
                </div>

        </div>
    </footer>
  )
}

export default Footer