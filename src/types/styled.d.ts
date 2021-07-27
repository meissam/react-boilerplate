import 'styled-components';

// and extend them!
declare module 'styled-components' {
    export interface DefaultTheme {
        typography: {
            fontFamily: string;
            fontSize: {
                base: string;
                lead: string;
                medium: string;
                small: string;
                extraSmall: string;
                h1: string;
                h2: string;
                h3: string;
                h4: string;
                h5: string;
                h6: string;
            };
            lineHeight: {
                base: number;
                h1: number;
                h2: number;
                h3: number;
                h4: number;
                h5: number;
                h6: number;
            };
            fontWeight: {
                hairline: number;
                thin: number;
                light: number;
                normal: number;
                medium: number;
                semibold: number;
                bold: number;
                extrabold: number;
                black: number;
            };
        };

        borderRadius: {
            none: string;
            sm: string;
            default: string;
            lg: string;
            full: string;
        };

        backgroundSize: {
            auto: string;
            cover: string;
            contain: string;
        };

        breakpoint: {
            extraSmall: string;
            small: string;
            medium: string;
            large: string;
            extraLarge: string;
        };

        space: {
            default: string;
            doubled: string;
        };

        color: {
            grayDarker?: string;
            grayDark?: string;
            gray?: string;
            grayLight?: string;
            grayLighter?: string;
            white?: string;
            black?: string;
            primary?: string;
            info?: string;
            success?: string;
            warning?: string;
            danger?: string;
        };
    }
}
