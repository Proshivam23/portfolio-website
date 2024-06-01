// import { Link } from "react-router-dom";
import { Link } from 'react-scroll';
import '../App.css';
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
// import { CgMail } from "react-icons/cg";
import { FaSquareInstagram } from "react-icons/fa6";



const Navbar = () => {
    return ( 
        <nav className="text-white fixed top-0 left-0 z-10 w-full">
            <div className="flex items-center justify-between p-2">
                <div className="font-rouge-script pl-2">Portfolio</div>
                <div className="flex w-1/2 justify-between items-center">
                    <Link to="home" smooth={true} duration={500} className="cursor-pointer" >Home</Link>
                    <Link to="aboutme" smooth={true} duration={500} className="cursor-pointer" >About me</Link>
                    <Link to="project" smooth={true} duration={500} className="cursor-pointer" >My Projects</Link>
                    <Link to="contact" smooth={true} duration={500} className="cursor-pointer" >Contact</Link>
                    <div  className="flex justify-around w-48">
                        {/* <Link to="raikarshivam23@gmail.com" target="_blank"><CgMail size="38" /></Link> */}
                        <a href="https://github.com/Proshivam23" target="_blank" rel="noopener noreferrer"><FaGithub size="35" /></a>
                        <a href="https://www.linkedin.com/in/shivamraikar/" target="_blank" rel="noopener noreferrer"><FaLinkedin size="35" /></a>
                        <a href="google.com" target="_blank" rel="noopener noreferrer"><FaSquareInstagram size="35" /></a>
                    </div>

                </div>
            </div>
        </nav>
    );
}
 
export default Navbar;