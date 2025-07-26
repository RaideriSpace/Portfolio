import React from 'react'

const PaperItem = ({ project }) => {

  if (!project) {
    return null;
  }

  return (
    <div className='paper-item'>
      <p>{project.title}</p>
      <img src={project.img} alt={project.title} className='paper-img'></img>
    </div>
  )
}

export default PaperItem