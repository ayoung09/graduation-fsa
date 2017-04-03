import React from 'react';
import {connect} from 'react-redux';
import {Link} from 'react-router';

import Thumbnail from './Thumbnail';

const mapStateToProps = state => ({
  students: state.thumbnails.students,
  instructors: state.thumbnails.instructors,
  images: state.thumbnails.images,
});

const AppFrame = ({ students, instructors, images }) => {
  return (
    <div className="app-frame">
      <div className="header">
        <h1 className="header-text">Chicago Cats Love Cookies</h1>
      </div>
      <div>
      </div>
    </div>
  );
};

export default connect(mapStateToProps)(AppFrame);
