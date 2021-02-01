// @ts-check
import { initSchema } from '@aws-amplify/datastore';
import { schema } from './schema';



const { Tags, Skills, SkillsUsers, Users } = initSchema(schema);

export {
  Tags,
  Skills,
  SkillsUsers,
  Users
};