import React from "react"
import links from "../constants/links"
import socialLinks from "../constants/social_links"
import { Link } from "gatsby"
import { FaTimes } from "react-icons/fa"
const Sidebar = ({ isOpen = true, toggleSidebar }) => {
  return (
    <aside className={isOpen ? "sidebar show-sidebar" : "sidebar"}>
      <button className="close-btn" type="button">
        <FaTimes />
      </button>
      <div className="side-container">
        <ul className={isOpen ? "sidebar-links" : null}>
          {links.map(link => {
            const { id, url, text } = link
            return (
              <li key={id}>
                <Link to={url}>{text}</Link>
              </li>
            )
          })}
        </ul>
        <ul className={isOpen ? 'social-links sidebar-icons': null}>
          {
            socialLinks.map( link => {
              const {id, url, icon} = link;
              return (
                <li key={id}>
                  <a href={url} className='social-link' >{icon} </a>
                  </li>
              )
            })
          }
        </ul>
      </div>
    </aside>
  )
}

export default Sidebar
