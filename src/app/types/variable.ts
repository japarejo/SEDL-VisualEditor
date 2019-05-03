export class Variable {
  name:String;
  domain: Domain;
  kind: ScaleKind;
  units: String;
}

export enum ScaleKind {
  Nominal,
  Ordinal,
  Inerval,
  Ratio
}

export class Domain{}

export class ExtensionDomain{
  levels: Level[];
}

export class Level {
  value: String;
}

export class IntensionDomain{
  contraints: Constraint[];
}

export class Constraint{}

export class IntervalConstraint extends Constraint {
  min: Level;
  max: Level;
}

export class FundamentalSetConstraint extends Constraint {
  fundamentalSet: FundamentalSet;
}

export enum FundamentalSet {
  N,
  Z,
  R,
  I,
  B,
  S
}