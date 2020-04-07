import React, { FC } from 'react'

import './style.css'

interface ButtonType {
  variant? : string, 
  label : string, 
  click : () => void
}

export const Button : FC<ButtonType> = ({variant = 'default', label, click}) => {
  return (
    <button type='button' className={`btn btn-${variant}`} onClick={click}>
      {label}
    </button>
  )
}

