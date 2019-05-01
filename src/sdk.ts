import { Lights, Groups } from './classes';

export interface HueAPIOptions {
  username: string;
  huburl: string;
}

export class HueAPI {
  options: HueAPIOptions;
  lights: Lights;
  groups: Groups;

  constructor(options: HueAPIOptions) {
    this.options = options;

    this.lights = new Lights(this.options);
    this.groups = new Groups(this.options);
  }
}
