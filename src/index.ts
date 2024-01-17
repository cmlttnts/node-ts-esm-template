import { getTodos } from './api.js';
import { squared } from './basic.js';
import config from './config.js';

console.log(squared(2));
console.log(squared(12));

console.log('config from index.ts', config);

// what? top level await? super cool!
const todos = await getTodos();

console.log('todos: ', todos);
