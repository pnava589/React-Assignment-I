import React from "react";
import { Link } from 'react-router-dom';

const DefaultHeader = () =>
        <nav className="navbar navbar-dark bg-dark">
            <Link to='/home'>
                <button className="btn btn-primary my-2 text-white">Home</button>
            </Link>
            <Link to='/about'>
            <button className="btn btn-primary my-2 text-white">About</button>
            </Link>
        </nav>;

export default DefaultHeader;