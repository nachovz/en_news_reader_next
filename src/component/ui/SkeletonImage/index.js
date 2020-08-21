import React from 'react';

const styles = {
  skeleton_image:{
    height: '10rem',
  }
};

const SkeletonImage = () => {
  return(
    <div className="skeleton_element" style={styles.skeleton_image}></div>
  )
};

export default SkeletonImage;