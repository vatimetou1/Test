import React, { useState } from 'react';
import { fetchUserData } from './apiService';

function UserFetcher() {
  const [nni, setNni] = useState('');
  const [tel, setTel] = useState('');
  const [userData, setUserData] = useState(null);
  const [error, setError] = useState(null);

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const data = await fetchUserData(nni, tel);
      setUserData(data);
      setError(null);
    } catch (err) {
      setError('Failed to fetch data');
      setUserData(null);
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label>
          NNI:
          <input type="text" value={nni} onChange={e => setNni(e.target.value)} />
        </label>
        <label>
          Téléphone:
          <input type="text" value={tel} onChange={e => setTel(e.target.value)} />
        </label>
        <button type="submit">Fetch Data</button>
      </form>
      {userData && <div>
        <pre>{JSON.stringify(userData, null, 2)}</pre>
      </div>}
      {error && <p>{error}</p>}
    </div>
  );
}

export default UserFetcher;
