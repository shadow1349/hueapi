import { Lights } from './classes';

export interface HueAPIOptions {
  username: string;
  huburl: string;
}

export class HueAPI {
  options: HueAPIOptions;
  lights: Lights;

  constructor(options: HueAPIOptions) {
    this.options = options;
    this.lights = new Lights(this.options);
  }
}
