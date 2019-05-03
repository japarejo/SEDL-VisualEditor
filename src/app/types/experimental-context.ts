export class ExperimentalContext {  
  organizations: Organization[];
  projects: Project[];
  people: Person[];

  keywords: String[];  
  classifiedAs: ClassificationTerm[];
}

export class Stakeholder{
  name: String;
  address: String;
  email: String;
  role: String;
  phone: String[];    
}

export class Organization extends Stakeholder {  
  departments: Organization[];
}

export class Person extends Stakeholder {
  organization: String;
}

export class Project {
  name: String;
  code: String;
  program: String;
  projectType: String;
  website: String;
}

export class ClassificationTerm {
  name: String;
  code: String;
  system: String;
}

export class ClassifcationSystem {
  name: String;
  description: String;
  url: String;
}