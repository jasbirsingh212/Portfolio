import React from "react"
import Seo from "../components/Seo"
const contact = () => {
  return (
    <>
    <Seo title="Contact" />
      <section className="contact-page">
        <article className="contact-form">
          <h3>get in touch</h3>
          <form>
            <div className="form-group">
              <input
                type="text"
                name="name"
                placeholder="name"
                className="form-control"
              />
              <input
                type="email"
                name="email"
                placeholder="email"
                className="form-control"
              />
              <textarea name='message' placeholder='message' rows={10} className="form-control">
              </textarea>

              <button type='submit' className='btn submit-btn'>
                submit
              </button>
            </div>
          </form>
        </article>
      </section>
    </>
  )
}

export default contact
