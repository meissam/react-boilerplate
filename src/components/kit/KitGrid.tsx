import { Row, Col } from 'antd';
import styled, { css } from 'styled-components';

const Container = styled.div`
    width: 100%;
    padding-right: ${({ theme }) => theme.space.default};
    padding-left: ${({ theme }) => theme.space.default};
    margin-right: auto;
    margin-left: auto;

    ${(props) =>
        !props?.fluid &&
        css`
            @media (min-width: ${({ theme }) => theme.breakpoint.min.extraSmall}) {
                max-width: 540px;
            }
            @media (min-width: ${({ theme }) => theme.breakpoint.min.small}) {
                max-width: 720px;
            }
            @media (min-width: ${({ theme }) => theme.breakpoint.min.medium}) {
                max-width: 960px;
            }
            @media (min-width: ${({ theme }) => theme.breakpoint.min.large}) {
                max-width: 1140px;
            }
            @media (min-width: ${({ theme }) => theme.breakpoint.min.extraLarge}) {
                max-width: 1320px;
            }
        `}
`;

export const KitContainer = Container;
export const KitRow = Row;
export const KitCol = Col;
