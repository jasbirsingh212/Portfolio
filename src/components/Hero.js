import React from "react"
import { Link } from "gatsby"
import socialLinks from "../constants/social_links"
// import heroImg from "../assets/images/hero.svg"
import { StaticImage } from "gatsby-plugin-image"
import Typewriter from 'typewriter-effect';


const Hero = () => {
  return (
    <header className="hero">
      <section className="section-center hero-center">
        <article className="hero-info">
          <div>
            <div className="underline"></div>
            <h1>i'm Jasbir Singh</h1>
            <h4>
              <Typewriter
                options={{
                  strings: ["Frontend and Fullstack Developer"],
                  autoStart: true,
                  loop: true,
                }}
              />
            </h4>
            <Link to="/contact" className="btn">
              contact me
            </Link>
            <div className="social-links">
               
              {socialLinks.map(link => {
                const { id, url, icon } = link
                return (
                  <a
                    href={url}
                    key={id}
                    className="social-link"
                    target="_blank"
                    rel="noreferrer"
                  >
                    {icon}
                  </a>
                )
              })}
            </div>
          </div>
        </article>
        <StaticImage
          src="../assets/images/hero.svg"
          alt="portfolio"
          className="hero-img"
          placeholder="blurred"
        />
      </section>
    </header>
  )
}

export default Hero
