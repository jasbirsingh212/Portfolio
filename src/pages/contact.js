import React, { useRef } from "react"
import emailjs from "@emailjs/browser"
import Seo from "../components/Seo"
import { ToastContainer, toast } from "react-toastify"
import "react-toastify/dist/ReactToastify.css"
;(function () {
  emailjs.init(process.env.EMAIL_TOKEN)
})()

const Contact = () => {
  const form = useRef()

  const sendEmail = e => {
    e.preventDefault() // prevents the page from reloading when you hit “Send”
    console.log(
      process.env.SERVICE_TOKEN,
      process.env.TEMPLATE_TOKEN,
      process.env.EMAIL_TOKEN
    )
    emailjs
      .sendForm(
        process.env.SERVICE_TOKEN,
        process.env.TEMPLATE_TOKEN,
        form.current,
        process.env.EMAIL_TOKEN
      )
      .then(
        result => {
          // show the user a success message
          toast.success("Submitted successfully. Thanks for connecting.", {
            position: "bottom-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",
          })
        },
        error => {
          // show the user an error
          toast.error("Something went wrong, please try again!", {
            position: "bottom-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",
          })
        }
      )
  }

  return (
    <>
      <Seo title="Contact" />
      <section className="contact-page">
        <article className="contact-form">
          <h3>get in touch</h3>
          <form ref={form} onSubmit={sendEmail}>
            <div className="form-group">
              <input
                type="text"
                name="user_name"
                placeholder="name"
                className="form-control"
              />
              <input
                type="email"
                name="user_email"
                placeholder="email"
                className="form-control"
              />
              <textarea
                name="message"
                placeholder="message"
                rows={10}
                className="form-control"
              ></textarea>

              <button type="submit" className="btn submit-btn">
                submit
              </button>
            </div>
          </form>
        </article>
      </section>
      <ToastContainer limit={1} />
    </>
  )
}

export default Contact
