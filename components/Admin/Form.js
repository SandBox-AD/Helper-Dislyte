import {
  Box,
  MenuItem,
  Button,
  Select,
  InputLabel,
  FormGroup,
} from '@mui/material'
export default function Form({ data, esper, relique, relique2,handleSubmit, handleChange }) {
  return (
    <Box component="form" onSubmit={handleSubmit} sx={{ p: 2 }}>
      <FormGroup>
        <InputLabel id="select-esper">Esper</InputLabel>
        <Select
          name="esper"
          value={esper}
          onChange={handleChange}
          label="Esper"
          labelId="select-esper"
        >
          {data.espers.data.map((option) => (
            <MenuItem key={option.id} value={option.id}>
              {option.esper}
            </MenuItem>
          ))}
        </Select>
      </FormGroup>
      <FormGroup>
        <InputLabel id="select-relique4">Relique set 4</InputLabel>
        <Select
          name="relique4"
          value={relique}
          onChange={handleChange}
          label="Relique set 4"
          labelId="relique4"
        >
          {data.reliques.data.map(
            (option) =>
              option.setRelique == 4 && (
                <MenuItem key={option.id} value={option.id}>
                  {option.name + ' ' + option.setRelique}*
                </MenuItem>
              )
          )}
        </Select>
      </FormGroup>
      <FormGroup>
        <InputLabel id="relique2">Relique set 2</InputLabel>
        <Select
          name="relique2"
          value={relique2}
          onChange={handleChange}
          label="Relique set 2"
          labelId="relique2"
        >
          {data.reliques.data.map(
            (option) =>
              option.setRelique == 2 && (
                <MenuItem key={option.id} value={option.id}>
                  {option.name + ' ' + option.setRelique}*
                </MenuItem>
              )
          )}
        </Select>
      </FormGroup>
      <Box textAlign="center">
        <Button
          type="submit"
          noValidate
          size="medium"
          variant="contained"
          color="pansy"
          sx={{ mt: 3, mb: 2 }}
        >
          Envoyer
        </Button>
      </Box>
    </Box>
  )
}
