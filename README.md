# Steps to reproduce

1. `yarn install`
1. `yarn build`

# Expected output
During `yarn build`, the `prisma generate` command should succeed, but then when generating `nexus` types you should see the following error
````
$ NODE_ENV=development ts-node-dev --transpileOnly src/schema
Using ts-node version 8.8.2, typescript version 3.8.3
✨  Done in 2.08s.
node_modules/@types/nexus-typegen/index.d.ts:53:26 - error TS2339: Property 'ProfileUpdateManyDataInput' does not exist on type 'NexusGenInputs'.

53     data: NexusGenInputs['ProfileUpdateManyDataInput']; // ProfileUpdateManyDataInput!
                            ~~~~~~~~~~~~~~~~~~~~~~~~~~~~

node_modules/@types/nexus-typegen/index.d.ts:160:46 - error TS2339: Property 'ProfileUpdateManyDataInput' does not exist on type 'NexusGenInputs'.

160   ProfileUpdateManyDataInput: NexusGenInputs['ProfileUpdateManyDataInput'];
                                                 ~~~~~~~~~~~~~~~~~~~~~~~~~~~~

node_modules/@types/nexus-typegen/index.d.ts:161:50 - error TS2339: Property 'ProfileUpdateManyMutationInput' does not exist on type 'NexusGenInputs'.

161   ProfileUpdateManyMutationInput: NexusGenInputs['ProfileUpdateManyMutationInput'];
                                                     ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

node_modules/@types/nexus-typegen/index.d.ts:205:28 - error TS2339: Property 'ProfileUpdateManyMutationInput' does not exist on type 'NexusGenInputs'.

205       data: NexusGenInputs['ProfileUpdateManyMutationInput']; // ProfileUpdateManyMutationInput!
                               ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

````
