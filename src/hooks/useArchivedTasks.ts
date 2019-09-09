import {useEffect, useState} from 'react';
import {firebase} from "../firebase";

export const useArchivedTasks = (id?: number) => {
  const [archivedTasks, setArchivedTasks] = useState<any>([]);
  useEffect(() => {
    const tasksQuery = firebase
      .firestore()
      .collection('tasks');
    tasksQuery
      .where('archived', '==', true)
      .onSnapshot(snapshot => {
        snapshot.docs.forEach(task => {
          setArchivedTasks([task])
        })
      });
    if(id) {
      tasksQuery
        .doc(JSON.stringify({id: id}))
        .update({archived: true})
    }
  }, [
    archivedTasks,
    id
  ]);
  return {archivedTasks, setArchivedTasks};
};
