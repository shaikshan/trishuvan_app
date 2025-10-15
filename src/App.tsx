import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import About from './pages/About';
import WeekendCourses from './pages/WeekendCourses';
import Bootcamp from './pages/Bootcamp';
import CourseDetail from './pages/CourseDetail';
import Internships from './pages/Internships';
import LiveProjects from './pages/LiveProjects';
import Contact from './pages/Contact';

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-white flex flex-col">
        <Header />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/courses/weekend" element={<WeekendCourses />} />
            <Route path="/courses/bootcamp" element={<Bootcamp />} />
            <Route path="/course/:slug" element={<CourseDetail />} />
            <Route path="/internships" element={<Internships />} />
            <Route path="/live-projects" element={<LiveProjects />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
