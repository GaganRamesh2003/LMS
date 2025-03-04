import React, { useState } from 'react';
import profileImage from '../../assets/image.png';

import {
  Box,
  Button,
  Input,
  IconButton,
  Avatar,
  Card,
  CardContent,
  Menu,
  MenuItem
} from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import NotificationsIcon from '@mui/icons-material/Notifications';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import EditIcon from '@mui/icons-material/Edit';
import DragHandleIcon from '@mui/icons-material/DragHandle';
import DeleteIcon from '@mui/icons-material/Delete';

const sectionTitles = [
  'Basic Information',
  'Advance Information',
  'Curriculum',
  'Publish Course'
];


const EduTechDashboard = () => {
  const [currentPage, setCurrentPage] = useState('Curriculum');
  const [sections, setSections] = useState([{
    name: '',
    lectures: []
  }]);
  const [anchorEl, setAnchorEl] = useState(null);

  const renderContent = () => {
    switch (currentPage) {
      case 'Basic Information':
        return <h3>Basic Information Content</h3>;
      case 'Advance Information':
        return <h3>Advance Information Content</h3>;
      case 'Curriculum':
        return (
          <Box>
            {/* Course Curriculum Header */}
            <Card
              style={{
                padding: '0.5rem',
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center'
              }}
            >
              <h3 style={{ fontWeight: 'bold', fontSize: '1.1rem' }}>Course Curriculum</h3>
              <div style={{ display: 'flex', gap: '0.5rem' }}>
                <Button
                  variant="contained"
                  style={{
                    backgroundColor: '#ffebee',
                    color: '#d32f2f',
                    textTransform: 'none',
                    fontSize: '0.9rem',
                    padding: '4px 8px',
                    minWidth: '100px',
                  }}
                >
                  Save
                </Button>
                <Button
                  variant="contained"
                  style={{
                    backgroundColor: '#ffebee',
                    color: '#d32f2f',
                    textTransform: 'none',
                    fontSize: '0.9rem',
                    padding: '4px 8px',
                    minWidth: '150px',
                  }}
                >
                  Save & Preview
                </Button>
              </div>
            </Card>

            {/* Sections */}
            {sections.map((section, sectionIndex) => (
              <Card
                key={sectionIndex}
                style={{
                  marginBottom: '1rem',
                  border: '1px solid #e0e0e0',
                  borderRadius: '6px'
                }}
              >
                <CardContent>
                  {/* Section Header */}
                  <div style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    border: '1px solid #00b4ff',
                    padding: '0.75rem',
                    borderRadius: '4px',
                    width: '98%'
                  }}>
                    <div style={{ display: 'flex', alignItems: 'center' }}>
                      <DragHandleIcon style={{
                        cursor: 'grab',
                        marginRight: '0.25rem',
                        fontSize: '1rem'
                      }} />
                      <h3 style={{
                        fontWeight: '500',
                        fontSize: '1rem',
                        margin: 0
                      }}>{`Section 0${sectionIndex + 1}: ${section.name}`}</h3>
                    </div>
                    <div style={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: '0.15rem',
                      justifyContent: 'flex-end'
                    }}>
                      <IconButton style={{ padding: '2px' }}>
                        <EditIcon style={{ fontSize: '0.75rem', color: '#4a4a4a' }} />
                      </IconButton>
                      <IconButton style={{ padding: '2px' }}>
                        <DeleteIcon style={{ fontSize: '0.75rem', color: '#4a4a4a' }} />
                      </IconButton>
                      <IconButton style={{ padding: '2px' }}>
                        <MoreVertIcon style={{ fontSize: '0.75rem', color: '#4a4a4a' }} />
                      </IconButton>
                    </div>
                  </div>

                  {/* Lectures */}
                  {section.lectures.map((lecture, lectureIndex) => (
                    <div
                      key={lectureIndex}
                      style={{
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'space-between',
                        marginTop: '0.5rem',
                        padding: '0.75rem',
                        border: '1px solid #e0e0e0',
                        borderRadius: '4px',
                      }}
                    >
                      <Input
                        value={lecture.name}
                        onChange={(e) => updateLecture(sectionIndex, lectureIndex, e.target.value)}
                        placeholder="Lecture name"
                        style={{
                          flexGrow: 1, // Ensures it takes up available space
                          borderBottom: '1px solid #e0e0e0',
                          padding: '0.5rem',
                          marginRight: '1rem', // Add a little space between the input and button
                        }}
                      />
                      <Button
                        style={{
                          textTransform: 'none',
                          backgroundColor: '#ffebee',
                          color: '#d32f2f',
                          padding: '0.25rem 0.5rem',
                          fontSize: '0.85rem',
                          minHeight: '1.5rem',
                          minWidth: '2.5rem',
                          width: 'fit-content',
                          marginLeft: 'auto', // Pushes the button to the right
                        }}
                        onClick={(e) => handleClick(e, sectionIndex, lectureIndex)}
                      >
                        Contents
                      </Button>

                      {/* Contents Menu */}
                      <Menu anchorEl={anchorEl} open={Boolean(anchorEl)} onClose={handleClose}>
                        {['Video', 'Attach File', 'Captions', 'Description', 'Lecture Notes'].map((option, idx) => (
                          <MenuItem key={idx} onClick={() => addContentOption(option)}>
                            {option}
                          </MenuItem>
                        ))}
                      </Menu>
                    </div>
                  ))}


                  {/* Add Lecture Button */}
                  <Button
                    onClick={() => addLecture(sectionIndex)}
                    style={{
                      textTransform: 'none',
                      marginTop: '1rem',
                      backgroundColor: '#ffebee',
                      color: '#d32f2f',
                      fontSize: '0.9rem',
                      padding: '0.5rem 1rem',
                      width: 'fit-content',
                    }}
                  >
                    Add Lecture
                  </Button>
                </CardContent>
              </Card>
            ))}
            {/* Add Section Button */}
            <Button
              variant="contained"
              onClick={addSection}
              style={{
                backgroundColor: '#ffebee',
                color: '#d32f2f',
                textTransform: 'none',
                marginTop: '1rem',
                padding: '0.5rem 1.5rem',

              }}
            >
              Add Section
            </Button>
            <Box
              display="flex"
              justifyContent="space-between" // Positions buttons at both ends
              marginTop="1rem"
              width="100%" // Ensures the container stretches across the available width
            >
              <Button
                variant="contained"
                onClick={handlePrevious}
                disabled={sectionTitles.indexOf(currentPage) === 0}
                style={{
                  backgroundColor: '#ffebee',
                  color: '#d32f2f',
                  textTransform: 'none',
                  padding: '0.5rem 1.5rem',
                  width: 'fit-content', // Ensures the button size fits its content
                }}
              >
                Previous
              </Button>

              <Button
                variant="contained"
                onClick={handleSaveNext}
                disabled={sectionTitles.indexOf(currentPage) === sectionTitles.length - 1}
                style={{
                  backgroundColor: '#ffebee',
                  color: '#d32f2f',
                  textTransform: 'none',
                  padding: '0.5rem 1.5rem',
                  width: 'fit-content', // Ensures the button size fits its content
                }}
              >
                Save & Next
              </Button>
            </Box>

          </Box>
        );
      case 'Publish Course':
        return <h3>Publish Course Content</h3>;
      default:
        return <h2>{currentPage}</h2>;
    }
  };

  // Function to add a new lecture
  const addLecture = (sectionIndex) => {
    const newSections = [...sections];
    newSections[sectionIndex].lectures.push({ name: '' });
    setSections(newSections);
  };

  // Function to update lecture name
  const updateLecture = (sectionIndex, lectureIndex, value) => {
    const newSections = [...sections];
    newSections[sectionIndex].lectures[lectureIndex].name = value;
    setSections(newSections);
  };

  // Function to handle "Contents" button click
  const handleClick = (event, sectionIndex, lectureIndex) => {
    setAnchorEl(event.currentTarget);
  };

  // Function to close the "Contents" menu
  const handleClose = () => {
    setAnchorEl(null);
  };

  // Function to handle adding content options (Video, etc.)
  const addContentOption = (option) => {
    console.log(`Added content option: ${option}`);
    handleClose();
  };

  // Function to add a new section
  const addSection = () => {
    setSections([...sections, { name: '', lectures: [] }]);
  };
  const handlePrevious = () => {
    const currentIndex = sectionTitles.indexOf(currentPage);
    if (currentIndex > 0) {
      setCurrentPage(sectionTitles[currentIndex - 1]);
    }
  };
  const handleSaveNext = () => {
    // Check if all sections and lectures have names
    const isValid = sections.every(section => {
      return section.name !== '' && section.lectures.every(lecture => lecture.name !== '');
    });

    if (!isValid) {
      alert("Please fill in all the required fields before proceeding.");
      return;
    }

    const currentIndex = sectionTitles.indexOf(currentPage);
    if (currentIndex < sectionTitles.length - 1) {
      setCurrentPage(sectionTitles[currentIndex + 1]);
    }
  };

  return (
    <Box display="flex">
      {/* Sidebar */}
      <Box
        width="200px"
        minHeight="100vh"
        bgcolor="#2c2c6c"
        color="white"
        display="flex"
        flexDirection="column"
        padding="2rem"
      >
        <h1 style={{
          fontSize: "1.5rem",
          marginBottom: "2rem",
          textAlign: 'center'
        }}>EduTech</h1>
        <Button
          variant="text"
          style={{
            color: "white",
            justifyContent: "start",
            marginBottom: "1rem",
            backgroundColor: currentPage === 'Dashboard' ? '#fff59d' : 'transparent'
          }}
          onClick={() => setCurrentPage('Dashboard')}
        >
          Dashboard
        </Button>
        <Button
          variant="text"
          style={{
            color: "white",
            justifyContent: "start",
            marginBottom: "1rem",
            backgroundColor: currentPage === 'Create New Course' ? '#fff59d' : 'transparent'
          }}
          onClick={() => setCurrentPage('Create New Course')}
        >
          Create New Course
        </Button>
        <Button
          variant="text"
          style={{
            color: "white",
            justifyContent: "start",
            marginBottom: "1rem",
            backgroundColor: currentPage === 'My Courses' ? '#fff59d' : 'transparent'
          }}
          onClick={() => setCurrentPage('My Courses')}
        >
          My Courses
        </Button>
        <Button
          variant="text"
          style={{
            color: "white",
            justifyContent: "start",
            marginBottom: "1rem",
            backgroundColor: currentPage === 'Settings' ? '#fff59d' : 'transparent'
          }}
          onClick={() => setCurrentPage('Settings')}
        >
          Settings
        </Button>


      </Box>

      {/* Main Content */}
      <Box
        flex="1"
        padding="2rem"
        bgcolor="#f8f8f8"
        display="flex"
        flexDirection="column"
        minHeight="100vh"
        overflow="auto"
      >
        {/* Header */}
        <Box
          width="98%"
          bgcolor="white"
          color="black"
          display="flex"
          alignItems="center"
          justifyContent="space-between"
          padding="1rem"
          boxShadow="0 2px 4px rgba(0, 0, 0, 0.1)"
        >
          <h2 style={{ margin: 0, fontWeight: 500 }}>
            Create a new course
          </h2>
          <Box display="flex" alignItems="center">
            <Box
              display="flex"
              alignItems="center"
              bgcolor="#f1f1f1"
              padding="0.5rem"
              borderRadius="4px"
            >
              <SearchIcon style={{ marginRight: '0.5rem' }} />
              <Input disableUnderline placeholder="Search" />
            </Box>
            <IconButton style={{
              marginLeft: '1rem',
              width: '40px',
              height: '40px'
            }}>
              <NotificationsIcon style={{ fontSize: '1.25rem' }} />
            </IconButton>
            <Avatar
              style={{ marginLeft: '1rem' }}
              src={profileImage}
            />
          </Box>
        </Box>

        {/* Section Buttons */}
        <Box
          display="flex"
          justifyContent="space-around"
          bgcolor="white"
          boxShadow="0 2px 4px rgba(0, 0, 0, 0.1)"
          padding="1rem"
          marginTop="2rem"
        >
          {sectionTitles.map((title, index) => (
            <Button
              key={index}
              variant="contained"
              style={{
                backgroundColor: currentPage === title ? '#1976d2' : '#e0e0e0',
                color: currentPage === title ? '#fff' : '#000',
                textTransform: 'none'
              }}
              onClick={() => setCurrentPage(title)}
            >
              {title}
            </Button>
          ))}
        </Box>

        {/* Render content based on section */}
        <Box flex="1" marginTop="2rem">
          {renderContent()}
        </Box>
      </Box>
    </Box>
  );
};

export default EduTechDashboard;
