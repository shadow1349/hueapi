import { LightState } from './LightState';
import { UpdateStatus } from './UpdateStatus';
import { LightCapabilities } from './LightCapabilities';
import { LightConfig } from './LightConfig';

export interface Light {
  id?: string;
  state: LightState;
  swupdate: UpdateStatus;
  capabilities: LightCapabilities;
  type: string;
  name: string;
  modelid: string;
  manufacturername: string;
  productname: string;
  uniqueid: string;
  swversion: string;
  swconfigid: string;
  productid: string;
  config: LightConfig;
}
