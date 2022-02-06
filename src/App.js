import './App.css';
import { Routes, Route } from 'react-router-dom'
import Home from './Components/Home';
import About from './Components/About';
import Navbar from './Components/Navbar';
import OrderSummary from './Components/OrderSummary';
import NoMatch from './Components/NoMatch';
import Products from './Components/Products';
import NewProducts from './Components/NewProducts';
import FeaturedProducts from './Components/Featuredproducts';

function App() {
  return (
    <>
      <Navbar/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='about' element={<About/>}/>
        <Route path='order-summary' element={<OrderSummary/>}/>
        <Route path='products' element={<Products/>}>
          <Route index element={ <FeaturedProducts/>}/>
          <Route path='featured' element={<FeaturedProducts/>}/>
          <Route path='new' element={ <NewProducts/> }/>
        </Route>
        <Route path='*' element={<NoMatch/>}/>
      </Routes>
    </>
  );
}

export default App;
