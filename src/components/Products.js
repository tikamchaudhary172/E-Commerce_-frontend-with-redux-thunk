import React, { useEffect } from 'react'
// import {useState} from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { add } from '../store/cartSlice';
import { fetchProducts } from '../store/productSlice';
import { STATUSES } from '../store/productSlice';

const Products = () => {
  const dispatch = useDispatch();
  const { data, status } = useSelector((state) => state.product);
  // const [products, setProducts] = useState([]);

  useEffect(() => {
    dispatch(fetchProducts());



    // const fetchProducts = async () => {
    //   const res = await fetch('https://fakestoreapi.com/products');
    //   const data = await res.json();
    //   console.log(data);
    //   setProducts(data);
    // }
    // fetchProducts();
  }, []);

  if (status === STATUSES.LOADING) {
    return <h2 className='text-center'>Loading....</h2>;
  }
  if (status === STATUSES.ERROR) {
    return <h2 className='text-center'>Something went wrong!</h2>;
  }

  return (
    <div className='container-fluid ms-5'>
      {
        data.map((product) => (
          <div className="card float-start  m-2" style={{ width: 300, height: '20rem', }} key={product.id}>
            <img src={product.images[0]} className="card-img-top mt-2" alt="img" style={{ height: 300, margin: 'auto', width: 200 }} />
            <div className="card-body">
              <h5 className="card-title text-center">(id{product.id}){product.title}</h5>
              <h5 className=" text-center"> price: ₹{product.price}</h5>
              <div>
                <button className="btn btn-primary col-sm-12 mt-2" onClick={() => { dispatch(add(product)) }}>Add To Cart</button>
              </div>

            </div>
          </div>
        ))
      }
    </div>
  )
}

export default Products