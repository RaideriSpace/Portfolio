import React from 'react'

const Skills = React.forwardRef((props, ref) => {

  return (
    <>
      {/* Contêiner principal da seção de habilidades. A ref é atribuída a esta div. */}
      <section ref={ref}>
        <div className='skills'>
            <h2 className='subtitle'>
              Competências
            </h2>

            <div className='skills__container'>
              HTML <em>•</em> CSS <em>•</em> JavaScript <em>•</em> ECMAScript <em>•</em> React <em>•</em> jQuery <em>•</em> BootStrap <em>•</em> Tailwind CSS <em>•</em> AJAX <em>•</em> Figma <em>•</em> Versionamento de código <em>•</em>  Photoshop <em>•</em> Illustrator <em>•</em>  SketchUp <em>•</em> Blender <em>•</em> Scrum <em>•</em> Metodologias Ágeis <em>•</em> Git <em>•</em> Node.js <em>•</em> PHP <em>•</em> MySQL <em>•</em> Python <em>•</em> C++ <em>•</em> Pacote Office
            </div>
        </div>
        
        <div className='skills__wave'></div> {/* Elemento para onda/divisória visual. */}
      </section>
    </>
  )

});

export default Skills