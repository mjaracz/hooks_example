import * as React from 'react';
import {useTasks} from '../hooks/useTasks';
import {ITask} from './types';
import {Checkbox} from "./Checkbox";


export const Task = () => {
  const { tasks } = useTasks('');
  let projectName = '';

  return(
    <div className='tasks' data-testid='tasks'>
      <h2 data-testid='project-name'>{projectName}</h2>
      {tasks.map((task: ITask) => (
        <li key={task.id}>
          <Checkbox id={task.id} taskLabel={task.task}/>
          <span>{task.task}</span>
        </li>
      ))}
    </div>
  )
};
