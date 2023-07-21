import { Circle, Trash } from 'phosphor-react'
import styles from './Tasks.module.css'
import check from '../assets/check.svg'
import { FormEvent } from 'react';
import { TasksTodo } from './TodoTasks';


export type TaskProps ={
  task: TasksTodo
  onDeleteTask: (id: string) => void;
  onUpdatedTask: (id: string, data: TasksTodo) => void;
}

export function Tasks({task, onDeleteTask, onUpdatedTask }: TaskProps){
  function handleDeleteTask(event: FormEvent<HTMLButtonElement>) {
    const { id } = event.currentTarget
    onDeleteTask(id)
  }

  function handlerUpdatedTask(event: FormEvent<HTMLButtonElement>) {
    const { id } = event.currentTarget
    onUpdatedTask(id, {...task, is_done: !task.is_done })
  }

  const styledTitleByTaskDone = task.is_done ? styles.taskTitleDone : styles.taskTileUndone
  const checkIconByTaskDone = task.is_done ? <img src={check} /> : <Circle size={20}  />

  return (
    <div className={styles.listTask}>
      <div className={styles.checkList}>
        <button id={task.id} onClick={(event) => handlerUpdatedTask(event)} className={styles.checkButton}>
          {checkIconByTaskDone}
        </button>
        <p className={ styledTitleByTaskDone }>{task.title}</p>
      </div>
      <button id={task.id} onClick={(event) => handleDeleteTask(event)} className={styles.deleteButton}>
        <Trash size={20}/>
      </button>
  </div>
  )
} 