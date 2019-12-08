import React, { Component } from 'react';
import { connect } from 'react-redux'


const axios = require('axios').default
class Adduser extends Component {
    constructor(props) {
        super(props)
        this.state = {}

        this.handlechange = this.handlechange.bind(this);
        this.adduser = this.adduser.bind(this);
    }

    handlechange(event) {
        // console.log(event.target);
        // console.log("Id : " + event.target.placeholder);
        // console.log("Value : " + event.target.value);

        // if (event.target.id == "email_address") {
        //     this.setState({ emailId: event.target.value })
        // } else if (event.target.id == "password") {
        //     this.setState({ password: event.target.value })
        // }


        // console.log("id : " + event.target.id + "   " + "Value : " + event.target.value);
        // this.setState({ [event.target.id]: event.target.value })


        this.setState({ [event.target.name]: event.target.value })


        // console.log(this.state);

    }

    adduser(event) {
        console.log("sending data to server");
        var parent = this;

        // axios.post('http://localhost:8090/user', this.state).then(function (response) {
        //     console.log(response);
        // }).catch(function (error) {
        //     console.log(error);
        // });

        var addAction = { type: "ADD_USER", userDetails: this.state };
        this.props.dispatch(addAction);

        setTimeout(function () {
            console.log(parent.props.myname);
        }, 300);

    }

    render() {
        return (
            <div>
                {
                    /* Vertical Layout */
                }
                <div className="row clearfix">
                    <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                        <div className="card">
                            <div className="header">
                                <h2>ADD USER</h2>
                                <ul className="header-dropdown m-r--5">
                                    <li className="dropdown">
                                        <a
                                            href="javascript:void(0);"
                                            className="dropdown-toggle"
                                            data-toggle="dropdown"
                                            role="button"
                                            aria-haspopup="true"
                                            aria-expanded="false"
                                        >
                                            <i className="material-icons">more_vert</i>
                                        </a>
                                        <ul className="dropdown-menu pull-right">
                                            <li>
                                                <a href="javascript:void(0);">Action</a>
                                            </li>
                                            <li>
                                                <a href="javascript:void(0);">Another action</a>
                                            </li>
                                            <li>
                                                <a href="javascript:void(0);">Something else here</a>
                                            </li>
                                        </ul>
                                    </li>
                                </ul>
                            </div>
                            <div className="body">
                                <form>
                                    <label htmlFor="email_address">Email Address</label>
                                    <div className="form-group">
                                        <div className="form-line">
                                            <input
                                                type="text"
                                                id="email_address"
                                                className="form-control"
                                                placeholder="Enter your email address"
                                                name="emailId"
                                                onChange={this.handlechange}
                                            />
                                        </div>
                                    </div>
                                    <label htmlFor="password">Password</label>
                                    <div className="form-group">
                                        <div className="form-line">
                                            <input
                                                type="password"
                                                id="password"
                                                className="form-control"
                                                placeholder="Enter your password"
                                                name="password"
                                                onChange={this.handlechange}
                                            />
                                        </div>
                                    </div>
                                    <label htmlFor="MobileNumber">Mobile Number</label>
                                    <div className="form-group">
                                        <div className="form-line">
                                            <input
                                                type="integer"
                                                id="mobilenumber"
                                                className="form-control"
                                                placeholder="Enter your number"
                                                name="mobilenumber"
                                                onChange={this.handlechange}
                                            />
                                        </div>
                                    </div>
                                    <input type="checkbox" id="remember_me" className="filled-in" />

                                    <button onClick={this.adduser} type="button" className="btn btn-primary m-t-15 waves-effect">
                                        ADD USER
                                     </button>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        myname: state.userReducer.userlist
    }
}

export default connect(mapStateToProps)(Adduser);