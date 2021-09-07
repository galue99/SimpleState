import React from 'react';
import {Card as CardBootstrap} from 'react-bootstrap';
import styled from 'styled-components';
import {useRecoilState} from 'recoil';
import { FaStar } from 'react-icons/fa';
import { ToastContainer, toast } from 'react-toastify';

import 'react-toastify/dist/ReactToastify.css';
import {List} from './List';
import {Planet} from '../models/Planet';
import {planetFavoritesListState} from '../store/atoms';

export const CardStyled = styled(CardBootstrap)`
    margin-bottom: 15px;
    margin-top: 15px;
    padding: 8px;
    min-height: 227px;
    border: 0;
    background-color: #fff88d;
    box-shadow: -3px 3px 3px #a4a2a2;
    &:after{
      content: "";
      position: absolute;
      top: 0%;
      right: 0%;
      width: 0px;
      height: 0px;
      border-top: 69px solid #c3c5c7; 
      border-left: 69px solid transparent;
    }
    &:before {
      content: "";
      position: absolute;
      top: 0%;
      right: 0%;
      width: 0px;
      height: 0px;
      border-bottom: 70px solid #fff88d;
      border-right: 70px solid transparent;
      -webkit-box-shadow: -7px 7px 7px rgba(0,0,0,0.3);
      -moz-box-shadow: -7px 7px 7px rgba(0,0,0,0.3);
      box-shadow: -7px 7px 7px rgba(0,0,0,0.3);
    } 
`;

type IconProps = {
  active?: 'none' | '',
}

const Icon = styled(FaStar)<IconProps>`
  cursor: pointer;
  display: ${(props) => props.active};
  color: #ee7004;
  margin-left: 10px;
  margin-bottom: 5px;
  &:hover {
    color: #f9a4a4;
  }
`;


/**
 * @param {Object} planet - An object.
 * @param {string} planet.id - Id.
 * @param {string} planet.name - Name.
 * @param {string} planet.diameter - Diameter.
 * @param {string[]} planet.climates - Climates.
 * @param {string[]} planet.terrains - Terrains.
 * @param {boolean | undefined} planet.active - Active.
 * @returns {JSX.Element} - List component.
 */
export const Card: React.FC<Planet> = ({
  name,
  diameter,
  climates,
  terrains,
  id,
  active
}): JSX.Element => {

  const [planet, setPlanets] = useRecoilState(planetFavoritesListState);

  /**
   * @description Add Planet to list favorite.
   * @returns {React.ReactText}  - Void Return.
   */
  const notify = ():React.ReactText => toast('Saved to your favorites...');

  /**
   * @description Added Planet to list favorite.
   * @returns {void}  - Void Return.
   */
  const addPlanet = ():void => {

    const newPlanet = {
      'allPlanets': {
        'planets': [{
          'name': name,
          'diameter': diameter,
          'climates': climates,
          'terrains': terrains,
          'id': id
        }]
      }
    };
    notify();
    setPlanets([...planet, newPlanet]);
  };

  return (
    <>
      <ToastContainer
        position="bottom-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
      <CardStyled key={id}>
        <CardBootstrap.Body>
          <CardBootstrap.Title data-testid="card">
            {name}
            <Icon
              onClick={() => addPlanet()}
              active={!active ? '' : 'none'}
            />
          </CardBootstrap.Title>
          <div>
            <p>
              Diameter:{' '}
              {diameter !== null
                ? `${String(
                    Number(diameter).toLocaleString('en-us', {
                      minimumFractionDigits: 2,
                    })
                  )} kms`
                : 'Unknown'}{' '}
            </p>
          </div>
          <div>
            Climates: <List data={climates} type="danger" />
          </div>
          <div>
            Terrains: <List data={terrains} type="primary" />
          </div>
        </CardBootstrap.Body>
      </CardStyled>
    </>
  );
};
