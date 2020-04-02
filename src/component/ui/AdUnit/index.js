import React, { useEffect } from 'react';
import { AD_BOX, AD_BANNER, AD_SIZES } from 'data/constants';
import { BORDER_STYLE, COLORS, TEXT_SPACING } from 'styles/constants';
import {Bling as GPT} from "react-gpt";

const styles={
  unit_container: {
    width: '100%',
    textAlign: 'center',
    margin: `${TEXT_SPACING}px 0 ${TEXT_SPACING}px 0`,
    padding: `${TEXT_SPACING}px 0 ${TEXT_SPACING*2}px`,
    background: COLORS.background_dark
  },
  unit_block:{
    margin: '0 auto',
  },
  [AD_BOX]:{
    width: 300,
    height: 250,
  },
  [AD_BANNER]:{
    width: 320,
    height: 50,
  },
  unit_default_text:{
    lineHeight: '35px',
    fontStyle: 'italic',
    color: COLORS.text_light
  }
}

export default function({ type=AD_BOX }) {
  return(
    <div style={styles.unit_container}>
      <span style={styles.unit_default_text}>Publicidad</span>
      <div style={{...styles.unit_block, ...styles[type]}}>
      {typeof window !== 'undefined' &&
          <GPT
            adUnitPath={AD_SIZES[type].code}
            slotSize={AD_SIZES[type].size}
          />
      }
      </div>
    </div>
  );
}