import React, { useState } from 'react';
import './Settings.css'; // Import the external CSS for styling

function Settings({ user, setUser }) {
  const [name, setName] = useState(user.name);
  const [role, setRole] = useState(user.role);

  const handleSubmit = (e) => {
    e.preventDefault();
    setUser({ name, role });  // Update the user data
  };

  return (
    <div className="settings">
      <div className="card">
        <h2>Edit Profile</h2>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label>Name</label>
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
          </div>
          <div className="form-group">
            <label>Role</label>
            <input
              type="text"
              value={role}
              onChange={(e) => setRole(e.target.value)}
              required
            />
          </div>
          <button type="submit">Save Changes</button>
        </form>
      </div>
    </div>
  );
}

export default Settings;
