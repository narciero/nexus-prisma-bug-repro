import * as path from 'path';
import {
  makeSchema,
  objectType,
  mutationType,
} from '@nexus/schema';
import { nexusPrismaPlugin } from 'nexus-prisma';

const User = objectType({
  name: 'User',
  definition(t) {
    t.model.id();
    t.model.profile();
  },
});

const Profile = objectType({
  name: 'Profile',
  definition(t) {
    t.model.info();
  },
});

const Info = objectType({
  name: 'Info',
  definition(t) {
    t.model.id();
  }
});

const Mutation = mutationType({
  definition(t) {
    t.crud.updateManyProfile();

    t.crud.updateOneInfo();
  },
});

export const schema = makeSchema({
  types: [
    Mutation,
    User,
    Profile,
    Info,
  ],
  plugins: [nexusPrismaPlugin()],
  outputs: {
    typegen: path.join(__dirname, '../node_modules/@types/nexus-typegen/index.d.ts'),
  },
  typegenAutoConfig: {
    contextType: 'Context.Context',
    sources: [
      {
        source: '@prisma/client',
        alias: 'prisma',
      },
      {
        source: require.resolve('./context'),
        alias: 'Context',
      },
    ],
  },
});