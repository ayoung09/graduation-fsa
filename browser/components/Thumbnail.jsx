import React from 'react';

const Thumbnail = ({name, image}) => {
  console.log('this is image in thumbnail: ', image);
  return (
    <div className="thumbnail-container">
      <img className="thumbnail-img" src={image} />
      <h3>{name}</h3>
    </div>
  );
};

export default Thumbnail;
