import { TaskType } from "../../utils/commonTypes";

export interface AddNewTaskProps {
  isShow : boolean,
  onClose : () => void,
  onSubmit : (newTask : TaskType) => void
}