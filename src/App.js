import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import OmLogo from './OM.png';
import {
  Container, Row, Col, Form, Button, FormGroup, Label, Input, Card, CardTitle,
  CardText, CardHeader, CardBody
} from 'reactstrap';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={OmLogo} height='50px' width='50px'/>
          <h1 className="App-title">Welcome to Yog Vasistha reader</h1>
        </header>
        <Container>
          <Row>
            <Col>
              <h3>योग वासिष्ठ​</h3>
            </Col>
          </Row>

          <br />
          <br />

          <Row>
            <Col>
              <select className="form-control custom-select select-option">
                <option selected>Select Prakaran</option>
                <option value="1">One</option>
                <option value="2">Two</option>
                <option value="3">Three</option>
              </select>
            </Col>

            <Col>
              <select className="form-control custom-select">
                <option selected>Select Chapter</option>
                <option value="1">One</option>
                <option value="2">Two</option>
                <option value="3">Three</option>
              </select>
            </Col>

            <Col>
              <select className="form-control custom-select">
                <option selected>Select Sholka</option>
                <option value="1">One</option>
                <option value="2">Two</option>
                <option value="3">Three</option>
              </select>
            </Col>
          </Row>



          <br />
          <br />

          <Card body>
            <CardHeader><h4>मूल श्लोकः</h4></CardHeader>
            <CardBody>
              <h5><CardText>
                सन्तोषः परमो लाभः सत्सङ्गः परमा गतिः।
                <br />
                विचारः परमं ज्ञानं शमो हि परमं सुखम्॥
              </CardText></h5>
            </CardBody>
          </Card>
        </Container>

      </div>
    );
  }
}

export default App;
