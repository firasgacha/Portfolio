import { NavLink } from "react-router-dom";
import scriptIcon from "../assets/script.png";

export function NavBar() {
    return (
        <div className="navbar bg-base-100 mb-12">
            <div className="navbar-start">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <div className="w-12 rounded">
                            <img src={scriptIcon} />
                        </div>
                    </div>
                    <ul
                        tabIndex={0}
                        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
                        <li><NavLink to={"/"}>Home</NavLink></li>
                        <li><NavLink to={"/work"}>Experiences</NavLink></li>
                        <li><NavLink to={"/contact"}>Contact</NavLink></li>
                    </ul>
                </div>
                <div className="avatar">
                    <div className="w-12 rounded">
                        <img src={scriptIcon} />
                    </div>
                </div>
            </div>
            <div className="navbar-end hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    <li><NavLink to={"/"}>Home</NavLink></li>
                    <li><NavLink to={"/work"}>Work</NavLink></li>
                    <li><NavLink to={"/contact"}>Contact</NavLink></li>
                </ul>
            </div>
        </div>
    );
}
