import dotenv from 'dotenv';

dotenv.config();

export const TOKEN = process.env.TOKEN || '';
export const APPLICTION_ID = process.env.APPLICTION_ID || '';
export const GUILD_ID = process.env.GUILD_ID || '';
export const MONGO_DATABASE_NAME = process.env.MONGO_DATABASE_NAME || '';
export const MONGO_URI = process.env.MONGO_URI || '';