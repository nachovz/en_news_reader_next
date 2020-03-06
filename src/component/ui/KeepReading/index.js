import React from 'react';
import { DEVICE_WIDTH, TEXT_SPACING, COLORS } from 'styles/constants';

const styles={
    keep_reading:{
        width: DEVICE_WIDTH,
        textAlign: 'center',
        fontFamily: 'Merriweather',
        background: COLORS.primary,
        padding: `${TEXT_SPACING}px 0`,
        color: COLORS.text_contrast,
        fontWeight: 'bold',
        border: 'none'
    }
};

export default () =>(
<div style={styles.keep_reading}>
    <span>
    &#8643; Sigue leyendo... &#8642;
    </span>
</div>
)