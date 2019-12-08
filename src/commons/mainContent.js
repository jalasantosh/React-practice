import React from 'react';
import Home from '../screens/home';
import Aboutus from '../screens/aboutus';
import { Route, Switch } from 'react-router-dom';
import Adduser from '../screens/adduser';
import ViewUser from '../screens/viewUser';
import AddJob from '../screens/addJob';
import ViewJob from '../screens/viewJob';

const MainContent = () => {
    return (
        <section className="content">
            <div className="container-fluid">
                <Switch>
                    <Route path="/aboutus">
                        <Aboutus />
                    </Route>
                    <Route path="/home">
                        <Home />
                    </Route>

                    <Route path="/adduser">
                        <Adduser />
                    </Route>
                    <Route path="/Updateuser" >
                        <Adduser />
                    </Route>
                    <Route path="/viewUser">
                        <ViewUser />
                    </Route>


                    <Route path="/addJob" render={() => <AddJob type="add" key={Date.now()} />} />
                    <Route path="/updateJob" render={() => <AddJob type="update" key={Date.now()} />} />

                    {/* <Route path="/addJob">
                        <AddJob type="add" key={Date.now()} />
                    </Route>
                    <Route path="/updateJob">
                        <AddJob type="update" key={Date.now()} />
                    </Route> */}

                    <Route path="/viewJob">
                        <ViewJob />
                    </Route>


                </Switch>
            </div>
        </section>
    );
};

export default MainContent;

