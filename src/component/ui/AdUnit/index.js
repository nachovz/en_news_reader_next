import React from 'react';
import { AD_BOX, AD_BANNER, AD_SIZES } from 'data/constants';
import { COLORS, TEXT_SPACING } from 'styles/constants';
import {Bling as GPT} from "react-gpt";

const styles={
  unit_container: {
    width: '100%',
    textAlign: 'center',
    padding: `0 0 ${TEXT_SPACING}px`,
    background: COLORS.background_dark,
		margin: `${TEXT_SPACING/2}px 0`
  },
  unit_block:{
    margin: '0 auto',
  },
  [AD_BOX]:{
    height: 290,
  },
  [AD_BANNER]:{
    height: 80,
  },
  unit_default_text:{
    lineHeight: `${TEXT_SPACING+10}px`,
		fontSize: '11px',
    color: COLORS.text_light,
    textTransform: 'uppercase',
		letterSpacing: '0.5px'
  }
}

const AdUnit = ({ type=AD_BOX }) => {
  return(
    <div style={{...styles.unit_container,...styles[type]}}>
      <span style={styles.unit_default_text}>Publicidad</span>
      <div style={{...styles.unit_block}}>
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

export default AdUnit;