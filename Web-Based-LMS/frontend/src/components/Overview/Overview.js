import React from 'react';
import './Overview.css'; // Import your CSS file

const Overview = ({ courses }) => {
  // Create video data based on course progress (use course title for the date)
  const videoData = courses.map((course) => ({
    date: course.title, // You could use any other date-related property if available
    videos: course.progress, // Progress percentage of each course
  }));

  // Calculate the maximum number of videos for scaling the bars
  const maxVideos = Math.max(...videoData.map(item => item.videos));

  // Debugging: log the max value to confirm it's being calculated correctly
  console.log("Max Videos: ", maxVideos);

  return (
    <div className="overview-container">
      <div className="overview-header">
        <div className="overview-title">Overview</div>
      </div>
      <div className="video-progress-chart">
        {videoData.map((item, index) => (
          <div className="chart-bar-container" key={index}>
            <div 
              className="chart-bar" 
              style={{
                // Calculate height as percentage of the maximum videos value
                height: `${(maxVideos === 0 ? 0 : (item.videos / maxVideos) * 100)}%`
              }}
              data-videos={item.videos} // Used for styling (e.g., for 0 videos)
            >
              {/* Optionally show video count for a specific course (highlight the course with max progress) */}
              {item.videos === maxVideos && <span className="video-count">{item.videos}%</span>}
            </div>
            <div className="chart-date">{item.date}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Overview;
