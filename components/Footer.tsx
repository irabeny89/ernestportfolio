import { FaWhatsapp, FaLinkedin, FaGithub } from "react-icons/fa";
import { CgMail } from "react-icons/cg";
import siteLocalData from "../data/siteLocalData";

const Footer = () => {
  const { contacts } = siteLocalData;
  return (
    <div className="d-flex justify-content-between bg-light text-primary">
      <h3>&copy; 2021</h3>
      <div className="d-flex justify-content-around w-25">
        {contacts.map(({ type, line }, i) => {
          if (type.includes("Whatsapp"))
            return (
                <a href={`tel:${line}`} key={i}>
                  <FaWhatsapp size="40" />
                </a>
            );
          if (type.includes("Email"))
            return (
                <a href={`mailto:${line}`} key={i}>
                  <CgMail size="40" />
                </a>
            );
          if (type.includes("Linkedin"))
            return (
                <a href={line} key={i}>
                  <FaLinkedin size="40" />
                </a>
            );
          if (type.includes("Github"))
            return (
                <a href={line} key={i}>
                  <FaGithub size="40" />
                </a>
            );
        })}
      </div>
    </div>
  );
};

export default Footer;
