import React, { useState, useEffect } from 'react';

const UserList = ({ url }) => {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const response = await fetch(`${url}/api/user/list`, {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json',
          },
        });

        if (!response.ok) {
          const errorMessage = `Failed to fetch: ${response.status} ${response.statusText}`;
          throw new Error(errorMessage);
        }

        const data = await response.json();
        setUsers(data);
      } catch (err) {
        console.error('Error fetching users:', err); // Log error for debugging
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchUsers();
  }, [url]); // Re-fetch if the URL changes

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;

  return (
    <div className="admin-panel">
      <h2>User Management</h2>
      <table className="table table-striped">
        <thead>
          <tr>
            <th>Name</th>
            <th>Email</th>
            <th>Cart Data</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user) => (
            <tr key={user._id}>
              <td>{user.name}</td>
              <td>{user.email}</td>
              <td>
                <pre className="form-control">
                  {user.cartData ? JSON.stringify(user.cartData, null, 2) : 'No cart data available'}
                </pre>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default UserList;