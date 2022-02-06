import { NavLink } from 'react-router-dom';

const Navbar = () => {

    const navStyleLink = ({ isActive }) => {
        return isActive ? "active" : "";
    }

    return (
        <nav>
            <NavLink className={navStyleLink} to='/'>Home</NavLink>
            <NavLink className={navStyleLink} to='/about'>About</NavLink>
        </nav>
    )
}

export default Navbar;
