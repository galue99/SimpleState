import {Planet} from './Planet';

export type PlanetsData = {
  allPlanets: {
    planets: Array<Planet> | Planet,
  };
}
