import React, { Component } from 'react';
import Axios from 'axios';

class Form extends Component {
    render() {

        return (
            <div className="col-12 col-lg-6 offset-lg-3">
                <input
                    className="form-control my-3"
                    placeholder="Article Title"
                />
                <textarea
                    className="form-control my-3"
                    placeholder="Article Body">
                </textarea>
                <input
                    className="form-control my-3"
                    placeholder="Article Author"
                />
                <button className="btn btn-primary float-right"
                        onClick={this.handleSubmitEvent}
                        >Submit</button>
            </div>
        );
    }

    handleSubmitEvent(e) {
        Axios.get('http://localhost:8000/api/articles').then(function (response) {
            console.log(response);
          });
    }

}

export default Form;
