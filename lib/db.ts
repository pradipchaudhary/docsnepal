import mongoose, { Connection } from "mongoose";

const MONGODB_URI = process.env.MONGODB_URI as string;

if (!MONGODB_URI) {
  throw new Error("Please define MONGODB_URI in your environment variables.");
}

// Extend global type to avoid TypeScript error
declare global {
  // `var` instead of `let` to attach to Node.js global scope
  var mongoose: {
    conn: Connection | null;
    promise: Promise<Connection> | null;
  };
}

// Global cache (across hot reloads in development)
global.mongoose = global.mongoose || {
  conn: null,
  promise: null,
};

export async function connectToDatabase(): Promise<Connection> {
  if (global.mongoose.conn) {
    return global.mongoose.conn;
  }

  if (!global.mongoose.promise) {
    const opts = {
      bufferCommands: true,
      maxPoolSize: 10,
    };

    global.mongoose.promise = mongoose
      .connect(MONGODB_URI, opts)
      .then(() => mongoose.connection);
  }

  try {
    global.mongoose.conn = await global.mongoose.promise;
  } catch (error) {
    global.mongoose.promise = null;
    throw error;
  }

  return global.mongoose.conn;
}
