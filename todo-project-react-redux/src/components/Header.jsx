import { useState } from "react";
import { useDispatch } from 'react-redux';
import tickImage from "../assets/images/double-tick.png";
import noteImage from "../assets/images/notes.png";
import plusImage from "../assets/images/plus.png";
import { addTodo, completeAllTodo, deleteCompletedTodo } from "../redux/todos/actions";

export default function Header() {
  const [text, setText] = useState('');
  const dispatch = useDispatch()
  const handleFormSubmit = (e) => {
    e.preventDefault();

    if(!text.trim()) {
      alert('Please write your todo!')
      return;
    }
    dispatch(addTodo(text))
    setText('')
  }
  const handleCompleteAllTask = () => {
    dispatch(completeAllTodo())
  }

  const clearCompletedTodo = () => {
    dispatch(deleteCompletedTodo())
  }

  return (
    <div>
      <form onSubmit={handleFormSubmit} className="flex items-center bg-gray-100 px-4 py-4 rounded-md">
        <img src={noteImage} className="w-6 h-6" alt="Add todo" />
        <input
          type="text"
          placeholder="Type your todo"
          className="w-full text-lg px-4 py-1 border-none outline-none bg-gray-100 text-gray-500"
          value={text}
          onChange={(e) => setText(e.target.value)}
        />
        <button
          type="submit"
          title="Submit"
          className={`appearance-none w-8 h-8   bg-no-repeat bg-contain`}
        >
          <img src={plusImage} alt="" />
        </button>
      </form>

      <ul className="flex justify-between my-4 text-xs text-gray-500">
        <li className="flex space-x-1 cursor-pointer" onClick={handleCompleteAllTask}>
          <img className="w-4 h-4" src={tickImage} alt="Complete" />
          <span>Complete All Tasks</span>
        </li>
        <li onClick={clearCompletedTodo} className="cursor-pointer">Clear completed</li>
      </ul>
    </div>
  );
}
