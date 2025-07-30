import React from "react";

const skillsData = [
  "HTML",
  "CSS",
  "JavaScript",
  "ECMAScript",
  "React",
  "jQuery",
  "Bootstrap",
  "Material UI",
  "Tailwind CSS",
  "Node.js",
  "Nest.js",
  "Express.js",
  "PHP",
  "Python",
  "MySQL",
  "MongoDB",
  "SaaS",
  "Versionamento de código",
  "Photoshop",
  "Illustrator",
  "Figma",
  "SketchUp",
  "Blender",
  "Scrum",
  "Metodologias Ágeis",
  "Git/GitHub",
  "SEO"
];

const Skills = React.forwardRef((_, ref) => {
  return (
    <section ref={ref}>
      {" "}
      {/* Contêiner principal da seção de habilidades. A ref é atribuída a esta div. */}
      <div className="skills">
        <h2 className="subtitle">Competências</h2>

        <div className="skills__container">
          <ul className="skills__list">
            {skillsData.map((skill, index) => (
              <li key={skill} className="skills__list-item">
                {skill} {index < skillsData.length - 1 && <em> • </em>}
              </li>
            ))}
          </ul>
        </div>
      </div>
      {/* Elemento para onda/divisória visual. */}
      <div className="skills__wave"></div>
    </section>
  );
});

export default Skills;
