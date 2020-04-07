import React, { FC } from 'react'
import _ from 'lodash'

import { TaskType, onActionType } from './../../utils/commonTypes'
import { TableRowProps, ContractorType, StatusType } from './types'
import { statuses  } from './../../utils/jsons/statuses.json'
import { users } from './../../utils/jsons/users.json'

import TableRowActions from './../TableRowActions'
import StatusSpan from '../pure/StatusSpan'

const TableRow : FC<TableRowProps> = ({data, serialNumber, change}) => {
  const { id, title, contractor_id, status } = data
  const currentContractor : ContractorType = _.find(users, { id: contractor_id }) as ContractorType
  const fullName : string = `${currentContractor.last_name} ${currentContractor.first_name}`
  const stausTitle : string = (_.find(statuses, { id: status }) as StatusType).title

  const onAction : onActionType = (newStatus) => {
    const newData : TaskType = _.cloneDeep(data)

    newData.status = newStatus
    change(id, newData)
  }

  return (
    <tr>
      <td>{serialNumber}</td>
      <td>{title}</td>
      <td>{fullName}</td>
      <td><StatusSpan label={stausTitle} currentId={status}/></td>
      <td><TableRowActions currentStatusId={status} action={onAction}/></td>
    </tr>
  )
}

export default TableRow