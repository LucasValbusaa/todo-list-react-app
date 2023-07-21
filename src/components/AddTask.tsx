import {PlusCircle} from 'phosphor-react'
import style from './AddTask.module.css'
import { ChangeEvent, useState } from 'react';

export type AddTask = {
  onAddTask: (task: string) => void
}

export function AddTask({ onAddTask }: AddTask) {
  const [inputTask, setInputTask] = useState('')

  function handlerInputChange(event: ChangeEvent<HTMLInputElement>) {
    setInputTask(event.target.value)
  }

  function handleAddTasks() {
    onAddTask(inputTask)
    setInputTask('')
  }

  return (    
    <div className={style.addTask}>
      <input value={inputTask} onChange={(event) => handlerInputChange(event)} placeholder='Adicione uma nova task'></input>
      <button onClick={handleAddTasks}>Criar <PlusCircle size={20}  /></button>
    </div>
  )
}