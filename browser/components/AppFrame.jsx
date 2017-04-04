import React from 'react';
import {connect} from 'react-redux';
import {Link} from 'react-router';

import Thumbnail from './Thumbnail.jsx';

const mapStateToProps = state => ({
  students: state.thumbnails.students,
  instructors: state.thumbnails.instructors,
  images: state.thumbnails.images,
});

const AppFrame = ({ children, students, instructors, images }) => {
  return (
    <div className="app-frame">
      <div className="color-block"></div>
      <div className="header">
        <Link to="/"><h1 className="header-text">Chicago Cats Love Cookies</h1></Link>
      </div>

      {children ? children :
        <div>
          <div className="mid-section">
            <h1 className="mid-header-text">1701-FSA-CH</h1>
          </div>

          <div className="students-section">
            <div>
              <h2 className="sub-header">The Kittens</h2>
              <div className="thumbnails-container">
                {students.map(studentName => (
                  <Thumbnail key={studentName} name={studentName} image={images[studentName]} />
                  ))}
              </div>
            </div>
          </div>

          <div className="instructors-section">
            <h2 className="sub-header">The Big Cats</h2>
            <div className="thumbnails-container">
              {instructors.map(instructorName => (
                <Thumbnail key={instructorName} name={instructorName} image={images[instructorName]} />
                ))}
            </div>
          </div>
        </div>
      }

    </div>
  );
};

export default connect(mapStateToProps)(AppFrame);
