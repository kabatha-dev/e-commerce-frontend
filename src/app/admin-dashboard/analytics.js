import { useEffect, useState } from 'react';
import axios from 'axios';
import Layout from '../../components/Layout';

const Analytics = () => {
  const [analyticsData, setAnalyticsData] = useState([]);

  useEffect(() => {
    axios.get('/api/analytics')
      .then(response => setAnalyticsData(response.data))
      .catch(error => console.error(error));
  }, []);

  return (
    <Layout>
      <h1 className="text-2xl font-bold">Analytics</h1>
      <table className="min-w-full table-auto">
        <thead>
          <tr>
            <th className="px-4 py-2">Metric</th>
            <th className="px-4 py-2">Value</th>
          </tr>
        </thead>
        <tbody>
          {analyticsData.map((item, index) => (
            <tr key={index}>
              <td className="border px-4 py-2">{item.metric}</td>
              <td className="border px-4 py-2">{item.value}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </Layout>
  );
};

export default Analytics;
