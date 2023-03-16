import React from 'react'
import s from './index.module.scss'
const TaskListError = ({message}:{message:string} ) => {
  return (
    <div className={'container'+" "+s.root}>{message}</div>
  )
}

export default TaskListError