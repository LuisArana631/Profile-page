const VIDEOS = [
  {
    name: 'Taller Docker',
    description: 'Taller introductorio sobre el uso de Docker',
    repo: 'https://github.com/sergioarmgpl/taller-docker',
    href: 'https://www.youtube.com/watch?v=WHTkUdlji3Y&list=PLNDTqmfsik9cQvzmbShkkSy4u_S8WmQx0',
  },
  {
    name: 'Taller gRPC',
    description: 'Taller introductorio sobre el uso de gRPC en GoLang',
    repo: 'https://github.com/LuisArana631/Taller-gRPC',
    href: 'https://www.youtube.com/watch?v=n2XxWdi3laM&list=PLNDTqmfsik9ck_w8MEsapZdlsgQCmphDm',
  },
  {
    name: 'Taller Kubernetes',
    description: 'Taller introductorio sobre el uso de Kubernetes',
    repo: 'https://github.com/LuisArana631/Taller_Kubernetes',
    href: 'https://www.youtube.com/watch?v=gXeuN4x0ygA&list=PLNDTqmfsik9eZYaSIHxiTXBH1H4vqRswg',
  },
  {
    name: 'Taller Jenkins',
    description: 'Taller introductorio sobre el uso de Jenkins',
    repo: 'https://github.com/LuisArana631/Taller_Jenkins',
    href: 'https://www.youtube.com/watch?v=lApyG6-O6_4&list=PLNDTqmfsik9f_rRPmJEbqCC97VUoGTV2S',
  }
]

const PROJECTS = [
  {
    name: 'Pokedex (REDUX)',
    description: 'Página desarrollada utilizando React y el API Pokemon',
    repo: 'https://github.com/LuisArana631/Pokedex-React',
    href: 'https://luisarana631.github.io/Pokedex-React/'
  },
  {
    name: 'Matriosh TS',
    description: 'Traductor de Matriosh a TypeScript',
    repo: 'https://github.com/LuisArana631/MatrioshTS_Traductor',
    href: 'https://luisarana631.github.io/MatrioshTS_Traductor/home',
  },
  {
    name: 'Energies Blog',
    description: 'Página web sobre energías renovables',
    repo: 'https://github.com/LuisArana631/Energy-Blog-IT3',
    href: 'https://luisarana631.github.io/Energy-Blog-IT3',
  },
  {
    name: 'Servicios RCL',
    description: 'Página web para la empresa Servicios RCL',
    href: 'https://rclservices.netlify.app/',
  }
]

const POSTS = [
  {
    name: 'The Importance of Clean Code: Improving Readability and Maintainability',
    description: 'The Importance of Clean Code: Improving Readability and Maintainability',
    repo: '',
    href: 'https://medium.com/@luarana631/the-importance-of-clean-code-improving-readability-and-maintainability-d17ccfde2f1a'
  }
]

module.exports = [
  {
    type: 'Projects',
    items: PROJECTS
  },
  {
    type: 'Videos',
    items: VIDEOS
  },
  {
    type: 'Posts',
    items: POSTS
  }
]