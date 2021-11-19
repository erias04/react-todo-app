import { useState } from 'react'
import Header from './components/Header'
import Tasks from './components/Tasks'
import AddTask from './components/AddTask'

function App() {
  const [showAddTask, setShowAddTask] = useState (false)

  const [tasks, setTasks] = useState([
])

  // Delete Task
  const deleteTask = (id) => {
    setTasks(tasks.filter((task) => task.id !== id))
  }

  // Toggle Reminder
  const toggleReminder = (id) => {
    setTasks(tasks.map((task) => task.id === id ? { ...task, reminder: !task.reminder } : task
    ))}

  // Add Task
  const addTask = (task) => {
    const id = Math.floor(Math.random() * 1000) + 1

    const newTask = { id, ...task }
    setTasks([...tasks, newTask])
    setShowAddTask(!showAddTask)
  }

  return (
    <div className="container">
      <Header title='erias ToDo App' onAdd={() => setShowAddTask(!showAddTask)} showAdd={showAddTask} />
      {showAddTask ? <AddTask onAdd={addTask}/> : ''}
      {tasks.length > 0 ? (
        <Tasks tasks={tasks} onDelete={deleteTask} onToggle={toggleReminder} />
      ) : (
        'You are outTasking, get some hobbies'
      )}
    </div>
  );
}

export default App;
