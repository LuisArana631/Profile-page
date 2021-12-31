import './App.css';

import { Sidebar } from './components/ui/Sidebar';
import { Profile } from './components/sections/Profile';
import { Portfolio } from './components/sections/Portfolio';

function App() {
  return (
    <div>
      <Sidebar />      
      <div className="container">
        <Profile/>
        <Portfolio/>
      </div>
    </div>
    
  );
}

export default App;
