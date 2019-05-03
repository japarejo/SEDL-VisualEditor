import {Variable} from './variable'

export class Hypothesis {
  dependentVariable: String;
}

export class Descriptive extends Hypothesis{
  assertion: Assertion;
}

export interface Assertion {
  evaluate(): boolean;
}

export class RelationalHypothesis extends Hypothesis {
  indepenendentVariables: String[];
}

export class AssociationalHypothesis extends RelationalHypothesis {
  relationship: RelationshipSpecification;
}

export enum RelationshipSpecification{
  Linearity,
  Montonicity
}
export class DifferentialHypothesis extends RelationalHypothesis {}
