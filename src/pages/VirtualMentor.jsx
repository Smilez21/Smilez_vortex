import React, { useState, useEffect } from 'react';
import LLaMA3API from './LLaMA3API';

const VirtualMentor = () => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const storedUser = localStorage.getItem('user');
    if (storedUser) {
      setUser(JSON.parse(storedUser));
    }
  }, []);

  if (!user) {
    return <Login />;
  }

  return (
    <div className="container mx-auto p-4 pt-6 pb-8 bg-white rounded shadow-md">
      <h2 className="text-3xl font-bold mb-4">Virtual Mentor</h2>
      <ChatWindow user={user} />
    </div>
  );
};

export default VirtualMentor;