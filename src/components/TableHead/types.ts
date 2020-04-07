import { Dispatch } from 'react'

export interface TableHeadType {
  contractorFilter : number,
  statusFilter : number,
  taskSearch : string,
  setContractorFilter : Dispatch<number>,
  setStatusFilter : Dispatch<number>,
  setTaskSearch : Dispatch<string>,
  clearFilters : () => void
}