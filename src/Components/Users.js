import { Outlet, Link } from 'react-router-dom';

const Users = () => {

    const users = [1,2,3,4];

    return (
        <>
            <div>
                {
                    users.map(user => {
                        return ( <h2 key={user}><Link to={`${user}`} >User {user}</Link></h2> )
                    })
                }
            </div>
            <Outlet/>
        </>
    )
}

export default Users;
