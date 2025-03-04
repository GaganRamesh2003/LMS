// CourseItem.js
import React from 'react';
import './CourseItem.css';

function CourseItem({ course }) {
  return (
    <tr>
      <td>{course.title}</td>
      <td>{course.progress}%</td>
      <td>{course.status}</td>
    </tr>
  );
}

export default CourseItem;