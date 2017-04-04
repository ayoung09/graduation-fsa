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
      <h3 className="profile-sub-header">Happiest Memory</h3>
      <p>{profile.happiest}</p>
      <h3 className="profile-sub-header">Funniest Memory</h3>
      <p>{profile.funniest}</p>
      <h3 className="profile-sub-header">Message to the litter:</h3>
      <p>{profile.quote}</p>
    </div>
  );
};

export default connect(mapStateToProps)(Profile);
