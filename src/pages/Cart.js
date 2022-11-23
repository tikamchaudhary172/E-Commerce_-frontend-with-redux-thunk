import React from 'react'
import { useSelector, useDispatch } from 'react-redux';
import { remove } from '../store/cartSlice';

const Cart = () => {
  const products = useSelector((state) => state.cart);
  const dispatch = useDispatch();
  return (
    <div>
      <h3 className='text-center my-5'> Cart Details</h3>
      
      <div className='container-fluid ms-5'>
      {
        products.map((product) => (
          <div className="card float-start  m-2" style={{ width: '18rem', height: '18rem', }} key={product.id}>
            <img src={product.images[0]} className="card-img-top mt-2" alt="img" style={{ height: '100px', margin: 'auto', width: '80px' }} />

            <div className="card-body">
              <h5 className="card-title text-center">{product.title}</h5>
              <h5 className=" text-center"> price: ₹{product.price}</h5>

             <div>
             <button className="btn btn-primary col-sm-12 mt-2" onClick={()=>{dispatch(remove(product.id))}}>Remove To Cart</button>
             </div>

            </div>
          </div>
        ))
      }
    </div>

    </div>
  )
}

export default Cart