import './App.css';
import { useState } from 'react';

function App() {
  const [toDoItem, setToDoItem] = useState("");
  const [toDoList, setToDoList] = useState([]);

  const addTask = () => {
    if (toDoItem.trim() !== "") {
      setToDoList((prevList) => [...prevList, toDoItem]);
      setToDoItem("");
    }
  };

  const deleteTask = (index) => {
    setToDoList((prevList) => prevList.filter((_, taskIndex) => taskIndex !== index));
  };

  return (
    <div className="flex justify-center items-center h-screen bg-gradient-to-b from-redCustom to-yellowCustom">
      <div className="w-2/3 xl:w-1/3 h-2/3 bg-white rounded-xl p-10 shadow-lg">
        <h1 className="my-10 text-3xl font-bold text-center text-gray-800">To-Do List</h1>
        <div className="flex items-center mb-6">
          <input
            className="bg-gray-100 p-4 text-black rounded-l-full w-full border-2 border-gray-300 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent"
            type="text"
            id="input"
            placeholder="Enter something"
            value={toDoItem}
            onChange={(e) => setToDoItem(e.target.value)}
          />
          <button
            className="bg-orangeCustom p-4 px-8 border-2 border-gray-300 rounded-r-full text-white font-bold transition duration-300 ease-in-out hover:bg-orange-600 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:ring-opacity-50"
            onClick={addTask}
          >
            Add
          </button>
        </div>
        <ul id="taskList" className="space-y-2">
          {toDoList.map((task, index) => (
            <li
              key={index}
              className="flex justify-between items-center bg-gray-100 px-4 py-2 rounded-full shadow text-gray-800"
            >
              <div className="flex items-center">
                <input type="checkbox" id="accept" className="mr-2" />
                <span>{task}</span>
              </div>
              <button
                className="bg-red-500 text-white rounded-full w-6 h-6 flex items-center justify-center hover:bg-red-700 focus:outline-none"
                onClick={() => deleteTask(index)}
              >
                X
              </button>
            </li>
          ))}
        </ul>
      </div>
      <footer className='fixed bottom-0 left-0 w-full bg-yellowCustom  text-center py-2'>
        <p className='text-white'>Made by Görkem Paşaoğlu</p>
      </footer>    </div>
  );
}

export default App;
