import React from 'react';

const skillsData = [
  'HTML', 'CSS', 'JavaScript', 'ECMAScript', 'React', 'jQuery', 'Bootstrap', 'Tailwind CSS', 'AJAX', 'Figma', 'Versionamento de código', 'Photoshop', 'Illustrator', 'SketchUp', 'Blender', 'Scrum', 'Metodologias Ágeis', 'Git', 'Node.js', 'PHP', 'MySQL', 'Python', 'C++', 'Pacote Office'
];

const Skills = React.forwardRef((_, ref) => {

  return (
    <>
      {/* Contêiner principal da seção de habilidades. A ref é atribuída a esta div. */}
      <section ref={ref}>
        <div className='skills'>
          <h2 className='subtitle'>
            Competências
          </h2>

          <div className='skills__container'>
            <ul className='skills__list'>
              {skillsData.map((skill, index) => (
                <li key={index} className='skills__list-item'>
                  {skill} {index < skillsData.length - 1 && <em> • </em>}
                </li>
              ))}
            </ul>
          </div>
        </div>
        
        {/* Elemento para onda/divisória visual. */}
        <div className='skills__wave'></div> 
      </section>
    </>
  )

});

export default Skills