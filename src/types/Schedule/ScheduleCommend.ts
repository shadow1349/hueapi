import { ScheduleCommandBody } from './ScheduleCommandBody';

export interface ScheduleCommand {
  address: string;
  method: string;
  body: ScheduleCommandBody;
}
