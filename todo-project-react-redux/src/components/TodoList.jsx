import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import Todo from "./Todo";
export default function TodoList() {
  const [filterTodoList, setFilterTodoList] = useState();
  const todosFilter = useSelector((state) => state.todosFilter);
  const todoList = useSelector((state) => state.todos);

  useEffect(() => {
    if (todosFilter.status === "All") {
      setFilterTodoList(
        todoList.filter(
          (todoItem) =>
            todosFilter.colors.includes(todoItem.color) ||
            !todosFilter.colors.length,
        ),
      );
    } else if (todosFilter.status === "Incomplete") {
      setFilterTodoList(
        todoList.filter(
          (todoItem) =>
            todoItem.is_completed === false &&
            (todosFilter.colors.includes(todoItem.color) ||
              !todosFilter.colors.length),
        ),
      );
    } else if (todosFilter.status === "Completed") {
      setFilterTodoList(
        todoList.filter(
          (todoItem) =>
            todoItem.is_completed === true &&
            (todosFilter.colors.includes(todoItem.color) ||
              !todosFilter.colors.length),
        ),
      );
    }
  }, [todosFilter, todoList]);

  return (
    <div className="mt-2 text-gray-700 text-sm max-h-[300px] overflow-y-auto">
      {filterTodoList?.map((todo) => (
        <Todo key={todo.id} todo={todo} />
      ))}
    </div>
  );
}
