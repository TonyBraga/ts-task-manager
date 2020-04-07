import { statuses } from './jsons/statuses.json'

const [ 
  {id: STATUS_NEW},
  {id: STATUS_SECCESS},
  {id: STATUS_CLOSE},
  {id: STATUS_CANCEL}
] = statuses

export const STATUSES = {
  STATUS_NEW, STATUS_SECCESS, STATUS_CLOSE, STATUS_CANCEL
}