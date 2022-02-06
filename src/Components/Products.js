import { NavLink, Outlet } from 'react-router-dom';


const Products = () => {
    const navStyleLink = ({ isActive }) => {
        return isActive ? "active" : "";
    }

    return (
        <>
            <div>
                <input type='Search' placeholder="='Search products" />
            </div>
            <nav>
                <NavLink className={navStyleLink} to='featured'>Featured</NavLink>
                <NavLink className={navStyleLink} to='new'>New</NavLink>
            </nav>
            <Outlet/>
        </>
    )
}

export default Products;
