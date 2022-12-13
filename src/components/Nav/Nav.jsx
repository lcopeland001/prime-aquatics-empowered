import React from "react";
import { Link } from "react-router-dom";
import LogOutButton from "../LogOutButton/LogOutButton";
import "./Nav.css";
import { useSelector } from "react-redux";

function Nav() {
    const user = useSelector((store) => store.user);

    return (
        <div className="nav">
            <Link to="/home">
                <h2 className="nav-title">Aquatics Empowered</h2>
            </Link>
            <div>
                {/* If no user is logged in, show these links */}
                {!user.id && (
                    // If there's no user, show login/registration links
                    <Link
                        className="navLink"
                        to="/login">
                        Login / Register
                    </Link>
                )}

                {/* If a user is logged in, show these links */}
                {user.id && (
                    <>
                        <Link
                            className="navLink"
                            to="/user">
                            Home
                        </Link>

                        <Link
                            className="navLink"
                            to="/profile">
                            Profile
                        </Link>

                        <Link
                            className="navLink"
                            to="/manage">
                            Manage Users
                        </Link>

                        <Link
                            className="navLink"
                            to="/facilities">
                            Facilities
                        </Link>

                        <Link
                            className="navLink"
                            to="/test">
                            Test
                        </Link>

                        {/* <Link
                            className="navLink"
                            to="/result">
                                Result
                        </Link> */}

                        <LogOutButton className="navLink" />
                    </>
                )}

                <Link
                    className="navLink"
                    to="/about">
                    About
                </Link>
            </div>
        </div>
    );
}

export default Nav;
