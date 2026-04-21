import React, { useEffect, useState } from 'react';

function App() {
  const [greeting, setGreeting] = useState('');

  useEffect(() => {
    fetch('/api/cors/greeting')
      .then(res => res.json())
      .then(data => setGreeting(data.message || JSON.stringify(data)))
      .catch(() => setGreeting('Error fetching greeting'));
  }, []);

  return (
    <div style={{ padding: 40 }}>
      <h1>Greeting from Backend</h1>
      <p>{greeting}</p>
    </div>
  );
}

export default App;
