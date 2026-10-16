import { Github, Linkedin } from "lucide-react";

function Footer({ name, social }) {
  return (
    <footer className="footer">
      <div className="container footer-inner">
        <p>2026 {name}. Thanks for visiting!</p>
        <div className="social-icons">
          <a className="icon-link" href={social.github}><Github size={18} /></a>
            
          
          <a className="icon-link" href={social.linkedin} >
            <Linkedin size={18} />
          </a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
