import React from "react"
import {
  FaLinkedinIn,
  FaGithub,
  FaStackOverflow,
  FaHackerrank,
} from "react-icons/fa"

import { SiLeetcode } from 'react-icons/si'
const data = [
  {
    id: 1,
    name:"LinkedIn",
    icon: <FaLinkedinIn className="social-icon"></FaLinkedinIn>,
    url: "https://www.linkedin.com/in/jasbir212singh/",
  },
  {
    id: 2,
    name:"GitHub",
    icon: <FaGithub className="social-icon"></FaGithub>,
    url: "https://github.com/jasbirsingh212",
  },
  {
    id: 3,
    name:"Stack OverFlow",
    icon: <FaStackOverflow className="social-icon"></FaStackOverflow>,
    url: "https://stackoverflow.com/users/14728135/jasbir-singh",
  },
  {
    id: 4,
    name:"LeetCode",
    icon: <SiLeetcode className="social-icon"></SiLeetcode>,
    url: "https://leetcode.com/Jassi_212/",
  },
  {
    id: 5,
    name:"Hacker Rank",
    icon: <FaHackerrank className="social-icon"></FaHackerrank>,
    url: "https://www.hackerrank.com/jasbir212singh",
  },
]

export default data
