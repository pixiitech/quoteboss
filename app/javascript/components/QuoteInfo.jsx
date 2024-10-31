import React from "react";
import PropTypes from "prop-types"
import { Link } from "react-router-dom";
import axios from "axios";
import CSRFToken from '../cookies.js';

class QuoteInfo extends React.Component {
  constructor(props) {
    super(props);
    this.state = { title: '', step: 1, id: null, address: '', type: ''};
    this.handleInput = this.handleInput.bind(this);
    this.handleSave = this.handleSave.bind(this);
    this.handleBack = this.handleBack.bind(this);
    this.handleSelectType = this.handleSelectType.bind(this);
  }

  handleInput(e, field) {
    this.setState({ [field]: e.target.value });
  }

  handleSelectType(e) {
    this.setState({ type: e.target.value });
  }

  handleBack() {
    const { step } = this.state;

    this.setState({ step: step - 1 });
  }

  handleSave() {
    const { title, address, type, id, step } = this.state;

    const data = { title: title, address: address, project_type: type }
    axios.defaults.headers.common['X-CSRF-TOKEN'] = CSRFToken(document.cookie);
    
    if (id) {
      axios.put(`/api/v1/projects/${id}`, {
        project: data,
      }) 
         .then((response) => {
           this.setState({ step: step + 1 })
          });
    } else {
      axios.post('/api/v1/projects', {
        csrfToken: CSRFToken(document.cookie),
        project: data,
      })
         .then((response) => {
           this.setState({ id: response.data.id, step: 2 })
          });
    }
  }

  render() {
    const { step, title, address, type } = this.state;

    return (
      <div className="vw-100 vh-100 primary-color d-flex align-items-center justify-content-center">
        <div className="jumbotron jumbotron-fluid bg-transparent">
          <div className="container secondary-color">
            <h3 className="display-4">Create a quote</h3>
            <p className="lead">
              Enter some basic information about the project
            </p>
            <hr className="my-4" />
            { step === 1 ?
              <React.Fragment>
                <label htmlFor="title">Enter an internal title for your project:</label>
                <input
                  name="title" type="text" className="quote-input"
                  onChange={(e) => this.handleInput(e, 'title')}
                  value={title}
                ></input>
                <hr className="my-4" />
              </React.Fragment> : ''
            }
            { step === 2 ?
              <React.Fragment>
                <label htmlFor="address">Enter the project address:</label>
                <input
                  name="address" type="text" className="quote-input"
                  onChange={(e) => this.handleInput(e, 'address')}
                  value={address}
                ></input>
                <hr className="my-4" />
              </React.Fragment> : ''
            }
            { step === 3 ?
              <React.Fragment>
                <label htmlFor="type">Project Type:</label>

                <input type="radio" name="type" value="single_family_home"
                  className="quote-input" onChange={this.handleSelectType}
                  checked={type === 'single_family_home'}
                />
                <label htmlFor="type[single_family_home]">Single Family Home</label>

                <input type="radio" name="type" value="multi_family_home"
                  className="quote-input" onChange={this.handleSelectType}
                  checked={type === 'multi_family_home'}
                />
                <label htmlFor="type[multi_family_home]">Multi Family Home</label>

                <input type="radio" name="type" value="condominium"
                  className="quote-input" onChange={this.handleSelectType}
                  checked={type === 'condominium'}
                />
                <label htmlFor="type[condominium]">Condominium</label>

                <input type="radio" name="type" value="commercial"
                  className="quote-input" onChange={this.handleSelectType}
                  checked={type === 'commercial'}
                />
                <label htmlFor="type[commercial]">Commercial</label>
                <hr className="my-4" />
              </React.Fragment> : ''
            }
            { step > 1 ?
              <button type="submit" className="btn btn-lg custom-button" onClick={this.handleBack}>
                Back
              </button> : ''
            }
            <button type="submit" className="btn btn-lg custom-button" onClick={this.handleSave}>
              Next
            </button>
          </div>
        </div>
      </div>
    );
  }
}

QuoteInfo.propTypes = {
  csrfToken: PropTypes.string,
};

export default QuoteInfo;
