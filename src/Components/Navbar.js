import React from "react";
import "../Styles/_navbar.scss";
import Navbar from "react-bootstrap/Navbar";
import { Nav } from "react-bootstrap";
import logo from "../assets/images/logo.PNG";
import Dropdown from "react-bootstrap/Dropdown";
function NavbarComponent() {
  return (
    <Navbar collapseOnSelect expand="lg">
      <div className="col-md-3">
        <Navbar.Brand href="#home">
          <img src={logo} />
        </Navbar.Brand>
      </div>
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse id="responsive-navbar-nav">
        <Nav className="col-md-7">
          <ul className="w-100 d-flex justify-content-around">
            <Nav.Link>Home</Nav.Link>
            <Nav.Link>About Us</Nav.Link>
            <Nav.Link>News</Nav.Link>
            <Nav.Link>Contact Us</Nav.Link>
          </ul>
        </Nav>
        <Nav className="col-md-5 justify-content-around">
          <ul className="d-flex  w-100 justify-content-around">
            <Nav.Link>login</Nav.Link>

            <Nav.Link>
              <button className="btn btn-link signup-btn">sign Up</button>
            </Nav.Link>
            <Nav.Link>
              <Dropdown>
                <Dropdown.Toggle id="dropdown-basic">En</Dropdown.Toggle>

                <Dropdown.Menu>
                  <Dropdown.Item>En</Dropdown.Item>
                  <Dropdown.Item>Ar</Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown>
            </Nav.Link>
          </ul>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
}
export default NavbarComponent;
