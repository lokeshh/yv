import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Row, Col } from 'reactstrap';
import { compose } from "redux";
import { changeChapter, changeBook, changeVerse } from '../actions/verseSelectorActions';
import { withRouter } from "react-router-dom";
import Select from '@material-ui/core/Select';
import InputLabel from '@material-ui/core/InputLabel';

class VerseSelector extends Component {
  componentDidMount() {
    var x = this.props.location.pathname.split('/');

    this.props.changeBook(x[1])
    this.props.changeChapter(x[1], x[2])
    this.props.changeVerse(x[1], x[2], x[3])
  }

  selectBook(e) {
    const book = e.target.value
    this.props.changeBook(book);
  }

  selectChapter(e) {
    const chapter = e.target.value
    const book = this.props.verseReducer.currentBook
    this.props.changeChapter(book, chapter)
  }

  selectVerse(e) {
    const book = this.props.verseReducer.currentBook;
    const chapter = this.props.verseReducer.currentChapter;
    const verse = e.target.value
    this.props.changeVerse(book, chapter, verse)
    this.props.history.push(`/${book}/${chapter}/${verse}`)
  }

  render() {
    const maxChapters = this.props.verseReducer.maxChapters;
    const maxVerses = this.props.verseReducer.maxVerses;
    return (
      <Row>
        <Col>
          <InputLabel id="demo-simple-select-label">प्रकरणम्</InputLabel>
          <Select
            native
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            value={this.props.verseReducer.currentBook}
            onChange={this.selectBook.bind(this)}
          >
            {
                [1, 2, 3, 4, 5, 6, 7].map(i => {
                  return <option value={i} key={i}>{i}</option>
                })
            }
          </Select>
        </Col>

        <Col>
          <InputLabel id="demo-simple-select-label">सर्गः</InputLabel>
          <Select
            native
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            value={this.props.verseReducer.currentChapter}
            onChange={this.selectChapter.bind(this)}
          >
            {
              maxChapters > 0 && [...Array(maxChapters).keys()].map(i => {
                i += 1;
                return <option value={i} key={i}>{i}</option>
              })
            }
          </Select>          
        </Col>

        <Col>
          <InputLabel id="demo-simple-select-label">श्लोकः</InputLabel>
          <Select
            native
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            value={this.props.verseReducer.currentVerse}
            onChange={this.selectVerse.bind(this)}
          >
            {
              maxChapters > 0 && [...Array(maxVerses).keys()].map(i => {
                i += 1;
                return <option value={i} key={i}>{i}</option>
              })
            }
          </Select>   
        </Col>
      </Row>
    )
  }
}

function mapStateToProps({ verseReducer }) {
  return { verseReducer };
}

export default compose(
  withRouter,
  connect(mapStateToProps, {
    changeChapter,
    changeBook,
    changeVerse
}))(VerseSelector);
