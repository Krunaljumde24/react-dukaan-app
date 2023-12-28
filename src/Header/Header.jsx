import React from 'react'
import { Link } from 'react-router-dom'

export default function Header() {
    return (
        <nav className="navbar navbar-expand-sm bg-light">
            <div className="container">
                <Link to="/" className="nav-link">
                    <h4>LoGo</h4>
                </Link>
                <div className="navbar-collapse" >
                    <ul className="navbar-nav mx-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <Link to="/" className='nav-link'>Home</Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/about" className='nav-link'>About</Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/contact" className='nav-link'>Contact</Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/support" className='nav-link'>Support</Link>
                        </li>
                    </ul>
                </div>
            </div>
        </nav >
    )
}
