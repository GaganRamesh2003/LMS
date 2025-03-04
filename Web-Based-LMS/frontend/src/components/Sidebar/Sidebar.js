import React from 'react';
import { NavLink } from 'react-router-dom';
import { FaTachometerAlt, FaBook, FaCalendarAlt, FaCog, FaQuestionCircle } from 'react-icons/fa';
import './Sidebar.css';

function Sidebar() {
  const tabs = [
    { name: 'Dashboard', icon: <FaTachometerAlt /> },
    { name: 'My Course', icon: <FaBook /> },
    { name: 'My Events', icon: <FaCalendarAlt /> },
    { name: 'Settings', icon: <FaCog /> },
    { name: 'Assistance', icon: <FaQuestionCircle /> },
  ];

  return (
    <div className="sidebar">
      <div className="logo">EduTech</div>
      <ul>
        {tabs.map((tab) => (
          <li key={tab.name}>
            <NavLink
              to={tab.name === 'Dashboard' ? '/dashboard' : `/${tab.name.toLowerCase().replace(' ', '')}`}
              className="sidebar-link"
              activeClassName="active"
            >
              {tab.icon}
              <span className="tab-name">{tab.name}</span>
            </NavLink>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Sidebar;
