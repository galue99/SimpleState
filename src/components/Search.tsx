import React, {useState} from 'react';
import styled from 'styled-components';
import {Row, Col, InputGroup, FormControl} from 'react-bootstrap';

import { useRecoilState } from 'recoil';
import {planetSearchState} from '../store/atoms';
import {Button} from './Button';

const RowStyled = styled(Row)`
  margin-top: 20px;
`;

const SearchInputStyled = styled(FormControl)`
  width: 100%;
  height: 45px;
  border-radius: 0.5rem;
  padding-left: 20px;
  margin-bottom: 15px;
  &:focus {
    outline: none !important;
    border: 1px solid gray;
    border-radius: 0.65rem;
    box-shadow: 0 0 10px #719ece;
    padding-left: 20px;
  }
`;

/**
 * @returns {JSX.Element} - Search component.
 */
export const Search: React.FC = (): JSX.Element => {

  const [, setPlanetSearch] = useRecoilState(planetSearchState);
  const [title, setTitle] = useState<string>('');

  /**
   * @param {React.ChangeEvent<HTMLInputElement>} event - Event element.
   */
  const changeHandler = (event: React.ChangeEvent<HTMLInputElement>):void => {
    if(event.target.value === ''){
      setPlanetSearch('');
      setTitle(event.target.value);
    } else {
      setTitle(event.target.value);
    }
  };

  /**
   * @param {React.KeyboardEvent<HTMLInputElement>} event - Event element.
   */
  const handleKeyPress = (event: React.KeyboardEvent<HTMLInputElement>):void => {
    if(event.key === 'Enter'){
      setPlanetSearch(title);
    }
  };

  /**
   * @returns {void}  - Void Return.
   */
  const addPlanet = ():void => {
    setPlanetSearch(title);
  };

  return (
    <RowStyled>
      <Col md={{ span: 6, offset: 3 }}>
        <InputGroup className="mb-3">
          <SearchInputStyled
            placeholder="Search"
            aria-label="search"
            value={title}
            data-testid="input"
            onChange={changeHandler}
            onKeyPress={handleKeyPress}
          />
          <Button data-testid="button" onClick={() => addPlanet()}>
            Search
          </Button>
        </InputGroup>
      </Col>
    </RowStyled>
  );
};
