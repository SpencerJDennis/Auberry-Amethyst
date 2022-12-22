import React from 'react';
import PropTypes from 'prop-types';

const Gallery = (props) => {
  return (
    <div id='galleryStyle'>
      <h1 className="galleryHeader">Our Products</h1>
    <div id='gallery'>
      {props.photos.map((photo, index) => (
          <div class='photo'>
          <img src={photo.src} alt={photo.alt} key={index}
            onClick={()=>props.onGalleryClick(index)}/>
        </div>
      ))}
      </div>
      </div>
  )
}

Gallery.propTypes = {
  photos: PropTypes.arrayOf(PropTypes.object),
  onGalleryImageClick: PropTypes.func,
}
export default Gallery;