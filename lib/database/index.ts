import mongoose from 'mongoose';

const MONGODB_URI = process.env.MONGODB_URI;

//global as any untuk type import .con 
let cached = (global as any).mongoose || { conn: null, promise: null };

export const connectToDatabase = async() => {
    if (cached.conn) return cached.conn;
  
    // cek
    if(!MONGODB_URI) throw new Error('MONGODB_URI is missing');

    //connetcion yg udah ada dan connection yg mau d connect
  cached.promise = cached.promise || mongoose.connect(MONGODB_URI, {
    dbName: 'evently',
    // utk menonaktifkan buffering pada smua model
    bufferCommands: false,
  })

  cached.conn = await cached.promise;

  return cached.conn;

}

