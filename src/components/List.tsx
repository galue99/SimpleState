import React from 'react';
import { Badge } from 'react-bootstrap';
import styled from 'styled-components';
import { nanoid as nano } from 'nanoid';

export const Span = styled.span`
    padding: 5px;
`;

interface Props {
  data: string[];
  type: string;
}

/**
 * @description Component for list for terrain and climates.
 * @param {Object} props - An object Props.
 * @param {string} props.data - Props Data.
 * @param {string[]} props.type - Props List Type.
 * @returns {JSX.Element} - Return List component.
 */
export const List: React.FC<Props> = ({ data, type }): JSX.Element => (
  <>
    {data.map((value: string) => (
      <Span key={nano()}>
        <Badge pill bg={type}>
          {value.toUpperCase()}
        </Badge>
      </Span>
    ))}
  </>
);
