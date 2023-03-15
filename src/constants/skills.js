import { 
  FaAws,
  FaReact,
  FaDocker,
  FaHtml5,
  FaCss3Alt,
  FaGitAlt,
  FaAngular,
  FaBootstrap,
  FaTerminal,
  FaMarkdown,
  FaNodeJs
} from 'react-icons/fa'

import {
  IoLogoJavascript
} from 'react-icons/io'

import {
  SiServerless,
  SiMongodb,
  SiMysql
} from 'react-icons/si'

export const skills = [
  {
    id: 'nodejs',
    name: 'Node JS',
    className: 'skill-item',
    icon: <FaNodeJs size={40} strokeWidth={0} />,
  },
  {
    id: 'javascript',
    name: 'Javascript',
    className: 'skill-item',
    icon: <IoLogoJavascript size={40} strokeWidth={0} />,
  },
  {
    id: 'react',
    name: 'React',
    className: 'skill-item',
    icon: <FaReact size={40} strokeWidth={0} />,
  },
  {
    id: 'docker',
    name: 'Docker',
    className: 'skill-item',
    icon: <FaDocker size={40} strokeWidth={0} />,
  },
  {
    id: 'html5',
    name: 'Html5',
    className: 'skill-item',
    icon: <FaHtml5 size={40} strokeWidth={0}/>,
  },
  {
    id: 'css3',
    name: 'Css3',
    className: 'skill-item',
    icon: <FaCss3Alt size={40} strokeWidth={0} />,
  },
  {
    id: 'git',
    name: 'Git',
    className: 'skill-item',
    icon: <FaGitAlt size={40} strokeWidth={0} />,
  },
  {
    id: 'angular',
    name: 'Angular',
    className: 'skill-item',
    icon: <FaAngular size={40} strokeWidth={0} />,
  },
  {
    id: 'bootstrap',
    name: 'Bootstrap',
    className: 'skill-item',
    icon: <FaBootstrap size={40} strokeWidth={0} />,
  },
  {
    id: 'aws',
    name: 'AWS',
    className: 'skill-item',
    icon: <FaAws size={40} strokeWidth={0}/>
  },
  {
    id: 'serverless',
    name: 'Serverless',
    className: 'skill-item',
    icon: <SiServerless size={40} strokeWidth={0}/>
  },
  {
    id: 'terminal',
    name: 'Terminal',
    className: 'skill-item',
    icon: <FaTerminal size={40} strokeWidth={0}/>
  },
  {
    id: 'mongodb',
    name: 'Mongo DB',
    className: 'skill-item',
    icon: <SiMongodb size={40} strokeWidth={0}/>
  },
  {
    id: 'mysql',
    name: 'MySQL',
    className: 'skill-item',
    icon: <SiMysql size={40} strokeWidth={0}/>
  },
  {
    id: 'markdown ',
    name: 'Markdown',
    className: 'skill-item',
    icon: <FaMarkdown size={40} strokeWidth={0}/>
  }
]