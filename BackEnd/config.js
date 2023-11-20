import dotenv from "dotenv";
dotenv.config();

export const PORT = process.env.PortNumber;
export const mongoDBURL = process.env.MongoDBURL;
