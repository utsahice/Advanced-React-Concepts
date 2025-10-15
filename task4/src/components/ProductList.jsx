import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchProducts } from '../products/productsSlice';
import '../app.css'
const ProductList = () => {
  const dispatch = useDispatch();
  const { items, loading, error } = useSelector((state) => state.products);

  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]);

  if (loading) return <p>Loading products...</p>;
  if (error) return <p style={{ color: 'red' }}>Error: {error}</p>;

  return (
    <div className='grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3'>
      <h5> Product List</h5>
      <div className="product-grid">
      {items.map((p) => (
        <div>
        <div className="product-card" key={p.id}>
          <img src={p.image} alt={p.title} className='h-15 w-15'/>
          <h3>{p.title}</h3>
          <p>${p.price}</p>
        </div>
        </div>
      ))}
    </div>
    </div>
  );
};

export default ProductList;
