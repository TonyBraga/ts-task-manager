import React, { FC } from 'react'
import { lambdaVoid } from '../../../utils/commonTypes'

import './style.css'

interface ButtonType {
  variant? : string, 
  label : string, 
  click : lambdaVoid
}

export const Button : FC<ButtonType> = ({variant = 'default', label, click}) => {
  return (
    <button type='button' className={`btn btn-${variant}`} onClick={click}>
      {label}
    </button>
  )
}

