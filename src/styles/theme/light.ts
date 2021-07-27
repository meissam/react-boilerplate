import { DefaultTheme } from 'styled-components';

const fontSizeBase = 16;

export const lightTheme: DefaultTheme = {
    typography: {
        fontFamily: 'Gotham',
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
        fontWeights: {
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
        max: {
            extraSmall: '575.98px',
            small: '767.98px',
            medium: '991.98px',
            large: '1199.98px',
            extraLarge: '1399.98px',
        },
        min: {
            extraSmall: '576px',
            small: '768px',
            medium: '992px',
            large: '1200px',
            extraLarge: '1400px',
        },
    },

    space: {
        default: '15px',
        doubled: '30px',
    },

    button: {
        default: {
            height: '46px',
            fontSize: `${Math.floor(fontSizeBase * 1)}px`,
        },
        large: {
            height: '54px',
            fontSize: `${Math.floor(fontSizeBase * 1.125)}px`,
        },
        small: {
            height: '36px',
            fontSize: `${Math.floor(fontSizeBase * 0.8125)}px`,
        },
    },

    shadow: {
        default: `0 3px 15px rgba(0,0,0,0.2)`,
        deep: `0 6px 30px rgba(0,0,0,0.3)`,
    },

    buttonShadow: {
        default: `0 3px 15px rgba(102,102,102,0.4)`,
        deep: `0 6px 30px rgba(102,102,102,0.4)`,
    },

    color: {
        white: '#fff',
        black: '#000',
        transparent: 'transparent',
        blue: '#0066cc',
        darkBlue: '#023c9c',
        pink: '#ea0159',
        yellow: '#ffbb04',
        cyan: '#03cfd6',
        gray: '#666666',
        lightGray: '#b4bad2',
        orange: '#F86722',
        darkOrange: '#F86722',
        green: '#02882e',
        lightGreen: '#689c01',
        lightPurple: '#b5affb',
        lagoon: '#038088',
        lightLagoon: '#019f9f',
        red: '#e03204',

        // informative colors
        info: '#03cfd6',
        success: '#02882e',
        warning: '#F86722',
        danger: '#e03204',

        // body colors
        bodyBg: '#fff',
        bodyColor: '#000',

        // Inline links
        link: '#038088',
        linkHover: '#019f9f',
    },
};
