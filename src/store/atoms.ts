import { atom } from 'recoil';
import {PlanetsData} from '../models/PlanetsData';

export const planetFavoritesListState = atom<PlanetsData[]>({
  key: 'planetFavoritesListState',
  default: [],
});

export const planetSearchState = atom<string>({
  key: 'search',
  default: '',
});
