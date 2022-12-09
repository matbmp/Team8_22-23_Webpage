import React, { Component } from "react";
import { render } from "react-dom";
import { ScrollLink, Element, Link } from "react-scroll";
import { Container, Navbar, Nav } from "react-bootstrap";
import "./style.css";
import "bootstrap/dist/css/bootstrap.min.css";


import Schedule from "./components/schedule";
import Progress from "./components/progress";
import Raports from "./components/raports";
import Docs from "./components/docs";
import SimpleNavLink from "./components/simpleNavLink";
import Team from "./components/team";
import { Jumbotron } from "./components/display";

class App extends Component {
  render() {
    return (
      <div style={{ background: `linear-gradient(lightblue, lightgray)` }}>
        <Navbar bg="primary" expand="lg" className="p-3" sticky="top" style={{fontSize:"1.2em"}}>
          <Navbar.Brand>Programowanie zespołowe - zespół 8</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto">
              <SimpleNavLink to="team">Zespół</SimpleNavLink>
              <SimpleNavLink to="schedule">Harmonogram</SimpleNavLink>
              <SimpleNavLink to="progress">Przebieg</SimpleNavLink>
              <SimpleNavLink to="raports">Raporty</SimpleNavLink>
              <SimpleNavLink to="docs">Dokumentacja</SimpleNavLink>
            </Nav>
          </Navbar.Collapse>
        </Navbar>

        <Jumbotron/>

        <Element id="team" name="team">
          <Team/>
        </Element>

        <Element id="schedule" name="schedule">
          <hr/>
          <Schedule></Schedule>
        </Element>

        <Element id="progress" name="progress">
          <hr/>
          <Progress></Progress>
        </Element>
        
        <Element id="raports" name="raports">
          <hr/>
          <Raports></Raports>
        </Element>
        <Element id="docs" name="docs">
          <hr/>
          <Docs></Docs>
        </Element>
      </div>
    );
  }
}

render(<App />, document.getElementById("root"));
