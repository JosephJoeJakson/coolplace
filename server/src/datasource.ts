import { DataSource } from "typeorm";

const host = process.env.PGHOST || "localhost";
const port = process.env.PGPORT ? Number(process.env.PGPORT) : 5432;
const username = process.env.PGUSER || "postgres";
const password = process.env.PGPASSWORD || "supersecret";
const database = process.env.PGDATABASE || "postgres";

const datasource = new DataSource({
  type: "postgres",
  host,
  port,
  username,
  password,
  database,
  entities: [__dirname + "/entities/**/*.{js,ts}"],
  logging: true,
  synchronize: true,
});

export default datasource;
