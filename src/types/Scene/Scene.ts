import { SceneAppData } from './SceneAppData';

export interface Scene {
  name: string;
  lights: number[];
  owner: string;
  recycle: boolean;
  locked: boolean;
  appdata: SceneAppData;
  picture: string;
  lastupdated: Date;
  version: number;
}
