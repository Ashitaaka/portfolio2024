"use client";
import React, { useRef } from "react";
import Link from "next/link";

import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const HomeEmailBanner = () => {
  gsap.registerPlugin(ScrollTrigger);

  const mailContainerRef = useRef(null);

  useGSAP(() => {
    gsap.set(mailContainerRef.current, { xPercent: -50, rotate: -2 });
    gsap.to(mailContainerRef.current, {
      xPercent: -10,
      scrollTrigger: {
        trigger: mailContainerRef.current,
        start: "top 95%",
        end: "top 55%",
        toggleActions: "restart pause resume reverse",
        scrub: 3,
      },
    });
  });

  return (
    <section className="mail_banner text-4xl w-full">
      <div className="mail_banner_container flex gap-4" ref={mailContainerRef}>
        <div className="inner_text text-nowrap">
          Contact me →{" "}
          <Link href="mailto:ashitaaaka@gmail.com">ashitaaaka@gmail.com</Link>
        </div>
        <div className="inner_text text-nowrap">
          Contact me →{" "}
          <a href="mailto:ashitaaaka@gmail.com">ashitaaaka@gmail.com</a>
        </div>
        <div className="inner_text text-nowrap">
          Contact me →{" "}
          <Link href="mailto:ashitaaaka@gmail.com">ashitaaaka@gmail.com</Link>
        </div>
        <div className="inner_text text-nowrap">
          Contact me →{" "}
          <Link href="mailto:ashitaaaka@gmail.com">ashitaaaka@gmail.com</Link>
        </div>
      </div>
    </section>
  );
};

export default HomeEmailBanner;
