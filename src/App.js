import React from "react";
import SearchForm from "./searchForm";
import {Container, Row} from 'react-bootstrap';
// import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Nav from './Nav';
import 'bootstrap/dist/css/bootstrap.css';

function App(){

  return(
    <Container className="App">
      {/* <Router> */}
        <Row>
          <Nav/>
          {/* <Route path="/search" component={SearchForm}/> */}
        </Row>
        <Row>
          <SearchForm/>
        </Row>
      {/* </Router> */}
    </Container>
  )
}

export default App;