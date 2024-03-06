import React from "react";
import "./footer.css";

const Footer = () => {
  return (
    <footer className="footer" id="footer">
      <div className="footer__container container">
        <h1 className="footer__title">Seshagiri</h1>

        <ul className="footer__list">
          <li>
            <a href="#about" className="footer__link">
              About
            </a>
          </li>

          <li>
            <a href="#qualification" className="footer__link">
              Qualification
            </a>
          </li>
        </ul>

        <div className="footer__social">
          <a
            href="https://www.instagram.com/_._lovely_lad_._?igsh=b2RtajJ6ZGFhNGl1&utm_source=qr"
            className="home__social-icon"
            target="_blank"
            rel="noreferrer"
          >
            <i className="uil uil-instagram"></i>
          </a>

          <a
            href="https://www.linkedin.com/in/seshagiri-ravindrabalan-395100171"
            className="home__social-icon"
            target="_blank"
            rel="noreferrer"
          >
            <i className="uil uil-linkedin"></i>
          </a>

          <a
            href="https://github.com/RKseshagiri"
            className="home__social-icon"
            target="_blank"
            rel="noreferrer"
          >
            <i className="uil uil-github-alt"></i>
          </a>
        </div>
        <div className="footer__contact">
          <a href="mailto: seshagiri004@gmail.com">
            <i className="uil uil-envelope-alt" /> seshagiri004@gmail.com
          </a>
          <div className="phone">
            {" "}
            <i class="uil uil-phone"></i> +91 9080539067
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
