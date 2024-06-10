import "../App.css";
import { Link } from "react-router-dom";
// import myPhoto from '../image/myimage.jpg';

const Project = () => {
  const projects = [
    { id: 1, pic: "/image/pic1.png", title: "Ecommerce Website", desc: "", gitlink:"https://github.com/Proshivam23/Quicktrade" },
    { id: 2, pic: "/image/pic2.png", title: "Weather Forecast Website", desc: "", gitlink:"https://github.com/Proshivam23/Weather-app" },
    { id: 3, pic: "/image/pic3.jpg", title: "Calculator Website", desc: "", gitlink:"https://github.com/Proshivam23/Calculator" },
  ]
  return (
    <section style={{ backgroundColor: 'rgb(30, 30, 30)' }} id="project" className="flex justify-center min-h-screen items-center pt-3 pb-3" >
      <div className="">
        <div className="text-white text-center text-5xl subfont mb-5 lg:mb-10">My Projects</div>
        <div className="flex flex-wrap gap-8 justify-center">
          {
            projects.map((project) => (
              <div id={project.id} class="w-56 min-h-40 lg:w-96 lg:h-80 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
                <Link to="#" >
                  <img class="rounded-t-lg w-56 lg:w-96" src={project.pic} alt="" />
                </Link>
                <div class="p-5">
                  <Link to="#">
                    <h5 class="mb-2 text-sm lg:text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{project.title}</h5>
                  </Link>
                  <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">{project.desc}</p>
                  <Link to={project.gitlink} target="_blank" class="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                    Source Code
                    <svg class="rtl:rotate-180 w-3.5 h-3.5 ms-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                      <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9" />
                    </svg>
                  </Link>
                </div>
              </div>

            ))
          }
        </div>
      </div>
    </section>
  );
}

export default Project;