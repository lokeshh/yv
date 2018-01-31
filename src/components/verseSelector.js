import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Row, Col } from 'reactstrap';

class VerseSelector extends Component {
  constructor(props) {
    super(props);

    this.bookChapterCount = {
      1: 32,
      2: 20,
      3: 16,
      4: 33
    }

    this.state = {
      book: 0,
      chapter: 0,
      verse: 0
    }
  }

  selectBook(e) {
    const book = e.target.value
    this.setState({ book })
  }

  render() {
    return (
      <Row>
        <Col>
          <select
            value="Select Book"
            className="form-control custom-select select-option"
            onChange={this.selectChapter}>
            {
              [1, 2, 3, 4].map(i => {
                return <option value="1">One</option>
              })
            }
          </select>
        </Col>

        <Col>
          <select value="Select Chapter" className="form-control custom-select select-option">
            <option value="1">One</option>
            <option value="2">Two</option>
            <option value="3">Three</option>
          </select>
        </Col>

        <Col>
          {
            !this.props.verseCountLoading &&
              <select value="Select Verse" className="form-control custom-select select-option">
                <option value="1">One</option>
                <option value="2">Two</option>
                <option value="3">Three</option>
              </select>
          }

        </Col>
      </Row>
    )
  }
}

function mapStateToProps({ verseCountLoading }) {
  return { verseCountLoading };
}

export default connect(mapStateToProps)(VerseSelector);
