import React, { Component } from 'react';
import { withRouter } from "react-router";

const axios = require('axios').default;


class AddJob extends Component {

    constructor(props) {
        super(props)
        this.state = {
            company: "",
            experience: "",
            id: "",
            jobDescription: "",
            jobLocation: "",
            jobName: ""
        }

        if (this.props.type == "update") {
            this.state = this.props.location.state;
            this.setState(this.state);
        }

        this.handlechange = this.handlechange.bind(this);
        this.addJob = this.addJob.bind(this);
    }

    handlechange(event) {
        this.setState({ [event.target.name]: event.target.value })
    }


    addJob(event) {
        axios.post('http://localhost:8090/addJob', this.state).then(function (response) {
            console.log(response);
            this.props.history.push("/viewJob");
        }).catch(function (error) {
            console.log(error);
        });
    }

    onUpdate() {
        var parentThis = this;
        console.log(parentThis.state);
        axios.put('http://localhost:8090/job', this.state).then(function (response) {
            parentThis.setState({ jobList: response.data });
            console.log(parentThis.state);
            this.props.history.push("/viewJob");

        }).catch(function (error) {
            console.log(error);
        })
    }

    emptyState() {
        let newState = Object.assign({}, this.state)
        for (var member in newState) {
            newState[member] = undefined;
        }
        this.setState(newState);
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
                                <h2>{this.props.type == "add" ? "ADD JOB" : "Update Job"}</h2>
                            </div>
                            <div className="body">
                                <form>
                                    <label htmlFor="job_name">{this.state.JobName}</label>
                                    <div className="form-group">
                                        <div className="form-line">
                                            <input
                                                type="text"
                                                id="job_name"
                                                className="form-control"
                                                placeholder="Enter your job name"
                                                name="jobName"
                                                value={this.state.jobName}
                                                onChange={this.handlechange}
                                            />
                                        </div>
                                    </div>
                                    <label htmlFor="job_description">Job Description</label>
                                    <div className="form-group">
                                        <div className="form-line">
                                            <input
                                                type="text"
                                                id="job_description"
                                                className="form-control"
                                                placeholder="Enter your job description"
                                                name="jobDescription"
                                                value={this.state.jobDescription}
                                                onChange={this.handlechange}
                                            />
                                        </div>
                                    </div>
                                    <label htmlFor="ExperienceRequired"> ExperienceRequired</label>
                                    <div className="form-group">
                                        <div className="form-line">
                                            <input
                                                type="integer"
                                                id="experience"
                                                className="form-control"
                                                placeholder="Enter your Experience"
                                                name="experience"
                                                value={this.state.experience}
                                                onChange={this.handlechange}
                                            />
                                        </div>

                                    </div>
                                    <label htmlFor="job_location">Job Location</label>
                                    <div className="form-group">
                                        <div className="form-line">
                                            <input
                                                type="text"
                                                id="job_location"
                                                className="form-control"
                                                placeholder="Enter your Location"
                                                name="jobLocation"
                                                value={this.state.jobLocation}
                                                onChange={this.handlechange}
                                            />
                                        </div>
                                    </div>
                                    <label htmlFor="Company"> Company</label>
                                    <div className="form-group">
                                        <div className="form-line">
                                            <input
                                                type="text"
                                                id="company"
                                                className="form-control"
                                                placeholder="Enter your company"
                                                name="company"
                                                value={this.state.company}
                                                onChange={this.handlechange}
                                            />
                                        </div>
                                    </div>
                                    <input type="checkbox" id="remember_me" className="filled-in" />

                                    <button onClick={this.props.type == "add" ? this.addJob : this.onUpdate} type="button" className="btn btn-primary m-t-15 waves-effect">
                                        {this.props.type == "add" ? "ADD JOB" : "UPDATE JOB"}

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

export default withRouter(AddJob);