import React, { useState } from "react";
import { v4 as uuidv4 } from "uuid";

const Panel = () => {
  const [todo, setTodo] = useState("");
  const [todos, setTodos] = useState([]);

  const handleEdit = (e, id) => {
    let t = todos.find((i) => i.id === id);
    setTodo(t.todo);
    let newTodos = todos.filter((item) => item.id !== id);
    setTodos(newTodos);
  };

  const handleChange = (e) => {
    setTodo(e.target.value);
  };

  const handleDelete = (e, id) => {
    let newTodos = todos.filter((item) => item.id !== id);
    setTodos(newTodos);
  };

  const handleAdd = () => {
    if (todo.trim()) {
      setTodos([...todos, { id: uuidv4(), todo, isCompleted: false }]);
      setTodo("");
    }
  };

  const handleCheckbox = (id) => {
    let newTodos = todos.map(item => 
      item.id === id ? { ...item, isCompleted: !item.isCompleted } : item
    );
    setTodos(newTodos);
  };

  return (
    <section className="bg-neutral-100 py-16 sm:py-24">
      <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
        
        {/* Daily Goals Card */}
        <div className="bg-white rounded-xl shadow-lg p-6 sm:p-8">
          <div className="flex items-center gap-4 mb-6">
            <i className="fa-solid fa-fire text-3xl text-primary-500"></i>
            <h2 className="font-bold text-2xl sm:text-3xl text-neutral-800">Daily Goals</h2>
          </div>
          <div className="space-y-4">
            <div className="flex justify-between items-center p-4 bg-neutral-50 rounded-lg">
              <span className="font-semibold text-neutral-700">Workout Schedule</span>
              <span className="font-bold text-primary-600">5:00 PM</span>
            </div>
            <div className="flex justify-between items-center p-4 bg-neutral-50 rounded-lg">
              <span className="font-semibold text-neutral-700">Calories Burned</span>
              <span className="font-bold text-primary-600">350 kcal</span>
            </div>
          </div>
        </div>

        {/* To-Do List Card */}
        <div className="bg-white rounded-xl shadow-lg p-6 sm:p-8">
          <div className="flex items-center gap-4 mb-6">
            <i className="fa-solid fa-list-check text-3xl text-primary-500"></i>
            <h2 className="font-bold text-2xl sm:text-3xl text-neutral-800">To-Do List</h2>
          </div>
          
          <div className="flex gap-2 mb-6">
            <input
              type="text"
              onChange={handleChange}
              value={todo}
              placeholder="Add a new task..."
              className="flex-grow px-4 py-2 border border-neutral-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition"
            />
            <button
              onClick={handleAdd}
              className="bg-primary-600 hover:bg-primary-700 text-white font-bold py-2 px-4 rounded-lg transition shadow-sm disabled:bg-primary-300"
              disabled={!todo.trim()}
            >
              Add
            </button>
          </div>

          <div className="space-y-3">
            {todos.length === 0 && (
              <p className="text-neutral-500 text-center py-4">No tasks yet. Add one above!</p>
            )}
            {todos.map((item) => (
              <div key={item.id} className="flex items-center justify-between p-3 bg-neutral-50 rounded-lg hover:bg-neutral-100 transition">
                <div className="flex items-center gap-3">
                  <input
                    type="checkbox"
                    onChange={() => handleCheckbox(item.id)}
                    checked={item.isCompleted}
                    className="h-5 w-5 rounded border-neutral-300 text-primary-600 focus:ring-primary-500"
                  />
                  <span className={`text-neutral-800 ${item.isCompleted ? "line-through text-neutral-400" : ""}`}>
                    {item.todo}
                  </span>
                </div>
                <div className="flex gap-2">
                  <button
                    onClick={(e) => handleEdit(e, item.id)}
                    className="text-neutral-500 hover:text-secondary-500 transition"
                  >
                    <i className="fa-solid fa-pencil"></i>
                  </button>
                  <button
                    onClick={(e) => handleDelete(e, item.id)}
                    className="text-neutral-500 hover:text-red-500 transition"
                  >
                    <i className="fa-solid fa-trash"></i>
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};

export default Panel;
