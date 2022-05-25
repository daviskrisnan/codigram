import React, { useState } from 'react';
import '../App.js';
import { useNavigate } from 'react-router-dom';


const Navbar = () => {
    const navigation = useNavigate();

    const [findAccount, setFindAccount] = useState('');

    return (
        <>
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <div className="container-fluid my-3">
                    <a className="navbar-brand" href="/home/timelines">Codigram</a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>

                    <div className="collapse navbar-collapse" id="navbarNav">
                        <ul className="navbar-nav ms-auto">
                            <li className="nav-item">
                                <a className="nav-link active" aria-current="page" href="/home/timelines">Home</a>
                            </li>

                            <li className="nav-item">
                                <a className="nav-link" href="/home/profile">Profile</a>
                            </li>

                            <li className="nav-item">
                                <a className="nav-link" href="/home/profile/post">My Post</a>
                            </li>

                            <form class="d-flex" role="search">
                                <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"
                                onChange={ (e) => setFindAccount(e.target.value)} />
                                <button className="btn btn-success" type="submit"
                                onClick={ () => navigation(`/home/search/${findAccount}`)}>
                                    Search
                                </button>
                            </form>

                            <li className="nav-item d-flex ms-2">
                                <button className='btn btn-primary' onClick={ () => navigation('/login')}>Logout</button>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </>
    )
}

export default Navbar