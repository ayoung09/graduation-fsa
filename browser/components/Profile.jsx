import React from 'react';
import {connect} from 'react-redux';

const mapStateToProps = state => ({
  currentProfile: state.profiles.currentProfile,
  profiles: state.profiles.profiles,
});

const Profile = ({currentProfile, profiles}) => {
  const profile = profiles[currentProfile];
  return (
    <div className="profile-container">
      <img className="cat-image" src={profile.cat} />
      <p className="cat-caption">{profile.caption}</p>
    </div>
  );
};

export default connect(mapStateToProps)(Profile);
