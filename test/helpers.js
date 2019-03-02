import fs       from 'fs';

let schema = fs.readFileSync(`${__dirname}/schemas/data_block_blob_schema.json`, 'utf8');
let schemaObj = JSON.parse(schema);

let logSchema = fs.readFileSync(`${__dirname}/schemas/log_schema.json`, 'utf8');
let logSchemObj = JSON.parse(logSchema);

let logSchemaV2 = fs.readFileSync(`${__dirname}/schemas/log_schemaV2.json`, 'utf8');
let logSchemV2Obj = JSON.parse(logSchemaV2);

let schemaV1 = fs.readFileSync(`${__dirname}/schemas/schema_v1.json`, 'utf8');
let schemaV1Obj = JSON.parse(schemaV1);

let schemaV2 = fs.readFileSync(`${__dirname}/schemas/schema_v2.json`, 'utf8');
let schemaV2Obj = JSON.parse(schemaV2);

let credentials = {
  accountId: process.env.AZURE_ACCOUNT_ID,
  accessKey: process.env.AZURE_ACCOUNT_KEY,
};

if (!credentials.accountId || !credentials.accessKey) {
  console.error('set $AZURE_ACCOUNT_ID and $AZURE_ACCOUNT_KEY to a testing Azure storage account.');
  process.exit(1);
}

module.exports = {
  schema: schemaObj,
  logSchema: logSchemObj,
  logSchemaV2: logSchemV2Obj,
  schemaV1: schemaV1Obj,
  schemaV2: schemaV2Obj,
  credentials: credentials,
};
