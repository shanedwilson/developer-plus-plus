import React from 'react';
import PropTypes from 'prop-types';
import authRequests from '../../helpers/data/authRequests';

import './Form.scss';

const defaultItem = {
  name: '',
  url: '',
  uid: '',
  type: '',
};


class Form extends React.Component {
  static propTypes = {
    onSubmit: PropTypes.func,
  }

  state = {
    newItem: defaultItem,
  }

  formFieldStringState = (name, e) => {
    e.preventDefault();
    const tempItem = { ...this.state.newItem };
    tempItem[name] = e.target.value;
    this.setState({ newItem: tempItem });
  }

  nameChange = e => this.formFieldStringState('name', e);

  urlChange = e => this.formFieldStringState('url', e);

  formSubmit = (e) => {
    e.preventDefault();
    const { onSubmit } = this.props;
    const myItem = { ...this.state.newItem };
    myItem.uid = authRequests.getCurrentUid();
    onSubmit(myItem);
    this.setState({ newItem: defaultItem });
  }

  render() {
    const { newItem } = this.state;

    return (
      <div className="row form-container mx-auto border border-dark rounded mt-5">
        <div className="form col-8 mt-4" onSubmit={this.formSubmit}>
          <div className="col-auto">
            <label htmlFor="name" className="sr-only">Name</label>
            <div className="input-group mb-2">
              <div className="input-group-prepend">
                <div className="input-group-text">Name</div>
              </div>
              <input
                type="text"
                className="form-control"
                id="name"
                placeholder="Mr. Rogers"
                onChange={this.nameChange}
                value={newItem.name}>
              </input>
            </div>
          </div>
          <div className="col-auto">
            <label htmlFor="link" className="sr-only">Link</label>
            <div className="input-group mb-2">
              <div className="input-group-prepend">
                <div className="input-group-text">Link</div>
              </div>
              <input
                type="text"
                className="form-control"
                id="url"
                placeholder="www.shityeah.com"
                onChange={this.urlChange}
                value={newItem.url}>
              </input>
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
