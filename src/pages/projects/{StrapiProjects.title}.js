import React from 'react';
import {graphql} from 'gatsby';
import Seo from '../../components/Seo';

const ProjectTemplate = ({pageContext: {title}, data}) => {
    const {strapiProjects: { description, image}} = data;
    return (
        <>
        <Seo title={title} description={description} image={image?.localFile?.publicURL} />
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
