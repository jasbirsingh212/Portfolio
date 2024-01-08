import React from "react"
import { graphql } from "gatsby"
import Hero from "../components/Hero"
import Services from "../components/Services"
import Jobs from "../components/Jobs"
import Projects from "../components/Projects"
import Seo from "../components/Seo"
const IndexPage = ({ data }) => {
  const {
    allStrapiProjects: { nodes: projects },
  } = data
  console.log(process.env.BACKEND_URL)
  return (
    <>
      <Seo title="Home" />
      <main>
        <Hero />
        <Services />
        <Jobs />
        <Projects
          title="featured projects"
          showLink={true}
          projects={projects}
        />
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
export default IndexPage
