import React, {Component} from 'react';
import { Row, Col} from 'react-bootstrap';
import '.././css/header.css';
import {Link} from 'react-router-dom';

class Header extends Component {

  render() {
    return (
      <Row className="bg">
        <Col><Link  to="/"><h2>Search</h2>
        </Link></Col>
      </Row>
    )
  }
}

export default Header;
