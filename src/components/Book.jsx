import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'
import { Col, Row } from 'react-bootstrap';
import './../css/item.css';

class Book extends Component {
    render() {
        return (
            <div>
                <Row>
                    <Col xs={4} className="img-holder">
                        <img src={this.props.location.detail.artworkUrl100.replace('100x100', '300x300')} alt={this.props.location.detail.artistName} />
                    </Col>
                    <Col xs={4}>
                        <b>{this.props.location.detail.trackName}</b>
                        <p>{this.props.location.detail.description}</p>
                    </Col>
                </Row>
            </div>
        )
    }
}

export default Book;
