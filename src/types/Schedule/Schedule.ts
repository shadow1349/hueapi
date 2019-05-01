import { ScheduleCommand } from './ScheduleCommend';

export interface Schedule {
  name: string;
  description: string;
  time: string;
  created: Date;
  status: string;
  autodelete: boolean;
  starttime: Date;
  command: ScheduleCommand;
}

// {
//     "name": "Timer",
//     "description": "",
//     "command": {
//         "address": "/api/s95jtYH8HUVWNkCO/groups/0/action",
//         "body": {
//             "scene": "02b12e930-off-0"
//         },
//         "method": "PUT"
//     },
//     "time": "PT00:01:00",
//     "created": "2014-06-23T13:39:16",
//     "status": "disabled",
//     "autodelete": false,
//     "starttime": "2014-06-23T13:39:16"
// }
