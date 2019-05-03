import {Variable} from './variable'


export class ExperimentalDesign {
  variables: Variable[];
  population: Population;
  detailedDesign: DetailedExperimentalDesign;
}

export class Population{
  objectivePopulation: String;
  individualDescription: String;
  accesiblePopulation:String;
}

export class SamplingMethod {
 description: String;
 random: boolean;
}

export class DetailedExperimentalDesign {
  analysisSpecs: AnalysisSpecificiation;  
}

export class FulllySpecifiedExperimentalDesign extends DetailedExperimentalDesign {
  groups:  ExperimentalGroup;
  protocol: ExperimentalProtocol;
  assignment: AssignmentMethod;
}

export class ExperimentalGroup {
  name: String;
  treatment: Treatment[];
  sizing: Sizing;
}

export class Treatment {
  variable: String;
  level: String;
}

export interface Sizing {}

export class EvenSizing {}

export class LiteralSizing {
  value: number;
}

export class AssignmentMethod {
  description: String;
  random: boolean;
  blockingVariables: String[];
}

export class ExperimentalProtocol {
  scheme: ExperimentalProtocolScheme;
  steps: ExperimentalProtocolStep[];
  constraints: ExperimentalProtocolConstraint;
}

export class ExperimentalProtocolConstraint {}

export class Precedence {
  former: String;
  later: String;
  minDelay: number;
  maxDelay: number;
}

export enum ExperimentalProtocolScheme{
  Sequential,
  Random
}

export class ExperimentalProtocolStep {
  id: String;  
  groups: String[];
}

export class Measurement extends ExperimentalProtocolStep {
  variables:String[];
}

export class Administering extends ExperimentalProtocolStep {
  treatments: Treatment[];
}