import React from 'react';
import { useRecoilValue } from 'recoil';
import {Image, Col, Row} from 'react-bootstrap';
import {nanoid as nano} from 'nanoid';
import styled from 'styled-components';
import {planetFavoritesListState} from '../store/atoms';
import {Card} from '../components/Card';
import {Planet} from '../models/Planet';
import image from '../assets/images/no-data.png';

const ImageStyled = styled(Image)`
    position: relative;
    display: block;
    width: 30%;
    margin: 0 auto;
    align-items: center;
    align-self: center;
    margin-top: 50px;
`;

/**
 * @returns {JSX.Element} - PlanetList component.
 */
export const Favorites = (): JSX.Element => {

  const planets = useRecoilValue(planetFavoritesListState);

  if (planets.length === 0) {
    return (
      <>
        <ImageStyled
          src={image}
          rounded
          data-testid="no-data"
        />
      </>
    );
  }

  return <>
    <Row>
      {
        planets.map((planet: any) => (
          planet.allPlanets.planets.map((value: Planet) => (
            <Col xs="12" sm="6" lg="4" key={nano()}>
              <Card
                name={value.name}
                diameter={value.diameter}
                climates={value.climates}
                terrains={value.terrains}
                id={value.id}
                active
              />
            </Col>
          ))
        ))
      }
    </Row>
  </>;
};
