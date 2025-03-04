import React, { useState } from 'react';
import './LearningActivities.css';

function LearningActivities({ courses }) {
  // State for the search query
  const [searchQuery, setSearchQuery] = useState('');

  // Filter courses based on search query (case-insensitive)
  const filteredCourses = courses.filter((course) =>
    course.title.toLowerCase().includes(searchQuery.toLowerCase())
  );

  // Handle the change in search input
  const handleSearchChange = (e) => {
    setSearchQuery(e.target.value);
  };

  return (
    <div className="learning-activities">
      <div className="header-container">
        <h2>Learning Activities</h2>
        <div className="filters">
          <input
            type="search"
            placeholder="Search..."
            value={searchQuery} // Bind the value to searchQuery state
            onChange={handleSearchChange} // Update state on change
          />
        </div>
      </div>

      <table>
        <thead>
          <tr>
            <th>Course Name</th>
            <th>Progress</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          {filteredCourses.length > 0 ? (
            filteredCourses.map((course, index) => (
              <tr key={index}>
                <td>{course.title}</td>
                <td>
                  <div className="progress-container">
                    <progress value={course.progress} max="100"></progress>
                    <span className="progress-text">{course.progress}%</span>
                  </div>
                </td>
                <td>
                  {course.progress === 100 ? 'Certificate' : 'Continue'}
                </td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan="3">No courses found</td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
}

export default LearningActivities;
