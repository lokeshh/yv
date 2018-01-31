import React, { Component } from 'react';
import './App.css';
import OmLogo from './OM.png';
import {
  Container, Row, Col, Form, Button, FormGroup, Label, Input, Card, CardTitle,
  CardText, CardHeader, CardBody
} from 'reactstrap';
import VerseSelector from './verseSelector';

class App extends Component {
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

          <Row>
            <Col>
              <Card>
                <CardHeader><h4>मूल श्लोकः</h4></CardHeader>
                <CardBody>
                  <CardText>
                    <h5>
                      सन्तोषः परमो लाभः सत्सङ्गः परमा गतिः।
                      <br />
                      विचारः परमं ज्ञानं शमो हि परमं सुखम्॥
                    </h5>
                  </CardText>
                </CardBody>
              </Card>
            </Col>
          </Row>
        </Container>

      </div>
    );
  }
}

export default App;
