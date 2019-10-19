import React from 'react';
import home from '../screens/home';
import aboutus from '../screens/aboutus';

const MainContent = () => {
    return (
        <section class="content">
            <div class="container-fluid">
                <Switch>
                    <Route path="/aboutus">
                        <Aboutus />
                    </Route>
                    <Route path="/home">
                        <AddUser />
                    </Route>
                    <Route path="/">
                        <Home />
                    </Route>
                </Switch>
            </div>
        </section>
    );
};

export default MainContent;

