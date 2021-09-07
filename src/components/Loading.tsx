import React from 'react';
import PacmanLoader from 'react-spinners/PacmanLoader';
import {css} from '@emotion/react';


const override = css`
  position: absolute;
  font-size: 0;
  height: 30px;
  width: 30px;
  display: block;
  margin: 0 auto;
  border-color: #8b8b8b;
  left: 50%;
  top: 50%;
`;


/**
 * @description Component to display loading.
 * @returns {JSX.Element} - Footer component.
 */
export const Loading: React.FC = (): JSX.Element => (
  <>
    <PacmanLoader css={override} size={30} color="#fff88d" loading />
  </>
);
