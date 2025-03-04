import React from 'react';
import './AdminDashboard.css';
import bookIcon from 'bootstrap-icons/icons/book.svg';
import people from 'bootstrap-icons/icons/people.svg';
import file from 'bootstrap-icons/icons/file-earmark-check-fill.svg';
import deadline from 'bootstrap-icons/icons/calendar-event.svg';
import profileImage from '../../assets/image.png';

// Reusable Card component for displaying statistics
function Card({ title, value }) {
  return (
    <div className="card">
      <h3>{title}</h3>
      <p>{value}</p>
    </div>
  );
}

function AdminDashboard({ courses, user }) {
  const totalStudents = 25893; // Replace with dynamic data

  return (
    <div className="dashboard">
      <div className="header">
        <h1>Admin Dashboard</h1>
        <div className="user-info">
          <img 
            src={profileImage} 
            alt="User Avatar" 
          />
          <span>
            Hi, {user.name}<br />
            {user.role}
          </span>
        </div>
      </div>

      <h4>Welcome Back Admin, here's an overview of your Learning Platform</h4>

      <div className="overview-cards">
        <Card title="Total Students" value={totalStudents} />
        <Card title="Active Courses" value={courses.length} />
      </div>

      <div className="structured-overview">
        <table className="overview-table">
          <thead>
            <tr>
              <th>Overview</th>
              <th>Analytics</th>
              <th>Reports</th>
              <th>Notifications</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td><img src={people} alt="icon" /></td>
              <td>New Student Registration</td>
              <td>Emily Johnson Registered</td>
              <td>5 minutes ago</td>
            </tr>
            <tr>
              <td><img src={bookIcon} alt="icon" /></td>
              <td>New Course Published</td>
              <td>Data Science Fundamentals</td>
              <td>2 hours ago</td>
            </tr>
            <tr>
              <td><img src={file} alt="icon" /></td>
              <td>Assignment Submitted</td>
              <td>10 Submissions for Web Dev</td>
              <td>4 hours ago</td>
            </tr>
            <tr>
              <td><img src={deadline} alt="icon" /></td>
              <td>Course Deadline</td>
              <td>Python Basics ends tomorrow</td>
              <td>5 minutes ago</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default AdminDashboard;
