import React, { Component } from 'react';
import {Container} from "react-bootstrap";
import { progressData } from '../data/progress';
import TimeLine from "./timeline";

class Progress extends React.Component {
  render() {
    return (
      <>
        <Container className="p-5">
        <h1 className="display-3 text-center">Przebieg prac</h1>
          <TimeLine
            events={progressData}
          />
        </Container>
      </>
    );
  }
}

export default Progress;