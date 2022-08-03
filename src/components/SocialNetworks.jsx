import { FaLinkedinIn, FaGithub, FaInstagram } from 'react-icons/fa'
import '../styles/components/socialnetworks.sass'

const socialNetworks = [
  { name: "linkedin", icon: <FaLinkedinIn />, link: 'https://www.linkedin.com/in/leonardo-schuch-abelheira-567a8416b/' },
  { name: "gitHub", icon: <FaGithub />, link: 'https://github.com/Leo-Schuch' },
  { name: "instagram", icon: <FaInstagram />, link: 'https://www.instagram.com/l.s.a_28/' }
]

const SocialNetworks = () => {
  return <section id='social-networks'>
    {socialNetworks.map((network) => (
      <a target="_blank" href={network.link}
        className='social-btn'
        id={network.name}
        key={network.name}>
          {network.icon}
      </a>
    ))}
  </section>
}

export default SocialNetworks