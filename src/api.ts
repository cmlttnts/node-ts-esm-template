import axios from 'axios';

type Todo = {
  userId: number;
  id: number;
  title: string;
  completed: boolean;
};

export async function getTodos() {
  const res = await axios.get<Todo[]>('https://jsonplaceholder.typicode.com/todos', {
    timeout: 10_000,
  });

  return res.data;
}
