import { useEffect, useState } from 'react';
import axios from 'axios';
import Layout from '../../components/Layout';

const Reports = () => {
  const [reports, setReports] = useState([]);

  useEffect(() => {
    axios.get('/api/reports')
      .then(response => setReports(response.data))
      .catch(error => console.error(error));
  }, []);

  return (
    <Layout>
      <h1 className="text-2xl font-bold">Reports</h1>
      <table className="min-w-full table-auto">
        <thead>
          <tr>
            <th className="px-4 py-2">Report ID</th>
            <th className="px-4 py-2">Title</th>
            <th className="px-4 py-2">Date</th>
            <th className="px-4 py-2">Actions</th>
          </tr>
        </thead>
        <tbody>
          {reports.map(report => (
            <tr key={report.id}>
              <td className="border px-4 py-2">{report.id}</td>
              <td className="border px-4 py-2">{report.title}</td>
              <td className="border px-4 py-2">{report.date}</td>
              <td className="border px-4 py-2">
                {/* Add action buttons here, like View or Download */}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </Layout>
  );
};

export default Reports;
