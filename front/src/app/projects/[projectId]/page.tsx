import Image from "next/image";
import React from "react";
import data from "../utils/data";

const Project = ({ params }: { params: { projectId: string } }) => {
  console.log(
    "data[Number(params.projectId)].images.thumbnail",
    data[Number(params.projectId)].images.thumbnail
  );
  return (
    <div className={`project_detail_container} h-screen w-screen`}>
      <Image
        src={data[Number(params.projectId) - 1].images.thumbnail}
        width={1920}
        height={1080}
        alt={data[Number(params.projectId)].title}
        className="h-full object-cover aspect-square opacity-30"
      />
    </div>
  );
};

export default Project;
