import React from 'react';
import { Container, Row, Button} from "reactstrap";
import { NavLink, Link } from 'react-router-dom';

import { logo } from "../../assets/images";
import { nav_links } from "../../constants";

const Header = () => {
    return (
        <header className="header">
            <Row>
                <div className="nav__wrapper d-flex align-items-center justify-content-between">

                    <div className="logo">
                        <img src={logo} alt="logo" />
                    </div>

                    <div className="navigation">
                        <ul className="menu d-flex align-items-center gap-5">
                            { nav_links.map((item, index) => (
                                <li className="nav__item">
                                    <NavLink to={item.path}>{item.display}</NavLink>
                                </li>
                            ))}
                        </ul>
                    </div>

                    <div className="nav__right d-flex align-items-center gap-4">
                        <div className="nav__btns d-flex align-items-center gap-4">
                            <Button className="btn secondary__btn">
                                <Link to='/login'>Login</Link>
                            </Button>
                        </div>
                    </div>
                </div>
            </Row>
        </header>
    );
}

export default Header;