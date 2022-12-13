import React from "react";
import { Link } from "react-router-dom";
import LogOutButton from "../LogOutButton/LogOutButton";
import "./Nav.css";
import { useSelector } from "react-redux";
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import AccountBoxOutlinedIcon from '@mui/icons-material/AccountBoxOutlined';
import ManageAccountsOutlinedIcon from '@mui/icons-material/ManageAccountsOutlined';
import ApartmentOutlinedIcon from '@mui/icons-material/ApartmentOutlined';
import PoolOutlinedIcon from '@mui/icons-material/PoolOutlined';
import InfoOutlinedIcon from '@mui/icons-material/InfoOutlined';
import { AddBoxOutlined } from "@mui/icons-material";

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
                            to="/user"><HomeOutlinedIcon fontSize="medium" />
                            Home
                        </Link>

                        <Link
                            className="navLink"
                            to="/profile"><AccountBoxOutlinedIcon />
                            Profile
                        </Link>

                        <Link
                            className="navLink"
                            to="/manage"><ManageAccountsOutlinedIcon />
                            Manage Users
                        </Link>

                        <Link
                            className="navLink"
                            to="/facilities"><ApartmentOutlinedIcon />
                            Facilities
                        </Link>

                        <Link
                            className="navLink"
                            to="/test"><PoolOutlinedIcon />
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
                    to="/about"><InfoOutlinedIcon />
                    About
                </Link>
            </div>
        </div>
    );
}

export default Nav;
