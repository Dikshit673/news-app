import React from "react";
import { NavLink } from "react-router-dom";

const NavbarCom = () => {
    const [state, setState] = React.useState(false);

    return (
        <section className="nav-section">
            <nav className="navbar navbar-expand-lg">
                <div className="container">

                    <h3 className=" d-flex justify-content-start align-items-center"><i className="fab fa-react react_rotate"></i>React News App</h3>

                    <button className="navbar-toggler" title="menu toggler" type="button" onClick={() => setState(!state)} >
                        {state ? <i className="fa-solid fa-times"></i> : <i className="fa fa-bars"></i>}
                    </button>

                    <div className={`collapse navbar-collapse new-back-col ${state ? "show" : ""}`}>
                        <ul className="navbar-nav ms-auto xyz">
                            <li className="nav-item px-lg-2" onClick={() => {
                                setState(false)
                                window.scrollTo({ top: 0, left: 0, behavior: "smooth" })
                            }}>
                                <NavLink className='nav-link' to='/'>
                                    <i className="fa-solid fa-house me-1 icons_anim" />Home
                                </NavLink>
                            </li>
                            <li className="nav-item px-lg-2" onClick={() => {
                                setState(false)
                                window.scrollTo({ top: 0, left: 0, behavior: "smooth" })
                            }}>
                                <NavLink className='nav-link' to='/about'>
                                    <i className="fa-solid fa-address-card me-1 icons_anim" />About
                                </NavLink>
                            </li>
                            <li className="nav-item px-lg-2" onClick={() => {
                                setState(false)
                                window.scrollTo({ top: 0, left: 0, behavior: "smooth" })
                            }}>
                                <NavLink className='nav-link' to='/general'>
                                    <i className="fa-solid fa-phone me-1 icons_anim" />General
                                </NavLink>
                            </li>
                            <li className="nav-item px-lg-2" onClick={() => {
                                setState(false)
                                window.scrollTo({ top: 0, left: 0, behavior: "smooth" })
                            }}>
                                <NavLink className='nav-link' to='favourites'>
                                    <i className="fa-solid fa-list me-1 icons_anim" />favorites
                                </NavLink>
                            </li>
                        </ul>
                    </div>

                </div>
            </nav>
        </section>
    );
};

export default NavbarCom;
