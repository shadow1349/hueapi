export interface LightOnOptions {
  id: string;
  brightness?: number;
  hue?: number;
  sat?: number;
  xy?: number[];
  ct?: number;
  alert?: 'none' | 'select' | 'lselect';
  effect?: 'none' | 'colorloop';
  transitiontime?: number;
  bri_inc?: number;
  sat_inc?: number;
  hue_inc?: number;
  ct_inc?: number;
  xy_inc?: number;
}
