import React, { Component } from 'react';
import { Col, Row } from 'react-bootstrap';
import './../css/item.css';
import { Link } from 'react-router-dom';

class Item extends Component {

  getTitulo() {
    return this.props.trackName || '';
  }

  getEscritor() {
    return this.props.artistName || '';
  }

  getYear() {
    return this.props.releaseDate.split('-')[0] || '';
  }

  getThumbnail() {
    const noImage = <b>Thumbnail Unavailable</b>;
    const image = <img src={this.props.artworkUrl100.replace('100x100', '300x300')} alt={this.props.artistName} />;
    return image || noImage;
  }

  render() {
    return (
      <div>

        <Row>
          <Col xs={4} className="img-holder">
            <Link to={{ pathname: `/book/${this.props.trackId}`, detail: this.props }}>
              {this.getThumbnail()}
            </Link>
          </Col>
          <Col xs={4}>
            <b>{this.getTitulo()}</b>
            <p>{this.getEscritor()}</p>
            <p>{this.getYear()}</p>
          </Col>
        </Row>
      </div>
    )
  }

}

export default Item;
