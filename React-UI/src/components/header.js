import React, { Component } from 'react'
import {Router,withRouter, Link} from 'react-router-dom'
class Header extends Component {
    constructor(){
        super(); 
    }
    render() {
        return (

            <nav className="navbar navbar-expand-lg navbar-light" style={{backgroundColor: '#e3f2fd'}}>
                <a className="navbar-brand" href="#">Ideas Forum</a>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                <ul className="navbar-nav">
                    <li className="nav-item active">
                    <Link to="/">
                        <a className="nav-link">Home <span className="sr-only">(current)</span></a>
                    </Link>
                    </li>
                    <li className="nav-item">
                    <Link to="/forum">
                        <a className="nav-link" >Forum</a>
                    </Link>
                    </li>
                    <li className="nav-item">
                    <Link to="/worldnews">
                        <a className="nav-link" >Worldnews</a>
                    </Link>
                    </li>
                    <li className="nav-item">
                    <Link to="/about">
                        <a className="nav-link">Developer</a>
                    </Link>
                    </li>
                </ul>
                </div>
            </nav>
        )
    }
}
 
export default Header 