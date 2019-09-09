import * as React from 'react';
import {useArchivedTasks} from "../hooks/useArchivedTasks";
import {firebase} from "../firebase";

interface ICheckbox {
  id: number;
  taskLabel: string
}

export const Checkbox = ({ id, taskLabel }: ICheckbox) => {
  const setArchivedTasks = async (id) => {
    await firebase
      .firestore()
      .collection('tasks')
      .doc(id)
      .update({archived: true});
  };
  return (
    <div
      className="checkbox--holder"
      data-testid="checkbox--action"
      onClick={() => setArchivedTasks(id)}
      onKeyDown={() => setArchivedTasks(id)}
      aria-label={`Mark ${taskLabel} as done?`}
      role="button"
      tabIndex={0}
    >
      <span className="checkbox" />
    </div>
  )
};
