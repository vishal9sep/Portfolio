import Project1 from "./Project1";
import Project2 from "./Project2";
import Project3 from "./Project3";

function Projects() {
  return (
    <section className="projects">
      <Project1 id="project1" />
      <Project2 id="project2" />
      <Project3 />
    </section>
  );
}

export default Projects;
