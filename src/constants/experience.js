import {
  SiFilezilla,
  SiUbuntu,
  SiMysql,
  SiJavascript,
  SiHtml5,
  SiCss3,
  SiAmazonaws,
  SiServerless
} from 'react-icons/si'

import {
  DiPhp,
  DiGit,
  DiZend,
  DiAngularSimple,
  DiNodejs
} from 'react-icons/di'

export const experience = [
  {
    id: 'job1',
    name: 'Software Developer - Internship',
    place: 'Facultad de Derecho - Universidad de San Carlos de Guatemala',
    time: 'Jul. 2021 - Nov. 2021',
    duration: '5 Months',
    tools: [
      <SiFilezilla key={'job1filezilla'} size={20} className='experience-icon' strokeWidth={0} />,
      <DiPhp key={'job1php'} size={20} className='experience-icon' strokeWidth={0} />,
      <SiUbuntu key={'job1ubuntu'} size={20} className='experience-icon' strokeWidth={0} />,
      <SiMysql key={'job1mysql'} size={20} className='experience-icon' strokeWidth={0} />,
      <SiJavascript key={'job1javascript'} size={20} className='experience-icon' strokeWidth={0} />,
      <DiGit key={'job1git'} size={20} className='experience-icon' strokeWidth={0} />,
      <SiHtml5 key={'job1html5'} size={20} className='experience-icon' strokeWidth={0} />,
      <SiCss3 key={'job1css3'} size={20} className='experience-icon' strokeWidth={0} />,
    ]
  },
  {
    id: 'job2',
    name: 'Software Developer - Internship',
    place: 'Unidad de Procesamiento de Datos - Universidad de San Carlos de Guatemala',
    time: 'Ago. 2022 - Feb. 2023',
    duration: '7 Months',
    tools: [
      <DiZend key={'job2zend'} size={20} className='experience-icon' strokeWidth={0} />,
      <DiPhp key={'job2php'} size={20} className='experience-icon' strokeWidth={0} />,
      <SiUbuntu key={'job2ubuntu'} size={20} className='experience-icon' strokeWidth={0} />,
      <SiMysql key={'job2mysql'} size={20} className='experience-icon' strokeWidth={0} />,
      <SiJavascript key={'job2javascript'} size={20} className='experience-icon' strokeWidth={0} />,
      <SiHtml5 key={'job2html5'} size={20} className='experience-icon' strokeWidth={0} />,
      <SiCss3 key={'job2css3'} size={20} className='experience-icon' strokeWidth={0} />,
    ]
  },
  {
    id: 'job3',
    name: 'Backend Developer',
    place: 'Yalutec',
    time: 'Feb. 2022 - Current',
    duration: '1 Year 8 Months',
    tools: [
      <SiHtml5 key={'job3html5'} size={20} className='experience-icon' strokeWidth={0} />,
      <SiCss3 key={'job3css3'} size={20} className='experience-icon' strokeWidth={0} />,
      <SiJavascript key={'job3javascript'} size={20} className='experience-icon' strokeWidth={0} />,
      <DiGit key={'job3git'} size={20} className='experience-icon' strokeWidth={0} />,
      <SiAmazonaws key={'job3aws'} size={20} className='experience-icon' strokeWidth={0} />,
      <SiServerless key={'job3serverless'} size={20} className='experience-icon' strokeWidth={0} />,
      <DiAngularSimple key={'job3angular'} size={20} className='experience-icon' strokeWidth={0} />,
      <DiNodejs key={'job3nodejs'} size={20} className='experience-icon' strokeWidth={0} />,
    ]
  }
]