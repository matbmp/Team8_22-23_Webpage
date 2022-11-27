import React, { Component } from 'react';
import {Container} from "react-bootstrap";
import TimeLine from "./timeline";

class Schedule extends React.Component {
  render() {
    return (
      <>
        <Container className="p-5">
        <h1 className="display-3 text-center">Harmonogram prac</h1>
          <TimeLine
            events={[
              {
                title: "Pierwsze spotkanie z opiekunem",
                date: "15 listopada 2022",
                text: "",
              },
              {
                title: "Koniec prac",
                date: "X maja 2023",
                text: "",
              },
            ]}
          />
        </Container>
      </>
    );
  }
}

export default Schedule;
