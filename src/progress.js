import React, { Component } from 'react';
import {Container} from "react-bootstrap";
import TimeLine from "./timeline";

class Progress extends React.Component {
  render() {
    return (
      <>
        <Container className="p-5">
        <h1 className="display-3 text-center">Przebieg prac</h1>
          <TimeLine
            events={[
              {
                title: "SPOTKANIE - TEMATYKA PROJEKTU",
                date: "15 listopada 2022",
              },
              {
                title: "SPOTKANIE - TECHNOLOGIA",
                date: "21 listopada 2022",
              },
              {
                title: "SPOTKANIE - SPECYFIKACJA",
                date: "24 listopada 2022",
                text: "Rozmowy dotyczące zadań po stronie zespołu programistów oraz po stronie określającej specyfikację i dostarczającej treści do aplikacji",
              },
            ]}
          />
        </Container>
      </>
    );
  }
}

export default Progress;