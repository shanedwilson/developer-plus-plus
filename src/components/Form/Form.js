import React from 'react';
import './Form.scss';

class Form extends React.Component {
  render() {
    return (
      <div className="row form-container mx-auto border border-dark rounded mt-5">
        <div className="form col-8 mt-4">
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
        <div className="col-3 radio radio-buttons btn-group-vertical btn-group-toggle">
          <div className="custom-control custom-radio">
            <input type="radio" id="blogRadio" name="customRadio" className="custom-control-input" />
            <label className="custom-control-label" htmlFor="blogRadio">Blogs</label>
          </div>
          <div className="custom-control custom-radio">
            <input type="radio" id="tutorialRadio" name="customRadio" className="custom-control-input" />
            <label className="custom-control-label" htmlFor="tutorialRadio">Tutorials</label>
          </div>
          <div className="custom-control custom-radio">
            <input type="radio" id="customRadio3" name="customRadio" className="custom-control-input" />
            <label className="custom-control-label" htmlFor="customRadio3">Resources</label>
          </div>
          <div className="custom-control custom-radio">
            <input type="radio" id="customRadio4" name="customRadio" className="custom-control-input" />
            <label className="custom-control-label" htmlFor="customRadio4">Podcasts</label>
          </div>
        </div>
        <button type="submit" className="btn add-btn btn-success my-5">
          <i className="fas fa-plus-circle" />
        </button>
      </div>
    );
  }
}

export default Form;
