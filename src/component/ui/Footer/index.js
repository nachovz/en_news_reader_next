import React from 'react';
import { COLORS, SPACING } from 'styles/constants';

const styles={
    footer:{
        maxWidth: '100vw',
        background: COLORS.background_darkest,
        textAlign: 'center',
        color: COLORS.text_light,
        padding: SPACING,
        fontSize: '0.8em',
        lineHeight: '1.5em'
    }
}

export default () => (
    <div style={styles.footer}>
        <span>
         © EL NACIONAL WEB - CARACAS-VENEZUELA 2014 © C.A. IBERONEWS LIMITED. TODOS LOS DERECHOS RESERVADOS RIF J-402838298.PROHIBIDA LA REPRODUCCIÓN TOTAL O PARCIAL DE CUALQUIER MATERIAL DE ESTE DIARIO SIN LA AUTORIZACIÓN EXPRESA DE LOS EDITORES 
        </span>
    </div>
)