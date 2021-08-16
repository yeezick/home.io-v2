import "./Footer.css";

const Footer = () => {
  return (
    <footer>
      <div className="about">
        <h4 className="footer-title"> From the Creator:</h4>
        <p className="about-text">
          I hope you enjoyed the site! During this project, I was a student of
          General Assembly's Software Engineering Immersive. Below are my
          networks, but if you'd like to see the codebase, OctoCat might know
          the way...
        </p>
      </div>
      <div className="networks">
        <h4 className="footer-title">Let's Connect!</h4>
        <div className="network-link-container">

        <a href="https://github.com/yeezick" className="network-link">
          GH
        </a>
        <a
          href="https://www.linkedin.com/in/erick-manrique/"
          className="network-link"
          >
          LI
        </a>
        <a href="https://twitter.com/erckmun" className="network-link">
          TW
        </a>
        <a
          href="mailto:ramerick5@gmail.com?subject=Nice%20Webpage"
          className="network-link"
          >
          EM
        </a>
          </div>
      </div>
      <div className="support">
        <h4 className="footer-title">Special Thanks:</h4>
        <a className="support-link" href="https://generalassemb.ly/">
          General Assembly
        </a>
        <a
          className="support-link"
          href="https://www.udemy.com/user/4b4368a3-b5c8-4529-aa65-2056ec31f37e/"
        >
          Angela Yu
        </a>
      </div>
    </footer>
  );
};

export default Footer;
