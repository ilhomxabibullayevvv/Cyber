import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setProducts } from '../../redux/actions';
import './Home.css';
import Hero from '../../components/Hero';
import Smaller from '../../components/Smaller';
import Category from '../../components/Category';
import Product from '../../components/Product';
import Smaller2 from '../../components/Smaller2';
import Discount from '../../components/Discount';
const Home = ({ searchQuery }) => {
  const dispatch = useDispatch();
  const [loading, setLoading] = useState(true);  // Loading state for products

  const products = useSelector((state) => state.product.products);
  const [filteredProducts, setFilteredProducts] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await fetch('http://localhost:5000/products');
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }

        const data = await response.json();
        dispatch(setProducts(data.data));
        setLoading(false);  // Set loading to false after products are fetched
      } catch (error) {
        console.error('Error fetching products:', error);
        setLoading(false);  // Set loading to false even if there's an error
      }
    };

    fetchProducts();
  }, [dispatch]);

  useEffect(() => {
    if (searchQuery) {
      const filtered = products.filter(product =>
        product.name.toLowerCase().includes(searchQuery.toLowerCase())
      );
      setFilteredProducts(filtered);
    } else {
      setFilteredProducts(products);
    }
  }, [searchQuery, products]);

  return (
    <>
      <Hero />
      <Smaller />
      <Category />
      <div className="product-list">
        {loading ? (
          <p>Loading products...</p>  // Show loading state while products are being fetched
        ) : filteredProducts.length > 0 ? (
          filteredProducts.map((product) => (
            <Product key={product.id} product={product} />
          ))
        ) : (
          <p>No products found.</p>  // Show message if no products match the filter
        )}
      </div>
      <Smaller2 />
      <Discount />
    </>
  );
};

export default Home;
