import Hero from '../components/Hero/Hero.jsx';
import Navbar from '../components/Navbar/Navbar.jsx';
import BlogBody from '../components/blogbody.js';
import Footer from '../components/footer.js';

function Blog(){
    return(
        <>
        <Navbar/>
        <Hero title =" Our Blogs"/>
        <BlogBody/>
        <Footer/>
        </>
    )
}

export default Blog;