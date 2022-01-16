import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Services from "./pages/Services";
import Projects from "./pages/Projects";
import About from "./pages/About";
import Blogs from "./pages/Blogs";
import Contact from "./pages/Contact";
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import './styles/css/styles.css';


function App() {
  return (
    <div className="App">
      <Router basename="/home">
        <Navbar/>
        <Routes>
          <Route path="/" exact element={<Home/>} />
          <Route path="/services" exact element={<Services/>} />
          <Route path="/projects" exact element={<Projects/>} />
          <Route path="/about" exact element={<About/>} />
          <Route path="/blogs" exact element={<Blogs/>} />
          <Route path="/contact" exact element={<Contact/>} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
