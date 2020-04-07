import React, { useState, useEffect, Fragment } from 'react';
import { v4 as uuid } from 'uuid'
import _ from 'lodash'

import { tasks as tasksDefault } from './utils/jsons/tasks.json'
import { TaskType, onChangeType } from './utils/commonTypes'

import TableHead from './components/TableHead';
import TableRow from './components/TableRow';
import { Button } from './components/pure/Buttons';
import { AddNewTaskModal } from './modals'

import './styles/App.css';

function App () {
  const [ tasks, setTasks ] = useState<TaskType[]>(_.map(tasksDefault, task => ({...task, id: uuid()})))

  const [ contractorFilter, setContractorFilter ] = useState<number>(0)
  const [ statusFilter, setStatusFilter ] = useState<number>(0)
  const [ taskSearch, setTaskSearch ] = useState<string>('')

  const [ openAddNewTaskModal, setOpenAddNewTaskModal ] = useState<boolean>(false)

  const onChange : onChangeType = (id, value) => {
    const newTasks = _.map(tasks, (task : TaskType) => {
      if(task.id === id) return value
      return task
    }) as TaskType[]
    
    setToLocalStorage(newTasks)
    setTasks(newTasks)
  }

  const getFiltredTasks = (tasks : TaskType[]) => {
    let filtredTasks : TaskType[] = tasks

    if(contractorFilter > 0) filtredTasks = _.filter(filtredTasks, ({contractor_id}) => contractor_id === Number(contractorFilter))
    if(statusFilter > 0) filtredTasks = _.filter(filtredTasks, ({status}) => status === Number(statusFilter))
    if(taskSearch.length) filtredTasks = _.filter(filtredTasks, ({title}) => title.toLowerCase().includes(taskSearch.toLowerCase() as string))

    return filtredTasks
  }

  const clearFilters = () => {
    if(!contractorFilter && !statusFilter && !taskSearch) return

    setContractorFilter(0)
    setStatusFilter(0)
    setTaskSearch('')
  }

  const createNewTask = (newTask : TaskType) => {
    const newTasks : TaskType[] = _.cloneDeep(tasks)
    newTasks.push(newTask)

    setTasks(newTasks)
    setToLocalStorage(newTasks)
    setOpenAddNewTaskModal(false)
  }

  const setToLocalStorage = (tasks : TaskType[]) => {
    const stringTasks : string = JSON.stringify(tasks)

    localStorage.setItem('tasks', stringTasks)
  }

  useEffect(() => {
    if(localStorage.getItem('tasks')) {
      const newTasks : TaskType[] = JSON.parse(localStorage.getItem('tasks') as string)

      setTasks(newTasks)
    }
  }, [])

  return (
    <Fragment>
      <div className="app-container">
        <table>
          <TableHead
            contractorFilter={contractorFilter}
            setContractorFilter={setContractorFilter}
            statusFilter={statusFilter}
            setStatusFilter={setStatusFilter}
            taskSearch={taskSearch}
            setTaskSearch={setTaskSearch}
            clearFilters={clearFilters}
          />

          <tbody>
            {
              _.map(getFiltredTasks(_.cloneDeep(tasks)), (task : TaskType, index : number) => (
                <TableRow 
                  key={task.id}
                  data={task} 
                  serialNumber={index + 1} 
                  change={onChange}
                />
              ))
            }
          </tbody>
        </table>

        <div className='new-task-wrap'>
          <Button
            label='Новая задача'
            click={() => setOpenAddNewTaskModal(true)}
          />
        </div>
      </div>

      <AddNewTaskModal 
        isShow={openAddNewTaskModal}
        onClose={() => setOpenAddNewTaskModal(false)}
        onSubmit={createNewTask}
      />
    </Fragment>
    
  );
}

export default App;
