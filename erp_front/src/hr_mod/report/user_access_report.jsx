import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import useFetch from '../../useFetch/useFetch';

function UserAccessPage() {
  const { userId } = useParams(); // Get the user ID from the URL
  const [user, setUser] = useState(null);
  const { fetchData, data, loadingFetch, errorFetch } = useFetch();

  useEffect(() => {
    const getUserData = async () => {
      const url = import.meta.env.VITE_ADRESS + '/api/user/${userId}';
      const result = await fetchData(url, { method: 'GET' });
      if (result && result.success) {
        setUser(result.data);
      }
    };

    getUserData();
  }, [userId, fetchData]);

  const updateAccess = async (newAccess) => {
    const url = `${import.meta.env.VITE_ADRESS}/api/user/access/${userId}`;
    const result = await fetchData(url, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(newAccess),
    });
    if (result && result.success) {
      setUser((prev) => ({ ...prev, ...newAccess }));
    }
  };

  if (loadingFetch) return <p>Loading...</p>;
  if (errorFetch) return <p>Error: {errorFetch}</p>;

  return (
    <div>
      <h1>Manage Access for {user?.userName}</h1>
      {/* Render detailed access management form */}
      <div>
        <label>
          <input
            type="checkbox"
            checked={user?.isAdmin || false}
            onChange={(e) => updateAccess({ isAdmin: e.target.checked })}
          />
          Admin Access
        </label>
        <label>
          <input
            type="checkbox"
            checked={user?.canEdit || false}
            onChange={(e) => updateAccess({ canEdit: e.target.checked })}
          />
          Edit Access
        </label>
        {/* Add more access options as needed */}
      </div>
    </div>
  );
}

export default UserAccessPage;
