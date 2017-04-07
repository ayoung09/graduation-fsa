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
      <div className="cat-name">
        <h1>{currentProfile}-cat</h1>
      </div>
      <div className="cat-container container">
        <img className="cat-image" src={profile.cat} />
      </div>
      <div className="container">
        <p className="cat-caption">{profile.caption}</p>
      </div>
      <div>
        <h3 className="profile-sub-header">Happiest Memory</h3>
      </div>
      <div className="container">
        <p className="caption">{profile.happiest}</p>
      </div>
      <div>
        <h3 className="profile-sub-header">Funniest Memory</h3>
      </div>
      <div className="container">
        <p className="caption">{profile.funniest}</p>
      </div>
      <div>
        <h3 className="profile-sub-header">Message to the litter:</h3>
      </div>
      <div className="container">
        <p className="caption">{profile.quote}</p>
      </div>
      <div className="container">
        <img className="funny-image" src={profile.funnyPic} />
      </div>
    </div>
  );
};

export default connect(mapStateToProps)(Profile);
