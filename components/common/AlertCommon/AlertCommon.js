import { Alert, Box } from '@mui/material'

export default function AlertCommon({ severity, msg, handle }) {
  return (
    <Box>
      <Alert severity={severity}>{msg}</Alert>
    </Box>
  )
}
