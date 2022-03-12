// @ts-nocheck
import React from "react"
// @ts-ignore
import logo from "../assets/images/logo.svg"
import { FaAlignRight } from "react-icons/fa"
import pageLinks from "../constants/links"
import { Link } from "gatsby"
const Navbar = ({ toggleSidebar }) => {
  return (
    <nav className="navbar">
      <div className="nav-center">
        <div className="nav-header">
          <Link to="/">
          <img src={logo} alt="web dev" />
          </Link>
          <button type="button" className="toggle-btn" onClick={toggleSidebar}>
            <FaAlignRight />
          </button>
        </div>
        <div className="nav-links">
          {pageLinks.map(link => {
            const { id, text, url } = link
            return (
              <Link key={id} to={url} >
                {text}
              </Link>
            )
          })}
        </div>
      </div>
    </nav>
  )
}

export default Navbar
