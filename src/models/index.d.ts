import { ModelInit, MutableModel, PersistentModelConstructor } from "@aws-amplify/datastore";





export declare class Tags {
  readonly id: string;
  readonly name: string;
  readonly skills?: (Skills | null)[];
  constructor(init: ModelInit<Tags>);
  static copyOf(source: Tags, mutator: (draft: MutableModel<Tags>) => MutableModel<Tags> | void): Tags;
}

export declare class Skills {
  readonly id: string;
  readonly name: string;
  readonly users?: (SkillsUsers | null)[];
  readonly tagsID: string;
  constructor(init: ModelInit<Skills>);
  static copyOf(source: Skills, mutator: (draft: MutableModel<Skills>) => MutableModel<Skills> | void): Skills;
}

export declare class SkillsUsers {
  readonly id: string;
  readonly skills: Skills;
  readonly users: Users;
  constructor(init: ModelInit<SkillsUsers>);
  static copyOf(source: SkillsUsers, mutator: (draft: MutableModel<SkillsUsers>) => MutableModel<SkillsUsers> | void): SkillsUsers;
}

export declare class Users {
  readonly id: string;
  readonly name: string;
  readonly email: string;
  readonly skills?: (SkillsUsers | null)[];
  constructor(init: ModelInit<Users>);
  static copyOf(source: Users, mutator: (draft: MutableModel<Users>) => MutableModel<Users> | void): Users;
}