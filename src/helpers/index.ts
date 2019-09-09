import {selectedProject} from "../hooks/types";
import {collectedTasks} from "../constants";

export const collatedTaskExist = (selectedProject: selectedProject) => {
  return collectedTasks.find(item => item.key === selectedProject)
};
