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
                title: "TEMATYKA PROJEKTU",
                date: "15 listopada 2022",
                text: "Omówienie tematyki projektu",
              },
              {
                title: "TECHNOLOGIA",
                date: "21 listopada 2022",
                text: "Omówienie technologii oraz architektury aplikacji",
              },
              {
                title: "SPECYFIKACJA",
                date: "24 listopada 2022",
                text: "Wyjaśnienie wymagań",
              },
            ]}
          />
        </Container>
      </>
    );
  }
}

export default Progress;