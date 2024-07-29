import Link from 'next/link';

const Layout = ({ children }) => {
  return (
    <div className="flex">
      <nav className="w-64 bg-gray-800 text-white h-screen p-5">
        <ul>
          <li className="mb-4">
            <Link href="/admin/users">User Management</Link>
          </li>
          <li className="mb-4">
            <Link href="/admin/products">Product Management</Link>
          </li>
          <li className="mb-4">
            <Link href="/admin/orders">Order Management</Link>
          </li>
          <li className="mb-4">
            <Link href="/admin/reports">Sales Reports</Link>
          </li>
          <li className="mb-4">
            <Link href="/admin/analytics">Analytics</Link>
          </li>
        </ul>
      </nav>
      <main className="flex-1 p-5">
        {children}
      </main>
    </div>
  );
};

export default Layout;