import { Button } from 'antd';
import styled from 'styled-components';

const StyledButton = styled(Button)`
    border-radius: ${({ theme }) => theme.borderRadius.default};
`;

export const KitButton = ({ ...props }) => {
    return <StyledButton {...props} />;
};
