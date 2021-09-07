import React from 'react';
import {Button as ButtonBootstrap} from 'react-bootstrap';
import styled from 'styled-components';


export interface IButtonProps {
  children?: React.ReactNode;
  onClick?:
    | ((event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void)
    | undefined;
}

const ButtonStyled = styled(ButtonBootstrap)`
  height: 45px;
`;


/**
 * @param props - Props.
 * @param props.children - Props Children.
 * @param {React.MouseEvent<HTMLButtonElement>} props.onClick - OnClick.
 * @returns {JSX.Element} - List component.
 */
export const Button: React.FC<IButtonProps> = ({ children, onClick }): JSX.Element => (
  <ButtonStyled
    onClick={onClick}
    variant="outline-secondary"
    type="button"
    data-testid="button"

  >
    {children}
  </ButtonStyled>
);
