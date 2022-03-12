import React, { useState } from "react"
import Title from "./Title"
import { FaAngleDoubleRight } from "react-icons/fa"
import { graphql, useStaticQuery } from "gatsby"
import { Link } from "gatsby"

const query = graphql`
  {
    allStrapiJobs(sort: {fields: published_at, order: DESC}) {
      nodes {
        company
        position
        date
        description {
          id
          name
        }
      }
    }
  }
`

const Jobs = () => {
  const data = useStaticQuery(query)
  const {
    allStrapiJobs: { nodes: jobs },
  } = data
  const [value, setValue] = useState(0)
  const { company, position, date, description } = jobs[value]

  return (
    <section className="section jobs">
      <Title title="expierence" />
      <div className="jobs-center">
        <div className="btn-container">
          {jobs.map((item, index) => {
            const { company } = item
            return (
              <button
                key={index}
                className={value === index ? 'job-btn active-btn': "job-btn"}
                onClick={() => setValue(index)}
              >
                {company}
              </button>
            )
          })}
        </div>
        <article className="job-info">
          <h3>{position}</h3>
          <h4>{company}</h4>
          <p className="job-date">{date}</p>
          {description.map(item => {
            const { id, name } = item
            return (
              <div key={id} className="job-desc">
                <FaAngleDoubleRight className="job-icon" />
                <p>{name}</p>
              </div>
            )
          })}
        </article>
      </div>
      <Link to="/about" className="btn center-btn">
        More Info
      </Link>
    </section>
  )
}

export default Jobs
