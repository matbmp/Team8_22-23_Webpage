import React, { Component } from "react";
import { Nav } from "react-bootstrap";
import { Link } from "react-scroll";

export default function SimpleNavLink(props) {
  return (
    <div className="p-2 text-dark">
      <Link
        activeClass="active"
        to={props.to}
        spy={true}
        smooth={false}
        durantion="500"
        offset={-75}
      >
        {props.children}
      </Link>
    </div>
  );
}
