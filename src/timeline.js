import React from "react";
import {Card, Row, Col } from "react-bootstrap";

class Circle extends React.Component {
  render() {
    var circleStyle = {
      position: "absolute",
      backgroundColor: this.props.color,
      borderWidth: this.props.borderWidth,
      borderStyle: 'solid',
      borderColor: this.props.borderColor,
      borderRadius: "50%",
      width: this.props.size,
      height: this.props.size,
    };
    return <div style={circleStyle}>{this.props.children}</div>;
  }
}

class Rectangle extends React.Component {
  render() {
    var style = {
      position: "absolute",
      backgroundColor: this.props.color,
      width: this.props.width,
      height: "100%",
      alignItems: "center",
      justifyContent: "center",
    };

    return <div style={style}>{this.props.children}</div>;
  }
}


class TimeLine extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        events: [],
      };
    }
    render() {
  
      let evs = this.props.events.map((obj, index) =>{
          return (
              <Row>
            <Col md={1}>
              <div
                style={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: 'center',
                  position: "relative",
                  height: "100%",
                }}
              >
                  <Rectangle color="#393E41" width={10}></Rectangle>
                <Circle color="#FFFFFF" borderColor="#393E41" size={40} borderWidth={7}/>
              </div>
            </Col>
            <Col md={5}>
              <Card className="m-4">
                <Card.Body>
                  <Card.Title>{obj.title}</Card.Title>
                  <Card.Text>
                    <p className="text-muted">{obj.date}</p>
                    <p>{obj.text}</p>
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
          </Row>
          )
      });
  
      return (
        <>
        {evs}
        </>
      );
    }
  }
  
  export default TimeLine;