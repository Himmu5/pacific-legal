import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import About from "./pages/About";
import Home from "./pages/Home";
import Practices from "./pages/Practices";
import Service1 from "./pages/Service1";
import Service2 from "./pages/Service2";
import Service3 from "./pages/Service3";
import Service4 from "./pages/Service4";
import Service5 from "./pages/Service5";
import Service6 from "./pages/Service6";
import Medical from "./pages/Medical";

import Services from "./pages/Services";
import Blog from "./pages/Blog";
import Contact from "./pages/Contact";
import Team from "./pages/team";
import Admin from "./admin/pages/Admin";
import EditBlog from "./admin/pages/EditBlog";
import Login from "./admin/pages/Login";
import AddBlog from "./admin/pages/AddBlog";
import SingleBlog from "./components/SingleBlog";
function App() {
  // "federatedId": "test@admin.com"
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/practices" element={<Practices />} />
        <Route path="/medical" element={<Medical />} />
        <Route path="/contactus" element={<Contact />} />
        <Route path="/team" element={<Team />} />
        <Route path="/services" element={<Services />} />
        <Route path="/business-entity" element={<Service1 />} />
        <Route path="/general-corporate" element={<Service2 />} />
        <Route path="/purchase-sale" element={<Service3 />} />
        <Route path="/commerical-contract" element={<Service4 />} />
        <Route path="/public-company" element={<Service5 />} />
        <Route path="/corporate-immigration" element={<Service6 />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/admin" element={<Admin />} />
        <Route path="/editblog" element={<EditBlog />} />
        <Route path="/add" element={<AddBlog />} />
        <Route path="/login" element={<Login />} />
        <Route path="/blogs" element={<SingleBlog />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
