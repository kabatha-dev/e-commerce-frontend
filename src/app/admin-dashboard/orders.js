import { useEffect, useState } from 'react';
import axios from 'axios';
import Layout from '../../components/Layout';

const OrdersManagement = () => {
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    axios.get('/api/orders')
      .then(response => setOrders(response.data))
      .catch(error => console.error(error));
  }, []);

  return (
    <Layout>
      <h1 className="text-2xl font-bold">Orders Management</h1>
      <table className="min-w-full table-auto">
        <thead>
          <tr>
            <th className="px-4 py-2">Order ID</th>
            <th className="px-4 py-2">Customer</th>
            <th className="px-4 py-2">Total</th>
            <th className="px-4 py-2">Status</th>
            <th className="px-4 py-2">Actions</th>
          </tr>
        </thead>
        <tbody>
          {orders.map(order => (
            <tr key={order.id}>
              <td className="border px-4 py-2">{order.id}</td>
              <td className="border px-4 py-2">{order.customerName}</td>
              <td className="border px-4 py-2">${order.total.toFixed(2)}</td>
              <td className="border px-4 py-2">{order.status}</td>
              <td className="border px-4 py-2">
                {/* Add action buttons here, like View or Edit */}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </Layout>
  );
};

export default OrdersManagement;
