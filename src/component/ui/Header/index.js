import React, { useState } from 'react';
import SlidingMenu from 'component/ui/SlidingMenu';
import HamburgerMenu from 'react-hamburger-menu';
import { HEADER_HEIGHT, HEADER_WIDTH, SPACING, BORDER_STYLE } from 'styles/constants';

const styles = {
  header:{
    display: 'flex',
    width: `calc(100vw - ${SPACING*2}px)`,
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

const Header = () => {
  const [opened, setOpened] = useState(false);

  return(
    <>
      <div style={styles.header}>
        <div style={styles.header_extras}>
          <HamburgerMenu 
						isOpen={opened} 
						menuClicked={() => setOpened(!opened)} 
						width={25}
						height={20}
						strokeWidth={2}
					/>
        </div>
        <div style={styles.header_logo}>
          <a href="/">
            <img src="/logo_en.png" srcSet="/logo_en@2x.png" height={HEADER_HEIGHT} width={HEADER_WIDTH} alt="Logo El Nacional Venezuela"/>
          </a>
        </div>
        <div style={styles.header_extras}></div>
        
      </div>
      <SlidingMenu opened={opened} handleMouseDown={() => setOpened(false)}/>
    </>
  )
}

export default Header;