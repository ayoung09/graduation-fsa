import React from 'react';
import {connect} from 'react-redux';

const mapStateToProps = state => ({
  currentProfile: state.profiles.currentProfile,
});

const Profile = ({currentProfile}) => {
  return (
    <div>
    </div>
  );
};

export default connect(mapStateToProps)(Profile);
