import { Navbar, Nav, NavDropdown } from "react-bootstrap";
import Image from "next/image";
import { FaWhatsapp, FaLinkedin, FaGithub } from "react-icons/fa";
import { CgMail } from "react-icons/cg";
import siteLocalData from "../data/siteLocalData";

const Header = () => {
  const {
    avatar: { src, height, alt, width },
    cv: { url },
    contacts,
  } = siteLocalData;
  return (
    <Navbar collapseOnSelect expand="md" bg="dark" variant="dark" fixed="top">
      <Navbar.Brand className="px-2">
        <h1>
          {
            <Image
              className="rounded-circle"
              src={src}
              width={width}
              height={height}
              alt={alt}
            />
          }{" "}
          Ernest Irabor
        </h1>
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse id="responsive-navbar-nav">
        <Nav className="mr-auto">
          <NavDropdown title="Contacts" id="collasible-nav-dropdown">
            {contacts.map(({ type, line }, i) => {
              if (type.includes("Whatsapp"))
                return (
                  <NavDropdown.Item as="a" href={`tel:${line}`} key={i + Math.random()} className="bg-secondary text-white">
                      <FaWhatsapp /> {type}
                  </NavDropdown.Item>
                );
              if (type.includes("Email"))
                return (
                  <NavDropdown.Item as="a" href={`mailto:${line}`} key={i + Math.random()} className="bg-secondary text-white">
                      <CgMail /> {type}
                  </NavDropdown.Item>
                );
              if (type.includes("Linkedin"))
                return (
                  <NavDropdown.Item as="a" href={line} key={i + Math.random()} className="bg-secondary text-white">
                      <FaLinkedin /> {type}
                  </NavDropdown.Item>
                );
              if (type.includes("Github"))
                return (
                  <NavDropdown.Item as="a" href={line} key={i + Math.random()} className="bg-secondary text-white">
                      <FaGithub /> {type}
                  </NavDropdown.Item>
                );
            })}
          </NavDropdown>
          <Nav.Link href={url}>CV / Resume</Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default Header;
