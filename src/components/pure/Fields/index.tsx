import React, { FC, Dispatch } from 'react'

import './styles.css'

interface FieldType {
  value : string | number,
  change : Dispatch<string>,
  placeholder : string
}

export const Field : FC<FieldType> = ({value, change, placeholder}) => {
  return (
    <div className='field'>
      <span className='field-label'>{placeholder}</span>

      <input
        value={value}
        onChange={e => change(e.target.value)}
        type='text'
        className='field-input'
      />
    </div>
  )
}