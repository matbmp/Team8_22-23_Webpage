import React, { Component } from 'react';
import {Container} from "react-bootstrap";
import { harmonogramData } from '../data/harmonogram';
import TimeLine from "./timeline";

class Schedule extends React.Component {
  render() {
    return (
      <>
        <Container className="p-5">
        <h1 className="display-3 text-center">Harmonogram prac</h1>
          <TimeLine
            events={harmonogramData}
          />
        </Container>
      </>
    );
  }
}

export default Schedule;
