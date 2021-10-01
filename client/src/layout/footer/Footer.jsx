import { GoMarkGithub } from "react-icons/go";
import { SiLinkedin, SiMailDotRu, SiTwitter } from "react-icons/si";
import "./Footer.css";

const Footer = () => {
  return (
    <footer>
      <div className="about">
        <hr />
        <h4 className="footer-title footer-text"> From the Creator:</h4>
        <p className="footer-text">
          Thanks for taking the time to view my site! If you'd like to connect,
          my networks are below!{" "}
        </p>
      </div>
      <div className="networks">
        <div className="network-link-container">
          <a href="https://github.com/yeezick" className="network-link">
            <GoMarkGithub size={50} />
          </a>
          <a
            href="https://www.linkedin.com/in/erick-manrique/"
            className="network-link"
          >
            <SiLinkedin size={50} />
          </a>
        <a
          href="https://github.com/yeezick/home.io-v2"
          className="network-link octocat-link"
          rel="noreferrer"
        >
          <img
            className="octocat"
            src="/octocat-jedi.png"
            alt="octo cat jedi"
          />
        </a>
          <a href="https://twitter.com/erckmun" className="network-link">
            <SiTwitter size={50} />
          </a>
          <a
            href="mailto:ramerick5@gmail.com?subject=Nice%20Webpage"
            className="network-link"
          >
            <SiMailDotRu size={50} />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
