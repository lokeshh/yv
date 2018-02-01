import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Row, Col } from 'reactstrap';
import { changeChapter, changeBook } from '../actions/verseSelectorActions';

class VerseSelector extends Component {
  selectBook(e) {
    const book = e.target.value
    this.props.changeBook(book);
  }

  selectChapter(e) {
    const chapter = e.target.value
    const book = this.props.verseReducer.currentBook
    this.props.changeChapter(book, chapter)
  }

  render() {
    const maxChapters = this.props.verseReducer.maxChapters;
    const maxVerses = this.props.verseReducer.maxVerses;
    return (
      <Row>
        <Col>
          <select
            defaultValue='0'
            className="form-control custom-select select-option"
            onChange={this.selectBook.bind(this)}>
            <option value='0'>Select Book</option>
            {
              [1, 2, 3, 4].map(i => {
                return <option value={i} key={i}>{i}</option>
              })
            }
          </select>
        </Col>

        <Col>
          <select
            onChange={this.selectChapter.bind(this)}
            defaultValue='0'
            className="form-control custom-select select-option">
            <option value='0'>Select Chapter</option>
            {
              maxChapters > 0 && [...Array(maxChapters).keys()].map(i => {
                i += 1;
                return <option value={i} key={i}>{i}</option>
              })
            }
          </select>
        </Col>

        <Col>
          {
            !this.props.verseReducer.loadingVerseCount &&
              <select
                defaultValue='0'
                className="form-control custom-select select-option">
                <option value='0'>Select Verse</option>
                {
                  maxVerses > 0 && [...Array(maxVerses).keys()].map(i => {
                    i += 1;
                    return <option value={i} key={i}>{i}</option>
                  })
                }
              </select>
          }

        </Col>
      </Row>
    )
  }
}

function mapStateToProps({ verseReducer }) {
  return { verseReducer };
}

export default connect(mapStateToProps, {
  changeChapter,
  changeBook
})(VerseSelector);
