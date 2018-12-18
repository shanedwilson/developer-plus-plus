import React from 'react';
import './Form.scss';

class Form extends React.Component {
  render() {
    return (
      <div className="row form-container mx-auto border border-dark rounded mt-5">
        <div className="form col-8 mt-2">
          <div className="col-auto">
            <label className="sr-only">Name</label>
            <div className="input-group mb-2">
              <div className="input-group-prepend">
                <div className="input-group-text">Name</div>
              </div>
              <input type="text" className="form-control" id="name-input" placeholder="Mr. Rogers"></input>
            </div>
          </div>
          <div className="col-auto">
            <label className="sr-only">Link</label>
            <div className="input-group mb-2">
              <div className="input-group-prepend">
                <div className="input-group-text">Link</div>
              </div>
              <input type="text" className="form-control" id="link-input" placeholder="www.shityeah.com"></input>
            </div>
          </div>
        </div>
        <div className="col-3 radio-buttons">
          <div className="form-check">
            <input className="form-check-input" type="radio" name="tutorialRadio" id="tutorial-radio" value="option1"></input>
            <label className="form-check-label">Tutorial</label>
          </div>
          <div className="form-check">
            <input className="form-check-input" type="radio" name="blogRadio" id="blog-radio" value="option1"></input>
            <label className="form-check-label">Blog</label>
          </div>
          <div className="form-check">
            <input className="form-check-input" type="radio" name="resourceRadio" id="resource-radio" value="option1"></input>
            <label className="form-check-label">Resource</label>
          </div>
          <div className="form-check">
            <input className="form-check-input" type="radio" name="podcastRadio" id="podcast-radio" value="option1"></input>
            <label className="form-check-label">Podcast</label>
          </div>
        </div>
        <button type="submit" className="btn add-btn">
          <i className="fas fa-plus-circle icon-large"></i>
        </button>
      </div>
    );
  }
}

export default Form;
