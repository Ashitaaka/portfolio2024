import React, { useRef, useState } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import {
  lineAnimation,
  projectContainerAnimation,
  scrollAnimation,
  subtitleAnimation,
  titleAnimation,
} from "../animations/animations";
import { ScrollToPlugin } from "gsap/ScrollToPlugin";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Image from "next/image";
import { useRouter } from "next/navigation";

gsap.registerPlugin(ScrollTrigger);
gsap.registerPlugin(ScrollToPlugin);

const ProjectThumb = ({
  project,
  setClicked,
  clicked,
}: {
  project: any;
  setClicked: React.Dispatch<React.SetStateAction<number | null>>;
  clicked: number | null;
}) => {
  const lineRef = useRef<HTMLDivElement>(null);
  const thumbContainerRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef(null);
  const subTitleRef = useRef(null);
  const imageRef = useRef(null);

  const router = useRouter();

  const [timeline, setTimeline] = useState<any>();
  const [timeline2, setTimeline2] = useState<any>();

  // set line animation timeline up
  useGSAP(() => {
    if (lineRef.current) {
      const tl2 = gsap.timeline({
        scrollTrigger: {
          trigger: lineRef.current,
          start: "top 85%",
          toggleActions: "play end resume reverse",
        },
      });

      tl2.add(lineAnimation(lineRef));
      setTimeline2(tl2);
    }
  }, [lineRef]);

  // Set project elements timeline up
  useGSAP(() => {
    const tl = gsap.timeline();
    setTimeline(tl);

    // show off all project container but the one clicked
    if (clicked && clicked !== project.id && thumbContainerRef.current) {
      timeline.to(
        thumbContainerRef.current,
        {
          opacity: 0,
          duration: 0.5,
        },
        `<${Math.abs((clicked - project.id) * 0.5) / 3}`
      );
    }
  }, [clicked, thumbContainerRef]);

  const handlePlayAnimation = () => {
    if (
      thumbContainerRef.current &&
      subTitleRef.current &&
      titleRef.current &&
      timeline2 &&
      timeline
    ) {
      setClicked(project.id);

      timeline2.clear();
      timeline2.to(lineRef.current, {
        scaleX: 0,
        duration: 0.5,
      });

      const offset =
        window.innerHeight * 0.5 -
        thumbContainerRef.current.getBoundingClientRect().height / 2 -
        32;

      const thumbContainerScale =
        window.innerHeight /
        thumbContainerRef.current.getBoundingClientRect().height;

      timeline
        .add(scrollAnimation(thumbContainerRef, offset))
        .add(titleAnimation(titleRef), "-=0.4")
        .add(subtitleAnimation(subTitleRef), "-=0.25")
        .then(() => router.push(`/projects/${project.id}`));
      // .add(
      //   projectContainerAnimation(thumbContainerRef, thumbContainerScale),
      //   "<=0.3"
      // );
    }
  };

  return (
    <div
      className={`project_container_${project.id} overflow-hidden max-h-[25vh] relative`}
      ref={thumbContainerRef}
    >
      <div
        ref={lineRef}
        className="projectLine scale-x-0 h-2 bg-slate-500 opacity-100"
      ></div>
      <div
        onClick={handlePlayAnimation}
        className="project_infos button absolute w-full h-full z-10 cursor-pointer"
      >
        <div></div>
        <div
          className="project_title flex gap-4 p-8 items-end text-white"
          key={project.id}
        >
          <h3
            ref={titleRef}
            className="project_title text-2xl w-full text-slate-800"
          >
            {project.title}
          </h3>
          <p
            ref={subTitleRef}
            className="project_subtitle w-full text-slate-800"
          >
            {project.subtitle}
          </p>
        </div>
      </div>
      <Image
        ref={imageRef}
        src={project.images.thumbnail}
        width={1920}
        height={window.innerHeight}
        alt={project.title}
        className="w-full h-full object-cover object-center aspect-square opacity-30"
      />
    </div>
  );
};

export default ProjectThumb;
