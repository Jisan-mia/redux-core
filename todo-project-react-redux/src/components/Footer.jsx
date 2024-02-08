import { useDispatch, useSelector } from 'react-redux';
import { changeFilterColors, changeFilterStatus } from '../redux/todosFilter/actions';
export default function Footer() {
  const todoList = useSelector(state => state.todos)
  const todosFilter = useSelector(state => state.todosFilter)
  const dispatch = useDispatch();
  const inCompletedTasks = todoList.filter(todoItem => todoItem.is_completed === false)

  const handleChangeStatus = (status) => {
    dispatch(changeFilterStatus(
      status
    ))
  }

  const handleChangeFilterColor = (color) => {
    dispatch(changeFilterColors(color))
  }
  return (
    <div className="mt-4 flex justify-between text-xs text-gray-500">
      <p>{inCompletedTasks.length} tasks left</p>
      <ul className="flex space-x-1 items-center text-xs">
        <li onClick={() => handleChangeStatus('All')} className={`cursor-pointer ${todosFilter.status === 'All' ? 'font-bold' : ''}`}>All</li>
        <li>|</li>
        <li onClick={() => handleChangeStatus('Incomplete')} className={`cursor-pointer ${todosFilter.status === 'Incomplete' ? 'font-bold' : ''}`}>Incomplete</li>
        <li>|</li>
        <li onClick={() => handleChangeStatus('Completed')} className={`cursor-pointer ${todosFilter.status === 'Completed' ? 'font-bold' : ''}`}>Completed</li>

        <li></li>
        <li></li>

        <li onClick={() => handleChangeFilterColor('green')} className={`h-3 w-3 border-2 border-green-500 md:hover:bg-green-500 rounded-full cursor-pointer ${todosFilter.colors.includes('green') ? 'bg-green-500' : ''}`}></li>
        <li onClick={() => handleChangeFilterColor('red')} className={`h-3 w-3 border-2 border-red-500 md:hover:bg-red-500 rounded-full cursor-pointer ${todosFilter.colors.includes('red') ? 'bg-red-500' : ''}`}></li>
        <li onClick={() => handleChangeFilterColor('yellow')} className={`h-3 w-3 border-2 border-yellow-500 md:hover:bg-yellow-500 rounded-full cursor-pointer ${todosFilter.colors.includes('yellow') ? 'bg-yellow-500' : ''}`}></li>
      </ul>
    </div>
  );
}
