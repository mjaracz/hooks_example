import moment from 'moment';
import {useState, useEffect} from 'react';

import {collatedTaskExist} from '../helpers';
import {firebase} from '../firebase';

import {selectedProject} from './types';

export const useTasks = (selectedProject: selectedProject) => {
  const [tasks, setTasks] = useState<any>([]);

  useEffect( () => {
    const next7Days: string = moment().add(7, 'days').format('DD-MM-YYYY')
    let tasksQuery = firebase
      .firestore()
      .collection('tasks')
      .where(
        'userId',
        '==',
        'njdcjsn23njcl'
      )
    tasksQuery =
      selectedProject && !collatedTaskExist(selectedProject)
        ? tasksQuery.where(
          'id',
          '==',
          selectedProject
        )
        : selectedProject === 'TODAY'
          ? tasksQuery.where(
            'date',
            '==',
            moment().format('DD-MM-YYYY')
          )
        : selectedProject === 'INBOX'
          ? tasksQuery.where(
            'date',
            '==',
            next7Days
          )
        : tasksQuery;
    tasksQuery
      .onSnapshot(snapshot => {
        snapshot.docs.map(item => {
          const task = item.data();
          setTasks([task])
        })
      })
  }, [selectedProject]);
  return { tasks };
};
