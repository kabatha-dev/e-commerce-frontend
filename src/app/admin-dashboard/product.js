import { useEffect, useState } from 'react';
import axios from 'axios';
import Layout from '../../components/Layout';

const ProductsManagement = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    axios.get('/api/products')
      .then(response => setProducts(response.data))
      .catch(error => console.error(error));
  }, []);

  return (
    <Layout>
      <h1 className="text-2xl font-bold">Products Management</h1>
      <table className="min-w-full table-auto">
        <thead>
          <tr>
            <th className="px-4 py-2">ID</th>
            <th className="px-4 py-2">Name</th>
            <th className="px-4 py-2">Price</th>
            <th className="px-4 py-2">Stock</th>
            <th className="px-4 py-2">Actions</th>
          </tr>
        </thead>
        <tbody>
          {products.map(product => (
            <tr key={product.id}>
              <td className="border px-4 py-2">{product.id}</td>
              <td className="border px-4 py-2">{product.name}</td>
              <td className="border px-4 py-2">${product.price.toFixed(2)}</td>
              <td className="border px-4 py-2">{product.stock}</td>
              <td className="border px-4 py-2">
                {/* Add action buttons here, like Edit or Delete */}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </Layout>
  );
};

export default ProductsManagement;
