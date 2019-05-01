import { ConfigDeviceTypes } from './ConfigDeviceTypes';
import { ConfigBridge } from './ConfigBridge';
import { ConfigAutoInstall } from './ConfigAutoInstall';

export interface ConfigUpdateStatus {
  updatestate: number;
  checkforupdate: boolean;
  devicetypes: ConfigDeviceTypes;
  url: string;
  text: string;
  notify: boolean;
}

export interface ConfigUpdateStatus2 {
  checkforupdate: boolean;
  lastchange: Date;
  bridge: ConfigBridge;
  state: string;
  autoinstall: ConfigAutoInstall;
}
