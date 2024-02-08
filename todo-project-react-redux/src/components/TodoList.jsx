import { useSelector } from 'react-redux';
import Todo from "./Todo";
export default function TodoList() {
  const todoList = useSelector(state => state.todos)
  console.log(todoList)
  return (
    <div className="mt-2 text-gray-700 text-sm max-h-[300px] overflow-y-auto">
      {todoList.map((todo) => <Todo key={todo.id} todo={todo} />)}
    </div>
  );
}
