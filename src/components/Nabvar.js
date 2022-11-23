import React from 'react'
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';

const Nabvar = () => {
  const items = useSelector((state)=>state.cart);
  return (
    <>
      <nav className="navbar bg-light ">
        <div className="container">
          <span className="nav-item mb-0 ">Shoping Store</span>

          <ul className='nav ms-5'>
            <li className='nav-item'>
              <Link className='nav-link active' to="/">Home</Link>
            </li>
            <li className='nav-item'>
              <Link className='nav-link active' to="/cart">Cart</Link>
            </li>
          </ul>

          <span >Cart Item:{items.length}</span>
        </div>
      </nav>
    </>
  );
}

export default Nabvar