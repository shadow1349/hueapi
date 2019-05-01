import { RuleCondition } from './RuleCondition';
import { RuleAction } from './RuleAction';

export interface Rule {
  name: string;
  lasttriggered: Date;
  creationtime: Date;
  timestriggered: number;
  owner: string;
  status: string;
  conditions: RuleCondition[];
  actions: RuleAction[];
}
