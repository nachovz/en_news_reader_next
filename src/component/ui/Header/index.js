import React, { useState } from 'react';
import SlidingMenu from 'component/ui/SlidingMenu';
import HamburgerMenu from 'react-hamburger-menu';
import { logoSize } from 'images';
import { HEADER_HEIGHT, SPACING, BORDER_STYLE } from 'styles/constants';

const styles = {
  header:{
    display: 'flex',
    width: '100vw',
    height: HEADER_HEIGHT,
    position: 'fixed',
    zIndex: '1000',
    alignItems: 'center',
    padding: SPACING,
    overflow: 'hidden',
    background: 'white',
    borderBottom: BORDER_STYLE
  },
  header_logo: {
    flexGrow: 2,
    textAlign: 'center',
    height: '100%'
  },
  header_extras:{
    flex:1
  }
}

export default function (){
  const [opened, setOpened] = useState(false);

  return(
    <div style={styles.header}>
      <div style={styles.header_extras}>
        <HamburgerMenu isOpen={opened} menuClicked={() => setOpened(!opened)} />
      </div>
      <div style={styles.header_logo}>
        <a href="/home">
          <img src={logoSize()} height={HEADER_HEIGHT} alt="Logo El Nacional Venezuela"/>
        </a>
      </div>
      <div style={styles.header_extras}></div>
      <SlidingMenu opened={opened} handleMouseDown={() => setOpened(false)}/>
    </div>
  )
}