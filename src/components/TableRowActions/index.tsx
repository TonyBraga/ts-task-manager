import React, { FC } from 'react'

import { TableRowActionsType } from './types'
import { STATUSES } from './../../utils/constants'

import { Button } from '../pure/Buttons'

import './style.css'

const TableRowActions : FC<TableRowActionsType> = ({currentStatusId, action}) => {
  switch(currentStatusId) {
    case STATUSES.STATUS_NEW: return (
      <div className='button-wrap'>
        <Button label='Выполнить' variant='seccess' click={() => action(STATUSES.STATUS_SECCESS)}/>
        <Button label='Отменить' variant='cancel' click={() => action(STATUSES.STATUS_CANCEL)}/>
      </div>
    )

    case STATUSES.STATUS_SECCESS: return (
      <div>
        <Button label='Закрыть' variant='close' click={() => action(STATUSES.STATUS_CLOSE)}/>
      </div>
    )

    default: return null
  }
}

export default TableRowActions