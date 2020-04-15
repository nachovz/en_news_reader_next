import React from 'react';

const styles = {
  skeleton_image:{
    height: '10rem',
  }
};

export default function(){
  return(
    <div className="skeleton_element" style={styles.skeleton_image}></div>
  )
};