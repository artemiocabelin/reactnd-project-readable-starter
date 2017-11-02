import React, { Component } from 'react';

class PostForm extends Component {
    render() {
        return (
            <div className="form-wrapper">
                <div className="container-fluid">
                    <h1 className="text-center">Post</h1>
                    <form>
                        <div className="form-group">
                            <label>*Title</label>
                            <input className="form-control" type="text" />
                        </div>
                        <div className="form-group">
                            <label>*Text</label>
                            <textarea className="form-control" cols="30" rows="10"></textarea>
                        </div>
                        <div className="form-group">
                            <label>*Category</label>
                            <select className="form-control form-select">
                                <option value="react">React</option>
                                <option value="redux">Redux</option>
                                <option value="udacity">Udacity</option>
                            </select>
                        </div>
                        <button className="btn btn-primary">Submit</button>
                    </form>
                </div>
            </div>
        );
    }
}

export default PostForm;