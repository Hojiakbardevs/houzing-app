import React from 'react'
import { Button } from './style'

const GenericButton = ({children,type, onClick }) => {
  return (
    <Button onClick={onClick} type={type}>{children || 'Generic'}</Button>
  )
}

export default GenericButton

