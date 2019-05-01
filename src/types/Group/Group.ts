import { GroupAction } from './GroupAction';
import { GroupState } from './GroupState';

export interface Group {
  name: string;
  lights: number[];
  type: string;
  sensors: number[];
  action: GroupAction;
  state?: GroupState;
  recycle?: boolean;
  class?: string;
}
