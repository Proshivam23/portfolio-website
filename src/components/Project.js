import "../App.css";
const Project = () => {
    return ( 
        <section id="project" className="flex justify-center h-screen items-center" >
            <div className="">
              <div id="Project" className="text-white text-center text-5xl subfont mb-2 lg:mb-10">My Projects</div>
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                <div className="overflow-hidden bg-amber-100 rounded-md w-56 h-40 lg:w-96 lg:h-60  "><div className="bg-white h-20 lg:h-32 rounded-md">Pic</div>Project 1</div>
                <div className="overflow-hidden bg-amber-100 rounded-md w-56 h-40 lg:w-96 lg:h-60  "><div className="bg-white h-20 lg:h-32 rounded-md">Pic</div>Project 2</div>
                <div className="overflow-hidden bg-amber-100 rounded-md w-56 h-40 lg:w-96 lg:h-60  "><div className="bg-white h-20 lg:h-32 rounded-md">Pic</div>Project 3</div>
              </div>
            </div>
        </section>
     );
}
 
export default Project;