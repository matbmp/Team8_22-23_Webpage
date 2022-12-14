import React, { useState } from "react";
import { Card, Col, Row } from "react-bootstrap";
import { BsFilePerson } from 'react-icons/bs';

class Teammate extends React.Component{
    render(){
        return (
                <Card className="text-center p-3 border-0 rounded-0" style={{backgroundColor:'rgba(0,0,0,0)'}}>
                    <div className="border p-3 rounded-4" style={{backgroundColor:'rgba(255,255,255,1.0)'}}>
                    <BsFilePerson size={128} className="mx-auto"/>
                    <Card.Body>
                        <Card.Title>
                            {this.props.name}
                        </Card.Title>
                        <Card.Text >
                        {this.props.title}
                        </Card.Text>
                    </Card.Body>
                    </div>
                </Card>
        );
    }
}

export default Teammate;