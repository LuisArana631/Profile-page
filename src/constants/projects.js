import {
  FaReact,
  FaAngular,
  FaDocker,
  FaJenkins
} from 'react-icons/fa'

import {
  SiIonic,
  SiKubernetes,
  SiGo
} from 'react-icons/si'

export const projects = [
  {
    id: 'project1',
    name: 'Pokedex (REDUX)',
    repo: 'https://github.com/LuisArana631/Pokedex-React',
    link: 'https://luisarana631.github.io/Pokedex-React/',
    tool: <FaReact size={30} strokeWidth={0} />,
  },
  {
    id: 'project2',
    name: 'Matriosh TS',
    repo: 'https://github.com/LuisArana631/MatrioshTS_Traductor',
    link: 'https://luisarana631.github.io/MatrioshTS_Traductor/home',
    tool: <SiIonic size={30} strokeWidth={0} />,
  },
  {
    id: 'project3',
    name: 'Energies Blog',
    repo: 'https://github.com/LuisArana631/Energy-Blog-IT3',
    link: 'https://luisarana631.github.io/Energy-Blog-IT3',
    tool: <FaAngular size={30} strokeWidth={0} />,
  },
  {
    id: 'project4',
    name: 'Taller Docker',
    repo: 'https://github.com/sergioarmgpl/taller-docker',
    link: 'https://www.youtube.com/watch?v=WHTkUdlji3Y&list=PLNDTqmfsik9cQvzmbShkkSy4u_S8WmQx0',
    tool: <FaDocker size={30} strokeWidth={0} />,
  },
  {
    id: 'project5',
    name: 'Taller gRPC',
    repo: 'https://github.com/LuisArana631/Taller-gRPC',
    link: 'https://www.youtube.com/watch?v=n2XxWdi3laM&list=PLNDTqmfsik9ck_w8MEsapZdlsgQCmphDm',
    tool: <SiGo size={30} strokeWidth={0} />,
  },
  {
    id: 'project6',
    name: 'Taller Kubernetes',
    repo: 'https://github.com/LuisArana631/Taller_Kubernetes',
    link: 'https://www.youtube.com/watch?v=gXeuN4x0ygA&list=PLNDTqmfsik9eZYaSIHxiTXBH1H4vqRswg',
    tool: <SiKubernetes size={30} strokeWidth={0} />,
  },
  {
    id: 'project7',
    name: 'Taller Jenkins',
    repo: 'https://github.com/LuisArana631/Taller_Jenkins',
    link: 'https://www.youtube.com/watch?v=lApyG6-O6_4&list=PLNDTqmfsik9f_rRPmJEbqCC97VUoGTV2S',
    tool: <FaJenkins size={30} strokeWidth={0} />,
  }
]