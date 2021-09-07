import React from 'react';
import {Row} from 'react-bootstrap';
import {useRecoilValue} from 'recoil';
import {Search} from '../components/Search';
import {planetState} from '../store/selectors';
import {Pagination} from '../components/Pagination';


/**
 * @description List Planets.
 * @returns {JSX.Element} - PlanetList component.
 */
export const PlanetList = (): JSX.Element => {

  const planets = useRecoilValue(planetState);
  return (
    <>
      <Row>
        <Search />
        <Pagination data={planets} />
      </Row>
    </>
  );
};
