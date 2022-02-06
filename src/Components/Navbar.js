import { NavLink } from 'react-router-dom';

const Navbar = () => {

    const navStyleLink = ({ isActive }) => {
        return isActive ? "active" : "";
    }

    return (
        <nav className='primary'>
            <NavLink className={navStyleLink} to='/'>Home</NavLink>
            <NavLink className={navStyleLink} to='/about'>About</NavLink>
            <NavLink className={navStyleLink} to='/products'>Products</NavLink>
        </nav>
    )
}

export default Navbar;
