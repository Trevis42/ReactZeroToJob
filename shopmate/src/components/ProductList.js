import { useState } from 'react';
import { useFetch } from '../hooks/useFetch';
// import Loading from '../assets/loading.gif';

export const ProductList = () => {
  const [url, setUrl] = useState('http://localhost:8000/products');
  const { data: products, loading, error } = useFetch(url);

  return (
    <section>
      <div className="filter">
        <button onClick={() => setUrl('http://localhost:8000/products')}>All</button>
        <button onClick={() => setUrl('http://localhost:8000/products?instock=true')}>In Stock Only</button>
      </div>
      {loading && <p className="loading">Loading...</p>}
      {error && <p className="error">{error}</p>}

      {products &&
        products.map(product => (
          <div
            className="card"
            key={product.id}
          >
            <p className="id">{product.id}</p>
            <p className="name">{product.name}</p>
            <p className="info">
              <span>${product.price}</span>
              <span className={product.instock ? 'instock' : 'unavailable'}>
                {product.instock ? 'In Stock' : 'Unavailable'}
              </span>
            </p>
          </div>
        ))}
    </section>
  );
};
