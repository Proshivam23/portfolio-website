import { Link } from "react-router-dom";
import '../App.css';
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { CgMail } from "react-icons/cg";
import { FaSquareInstagram } from "react-icons/fa6";



const Navbar = () => {
    return ( 
        <div className="text-white">
            <div className="flex items-center justify-between">
                <div className="font-rouge-script ">Shivam Raikar</div>
                <div className="flex w-1/2 justify-between items-center">
                    <Link to="/">Home</Link>
                    <Link to="/projects">About me</Link>
                    <Link to="/about">My Projects</Link>
                    <div  className="flex justify-around w-48">
                        <Link to=""><CgMail size="38" /></Link>
                        <Link to=""><FaGithub size="35" /></Link>
                        <Link to=""><FaLinkedin size="35" /></Link>
                        <Link to=""><FaSquareInstagram size="35" /></Link>
                    </div>

                </div>
            </div>
        </div>
    );
}
 
export default Navbar;