import { useState } from 'react'


const Tasks = () => {
    const [tasks, setTasks] = useState([
        {
            id: 1,
            text: 'Doctors Appointment',
            day: 'Feb 5th at 2:30pm',
            reminder: true,
        },
        {
            id: 2,
            text: 'Meeting at school',
            day: 'Feb 6th at 1:30pm',
            reminder: true,
        },
        {
            id: 3,
            text: 'Food Shopping',
            day: 'Feb 5th at 2:30',
            reminder: false,
        }
    ])

    return (
        <>
          {tasks.map((tasks) => (
          <h3 key={tasks.id}>{tasks.text}</h3>
          ))}
        </>
    )
}

export default Tasks
