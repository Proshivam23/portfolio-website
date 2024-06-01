import myPhoto from "../image/myimage.jpg";
import "../App.css";

const Home = () => {
    return (
        <section id="home" className="h-screen flex justify-around items-center">
            <div className="h-80 w-80">
                <img className="rounded-full"src={myPhoto} alt="Shivam Raikar"></img>
            </div>
            <div className="text-white text-7xl jersey-20-regular">
                <div>Hello, I am Shivam Raikar.</div>
                <div className="text-6xl">Full Stack Developer</div>
            </div>
        </section>
    );
}
export default Home;