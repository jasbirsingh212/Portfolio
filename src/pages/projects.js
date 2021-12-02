import React from "react"
import { graphql } from "gatsby"
import Projects from "../components/Projects"
import Seo from "../components/Seo"
const ProjectsPage = ({data}) => {
  const {allStrapiProjects: { nodes:  projects }} = data;
  return (
    <>
      <main>
        <section className='projects-page'>
          <Projects  showLink={false} projects={projects} title='all projects' />
        </section>
      </main>
    </>
  )
}

export const query = graphql`
  {
    allStrapiProjects {
      nodes {
        description
        featured
        github
        link
        slug
        id
        stack {
          id
          title
        }
        title
        image {
          localFile {
            childrenImageSharp {
              gatsbyImageData(layout: CONSTRAINED, placeholder: BLURRED)
            }
          }
        }
      }
      totalCount
    }
  }
`

export default ProjectsPage
