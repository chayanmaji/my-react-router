import { NavLink } from 'react-router-dom';
import useAuth from './Auth';

const Navbar = () => {

    const auth = useAuth();

    const navStyleLink = ({ isActive }) => {
        return isActive ? "active" : "";
    }

    return (
        <nav className='primary'>
            <NavLink className={navStyleLink} to='/'>Home</NavLink>
            <NavLink className={navStyleLink} to='/about'>About</NavLink>
            <NavLink className={navStyleLink} to='/products'>Products</NavLink>
            <NavLink className={navStyleLink} to='/users'>Users</NavLink>
            <NavLink className={navStyleLink} to='/profile'>Profile</NavLink>
            { 
                !auth.user && (
                    <NavLink className={navStyleLink} to='/login'>
                        Login
                    </NavLink>
                )
            }
        </nav>
    )
}

export default Navbar;
