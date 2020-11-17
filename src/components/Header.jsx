import React, { Component } from 'react';
import { Row, Col } from 'react-bootstrap';
import '.././css/header.css';

class Header extends Component {


  render() {
    return (
      <Row className="bg" >
        <Col>
          <button>Search</button>
        </Col>
      </Row>
    )
  }
}

export default Header;
