import { CapabilitiesGeneral } from './CapabilitiesGeneral';

export interface CapabilitiesSensors {
  total: number;
  available: number;
  clip: CapabilitiesGeneral;
  zll: CapabilitiesGeneral;
  zpg: CapabilitiesGeneral;
}
