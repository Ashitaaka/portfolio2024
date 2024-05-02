import React, { useRef, useState } from "react";
import projectDatas from "../projects/utils/data";
import ProjectThumb from "./ProjectThumb";
import ProjectThumb2 from "./ProjectThumb2";

const projectList = () => {
  const [clicked, setClicked] = useState<number | null>(null);

  return (
    <div className="projectList_container w-full">
      <h2>Projets</h2>
      <div>
        {projectDatas.map((project) => (
          <ProjectThumb
            key={project.id}
            project={project}
            setClicked={setClicked}
            clicked={clicked}
          />
        ))}
      </div>
    </div>
  );
};

export default projectList;
