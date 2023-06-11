import './App.css';
import { BrowserRouter, Route, Routes} from "react-router-dom";
import About from './pages/About';
import Home from './pages/Home';
import Practices from './pages/Practices';
import SingleService from './pages/SingleService';
import Medical from './pages/Medical';

import Services from './pages/Services';
import Blog from './pages/Blog';
import Contact from './pages/Contact';
import Team from './pages/team';
import Admin from './admin/pages/Admin';
import EditBlog from './admin/pages/EditBlog';
import Login from './admin/pages/Login';
import AddBlog from './admin/pages/AddBlog';
function App() {
  return (
   <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/about" element = {<About />}/>
            <Route path="/practices" element = {<Practices />}/>
            <Route path="/medical" element = {<Medical/>}/>
            <Route path="/contactus" element = {<Contact/>}/>
            <Route path="/team" element = {<Team/>}/>
            <Route path="/services" element = {<Services/>}/>
            <Route path="/singleservice" element = {<SingleService />}/>
            <Route path="/blog" element={<Blog/>}/>
            <Route path="/admin" element={<Admin/>}/>
            <Route path="/editblog" element={<EditBlog/>}/>
            <Route path="/add" element={<AddBlog/>}/>
            <Route path="/login" element={<Login/>}/>
          </Routes>
   </BrowserRouter>


  );
}

export default App;
