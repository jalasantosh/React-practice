import React, { Component } from 'react';

class Rightsidebar extends Component {
    render() {
        return (
            <div>
                <aside id="rightsidebar" className="right-sidebar">
                    <ul className="nav nav-tabs tab-nav-right" role="tablist">
                        <li role="presentation" className="active">
                            <a href="#skins" data-toggle="tab">
                                SKINS
      </a>
                        </li>
                        <li role="presentation">
                            <a href="#settings" data-toggle="tab">
                                SETTINGS
      </a>
                        </li>
                    </ul>
                    <div className="tab-content">
                        <div
                            role="tabpanel"
                            className="tab-pane fade in active in active"
                            id="skins"
                        >
                            <ul className="demo-choose-skin">
                                <li data-theme="red" className="active">
                                    <div className="red" />
                                    <span>Red</span>
                                </li>
                                <li data-theme="pink">
                                    <div className="pink" />
                                    <span>Pink</span>
                                </li>
                                <li data-theme="purple">
                                    <div className="purple" />
                                    <span>Purple</span>
                                </li>
                                <li data-theme="deep-purple">
                                    <div className="deep-purple" />
                                    <span>Deep Purple</span>
                                </li>
                                <li data-theme="indigo">
                                    <div className="indigo" />
                                    <span>Indigo</span>
                                </li>
                                <li data-theme="blue">
                                    <div className="blue" />
                                    <span>Blue</span>
                                </li>
                                <li data-theme="light-blue">
                                    <div className="light-blue" />
                                    <span>Light Blue</span>
                                </li>
                                <li data-theme="cyan">
                                    <div className="cyan" />
                                    <span>Cyan</span>
                                </li>
                                <li data-theme="teal">
                                    <div className="teal" />
                                    <span>Teal</span>
                                </li>
                                <li data-theme="green">
                                    <div className="green" />
                                    <span>Green</span>
                                </li>
                                <li data-theme="light-green">
                                    <div className="light-green" />
                                    <span>Light Green</span>
                                </li>
                                <li data-theme="lime">
                                    <div className="lime" />
                                    <span>Lime</span>
                                </li>
                                <li data-theme="yellow">
                                    <div className="yellow" />
                                    <span>Yellow</span>
                                </li>
                                <li data-theme="amber">
                                    <div className="amber" />
                                    <span>Amber</span>
                                </li>
                                <li data-theme="orange">
                                    <div className="orange" />
                                    <span>Orange</span>
                                </li>
                                <li data-theme="deep-orange">
                                    <div className="deep-orange" />
                                    <span>Deep Orange</span>
                                </li>
                                <li data-theme="brown">
                                    <div className="brown" />
                                    <span>Brown</span>
                                </li>
                                <li data-theme="grey">
                                    <div className="grey" />
                                    <span>Grey</span>
                                </li>
                                <li data-theme="blue-grey">
                                    <div className="blue-grey" />
                                    <span>Blue Grey</span>
                                </li>
                                <li data-theme="black">
                                    <div className="black" />
                                    <span>Black</span>
                                </li>
                            </ul>
                        </div>
                        <div role="tabpanel" className="tab-pane fade" id="settings">
                            <div className="demo-settings">
                                <p>GENERAL SETTINGS</p>
                                <ul className="setting-list">
                                    <li>
                                        <span>Report Panel Usage</span>
                                        <div className="switch">
                                            <label>
                                                <input type="checkbox" defaultChecked />
                                                <span className="lever" />
                                            </label>
                                        </div>
                                    </li>
                                    <li>
                                        <span>Email Redirect</span>
                                        <div className="switch">
                                            <label>
                                                <input type="checkbox" />
                                                <span className="lever" />
                                            </label>
                                        </div>
                                    </li>
                                </ul>
                                <p>SYSTEM SETTINGS</p>
                                <ul className="setting-list">
                                    <li>
                                        <span>Notifications</span>
                                        <div className="switch">
                                            <label>
                                                <input type="checkbox" defaultChecked />
                                                <span className="lever" />
                                            </label>
                                        </div>
                                    </li>
                                    <li>
                                        <span>Auto Updates</span>
                                        <div className="switch">
                                            <label>
                                                <input type="checkbox" defaultChecked />
                                                <span className="lever" />
                                            </label>
                                        </div>
                                    </li>
                                </ul>
                                <p>ACCOUNT SETTINGS</p>
                                <ul className="setting-list">
                                    <li>
                                        <span>Offline</span>
                                        <div className="switch">
                                            <label>
                                                <input type="checkbox" />
                                                <span className="lever" />
                                            </label>
                                        </div>
                                    </li>
                                    <li>
                                        <span>Location Permission</span>
                                        <div className="switch">
                                            <label>
                                                <input type="checkbox" defaultChecked />
                                                <span className="lever" />
                                            </label>
                                        </div>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </aside>;
                
            </div>
        );
    }
}

export default Rightsidebar;