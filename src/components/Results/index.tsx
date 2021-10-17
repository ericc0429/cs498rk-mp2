import { Component } from 'react';
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';

import Gallery from './Gallery';
import ListView from './ListView';

import './styles.scss'

export default function Results() {

    return (
        <Router>
            <div className="Results-view-mode">
                <nav>
                    <Link to="/ListView">List</Link>
                    &nbsp;&nbsp;&nbsp;
                    <Link to="/Gallery">Gallery</Link>
                </nav>
    
                {/* A <Switch> looks through its children <Route>s and
                renders the first one that matches the current URL. */}
                <Switch>
                    <Route path="/ListView">
                        <ListView />
                    </Route>
                    <Route path="Gallery">
                        <Gallery />
                    </Route>
                </Switch>
            </div>
        </Router>
    );

}