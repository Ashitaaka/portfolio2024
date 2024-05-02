"use client";
import Link from "next/link";
import React, { useRef } from "react";
import { CgScrollV } from "react-icons/cg";
import headerStamp from "@/app/assets/images/header_stamp.svg";
import Image from "next/image";
import NavButton from "@/app/components/NavButton";

const HomeHeader = () => {
  const scrollBtnRef = useRef(null);

  return (
    <header className="header">
      {/* Title - intro - nav */}
      <div className="title-container">
        <p className="surtitre">OLIVIER GOMEZ PORTFOLIO</p>

        <div className="title-nav">
          <NavButton navButtonTitle="ABOUT" link="about-section" />

          <div className="title">
            <Image
              src={headerStamp}
              alt="developper stamp"
              className="header_stamp"
            />
            <h1 className="text-center text-5xl">
              Oli
              <br />
              vier
              <br />
              Gom
              <br />
              ez
            </h1>
          </div>

          <NavButton navButtonTitle="CONTACT" link="contact-section" />

          <div className="mobile-nav">
            <Link
              href="#about-section" //TODO vérifier la syntaxe du lien ancre
              className="nav_Button_mobile"
            >
              ABOUT
            </Link>
            <Link href="#contact-section" className="nav_Button_mobile">
              CONTACT
            </Link>
          </div>
        </div>
        <p className="intro_text">
          Explorez l'univers créatif d'un développeur web et graphiste passionné
        </p>
      </div>

      {/* Scroll icon */}
      <div className="scroll" ref={scrollBtnRef}>
        <CgScrollV size={30} />
      </div>
    </header>
  );
};

export default HomeHeader;
