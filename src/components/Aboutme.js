import "../App.css";

const Aboutme = () => {
    return ( 
        <section id="aboutme" style={{ backgroundColor: 'rgb(30, 30, 30)'}} className=" mr-2 ml-2 h-screen text-white flex flex-col lg:flex-row justify-center items-center">
            <div className="subfont text-5xl">About me</div>
            <div className="w-3/4 lg:w-1/2 pl-5 lg:text-left text-center">
            I am a full stack developer currently in my third year of Computer Engineering at Goa College of Engineering. I have experience in developing web applications using React, Node.js, Express.js, and MongoDB, and I am also familiar with Python and MySQL. Additionally, I have a strong interest in UI/UX design, creating intuitive and user-friendly interfaces. I am passionate about learning new technologies and building innovative projects. I am looking for opportunities to work on challenging projects and grow as a developer.
            </div>
        </section>
     );
}
 
export default Aboutme;