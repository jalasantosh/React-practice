import React, { Component } from 'react';

class Leftsidebar extends Component {
    render() {
        return (

            <aside id="leftsidebar" className="sidebar">
                {/* User Info */}
                <div className="user-info">
                    <div className="image">
                        <img src="images/user.png" width={48} height={48} alt="User" />
                    </div>
                    <div className="info-container">
                        <div
                            className="name"
                            data-toggle="dropdown"
                            aria-haspopup="true"
                            aria-expanded="false"
                        >
                            John Doe
      </div>
                        <div className="email">john.doe@example.com</div>
                        <div className="btn-group user-helper-dropdown">
                            <i
                                className="material-icons"
                                data-toggle="dropdown"
                                aria-haspopup="true"
                                aria-expanded="true"
                            >
                                keyboard_arrow_down
        </i>
                            <ul className="dropdown-menu pull-right">
                                <li>
                                    <a href="javascript:void(0);">
                                        <i className="material-icons">person</i>Profile
            </a>
                                </li>
                                <li role="separator" className="divider" />
                                <li>
                                    <a href="javascript:void(0);">
                                        <i className="material-icons">group</i>Followers
            </a>
                                </li>
                                <li>
                                    <a href="javascript:void(0);">
                                        <i className="material-icons">shopping_cart</i>Sales
            </a>
                                </li>
                                <li>
                                    <a href="javascript:void(0);">
                                        <i className="material-icons">favorite</i>Likes
            </a>
                                </li>
                                <li role="separator" className="divider" />
                                <li>
                                    <a href="javascript:void(0);">
                                        <i className="material-icons">input</i>Sign Out
            </a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
                {/* #User Info */}
                {/* Menu */}
                <div className="menu">
                    <ul className="list">
                        <li className="header">MAIN NAVIGATION</li>
                        <li className="active">
                            <a href="index.html">
                                <i className="material-icons">home</i>
                                <span>Home</span>
                            </a>
                        </li>
                        <li>
                            <a href="pages/typography.html">
                                <i className="material-icons">text_fields</i>
                                <span>Typography</span>
                            </a>
                        </li>

                        <li>
                            <a href="javascript:void(0);" className="menu-toggle">
                                <i className="material-icons">widgets</i>
                                <span>Widgets</span>
                            </a>
                            <ul className="ml-menu">
                                <li>
                                    <a href="javascript:void(0);" className="menu-toggle">
                                        <span>Cards</span>
                                    </a>
                                    <ul className="ml-menu">
                                        <li>
                                            <a href="pages/widgets/cards/basic.html">Basic</a>
                                        </li>
                                        <li>
                                            <a href="pages/widgets/cards/colored.html">Colored</a>
                                        </li>
                                        <li>
                                            <a href="pages/widgets/cards/no-header.html">No Header</a>
                                        </li>
                                    </ul>
                                </li>
                                <li>
                                    <a href="javascript:void(0);" className="menu-toggle">
                                        <span>Infobox</span>
                                    </a>
                                    <ul className="ml-menu">
                                        <li>
                                            <a href="pages/widgets/infobox/infobox-1.html">Infobox-1</a>
                                        </li>
                                        <li>
                                            <a href="pages/widgets/infobox/infobox-2.html">Infobox-2</a>
                                        </li>
                                        <li>
                                            <a href="pages/widgets/infobox/infobox-3.html">Infobox-3</a>
                                        </li>
                                        <li>
                                            <a href="pages/widgets/infobox/infobox-4.html">Infobox-4</a>
                                        </li>
                                        <li>
                                            <a href="pages/widgets/infobox/infobox-5.html">Infobox-5</a>
                                        </li>
                                    </ul>
                                </li>
                            </ul>
                        </li>
                    </ul>
                </div>
                {/* #Menu */}
                {/* Footer */}
                <div className="legal">
                    <div className="copyright">
                        © 2016 - 2017
      <a href="javascript:void(0);">AdminBSB - Material Design</a>.
    </div>
                    <div className="version">
                        <b>Version: </b> 1.0.5
    </div>
                </div>
                {/* #Footer */}
            </aside>


        );
    }
}

export default Leftsidebar;