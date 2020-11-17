import React, {Component} from 'react';
import Search from './Search';
import Header from './Header';
import ResultBody from './ResultBody';
import {Container} from 'react-bootstrap';

class MainPage extends Component {

  state = {
    searchText:''
  }

  updateSearchText(query) {
    this.setState({
      searchText:query
    });
  }

  render() {
    return (
      <Container>
        <Header/>
        <Search queryCallback={this.updateSearchText.bind(this)}/>
        <br/>
        <ResultBody query={this.state.searchText}/>
      </Container>
    )
  }
}

export default MainPage;