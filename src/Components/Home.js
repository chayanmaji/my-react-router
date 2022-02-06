import { useNavigate } from 'react-router-dom';

const Home = () => {
    const navigate = useNavigate();
    return (
        <>
            <div>Home page.</div>
            <button onClick={()=>{ navigate('order-summary', { replace:true }) }}>Place Order</button>
        </>
    )
}

export default Home;