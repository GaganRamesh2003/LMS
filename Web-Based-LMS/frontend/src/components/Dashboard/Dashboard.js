import React from 'react';
import Overview from '../Overview/Overview';
import Statistics from '../Statistics/Statistics';
import LearningActivities from '../LearningActivities/LearningActivities';
import profileImage from '../../assets/image.png';

import './Dashboard.css';

function Dashboard({ courses, user }) {
  // Calculate the average progress
  const totalProgress = courses.reduce((acc, course) => acc + course.progress, 0);
  const averageProgress = totalProgress / courses.length;

  // Calculate the percentage of completed courses (i.e., 100% completion)
  const completedCourses = courses.filter((course) => course.progress === 100);
  const completedPercentage = (completedCourses.length / courses.length) * 100;

  return (
    <div className="dashboard">
      <div className="header">
        <h1>Student Dashboard</h1>
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

      <div className="dashboard-container">
        <Overview courses={courses} /> {/* Pass courses data to Overview */}
        <Statistics
          averageProgress={averageProgress}
          completedPercentage={completedPercentage}
          totalCourses={courses.length}
        />
      </div>

      <LearningActivities courses={courses} />
    </div>
  );
}

export default Dashboard;
