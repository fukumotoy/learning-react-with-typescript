/* eslint-disable import/prefer-default-export */
import { AppState } from '../../AppState';

export const getCount = (state: AppState): number => state.counter;
