import { Navbar } from '../components/Navbar';
import { Hero } from '../components/Hero';
import { Education } from '../components/Education';
import { Projects } from '../components/Projects';
import { Internships } from '../components/Internships';
import { Skills } from '../components/Skills';
import { Contact } from '../components/Contact';

export default function App() {
  return (
    <div className="min-h-screen bg-black">
      <Navbar />
      <main id="home">
        <Hero />
        <Education />
        <Projects />
        <Internships />
        <Skills />
        <Contact />
      </main>
    </div>
  );
}
