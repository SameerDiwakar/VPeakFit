import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaFire, FaCheckCircle, FaRegCircle, FaRunning, FaUtensils, FaWater, FaBed } from 'react-icons/fa';
import { v4 as uuidv4 } from "uuid";
import './Panel.css';

const fitnessGoals = [
  { id: 1, name: "Morning Run", target: "30 min", progress: 75, icon: <FaRunning className="text-blue-500" /> },
  { id: 2, name: "Strength Training", target: "45 min", progress: 50, icon: <FaFire className="text-red-500" /> },
  { id: 3, name: "Meal Prep", target: "2 meals", progress: 30, icon: <FaUtensils className="text-green-500" /> },
  { id: 4, name: "Water Intake", target: "2L", progress: 90, icon: <FaWater className="text-blue-400" /> },
  { id: 5, name: "Sleep", target: "8h", progress: 60, icon: <FaBed className="text-purple-500" /> },
];

const Panel = () => {
  const [activeTab, setActiveTab] = useState('goals');
  const [todo, setTodo] = useState("");
  const [todos, setTodos] = useState([]);
  const [newGoal, setNewGoal] = useState({ name: '', target: '' });

  useEffect(() => {
    // Load saved todos from localStorage
    const savedTodos = localStorage.getItem('fitnessTodos');
    if (savedTodos) {
      setTodos(JSON.parse(savedTodos));
    }
  }, []);

  useEffect(() => {
    // Save todos to localStorage whenever they change
    localStorage.setItem('fitnessTodos', JSON.stringify(todos));
  }, [todos]);

  const handleAddTodo = (e) => {
    e.preventDefault();
    if (todo.trim()) {
      setTodos([...todos, { 
        id: uuidv4(), 
        text: todo, 
        completed: false,
        createdAt: new Date().toISOString()
      }]);
      setTodo("");
    }
  };

  const toggleTodo = (id) => {
    setTodos(todos.map(todo => 
      todo.id === id ? { ...todo, completed: !todo.completed } : todo
    ));
  };

  const deleteTodo = (id) => {
    setTodos(todos.filter(todo => todo.id !== id));
  };

  const handleAddGoal = (e) => {
    e.preventDefault();
    if (newGoal.name.trim() && newGoal.target.trim()) {
      // In a real app, you would add the goal to your goals array
      alert(`New goal added: ${newGoal.name} - Target: ${newGoal.target}`);
      setNewGoal({ name: '', target: '' });
    }
  };

  return (
    <section className="py-16 bg-gradient-to-b from-gray-50 to-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Your Fitness Dashboard</h2>
          <div className="w-24 h-1 bg-blue-600 mx-auto mb-6"></div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Track your progress and stay motivated on your fitness journey
          </p>
        </div>

        <div className="max-w-6xl mx-auto">
          {/* Tabs */}
          <div className="flex border-b border-gray-200 mb-8">
            <button
              onClick={() => setActiveTab('goals')}
              className={`py-3 px-6 font-medium text-sm rounded-t-lg transition-colors ${
                activeTab === 'goals' 
                  ? 'text-blue-600 border-b-2 border-blue-600' 
                  : 'text-gray-500 hover:text-gray-700'
              }`}
            >
              My Goals
            </button>
            <button
              onClick={() => setActiveTab('todo')}
              className={`py-3 px-6 font-medium text-sm rounded-t-lg transition-colors ${
                activeTab === 'todo' 
                  ? 'text-blue-600 border-b-2 border-blue-600' 
                  : 'text-gray-500 hover:text-gray-700'
              }`}
            >
              To-Do List
            </button>
          </div>

          {/* Tab Content */}
          <div className="bg-white rounded-xl shadow-xl overflow-hidden">
            {activeTab === 'goals' ? (
              <div className="p-6 md:p-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-6">Daily Fitness Goals</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
                  {fitnessGoals.map((goal) => (
                    <div key={goal.id} className="bg-gray-50 rounded-lg p-6 hover:shadow-md transition-shadow">
                      <div className="flex items-center justify-between mb-4">
                        <div className="flex items-center">
                          <span className="text-2xl mr-3">{goal.icon}</span>
                          <h4 className="font-semibold text-gray-900">{goal.name}</h4>
                        </div>
                        <span className="text-sm text-gray-500">{goal.target}</span>
                      </div>
                      <div className="w-full bg-gray-200 rounded-full h-2.5">
                        <div 
                          className="bg-blue-600 h-2.5 rounded-full transition-all duration-500" 
                          style={{ width: `${goal.progress}%` }}
                        ></div>
                      </div>
                      <div className="flex justify-between mt-2">
                        <span className="text-xs text-gray-500">Progress</span>
                        <span className="text-xs font-medium">{goal.progress}%</span>
                      </div>
                    </div>
                  ))}
                </div>

                <div className="bg-blue-50 p-6 rounded-lg">
                  <h4 className="font-semibold text-lg text-gray-900 mb-4">Add New Goal</h4>
                  <form onSubmit={handleAddGoal} className="space-y-4">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <label htmlFor="goal-name" className="block text-sm font-medium text-gray-700 mb-1">
                          Goal Name
                        </label>
                        <input
                          type="text"
                          id="goal-name"
                          className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                          placeholder="e.g., Morning Run"
                          value={newGoal.name}
                          onChange={(e) => setNewGoal({...newGoal, name: e.target.value})}
                        />
                      </div>
                      <div>
                        <label htmlFor="goal-target" className="block text-sm font-medium text-gray-700 mb-1">
                          Target
                        </label>
                        <input
                          type="text"
                          id="goal-target"
                          className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                          placeholder="e.g., 30 min"
                          value={newGoal.target}
                          onChange={(e) => setNewGoal({...newGoal, target: e.target.value})}
                        />
                      </div>
                    </div>
                    <button
                      type="submit"
                      className="mt-2 bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-6 rounded-md transition-colors"
                    >
                      Add Goal
                    </button>
                  </form>
                </div>
              </div>
            ) : (
              <div className="p-6 md:p-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-6">My To-Do List</h3>
                
                <form onSubmit={handleAddTodo} className="mb-8">
                  <div className="flex">
                    <input
                      type="text"
                      className="flex-grow px-4 py-3 border border-gray-300 rounded-l-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                      placeholder="Add a new task..."
                      value={todo}
                      onChange={(e) => setTodo(e.target.value)}
                    />
                    <button
                      type="submit"
                      className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-r-md transition-colors"
                    >
                      Add
                    </button>
                  </div>
                </form>

                <div className="space-y-3">
                  <AnimatePresence>
                    {todos.map((todo) => (
                      <motion.div
                        key={todo.id}
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, x: -100 }}
                        className="flex items-center justify-between p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors"
                      >
                        <div className="flex items-center">
                          <button 
                            onClick={() => toggleTodo(todo.id)}
                            className="mr-3 text-gray-400 hover:text-blue-500 transition-colors"
                          >
                            {todo.completed ? (
                              <FaCheckCircle className="text-green-500 text-xl" />
                            ) : (
                              <FaRegCircle className="text-xl" />
                            )}
                          </button>
                          <span className={`${todo.completed ? 'line-through text-gray-400' : 'text-gray-800'}`}>
                            {todo.text}
                          </span>
                        </div>
                        <button
                          onClick={() => deleteTodo(todo.id)}
                          className="text-gray-400 hover:text-red-500 transition-colors"
                        >
                          ×
                        </button>
                      </motion.div>
                    ))}
                  </AnimatePresence>

                  {todos.length === 0 && (
                    <div className="text-center py-8 text-gray-500">
                      <p>No tasks yet. Add one above to get started!</p>
                    </div>
                  )}
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Panel;
