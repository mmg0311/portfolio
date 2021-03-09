import { Navbar, Home, About, Skills, Experience, Project, Contact, Footer, Sidebar, Float } from './Components/index';
import ReactTooltip from 'react-tooltip';

function App() {
   return (
      <div className="app">
         <ReactTooltip effect="solid" place="bottom" type="info"  clickable={true}/>
         <Navbar />
         <Sidebar />
         <main>
            <Home />
            <About />
            <Skills />
            <Experience />
            <Project />
            <Contact />
            <Footer />
         </main>
         <Float />
      </div>
   );
}

export default App;
