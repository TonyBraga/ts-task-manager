import React, { FC } from 'react'

import { StatusSpanType } from './types'
import { lambdaVoid } from '../../../utils/commonTypes'
import { STATUSES } from '../../../utils/constants'

import './style.css'

const StatusSpan : FC<StatusSpanType> = ({label, currentId}) => {
  const getCurrentVariant : lambdaVoid = () => {
    switch(currentId) {
      case STATUSES.STATUS_NEW: return '-new'
      case STATUSES.STATUS_SECCESS: return '-seccess'
      case STATUSES.STATUS_CLOSE: return '-close'
      case STATUSES.STATUS_CANCEL: return '-cancel'

      default: return
    }
  } 

  return (
    <span className={`status-span status-span${getCurrentVariant()}`}>
      {label}
    </span>
  )
}

export default StatusSpan