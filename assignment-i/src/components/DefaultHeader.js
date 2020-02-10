import React from "react";
import { Link } from 'react-router-dom';

const DefaultHeader = () =>
        <nav className="navbar navbar-dark bg-dark">
            <Link to='/home'>
                <a className="navbar-brand">Logo</a>
            </Link>
            <Link to='/about'>
            <a className="btn btn-primary my-2 text-white">About</a>
            </Link>
        </nav>;

export default DefaultHeader;