import React, { Component } from 'react';
import { Container, Row} from 'react-bootstrap';
import Teammate from './teammate';

class Team extends React.Component{
    render(){
        return(
            <Container className="p-5" fluid="xxl">
                <h1 className="display-1 text-center">Nasz zespół</h1>
          <Row xs={1} md={2} xxl={3} className="row-md-6">
            <Teammate name="Aleksandra Boniewicz" title="Opiekun"/>
            <Teammate name="Emil Grużalski" title="Kierownik"/>
            <Teammate name="Dawid Stopczyński" title="TBA"/>
            <Teammate name="Daniel Krzykowski" title="TBA"/>
            <Teammate name="Jakub Skoczylas" title="TBA"/>
            <Teammate name="Mateusz Biernacki" title="Sekretarz"/>
          </Row>
        </Container>
        )
    }
}

export default Team;