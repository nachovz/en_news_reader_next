import React from 'react';
import { SPACING, COLORS } from 'styles/constants';

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

export const Skeleton = ({ full=false }) => (
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
);

export const SkeletonImage = ({ full=false }) => (
  <div className="skeleton_element" style={styles.skeleton_image}></div>

);