import React from 'react';
import Navbar from './Navbar'
import Footer from './Footer'
import { Switch, Route, Redirect } from 'react-router-dom'
import AddRestaurant from './AddRestaurant'
import ViewRestaurant from './ViewRestaurant'

const Main = () => {
    return (
        <div className="main-panel">
            <Navbar />
            <Switch>
                <Route path="/addrestaurant" component={AddRestaurant} />
                <Route path="/viewrestaurant" component={ViewRestaurant} />
                <Redirect from='*' to='/addrestaurant' />
            </Switch>
            <Footer />
        </div>
    )
};

export default Main;