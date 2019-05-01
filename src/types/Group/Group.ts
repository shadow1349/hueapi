import { GroupAction } from './GroupAction';
import { GroupState } from './GroupState';

export interface Group {
  id?: string;
  name: string;
  lights: string[];
  type: string;
  sensors: string[];
  action: GroupAction;
  state?: GroupState;
  recycle?: boolean;
  class?: string;
}
