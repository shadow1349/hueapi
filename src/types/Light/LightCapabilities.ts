import { LightControl } from './LightControl';
import { LightStreaming } from './LightStreaming';

export interface LightCapabilities {
  certified: boolean;
  control: LightControl;
  streaming: LightStreaming;
}
