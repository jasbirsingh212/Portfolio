import React from "react"
import Title from "./Title"
import Project from "./Project"
import { Link } from "gatsby"
const Projects = ({title, showLink, projects}) => {
  return <section className='section projects'>
    <Title title={title} />
    <div className='section-center projects-center'>
      {
        projects.map((project, index) => {
          const {id} = project;
          return <Project key={id} index={index} {...project} />
        })
      }
    </div>
    {
      showLink && (
        <Link to='/projects' className='btn center-btn'>
          projects
        </Link>
      )
    }
  </section>
}

export default Projects
