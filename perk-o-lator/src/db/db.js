// db.js
import Dexie from 'dexie';

export const db = new Dexie('d2Api');
db.version(1).stores({
  items: '', // Primary key and indexed props
  plugsets: ''
});