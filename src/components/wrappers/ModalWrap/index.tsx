import React, { FC } from 'react'

import './styles.css'

interface ModalWrapProps {
  isShow : boolean,
  onClose : () => void
}

const ModalWrap : FC<ModalWrapProps> = ({isShow, onClose, children}) => {
  if(!isShow) return null

  return (
    <div className='modal-wrap'>
      <div className='modal-content'>
        {children}
      </div>

      <div className='modal-overlay' onClick={onClose}/>
    </div>
  )
}

export default ModalWrap