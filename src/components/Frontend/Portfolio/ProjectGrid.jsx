// import AllProjecs from "./projectType/AllProjecs";
import FullStackprojects from "./projectType/AllFullstackProjects/FullStackprojects";
import FrontendProjects from "./projectType/AllFrontendProjecs/FrontendProjects";
import PracticeProjects from "./projectType/AllPracticeProjects/PracticeProjects";
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