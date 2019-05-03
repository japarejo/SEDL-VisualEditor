export class Goal {
}

export class SimpleGoal extends Goal{
  description:string;
}

export class GQMGoal extends Goal{
  subject: String;
  purpose: String;
  focus: String;
  pointOfView: String;
  context: String;
}