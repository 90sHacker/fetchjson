import axios from "axios";

const url = 'https://jsonplaceholder.typicode.com/todos/1';

interface Todo {
  id: number,
  title: string,
  completed: boolean
}

axios.get(url).then(response => {
  const todo = response.data as Todo
  logData(todo.id, todo.title, todo.completed);  
});

const logData: (id: number, title: string, completed: boolean) => void = (id: number, title: string, completed: boolean) => {
  console.log(`
    The Todo with ${id},
    has a title of: ${title}
    is completed: ${completed}
  `);
};