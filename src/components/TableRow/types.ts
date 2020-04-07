import { TaskType, onChangeType } from "../../utils/commonTypes";

export interface TableRowProps {
  data : TaskType,
  serialNumber : number,
  change : onChangeType 
}

export interface ContractorType {
  id : number,
  first_name : string,
  last_name : string,
}

export interface StatusType {
  id : number,
  title : string
}