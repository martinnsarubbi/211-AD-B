import { config } from "dotenv";
config();

export default {
  port: process.env.PORT || 3000,
  dbUser: 'SA',
  dbPassword: 'Sonokjoght2.',
  dbServer: 'localhost',
  dbDatabase: 'distribuidas',
};
