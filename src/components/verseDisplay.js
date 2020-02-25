import React, { Component } from 'react';
import Sanscript from 'sanscript';
import { connect } from 'react-redux';
import { Row, Col, CardHeader, CardBody, Card } from 'reactstrap';
import axios from 'axios';
import { compose } from "redux";
import { withRouter } from "react-router-dom";



const ROOT_URL = 'https://yv-reader-api.herokuapp.com';


class VerseDisplay extends Component {


  componentDidMount() {
    this.VerseDisplay();
  }
  
  VerseDisplay() {
    axios.get(`${ROOT_URL}/count/1/1`)
    .then(response => {
      console.log('here')
      this.props.history.push("/home");
    })

  }  
  
  render() {
    return (
      <Row>
        <Col>
          <Card>
            <CardHeader><h4>मूल श्लोकः</h4></CardHeader>
            <CardBody>
              <h5 className="display-linebreak">
                {/* {Sanscript.t(this.props.displayVerse.replace(/&nbsp;/g, ' '), 'iast', 'devanagari')} */}
                {
                  this.props.displayVerse.map(i => {
                    return <div>{Sanscript.t(i, 'iast', 'devanagari')}<br /></div>
                  })
                }
              </h5>
            </CardBody>
          </Card>
        </Col>
      </Row>
    );
  }
}

function mapStateToProps({ verseReducer: { displayVerse } }) {
  return { displayVerse };
}

export default compose(
  withRouter,
  connect(mapStateToProps)
)(VerseDisplay);
