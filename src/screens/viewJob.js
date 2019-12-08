import React, { Component, PropTypes } from 'react';
import { withRouter } from "react-router";
const axios = require('axios').default;

class ViewJob extends Component {

    constructor(props) {
        super(props)

        this.state = {
            jobList: []
        }

        this.getJobsList();
        this.onEdit = this.onEdit.bind(this);

    }


    getJobsList() {

        var parentThis = this;

        axios.get('http://localhost:8090//getJobs').then(function (response) {

            parentThis.setState({ jobList: response.data.payload });
            console.log(parentThis.state);

        }).catch(function (error) {
            console.log(error);
        })

    }

    onEdit(val) {
        // console.log(jobDetails);
        this.props.history.push("/updateJob", val);
    }



    onDelete(val) {
        // console.log(val);
        // this.getJobsList();
        var parentThis = this;

        axios.delete('http://localhost:8090/job?userId=' + val.id).then(function (response) {

            // parentThis.setState({ jobList: response.data });


            parentThis.getJobsList();




        }).catch(function (error) {
            console.log(error);
        })
    }

    render() {
        var parentThis = this;

        // if (this.state.gotoAdduser) {
        //     <Redirect to="/adduser" />
        // }
        return (
            <div>
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
                                </div>
                                <div className="body table-responsive">
                                    <table className="table">
                                        <thead>
                                            <tr>
                                                <th>#</th>
                                                <th>JOB NAME</th>
                                                <th>JOB DESCRIPTION</th>
                                                <th>EXPERIENCE REQUIRED</th>
                                                <th>JOB LOCATION</th>
                                                <th>COMPANY</th>
                                                <th>Actionss</th>

                                            </tr>
                                        </thead>
                                        <tbody>
                                            {
                                                this.state.jobList.map(function (val, index) {
                                                    return (
                                                        <tr key={index}>
                                                            <td>{val.id}</td>
                                                            <td>{val.jobName}</td>
                                                            <td>{val.jobDescription}</td>
                                                            <td>{val.experience}</td>
                                                            <td>{val.jobLocation}</td>
                                                            <td>{val.company}</td>
                                                            <td>
                                                                <button onClick={function () { parentThis.onEdit(val) }}>
                                                                    <i className="material-icons">edit</i>
                                                                </button>
                                                                <button style={{ marginLeft: 10 }} onClick={function () { parentThis.onDelete(val) }}>
                                                                    <i className="material-icons">delete</i>
                                                                </button>
                                                            </td>
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
            </div>
        );
    }
}

export default withRouter(ViewJob);