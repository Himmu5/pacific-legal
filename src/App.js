import './App.css';
import { BrowserRouter, Route, Routes, HashRouter } from "react-router-dom";
import About from './pages/About';
import Home from './pages/Home';
import Practices from './pages/Practices';
import SingleServuce from './pages/SingleService';
import Hero from './components/Hero/Hero.jsx';
import Services from './pages/Services';
import Blog from './pages/Blog';
function App() {
  return (
   <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/about" element = {<About />}/>
            <Route path="/practices" element = {<Practices />}/>
            <Route path="/services" element = {<Services/>}/>
            <Route path="/singleservice" element = {<SingleServuce />}/>
            <Route path="/blog" element={<Blog/>}/>
          </Routes>
   </BrowserRouter>


  );
}

export default App;
