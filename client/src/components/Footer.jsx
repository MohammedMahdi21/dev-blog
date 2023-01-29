import React from "react";
import Logo from "../img/blog-logo.png"
import "./footer.scss"

const Footer = () => {
  return (
    <footer>
      <img src={Logo} alt="" />
      <span>Made with ❤️ by <b>Mohammed Mahdi</b> a full-stack developer</span>
    </footer>
  )
}

export default Footer