import React, { FC } from 'react'
import _ from 'lodash'

import { SelectType } from './types'
import './styles.css'

export const Select : FC<SelectType> = ({currentOption, options, choise, placeholder}) => {
  return (
    <select value={currentOption} onChange={e => choise(Number(e.target.value))} className='select'>
      <option value={0} className='select-item'>{placeholder}</option>

      {
        _.map(options, ({id, title}) => (
          <option value={id} className='select-item' key={id}>
            {title}
          </option>
        ))
      }
    </select>
  )
}