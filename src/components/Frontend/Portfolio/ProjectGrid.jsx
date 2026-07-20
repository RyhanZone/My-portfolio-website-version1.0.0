// import AllProjecs from "./projectType/AllProjecs";
import FullStackprojects from "./projectType/FullStackprojects";
import FrontendProjects from "./projectType/FrontendProjects";
import PracticeProjects from "./projectType/PracticeProjects";
export default function ProjectGrid({activeFilter}) {
 

  return (
    <div>
      {/* {activeFilter === 'all projects' && <AllProjecs />} */}
      {activeFilter === 'full stack' && <FullStackprojects />}
      {activeFilter === 'frontend' && <FrontendProjects />}
      {activeFilter === 'practice projects' && <PracticeProjects />}
      
    </div>
  );
}