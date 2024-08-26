import { useEffect, useState } from 'react';
import axios from 'axios';
import Layout from '../../components/Layout';

const Dashboard = () => {
  const [stats, setStats] = useState({});

  useEffect(() => {
    axios.get('/api/dashboard')
      .then(response => setStats(response.data))
      .catch(error => console.error(error));
  }, []);

  return (
    <Layout>
      <h1 className="text-2xl font-bold">Dashboard Overview</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        <div className="p-4 bg-white shadow rounded">
          <h2>Total Users</h2>
          <p>{stats.totalUsers}</p>
        </div>
        <div className="p-4 bg-white shadow rounded">
          <h2>Total Orders</h2>
          <p>{stats.totalOrders}</p>
        </div>
        <div className="p-4 bg-white shadow rounded">
          <h2>Total Products</h2>
          <p>{stats.totalProducts}</p>
        </div>
        <div className="p-4 bg-white shadow rounded">
          <h2>Total Revenue</h2>
          <p>${stats.totalRevenue}</p>
        </div>
      </div>
    </Layout>
  );
};

export default Dashboard;
