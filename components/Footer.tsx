import { FaWhatsapp, FaLinkedin, FaGithub } from "react-icons/fa";
import { CgMail } from "react-icons/cg";
import siteLocalData from "../data/siteLocalData";

const Footer = () => {
  const { contacts, copyWriteYear } = siteLocalData;
  return (
    <div className="d-flex justify-content-between bg-light text-primary py-2" data-testid="footer">
      <h3>&copy; {copyWriteYear}</h3>
      <div className="d-flex justify-content-around w-25">
        {contacts.map(({ type, line }, i) =>
          type.includes("Whatsapp") ? (
            <a href={`tel:${line}`} key={i}>
              <FaWhatsapp size="40" />
            </a>
          ) : type.includes("Email") ? (
            <a href={`mailto:${line}`} key={i}>
              <CgMail size="40" />
            </a>
          ) : type.includes("Linkedin") ? (
            <a href={line} key={i}>
              <FaLinkedin size="40" />
            </a>
          ) : type.includes("Github") ? (
            <a href={line} key={i}>
              <FaGithub size="40" />
            </a>
          ) : null
        )}
      </div>
    </div>
  );
};

export default Footer;
