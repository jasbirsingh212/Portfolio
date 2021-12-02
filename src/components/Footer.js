import React from "react"
import socialLinks from "../constants/social_links"
const Footer = () => {
  return (
    <footer>
      <div>
        <div className="footer-links social-link">
          {socialLinks.map(link => {
            const { url, icon, id } = link
            return (
              <a href={url} key={id} className="social-links">
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
