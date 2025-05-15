import React, { createContext, useState } from 'react';
export const ProfileContext = createContext();

export const ProfileProvider = ({ children }) => {
  const [profiles, setProfiles] = useState([]);

  const addProfile = (profile) => {
    setProfiles(prev => [...prev, { ...profile, id: Date.now().toString() }]);
  };

  const updateProfile = (id, updated) => {
    setProfiles(prev => prev.map(p => p.id === id ? { ...p, ...updated } : p));
  };

  const deleteProfile = (id) => {
    setProfiles(prev => prev.filter(p => p.id !== id));
  };

  return (
    <ProfileContext.Provider value={{ profiles, addProfile, updateProfile, deleteProfile }}>
      {children}
    </ProfileContext.Provider>
  );
};
