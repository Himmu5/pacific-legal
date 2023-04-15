import './App.css';
import { BrowserRouter, Route, Routes, HashRouter } from "react-router-dom";
import About from './pages/About';
import Home from './pages/Home';
import Practices from './pages/Practices';
import SingleServuce from './pages/SingleService';
import Hero from './components/Hero/Hero.jsx';
import Medical from './pages/Medical';

function App() {
  return (
   <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/about" element = {<About />}/>
            <Route path="/practices" element = {<Practices />}/>
            <Route path="/singleservice" element = {<SingleServuce />}/>
            <Route path="/medical" element = {<Medical/>}/>
          </Routes>
   </BrowserRouter>


  );
}

export default App;
