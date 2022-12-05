import dotenv from 'dotenv';

dotenv.config();

export const TOKEN = process.env.TOKEN || '';
export const APPLICTION_ID = process.env.APPLICTION_ID || '';
export const GUILD_ID = process.env.GUILD_ID || '';