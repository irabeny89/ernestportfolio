import { Navbar, Nav, NavDropdown } from "react-bootstrap";
import Image from "next/image";
import { FaWhatsapp, FaLinkedin, FaGithub } from "react-icons/fa";
import { CgMail } from "react-icons/cg";
import siteLocalData from "../siteLocalData";

const Header = () => {
  const {
    author,
    avatar: { src, height, alt, width },
    cv: { url },
    contacts,
  } = siteLocalData;
  return (
    <Navbar collapseOnSelect expand="md" bg="dark" variant="dark" fixed="top">
      <Navbar.Brand className="px-2">
        <h1 className="d-flex gap-2">
          {
            <Image
              className="rounded-circle"
              src={src}
              width={width}
              height={height}
              alt={alt}
            />
          }{" "}
          {author}
        </h1>
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse id="responsive-navbar-nav">
        <Nav className="mr-auto">
          <NavDropdown title="Contacts" id="collasible-nav-dropdown">
            {contacts.map(({ type, line }, i) =>
              type.includes("Whatsapp") ? (
                <NavDropdown.Item
                  as="a"
                  href={`tel:${line}`}
                  key={i}
                  className="bg-secondary text-white"
                >
                  <FaWhatsapp /> {type}
                </NavDropdown.Item>
              ) : type.includes("Email") ? (
                <NavDropdown.Item
                  as="a"
                  href={`mailto:${line}`}
                  key={i}
                  className="bg-secondary text-white"
                >
                  <CgMail /> {type}
                </NavDropdown.Item>
              ) : type.includes("Linkedin") ? (
                <NavDropdown.Item
                  as="a"
                  href={line}
                  key={i}
                  className="bg-secondary text-white"
                >
                  <FaLinkedin /> {type}
                </NavDropdown.Item>
              ) : type.includes("Github") ? (
                <NavDropdown.Item
                  as="a"
                  href={line}
                  key={i}
                  className="bg-secondary text-white"
                >
                  <FaGithub /> {type}
                </NavDropdown.Item>
              ) : null
            )}
          </NavDropdown>
          <Nav.Link href={url}>CV / Resume</Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default Header;
