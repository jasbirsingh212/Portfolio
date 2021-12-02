import React from 'react';
import {graphql} from 'gatsby';

const ProjectTemplate = ({pageContext: {title}, data}) => {
    console.log(data)
    const {strapiProjects: { description}} = data;
    return (
        <>
            <main className='project-template-page'>
                <h2>{title}</h2>
                <p>{description}</p>
            </main>
        </>
    )
}

export const query = graphql`
query getSingleProject($title: String) {
    strapiProjects(title: {eq: $title}) {
      title
      description
      image {
        localFile {
          publicURL
        }
      }
    }
  }
`
 
export default ProjectTemplate;
