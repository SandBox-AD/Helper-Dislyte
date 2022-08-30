import React from 'react'
import { Button } from '@mui/material'
export default function CommonButton({ children, color, disabled, size, variant}) {
  return (
    <Button color={color} disabled={disabled} size={size} variant={variant}>
      {children}
    </Button>
  )
}
