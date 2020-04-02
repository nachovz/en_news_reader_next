import React from 'react';
import Link from 'next/link';
import { menuElements } from 'data/constants';
import { COLORS, TEXT_SPACING, HEADER_CALC } from 'styles/constants';

const styles = {
  flyoutMenu: {
    width: `calc(100% - ${TEXT_SPACING*2}px)`,
    height: `calc(100vh - ${HEADER_CALC}px)`,
    backgroundColor: COLORS.background,
    position: 'fixed',
    top: HEADER_CALC,
    left: 0,
    transition: 'transform .3s cubic-bezier(0, .52, 0, 1)',
    overflow: 'scroll',
    zIndex: 1000,
    padding: TEXT_SPACING
  },
  hide: {
    transform: 'translate3d(-100vw, 0, 0)',
  },
  show: {
    transform: 'translate3d(0vw, 0, 0)',
    overflow: 'hidden',
  },
  links: {
    color: COLORS.primary,
    marginLeft: 15,
    textDecoration: 'none',
    textTransform: 'uppercase'
  }
};

export default function({opened, handleMouseDown}){
  return(
    <div
      onMouseDown={handleMouseDown}
      style={{...styles.flyoutMenu, ...opened ? styles.show : styles.hide} }>
      {menuElements.map( (elem, ind) => (
        <h2 key={ind}>
          <a href={elem.slug} style={styles.links}>{elem.tag}</a>
        </h2>
      ))}
    </div>
  )
}