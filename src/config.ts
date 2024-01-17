import 'dotenv/config';

console.log('process.env.MY_SECRET: ', process.env.MY_SECRET);

export default {
  mySecret: process.env.MY_SECRET,
};
