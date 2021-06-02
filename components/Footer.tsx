import { FaWhatsapp, FaLinkedin, FaGithub } from "react-icons/fa";
import { CgMail } from "react-icons/cg";
import siteLocalData from "../data/siteLocalData";

const Footer = () => {
  const { contacts } = siteLocalData;
  return (
    <div className="d-flex justify-content-between bg-light text-primary">
      <div>&copy; 2021</div>
      <div className="d-flex justify-content-around w-25">
        {contacts.map(({ type, line }, i) => {
          if (type.includes("Whatsapp"))
            return (
                <a href={`tel:${line}`}>
                  <FaWhatsapp />
                </a>
            );
          if (type.includes("Email"))
            return (
                <a href={`mailto:${line}`}>
                  <CgMail />
                </a>
            );
          if (type.includes("Linkedin"))
            return (
                <a href={line}>
                  <FaLinkedin />
                </a>
            );
          if (type.includes("Github"))
            return (
                <a href={line}>
                  <FaGithub />
                </a>
            );
        })}
      </div>
    </div>
  );
};

export default Footer;
