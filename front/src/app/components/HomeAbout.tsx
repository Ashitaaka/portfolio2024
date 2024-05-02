import React from "react";
import aboutStamp from "@/app/assets/images/about_stamp.svg";

const HomeAbout = () => {
  return (
    <div className="about-container">
      <div className="about-title">
        <h1>
          Designer & <br />
          developer
        </h1>
        <img src={aboutStamp} className="about-stamp" alt="about stamp" />
      </div>
      <div className="about-content">
        <div className="skills">
          <div className="skill">
            <h3 className="skills-title">Personnalité</h3>
            <p className="skills-content">
              Curieux / Dynamique / Créatif / Sociable / Exigeant / Indépendant
              / Entrepreneur / Esprit critique
            </p>
          </div>
          <div className="skill">
            <h3 className="skills-title">Langues </h3>
            <p className="skills-content">Français / Anglais* / Espagnol</p>
            <p style={{ fontStyle: "oblique", marginTop: ".5em" }}>
              *2 années passées à l'étranger (Londres & Australie)
            </p>
          </div>
          <div className="skill">
            <h3 className="skills-title">Hobbies</h3>
            <p className="skills-content">
              Surf / Pala / Vélo / Skate / Informatique / Musique / Art /
              culture alternative / Voyages
            </p>
          </div>
        </div>
        <div className="about-text">
          <p className="chapeau">
            Co-fondateur du studio de création graphique la-mine.com, je
            m'aventure désormais dans le monde passionnant du développement web
          </p>
          <p>
            Au fil de mes 14 années en tant que designer graphique indépendant
            et salarié, j'ai cultivé un ensemble de compétences qui sont des
            atouts majeurs pour ma nouvelle carrière de développeur web.
          </p>
          <p>
            Ma créativité, ma maîtrise des outils de conception, ma sensibilité
            à l'expérience utilisateur et ma capacité d'adaptation font de moi
            un professionnel polyvalent.
          </p>
          <p>
            Je possède une vision singulière pour communiquer visuellement et
            résoudre des problèmes de manière novatrice. Cette expérience
            diversifiée m'aide à relever les nouveaux défis rencontrés dans le
            cadre du développement web.
          </p>
          <p className="emphasis">
            Je n’en suis qu’au commencement de cette nouvelle aventure mais je
            suis déjà passionné et ai soif d’apprendre!
          </p>
        </div>
      </div>
    </div>
  );
};

export default HomeAbout;
