import React from 'react'
import './App.scss';
import { Link } from "react-router-dom";

export default function Header() {
    return (
        <header className="header">
            Header here!
            <Link to={'/'}>Layout</Link>
            <Link to={'/dashboard'}>Dashboard</Link>
            <Link to={'/report'}>Report </Link>
        </header>
    )
}