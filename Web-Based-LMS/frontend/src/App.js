import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import Sidebar from './components/Sidebar/Sidebar.js';
import Dashboard from './components/Dashboard/Dashboard.js';
import MyCourse from './components/MyCourse/MyCourse.js';
import Settings from './components/Settings/Settings.js';
import LearningActivities from './components/LearningActivities/LearningActivities.js';
import AdminDashboard from './components/Dashboard/AdminDashboard.js';

import Curriculum from './components/Curriculum/Curriculum.js';

import './App.css';

function LayoutWithSidebar({ children, activeTab, setActiveTab }) {
  return (
    <div className="app-container">
      <Sidebar activeTab={activeTab} setActiveTab={setActiveTab} />
      <div className="main-content">{children}</div>
    </div>
  );
}

function App() {
  const [activeTab, setActiveTab] = useState('Dashboard');
  const [searchQuery, setSearchQuery] = useState('');

  const courses = [
    { title: 'Basics Web Programming', progress:100, status: 'Continue' },
    { title: 'Digital Marketing 101', progress: 0, status: 'Certificate' },
    { title: 'Data Science Fundamental', progress: 0, status: 'Continue' },
    { title: 'UI/UX Design', progress: 100, status: 'Continue' },
  ];

  const [user, setUser] = useState({
    name: 'John Doe',  // Replace with actual user's name
    role: 'Student',  // Set the role as 'Admin' or any other user role for regular users
  });

  const handleSearchChange = (event) => {
    setSearchQuery(event.target.value);
  };

  return (
    <Router>
      <Routes>
        {/* Redirect to appropriate dashboard based on user role */}
        <Route path="/" element={<Navigate to="/dashboard" />} />

        {/* Dynamic Dashboard: Display Admin or User Dashboard */}
        <Route
          path="/dashboard"
          element={
            <LayoutWithSidebar activeTab={activeTab} setActiveTab={setActiveTab}>
              {user.role === 'Admin' ? (
                <AdminDashboard courses={courses} user={user} />
              ) : (
                <Dashboard courses={courses} user={user} />
              )}
            </LayoutWithSidebar>
          }
        />

        <Route
          path="/mycourse"
          element={
            <LayoutWithSidebar activeTab={activeTab} setActiveTab={setActiveTab}>
              <MyCourse courses={courses} />
            </LayoutWithSidebar>
          }
        />

        <Route
          path="/settings"
          element={
            <LayoutWithSidebar activeTab={activeTab} setActiveTab={setActiveTab}>
              <Settings user={user} setUser={setUser} />
            </LayoutWithSidebar>
          }
        />

        <Route
          path="/learningactivities"
          element={
            <LayoutWithSidebar activeTab={activeTab} setActiveTab={setActiveTab}>
              <LearningActivities
                courses={courses}
                searchQuery={searchQuery}
                handleSearchChange={handleSearchChange}
              />
            </LayoutWithSidebar>
          }
        />

        {/* Curriculum Page without Sidebar */}
        <Route path="/curriculum" element={<Curriculum />} />
      </Routes>
    </Router>
  );
}

export default App;
