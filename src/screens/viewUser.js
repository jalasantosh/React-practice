import React, { Component } from 'react';
const axios = require('axios').default

class ViewUser extends Component {

    constructor(props) {
        super(props)

        this.state = {
            usersList: []
        }

        this.getUsersData();
    }

    getUsersData() {
        var parentThis = this;


        axios.get("http://localhost:8090/users").then(function (response) {

            parentThis.setState({ usersList: response.data });
            console.log(parentThis.state);

        }).catch(function (error) {
            console.log(error);
        })
    }

    render() {
        return (
            <div>
                {
                    /* Basic Table */
                }
                <div className="row clearfix">
                    <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                        <div className="card">
                            <div className="header">
                                <h2>
                                    BASIC TABLES
          <small>
                                        Basic example without any additional modification classes
          </small>
                                </h2>
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
                            <div className="body table-responsive">
                                <table className="table">
                                    <thead>
                                        <tr>
                                            <th>#</th>
                                            <th>USER NAME</th>
                                            <th>EMAIL ID</th>
                                            <th>PASSWORD</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {
                                            this.state.usersList.map(function (val, index) {
                                                return (
                                                    <tr>
                                                        <th scope="row">{val.id}</th>
                                                        <td>{val.username == null ? "N/A" : val.username}</td>
                                                        <td>{val.emailId}</td>
                                                        <td>{val.password}</td>
                                                    </tr>
                                                )
                                            })
                                        }

                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                </div>
                {
                    /* #END# Basic Table */
                }

            </div>
        );
    }
}

export default ViewUser;