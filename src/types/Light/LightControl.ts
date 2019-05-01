import { LightCT } from './LightCT';

export interface LightControl {
  mindimlevel: number;
  maxlumen: number;
  colorgamuttype?: string;
  colorgamut?: number[][];
  ct: LightCT;
}
