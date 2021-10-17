import { Component } from 'react';
import React, { useEffect, useState } from 'react';
import axios from 'axios';
//import { BrowserRouter, Link } from 'react-router-dom';

import Search from '../Search';


import './styles.scss';

class ListView extends Component {
    
    render() {
        return (
            <div className="ListView">
                <Search />
            </div>
        )
    }

}

export default ListView;
