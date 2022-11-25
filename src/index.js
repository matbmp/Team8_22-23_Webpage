import React, { Component } from 'react';
import { render } from 'react-dom';
import './style.css';

import 'bootstrap/dist/css/bootstrap.min.css';

import Team from './team';
import { Container, Navbar, Nav } from 'react-bootstrap';
import Schedule from './schedule';
import Progress from './progress';
import Raports from './raports';
import Docs from './docs';

class App extends Component {
  render() {
    return (
        <div style={{background: `linear-gradient(white, lightgray)`}}>
          <Navbar bg='primary' expand='lg' className="p-3">
              <Navbar.Brand>
                Programowanie zespołowe - zespół 8
              </Navbar.Brand>
              <Navbar.Collapse>
                <Nav className="ms-auto">
                <Nav.Link href="#home">Zespół</Nav.Link>
                <Nav.Link href="#link">Harmonogram</Nav.Link>
                <Nav.Link href="#link">Przebieg</Nav.Link>
                <Nav.Link href="#link">Raporty</Nav.Link>
                <Nav.Link href="#link">Dokumentacja</Nav.Link>
                </Nav>
              </Navbar.Collapse>
          </Navbar>
          <Team></Team>
          <hr/>
          <Schedule></Schedule>
          <hr/>
          <Progress></Progress>
          <hr/>
          <Raports></Raports>
          <hr/>
          <Docs></Docs>
        </div>
    );
  }
}

render(<App />, document.getElementById('root'));
