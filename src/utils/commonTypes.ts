export interface TaskType {
  id: string,
  title: string,
  contractor_id: number,
  status: number
}

export interface onChangeType {
  (
    id: string,
    value: TaskType
  ) : void
}

export interface onActionType {
  (newStatus : number) : void
}