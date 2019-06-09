import React, { Component } from 'react';
import {Navbar} from 'react-bootstrap';
import { fetchCats } from './actions/catActions'
import { connect } from 'react-redux';
import CatList from './CatList'

class App extends Component {   

  componentDidMount() {
    this.props.fetchCats()
  }

  render() {
    return (
      <div className="App">
        <Navbar>
          <Navbar.Header>
            <Navbar.Brand>
              <a href="#">CatBook</a>
              <CatList catPics={this.props.catState} />
            </Navbar.Brand>
          </Navbar.Header>
        </Navbar>
      </div>
    );
  }
}

const mapStateToProps = state => {
  console.log(state)
  return {
    catState: state.cats.pictures
  }
}

export default connect(mapStateToProps, { fetchCats })(App)

