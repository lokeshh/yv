import React, { Component } from 'react';
import { connect } from 'react-redux';
import './App.css';
import OmLogo from './OM.png';
import {
  Container, Row, Col, Card, CardHeader, CardBody
} from 'reactstrap';
import VerseSelector from './verseSelector';
import VerseDisplay from './verseDisplay';
import CommDisplay from './commDisplay';
import CommAbsDisplay from './commAbsDisplay';

export default class App extends Component {

  

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={OmLogo} height='50px' width='50px'/>
          <h1 className="App-title">Welcome to Yog Vasistha reader</h1>
        </header>
        <Container>
          <br />
          <Row>
            <Col>
              <h3>योग वासिष्ठ​</h3>
            </Col>
          </Row>

          <br />

          <VerseSelector />

          <hr />

          <VerseDisplay />

          <br />

          <CommAbsDisplay />

          <br />

          <CommDisplay />
        </Container>

      </div>
    );
  }
}
