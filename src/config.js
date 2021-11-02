import { config } from "dotenv";
config();

export default {
  port: process.env.PORT || 3000,
  dbUser: 'dist',
  dbPassword: 'uadeuadeuadeuade88',
  dbServer: 'localhost',
  dbDatabase: 'distribuidas',
};
