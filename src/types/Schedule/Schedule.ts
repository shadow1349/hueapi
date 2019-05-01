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
