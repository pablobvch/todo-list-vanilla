import { TodoList } from "./classes/todo-list.class";
import { crearTodoHtml } from "./js/components";
import "./styles.css";

export const todoList = new TodoList();

todoList.todos.forEach(crearTodoHtml);
