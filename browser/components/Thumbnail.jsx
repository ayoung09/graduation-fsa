import React from 'react';
import {Link} from 'react-router';

const Thumbnail = ({name, image}) => {
  console.log('this is image in thumbnail: ', image);
  return (
    <Link to={`/profiles/${name}`}><div className="thumbnail-container">
      <img className="thumbnail-img" src={image} />
      <h3 className="thumbnail-name">{name}</h3>
    </div></Link>
  );
};

export default Thumbnail;
