import { useState } from 'react'
import Header from './components/Header'
import Tasks from './components/Tasks'
import AddTask from './components/AddTask'

function App() {
  const [tasks, setTasks] = useState([
    {
        id: 1,
        text: 'Doctors Appointment',
        day: '05/01/2021 at 2:30pm',
        reminder: true,
    },
    {
        id: 2,
        text: 'Meeting at school',
        day: '06/02/2021 at 1:30pm',
        reminder: true,
    },
    {
        id: 3,
        text: 'Food Shopping',
        day: '05/02/2021 at 2:30pm',
        reminder: false,
    }
])

  // Delete Task
  const deleteTask = (id) => {
    setTasks(tasks.filter((task) => task.id !== id))
  }

  // Toggle Reminder
  const toggleReminder = (id) => {
    setTasks(tasks.map((task) => task.id === id ? { ...task, reminder: !task.reminder } : task
    )
    )
  }

  return (
    <div className="container">
      <Header title='erias ToDo App' />
      <AddTask />
      {tasks.length > 0 ? (
        <Tasks tasks={tasks} onDelete={deleteTask} onToggle={toggleReminder} />
      ) : (
        'You are outTasking, get some hobbies'
      )}
    </div>
  );
}

export default App;
