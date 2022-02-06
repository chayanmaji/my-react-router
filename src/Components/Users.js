import { Outlet, Link, useSearchParams } from 'react-router-dom';

const Users = () => {
    const [searchParams, setSearchParams] = useSearchParams();
    const users = [1,2,3,4];
    console.log('searchParams', searchParams);
    const showActiveUsers = searchParams.get('filter') === 'active';
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
            <div>
                <button onClick={()=>{ setSearchParams({ filter:'active' })}}>Active Users</button>
                <button onClick={()=>{ setSearchParams({})}}>Reset Users</button>
            </div>
            {showActiveUsers && <h2>Showing Active Users</h2>}
            {!showActiveUsers && <h2>Showing All Users</h2>}
        </>
    )
}

export default Users;
