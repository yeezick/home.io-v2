import {GoMarkGithub} from "react-icons/go"
import {SiLinkedin, SiMailDotRu, SiTwitter} from "react-icons/si"
import "./Footer.css";

const Footer = () => {
  return (
    <footer>
      <div className="about">
        <hr/>
        <h4 className="footer-title footer-text"> From the Creator:</h4>
        <p className="footer-text">
          I hope you enjoyed the site! During this project, I was a student of
          General Assembly's Software Engineering Immersive. Below are my
          networks, but if you'd like to see the codebase, OctoCat might know
          the way...
        </p>
        <a href="https://github.com/yeezick/home.io-v2"
          className="network-link octocat-link" rel="noreferrer">
        <img className="octocat" src="/octocat-jedi.png" alt="octo cat jedi"/>
          </a>
      </div>
      <div className="networks">
        <h4 className="footer-title footer-text">Let's Connect!</h4>
        <div className="network-link-container">

        <a href="https://github.com/yeezick" className="network-link" rel="noreferrer">
          <GoMarkGithub size={50}/>
        </a>
        <a
          href="https://www.linkedin.com/in/erick-manrique/"
          className="network-link" rel="noreferrer"
          >
          <SiLinkedin size={50}/>
        </a>
        <a href="https://twitter.com/erckmun" className="network-link" rel="noreferrer">
          <SiTwitter size={50}/>
        </a>
        <a
          href="mailto:ramerick5@gmail.com?subject=Nice%20Webpage"
          className="network-link" rel="noreferrer"
          >
          <SiMailDotRu size={50}/>
        </a>
          </div>
      </div>
      <div className="support">
        <h4 className="footer-title footer-text">Special Thanks:</h4>
        <a className="support-link footer-text" href="https://generalassemb.ly/" rel="noreferrer">
          General Assembly
        </a>
        <a
          className="support-link footer-text"
          href="https://www.udemy.com/user/4b4368a3-b5c8-4529-aa65-2056ec31f37e/"  rel="noreferrer"
        >
          Angela Yu
        </a>
      </div>
      <p><small>Disclaimer: if you are an employer on desktop, please note this full-stack site was built in a 7 day timeframe with a mobile-first approach. Revisiting this site to optimize desk-top view (as well as animating the site) lives among my list of todos.</small> </p>
    </footer>
  );
};

export default Footer;
