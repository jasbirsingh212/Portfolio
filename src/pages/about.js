import React from "react"
import { graphql } from "gatsby"
import Title from "../components/Title"
import Seo from "../components/Seo"

const About = ({data}) => {
  const {strapiAbout: { title, description, stack, image }} = data;
  return (
    <>
    <Seo title="About me" />
      <section className='about-page'>
        <div className='section-center about-center'>
          <img src={image?.localFile?.publicURL} className='about-img-svg' alt='about me' />
          <article className='about-text'>
            <Title title={title}/>
            <p>{description}</p>
            <div className='about-stack'>
                {
                  stack.map((item) => {
                    const {id, title} = item;
                    return <span key={id}>{title}</span>
                  })
                }
            </div>
          </article>
        </div>
      </section>
    </>
  )
}

export const query = graphql`
  {
    strapiAbout {
      title
      stack {
        id
        title
      }
      description
      image {
        localFile {
          publicURL
        }
      }
    }
  }
`
export default About
