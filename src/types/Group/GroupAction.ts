export interface GroupAction {
  on: boolean;
  bri: number;
  alert: string;
  hue?: number;
  sat?: number;
  effect?: string;
  xy?: number[];
  ct?: number;
  colormode?: string;
}

// {
//     "name": "Bedroom",
//     "lights": [
//         "5"
//     ],
//     "sensors": [],
//     "type": "Room",
//     "state": {
//         "all_on": false,
//         "any_on": false
//     },
//     "recycle": false,
//     "class": "Bedroom",
//     "action": {
//         "on": false,
//         "bri": 61,
//         "alert": "none"
//     }
// }
