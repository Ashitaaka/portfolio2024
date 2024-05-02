import Link from "next/link";
import React, { useRef } from "react";
import gsap from "gsap";

type NavButtonProps = {
  link: string;
  navButtonTitle: string;
};

const NavButton = ({ link, navButtonTitle }: NavButtonProps) => {
  const buttonTitle = useRef(null);
  const buttonBackground = useRef(null);

  const aboutBtnAnimationIn = () => {
    gsap.to(buttonBackground.current, {
      duration: 0.4,
      y: "-99%",
      ease: "power1.easeOut",
    });
    gsap.to(buttonTitle.current, {
      delay: 0.025,
      duration: 0.4,
      opacity: 1,
      y: "100%",
      ease: "power2.easeOut",
    });
  };
  const aboutBtnAnimationOut = () => {
    gsap.to(buttonBackground.current, {
      delay: 0.03,
      duration: 0.5,
      y: 0,
      ease: "power1.easeOut",
    });
    gsap.to(buttonTitle.current, {
      duration: 0.5,
      y: 0,
      opacity: 0,
      ease: "power1.easeOut",
    });
  };

  return (
    <Link
      href={link}
      className="nav_button"
      onMouseEnter={aboutBtnAnimationIn}
      onMouseLeave={aboutBtnAnimationOut}
    >
      <p>{navButtonTitle}</p>
      <p className="white-link" ref={buttonTitle}>
        {navButtonTitle}
      </p>
      <div className="bg-link" ref={buttonBackground}></div>
    </Link>
  );
};

export default NavButton;
