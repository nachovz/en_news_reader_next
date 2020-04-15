import React from 'react';

const styles = {
  skeleton_big_line:{
    height: '2rem',
  },
  skeleton_image:{
    height: '10rem',
  },
  skeleton_small_line:{
    height: '1rem',
  }
};

export default function({ full=false }){
  return(
    <div style={{minHeight: '50vh'}}>
      {!!full && 
        <React.Fragment>
          <div className="skeleton_element" style={styles.skeleton_big_line}></div>
          <div className="skeleton_element" style={styles.skeleton_big_line} ></div>
          <div className="skeleton_element" style={styles.skeleton_big_line}></div>
        </React.Fragment>
      }
      <div className="skeleton_element" style={styles.skeleton_image}></div>
      <div className="skeleton_element" style={styles.skeleton_small_line}></div>
      <div className="skeleton_element" style={styles.skeleton_small_line}></div>
      <div className="skeleton_element" style={styles.skeleton_small_line}></div>
      <div className="skeleton_element" style={styles.skeleton_small_line}></div>
      <div className="skeleton_element" style={styles.skeleton_small_line}></div>
    </div>
  )
};
