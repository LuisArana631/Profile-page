import './App.css';

import { Navbar } from './components/ui/navbar/Navbar'
import { Sidebar } from './components/ui/sidebar/Sidebar'
import { Footer } from './components/ui/footer/Footer'

import { Profile } from './components/section/profile/Profile'
import { Skills } from './components/section/skills/Skills';
import { Experience } from './components/section/experience/Experience'
import { Projects } from './components/section/projects/Projects'
import { Contact } from './components/section/contact/Contact'

function App() {
  return (
    <div className='container'>
      <Navbar/>
      <Sidebar/>
      <div className='sections'>
        <Profile />
        <Skills />
        <Experience />
        <Projects />
        <Contact />
      </div>
      <Footer/>
    </div>
    
  );
}

export default App;
