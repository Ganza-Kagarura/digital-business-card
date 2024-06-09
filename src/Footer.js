import React from "react";
import { FaInstagram } from "react-icons/fa"
import { FaSquareXTwitter } from "react-icons/fa6";
import { FaGithub } from "react-icons/fa6";
import "./Header.css"


function Footer() {
    return (
        <div className="social-media-icons">
            <FaInstagram />
            <FaSquareXTwitter />
            <FaGithub />
        </div>
    )
}

export default Footer;