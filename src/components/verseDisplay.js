import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Row, Col, CardHeader, CardBody, Card } from 'reactstrap';
import { compose } from "redux";
import { withRouter } from "react-router-dom";
import { changeVerse } from "../actions/verseSelectorActions";


class VerseDisplay extends Component {

  prevVerse() {
    if (this.props.currentVerse !== 1) {
      const currentVerse = parseInt(this.props.currentVerse) - 1
      this.props.history.push(`/${this.props.currentBook}/${this.props.currentChapter}/${currentVerse}`)
      this.props.changeVerse(this.props.currentBook, this.props.currentChapter, currentVerse);
    }
  }

  nextVerse() {
    if (this.props.currentVerse !== this.props.maxVerses) {
      const currentVerse = parseInt(this.props.currentVerse) + 1
      this.props.history.push(`/${this.props.currentBook}/${this.props.currentChapter}/${currentVerse}`)
      this.props.changeVerse(this.props.currentBook, this.props.currentChapter, currentVerse);
    }
  }
  
  render() {
    return (
      <Row>
        <Col>
          <Card className="card bg-light mb-3">
            <CardHeader>
              <button type="button" className="btn btn-secondary float-left btn-sm" onClick={() => this.prevVerse()}>Previous</button>
              <button type="button" className="btn btn-secondary float-right btn-sm" onClick={() => this.nextVerse()}>Next</button>
              <h4>मूल श्लोकः</h4>
            </CardHeader>
            <CardBody>
              <h5 className="display-linebreak">
                {
                  this.props.displayVerse.map((line, index) => {
                    return <div key={index}>{ line }<br /></div>
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

function mapStateToProps({ verseReducer: { displayVerse, currentBook, currentChapter, currentVerse, maxVerses } }) {
  return { displayVerse, currentBook, currentChapter, currentVerse, maxVerses };
}

export default compose(
  withRouter,
  connect(mapStateToProps, {
    changeVerse
  })
)(VerseDisplay);