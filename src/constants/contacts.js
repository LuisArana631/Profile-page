import { BrandGithub, BrandGmail, BrandLinkedin, BrandYoutube } from "tabler-icons-react";

export const items = [
  {
    id: 'github',
    name: 'Github',
    className: 'contact-item',
    icon: <BrandGithub size={60} strokeWidth={2} color={'#dadfdc'} />,
    url: 'https://github.com/LuisArana631',
    color: '#333',
  },
  {
    id: 'linkedin',
    name: 'LinkedIn',
    className: 'contact-item',
    icon: <BrandLinkedin size={60} strokeWidth={2} color={'#dadfdc'} />,
    url: 'https://www.linkedin.com/in/luis-arana-a44598191/',
    color: '#0E76A8',
  }, 
  {
    id: 'youtube',
    name: 'Youtube',
    className: 'contact-item',
    icon: <BrandYoutube size={60} strokeWidth={2} color={'#dadfdc'} />,
    url: 'https://www.youtube.com/channel/UCglXczWYAsCmJmY_iTXzSxQ',
    color: '#C4302B'
  },
  {
    id: 'gmail',
    name: 'Gmail',
    className: 'contact-item',
    icon: <BrandGmail size={60} strokeWidth={2} color={'#dadfdc'} />,
    url: 'https://mailto:luarana631@gmail.com/',
    color: '#BB001B'
  }
]