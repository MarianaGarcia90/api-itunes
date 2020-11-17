import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'
import { Row, Col, Button } from 'react-bootstrap';
import '.././css/header.css';

class Header extends Component {


  render() {
    return (
      <Row className="bg" >
        <Col>
          <Button href="http://localhost:3000/" variant="outline-light" >Search Home</Button>
        </Col>
      </Row>
    )
  }
}

export default Header;
