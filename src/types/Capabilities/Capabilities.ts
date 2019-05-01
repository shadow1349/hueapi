import { CapabilitiesGeneral } from './CapabilitiesGeneral';
import { CapabilitiesSensors } from './CapabilitiesSensors';
import { CapabilityScenes } from './CapabilitiesScenes';
import { CapabilitiesRules } from './CapabilitiesRules';
import { CapabilitiesStreaming } from './CapabilitiesStreaming';
import { CapabilitiesTimezones } from './CapabilitiesTimezones';

export interface Capabilities {
  lights: CapabilitiesGeneral;
  sensors: CapabilitiesSensors;
  scenes: CapabilityScenes;
  group: CapabilitiesGeneral;
  schedules: CapabilitiesGeneral;
  rules: CapabilitiesRules;
  resourcelinks: CapabilitiesGeneral;
  streaming: CapabilitiesStreaming;
  timezones: CapabilitiesTimezones;
}
