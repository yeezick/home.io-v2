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
        {/* <h4 className="footer-title footer-text">Let's Connect!</h4> */}
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
      {/* <div className="support">
        <h4 className="footer-title footer-text">Special Thanks:</h4>
        <a className="support-link footer-text" href="https://generalassemb.ly/">
          General Assembly
        </a>
        <a
          className="support-link footer-text"
          href="https://www.udemy.com/user/4b4368a3-b5c8-4529-aa65-2056ec31f37e/"
        >
          Angela Yu
        </a>
      </div> */}
    </footer>
  );
};

export default Footer;
