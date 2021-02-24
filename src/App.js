import { Navbar, Home, About, Skills, Experience, Project, Contact, Footer, Sidebar, Float } from './Components/index';

function App() {
   return (
      <div className="app">
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
