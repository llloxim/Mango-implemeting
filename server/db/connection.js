import { MongoClient, ServerApiVersion } from "mongodb";
import * as dotenv from 'dotenv';
let result = dotenv.config();
if (result.error) {
  console.error("Error loading .env file:", result.error);
} else {
  console.log("Loaded environment variables from .env file.");
  console.log("Parsed variables:", result.parsed);
}
    //const uri = process.env.ATLAS_URI;
const uri = process.env.ATLAS_URI;
const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  },
});

try {
  // Connect the client to the server
  await client.connect();
  // Send a ping to confirm a successful connection
  await client.db("admin").command({ ping: 1 });
  console.log(
   "Pinged your deployment. You successfully connected to MongoDB!"
  );
} catch(err) {
  console.error(err);
}

let db = client.db("employees");

export default db;