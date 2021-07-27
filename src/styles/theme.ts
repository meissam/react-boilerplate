import { DefaultTheme } from 'styled-components';

const fontSizeBase = 16;

export const theme: DefaultTheme = {
    typography: {
        fontFamily: 'Exo2',
        fontSize: {
            base: `${Math.floor(fontSizeBase * 1)}px`, // 16px
            lead: `${Math.floor(fontSizeBase * 1.125)}px`, // ~18px
            medium: `${Math.floor(fontSizeBase * 0.875)}px`, // ~14px
            small: `${Math.floor(fontSizeBase * 0.8125)}px`, // ~13px
            extraSmall: `${Math.floor(fontSizeBase * 0.75)}px`, // ~12px
            h1: `${Math.floor(fontSizeBase * 2.25)}px`, // ~36px
            h2: `${Math.floor(fontSizeBase * 2)}px`, // ~32px
            h3: `${Math.floor(fontSizeBase * 1.75)}px`, // ~28px
            h4: `${Math.floor(fontSizeBase * 1.5)}px`, // ~24px
            h5: `${Math.floor(fontSizeBase * 1.25)}px`, // ~20px
            h6: `${Math.floor(fontSizeBase * 1.125)}px`, // ~18px
        },
        lineHeight: {
            base: 1.5,
            h1: 1.15,
            h2: 1.2,
            h3: 1.25,
            h4: 1.3,
            h5: 1.35,
            h6: 1.4,
        },
        fontWeight: {
            hairline: 100,
            thin: 200,
            light: 300,
            normal: 400,
            medium: 500,
            semibold: 600,
            bold: 700,
            extrabold: 800,
            black: 900,
        },
    },

    borderRadius: {
        none: '0',
        sm: '.25rem',
        default: '.5rem',
        lg: '1rem',
        full: '9999px',
    },

    backgroundSize: {
        auto: 'auto',
        cover: 'cover',
        contain: 'contain',
    },

    breakpoint: {
        extraSmall: '576px',
        small: '768px',
        medium: '992px',
        large: '1200px',
        extraLarge: '1400px',
    },

    space: {
        default: '15px',
        doubled: '30px',
    },

    color: {
        grayDarker: ' #404040',
        grayDark: ' #606060',
        gray: ' #999999',
        grayLight: ' #eaeaea',
        grayLighter: ' #f5f5f5',
        white: ' #ffffff',
        black: ' #000000',
        primary: '#dc9814',
        info: '#93c4ef',
        success: ' #a7c04d',
        warning: ' #f8c313',
        danger: '#ef0568',
    },
};
