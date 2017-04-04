import React from 'react';
import {Link} from 'react-router';

const Thumbnail = ({name, image}) => {
  console.log('this is image in thumbnail: ', image);
  return (
    <Link to={`/profiles/${name}`}><div className="thumbnail-container">
      <img className="thumbnail-img" src={image} />
      <div className="thumbnail-name">
        <h3>{name}</h3>
      </div>
    </div></Link>
  );
};

export default Thumbnail;
