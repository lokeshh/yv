import React, { Component } from 'react';
import Sanscript from 'sanscript';
import { connect } from 'react-redux';
import { Row, Col, CardHeader, CardBody, Card } from 'reactstrap';

class VerseDisplay extends Component {
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

export default connect(mapStateToProps)(VerseDisplay);
