import { useState } from 'react'
import { AddTask } from './AddTask'
import styles from './TodoTasks.module.css'
import clipboard from '../assets/clipboard.svg'
import { v4 as uuid } from 'uuid'
import { Tasks } from './Tasks'

export type TasksTodo = {
  id: string
  title: string
  is_done: boolean
}

export function TodoTasks() {
  const [tasks, setTask] = useState<TasksTodo[]>([])

  function addTask(title: string) {
    const taskPayload = {
      id: uuid(),
      title,
      is_done: false
    }

    setTask([...tasks, taskPayload])
  }

  function deleteTask(id: string) {
    const tasksWithoutDeletedId = tasks.filter(task => task.id !== id)
    setTask(tasksWithoutDeletedId)
  }

  function updateTask(id: string, taskToUpdate: TasksTodo) {
    const taskUpdated = tasks.map(task => {
      if(task.id === id) {
        return {...task, ...taskToUpdate}
      }
      return task
    })
    setTask([...taskUpdated])
  }

  const isALeastOneTask = !tasks.length ? 'flex' : 'none'
  const countTasksDone = tasks.filter(task => task.is_done).length

  return (
    <main>
      <AddTask onAddTask={addTask}/>
      
      <div className={styles.countTasks}>
        <div className={styles.createdTasks}>
          <p>Tarefas criadas</p>
          <span>{tasks.length}</span>
        </div>
        <div className={styles.doneTasks}>
          <p>Concluídas</p>
          <span>{countTasksDone}</span>
        </div>
      </div>

      <div style={{display: isALeastOneTask}}  className={styles.anyTaskCreated}>
        <img src={clipboard} alt="Clipboard" />
        <div className={styles.noTaskContent}>
          <p>Você ainda não tem tarefas cadastradas</p>
          <span>Crie tarefas e organize seus itens a fazer</span>
        </div>
      </div>

      {tasks.map(task => {
        if(tasks.length) {
          return <Tasks key={task.id} task={task} onDeleteTask={deleteTask} onUpdatedTask={updateTask}/>
        }
      })}

    </main>
  )
}