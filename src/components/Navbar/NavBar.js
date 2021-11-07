import React from "react";
import { Link } from "react-router-dom";
import {
  Container,
  Form,
  FormControl,
  Nav,
  NavDropdown,
  Offcanvas,
  Button,
  Navbar,
} from "react-bootstrap";

import "./Navbar.css";
function NavBar() {
  return (
    <div className="">
      {/* <div class="logo">
    <a class="no-underline" href="#">
      Lensy
    </a>
    <SocialMedias />
  </div> */}
      <Navbar bg="light" expand={false}>
        <Container fluid>
          <Navbar.Toggle aria-controls="offcanvasNavbar" />
          <Navbar.Offcanvas
            id="offcanvasNavbar"
            aria-labelledby="offcanvasNavbarLabel"
            placement="start"
          >
            <Offcanvas.Header closeButton>
              <Offcanvas.Title id="offcanvasNavbarLabel">
                Offcanvas
              </Offcanvas.Title>
            </Offcanvas.Header>
            <Offcanvas.Body>
              <Nav className="justify-content-end flex-grow-1 pe-3">
                <Link className="nav-link" to="/">
                  Home
                </Link>

                <NavDropdown title="Dropdown" id="offcanvasNavbarDropdown">
                  <NavDropdown.Item>
                    {" "}
                    <Link to="/facebook" className="nav-link">
                      <img src="facebook.png" alt="facebook" width="20" />{" "}
                      Facebook
                    </Link>
                  </NavDropdown.Item>
                  <NavDropdown.Item>
                    <Link to="/instagram" className="nav-link">
                      {" "}
                      <img
                        src="instagram.png"
                        alt="instagram"
                        width="20"
                      />{" "}
                      Instagram
                    </Link>
                  </NavDropdown.Item>
                </NavDropdown>
              </Nav>
            </Offcanvas.Body>
          </Navbar.Offcanvas>
          <Navbar.Brand className="logo">Lensy</Navbar.Brand>
        </Container>
      </Navbar>
    </div>
  );
}

export default NavBar;
