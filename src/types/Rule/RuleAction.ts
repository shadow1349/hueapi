import { RuleActionBody } from './RuleActionBody';

export interface RuleAction {
  address: string;
  method: string;
  body: RuleActionBody;
}
