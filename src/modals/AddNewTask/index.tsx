import React, { useState, FC } from 'react'
import { v4 as uuid }from 'uuid'
import _ from 'lodash'

import { AddNewTaskProps } from './types'
import { users } from './../../utils/jsons/users.json'

import ModalWrap from '../../components/wrappers/ModalWrap'
import { Button } from '../../components/pure/Buttons'
import { Select } from '../../components/pure/Selects'
import { Field } from '../../components/pure/Fields'

import './styles.css'

const AddNewTask : FC<AddNewTaskProps> = ({isShow, onClose, onSubmit}) => {
  const [ newTaskText, setNewTaskText ] = useState<string>('')
  const [ newTaskContractor, setNewTaskContractor ] = useState<number>(0)

  const emptyFields : boolean = newTaskText.length < 1 || newTaskContractor < 1

  const submit = () => {
    if(emptyFields) return

    onSubmit({
      id: uuid(),
      title: newTaskText,
      contractor_id: newTaskContractor,
      status: 1
    })

    setNewTaskText('')
    setNewTaskContractor(0)
  }

  return (
    <ModalWrap isShow={isShow} onClose={onClose}>
      <div className='new-task-modal'>
        <Field
          value={newTaskText}
          change={setNewTaskText}
          placeholder='Текст задачи'
        />

        <Select
          currentOption={newTaskContractor}
          placeholder='Все исполнители'
          choise={setNewTaskContractor}
          options={_.map(users, ({id, first_name, last_name}) => ({
            id, title: `${last_name} ${first_name}`
          }))}
        />

        <Button
          label='Создать'
          click={submit}
          variant='seccess'
        />
      </div>
    </ModalWrap>
  )
}

export default AddNewTask