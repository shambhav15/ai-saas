import mongoose, { Mongoose } from "mongoose";

const MOONGOOSE_URL = process.env.MONGODB_URI;

interface MongooseConnection {
  conn: Mongoose | null;
  promise: Promise<typeof mongoose> | null;
}

let cached: MongooseConnection = (global as any).mongoose;

if (!cached) {
  cached = (global as any).mongoose = { conn: null, promise: null };
}

export const connectToDatabase = async () => {
  if (cached.conn) return cached.conn;

  if (!MOONGOOSE_URL) throw new Error("MONGODB_URI is not defined");

  cached.promise =
    cached.promise ||
    mongoose.connect(MOONGOOSE_URL, {
      dbName: "imaginify",
      bufferCommands: false,
    });
  cached.conn = await cached.promise;

  return cached.conn;
};
