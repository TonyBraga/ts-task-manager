import React, { FC } from 'react'
import _ from 'lodash'

import { TableHeadType } from './types'
import { users } from './../../utils/jsons/users.json'
import { statuses } from './../../utils/jsons/statuses.json'
import { Select } from '../pure/Selects'

import './styles.css'
import { Button } from '../pure/Buttons'

const TableHead : FC<TableHeadType> = ({
  contractorFilter, setContractorFilter,
  statusFilter, setStatusFilter,
  taskSearch, setTaskSearch,
  clearFilters
}) => {
  const haveFilters : boolean = contractorFilter > 0 || statusFilter > 0 || taskSearch.length > 0

  return (
    <thead>
      <tr>
        <td>№</td>
        <td>
          <input
            type='text'
            value={taskSearch}
            onChange={e => setTaskSearch(e.target.value)}
            className='task-search'
            placeholder='Поиск по задачам'
          />
        </td>
        <td>
          <Select
            currentOption={contractorFilter}
            placeholder='Все исполнители'
            choise={setContractorFilter}
            options={_.map(users, ({id, last_name, first_name}) => ({
              id, title: `${last_name} ${first_name}`
            }))}
          />
        </td>
        <td>
          <Select
            currentOption={statusFilter}
            placeholder='Все статусы'
            choise={setStatusFilter}
            options={statuses}
          />
        </td>
        <td>
          <div className='button-wrap'>
            <span>Действие</span>

            <div className={`hide-wrap ${!haveFilters && 'hide'}`}>
              <Button label='Очистить фильтры' click={clearFilters}/>
            </div>
          </div>
        </td>
      </tr>
    </thead>
  )
}

export default TableHead