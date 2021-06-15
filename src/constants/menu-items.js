import React from "react"
import { DiGithubBadge } from "react-icons/di"
import { FaTwitter, FaLinkedin } from "react-icons/fa"

export const mainMenuItems = [
  {
    path: "/",
    title: "home",
  },
  {
    path: "/about",
    title: "about",
  },
  {
    path: "/packages",
    title: "packages",
  },
  {
    path: "/contact",
    title: "contact",
  },
]

export const socialMenuItems = [
         {
           icon: <FaLinkedin />,
           url: "https://www.linkedin.com/in/georgenikoglou/",
           name: "LinkedIn",
         },
         {
           icon: <FaTwitter />,
           url: "https://twitter.com/gnikoglou79",
           name: "Twitter",
         },
         {
           icon: <DiGithubBadge />,
           url: "https://github.com/nison79/",
           name: "GitHub",
         },
       ]

export const footerMenuItems = [
  {
    path: "/privacy",
    title: "privacy",
  },
  {
    path: "/cookies",
    title: "cookies",
  },
]
