import { LightStartup } from './LightStartup';

export interface LightConfig {
  archetype: string;
  function: string;
  direction: string;
  startup: LightStartup;
}
