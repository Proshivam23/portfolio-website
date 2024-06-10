import { Link } from "react-router-dom";

const Skills = () => {
  const items = [
    { id: 'skill1', title: 'Skill 1', subtitle: 'Description 1', image:"/image/skills/pic1.png" },
    { id: 'skill2', title: 'Skill 1', subtitle: 'Description 1', image:"/image/skills/pic2.png" },
    { id: 'skill3', title: 'Skill 1', subtitle: 'Description 1', image:"/image/skills/pic3.jpg" },
    { id: 'skill4', title: 'Skill 1', subtitle: 'Description 1', image:"/image/skills/pic4.png" },
  ];

  return (
    <section className="h-screen flex justify-center items-center flex-col">
      <div className="subfont text-white text-3xl lg:text-5xl">Skills</div>
      <div className="flex flex-wrap justify-around gap-8 mt-8">
        {items.map((item) => (
          <div id={item.id} class="w-36 h-36 lg:w-56 lg:h-56 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
            <Link to="#">
              <img class="rounded-t-lg object-cover " src={item.image} alt="" />
            </Link>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
