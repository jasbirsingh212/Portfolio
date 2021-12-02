import React from "react"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import { FaGithubSquare, FaShareSquare } from "react-icons/fa"
import { Link } from "gatsby"

const Project = ({ title, image, index, slug, description, stack, github, link }) => {
  console.log(image)
  return (
    <article className="project">
      <GatsbyImage
        image={getImage(image?.localFile?.childrenImageSharp[0])}
        className="project-img"
        alt={title}
      />
      <div className="project-info">
        <span className="project-number">0{index + 1}.</span>
        <Link to={`/projects/${slug}`} className='project-slug'>
          <h3>{title}</h3>
        </Link>
        <p className="project-desc">{description}</p>
        <div className="project-stack">
          {stack.map(item => {
            const { id, title } = item

            return <span key={id}>{title}</span>
          })}
        </div>
        <div className='project-links'>
          <a href={github} >
            <FaGithubSquare className='project-icon'>

            </FaGithubSquare>
          </a>
          <Link to={link} >
            <FaShareSquare className='project-icon'>
            </FaShareSquare>
          </Link>
        </div>
      </div>
    </article>
  )
}

export default Project
