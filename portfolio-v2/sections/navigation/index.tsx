import React from "react";
import { Nav, Navbar } from "react-bootstrap";

const index = () => {
  return (
    <section>
      <Navbar collapseOnSelect expand="md" className="justify-content-between">
        <Navbar.Brand href="#home">Brand link</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse
          className="justify-content-end"
          id="responsive-navbar-nav"
        >
          <Nav activeKey="/home">
            <Nav.Item>
              <Nav.Link href="/home">Active</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link eventKey="link-1">Link</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link eventKey="link-2">Link</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link eventKey="disabled" disabled>
                Disabled
              </Nav.Link>
            </Nav.Item>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </section>
  );
};

export default index;
