import dotenv from "dotenv";
dotenv.config();

//Port and DB URL configuration
export const PORT = process.env.PortNumber;
export const mongoDBURL = process.env.MongoDBURL;
