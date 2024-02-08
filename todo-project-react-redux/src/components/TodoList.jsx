import { useSelector } from "react-redux";
import Todo from "./Todo";
export default function TodoList() {
  const todosFilter = useSelector((state) => state.todosFilter);
  const todoList = useSelector((state) => state.todos);

  const filterByStatus = (todo) => {
    const {status} = todosFilter;

    if (status === "Completed") {
      return todo.is_completed;
    } else if (status === "Incomplete") {
      return !todo.is_completed;
    } else {
      return true;
    }
  };

  const filterByColors = (todo) => {
    const {colors} = todosFilter
    if(colors.length > 0) {
      return colors.includes(todo?.color)
    } else {
      return true
    }
  }

  return (
    <div className="mt-2 text-gray-700 text-sm max-h-[300px] overflow-y-auto">
      {todoList
        .filter(filterByStatus)
        .filter(filterByColors)
        .map((todo) => (
        <Todo key={todo.id} todo={todo} />
      ))}
    </div>
  );
}
