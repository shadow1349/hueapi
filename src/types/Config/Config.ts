import { ConfigUpdateStatus, ConfigUpdateStatus2 } from './ConfigUpdateStatus';
import { ConfigPortalState } from './ConfigPortalState';
import { ConfigInternetServices } from './ConfigInternetServices';

export interface Config {
  name: string;
  zigbeechannel: number;
  bridgeid: string;
  mac: string;
  dhcp: boolean;
  ipaddress: string;
  netmask: string;
  gateway: string;
  proxyaddress: string;
  proxyport: number;
  UTC: Date;
  localtime: Date;
  timezone: string;
  modelid: string;
  datastoreversion: string;
  swversion: string;
  apiversion: string;
  swupdate: ConfigUpdateStatus;
  swupdate2: ConfigUpdateStatus2;
  linkbutton: boolean;
  portalservice: boolean;
  portalconnection: boolean;
  portalstate: ConfigPortalState;
  internetservices: ConfigInternetServices;
  factorynew: boolean;
  replacesbridgeid: any;
  starterkitid: string;
  whitelist: any;
}
