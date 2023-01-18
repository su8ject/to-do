import {NavLink} from "react-router-dom";

export const Navigation = () => {
    return (
        <nav>
            <ul className="navigation">
                <li>
                    <NavLink className="link" to="/" end>
                        Home
                    </NavLink>
                </li>
                <li>
                    <NavLink className="link" to="users">
                        Users
                    </NavLink>
                </li>
            </ul>
        </nav>
    );
};