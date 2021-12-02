import React from "react"
import socialLinks from "../constants/social_links"
const Footer = () => {
  return (
    <footer className='footer'>
      <div >
        <div className="footer-link social-links">
          {socialLinks.map(link => {
            const { url, icon, id } = link
            return (
              <a href={url} key={id} className="social-link">
                {icon}
              </a>
            )
          })}
        </div>
      </div>
    </footer>
  )
}

export default Footer
