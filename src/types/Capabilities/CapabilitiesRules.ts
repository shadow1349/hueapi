import { CapabilitiesGeneral } from './CapabilitiesGeneral';

export interface CapabilitiesRules {
  total: number;
  available: number;
  conditions: CapabilitiesGeneral;
  actions: CapabilitiesGeneral;
}
