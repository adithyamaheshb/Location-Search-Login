import React from 'react';
import PropTypes from 'prop-types';
import { Route } from "react-router-dom";
import HomePage from "./components/pages/HomePage";
import LoginPage from "./components/pages/LoginPage";
import NewPage from "./components/pages/NewPage";
import Search from "./components/pages/Search";
import DashboardPage from "./components/pages/DashboardPage"
import UserRoute from "./components/routes/UserRoute"
import GuestRoute from "./components/routes/GuestRoute"

const App = ({ location }) => (
          <div className="ui container">
            <Route location={location} path="/" exact component={HomePage} />
            <GuestRoute location={location} path="/login" exact component={LoginPage} />
            <Route location={location} path="/new" exact component={NewPage} />
            <Route location={location} path="/search" exact component={Search} />
            <UserRoute location={location} path="/dashboard" exact component={DashboardPage} />
          </div>
    );

App.propTypes = {
       location: PropTypes.shape({
           pathname: PropTypes.string.isRequired
     }).isRequired
};

export default App;
