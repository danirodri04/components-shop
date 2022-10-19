import React from 'react'
import CartWidget from '../components/CartWidget'

const Navbar = () => {
  return (
    <>
        <nav className="navbar navbar-expand-lg bg-dark">
            <div className="container">
                <a className="navbar-brand text-white" href="#">C O M P O N E N T S</a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                <ul className="navbar-nav ms-auto">
                    <li className="nav-item">
                    <a className="nav-link active text-white" aria-current="page" href="#">CATEGORIA 1</a>
                    </li>
                    <li className="nav-item">
                    <a className="nav-link text-white" href="#">CATEGORIA 2</a>
                    </li>
                    <li className="nav-item">
                    <a className="nav-link text-white" href="#">CATEGORIA 3</a>
                    </li>
                </ul>
        <CartWidget />
                </div>
            </div>
        </nav>
    </>
  )
}

export default Navbar