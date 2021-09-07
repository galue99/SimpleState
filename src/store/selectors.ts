import {selector} from 'recoil';
import {client} from '../apolloClient/Client';
import {GET_ALL_PLANETS} from '../querys/query';
import {planetSearchState} from './atoms';
import {PlanetsData} from '../models/PlanetsData';
import {Planet} from '../models/Planet';


export const planetsQuery = selector<PlanetsData[]>({
  key: 'planetsQuery',
  /**
   * @returns {void} Get - Return Planets List.
   */
  get: async() =>
    client
    .query({ query: GET_ALL_PLANETS })
    .then((response) => response.data)
});

export const planetState = selector<PlanetsData[]>({
  key: 'planetState',
  /**
   * @param object - Root Object.
   * @param object.get - Function get.
   * @returns {PlanetsData[]} PlanetsList - Return Planet List.
   */
  get: ({ get }) => {

    const data = get(planetsQuery);
    const search = get(planetSearchState);

    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    return data.allPlanets.planets.filter((planet: Planet) => hasName(planet, search));
  },
});

/**
 * @param {Object} planet - Object Planets.
 * @param {string} search - String value.
 * @returns {boolean} Recipe - Return Boolean value.
 */
function hasName(planet: Planet, search: string): boolean {
  if (search === '') return true;
  return planet.name.toLowerCase().indexOf(search.toLowerCase()) >= 0;
}


