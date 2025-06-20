import React from 'react'

const PortfolioItem = ({ project, tagColor, boxColor }) => {
  return (
    <div className='portfolio__project' style={{ backgroundImage: `url(${project.img})`}}>
      <a href={project.link} target="_blank" rel='noopener noreferrer'>
        <div className='portfolio__project-data'>
          <div className='portfolio__project-top' style={{ backgroundColor: boxColor }}>
              <h3 className='portfolio__project-title'> {project.title} </h3>
              <h3 className='portfolio__project-status'> {project.status} </h3>
          </div>
          <div className='portfolio__project-bottom'>
            <div className='portfolio__project-content' style={{ backgroundColor: boxColor }}>
                <p className='portfolio__project-tags'>
                  {project.tags.map((tag, index) =>
                    <span key={index}>
                      <span style={{color: tagColor || 'var(--tertiary-ex-dar)' }}>
                        {tag}
                        {index < project.tags.length -1 ? ' • ' : ''}
                      </span>
                    </span>
                  )}
                </p>
                <p className='portfolio__project-description'> 
                  {project.description}  
                </p>
            </div>
          </div>
        </div>
      </a>
    </div>
  )
}

export default PortfolioItem