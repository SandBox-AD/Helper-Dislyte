import {
  Box,
  MenuItem,
  Button,
  Select,
  InputLabel,
  FormGroup,
} from '@mui/material';
import PropTypes from 'prop-types';

export default function Form({
  data,
  esper,
  relique,
  relique2,
  handleSubmit,
  handleChange,
}) {
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
              option.setRelique === 4 && (
                <MenuItem key={option.id} value={option.id}>
                  {`${option.name} ${option.setRelique}`}*
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
              option.setRelique === 2 && (
                <MenuItem key={option.id} value={option.id}>
                  {`${option.name} ${option.setRelique}`}*
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
  );
}

Form.propTypes = {
  data: PropTypes.shape({
    set: PropTypes.shape({
      status: PropTypes.string.isRequired,
      length: PropTypes.number.isRequired,
      data: PropTypes.arrayOf(
        PropTypes.shape({
          esper: PropTypes.string.isRequired,
          relique4: PropTypes.string.isRequired,
          relique2: PropTypes.string.isRequired,
        })
      ),
    }),
    espers: PropTypes.shape({
      status: PropTypes.string.isRequired,
      length: PropTypes.number.isRequired,
      data: PropTypes.arrayOf(
        PropTypes.shape({
          id: PropTypes.number.isRequired,
          esper: PropTypes.string.isRequired,
          etoile: PropTypes.number.isRequired,
          atk: PropTypes.number.isRequired,
          hp: PropTypes.number.isRequired,
          def: PropTypes.number.isRequired,
          spd: PropTypes.number.isRequired,
          summary: PropTypes.string.isRequired,
          picture: PropTypes.string.isRequired,
          icone: PropTypes.string.isRequired,
        })
      ),
    }),
    reliques: PropTypes.shape({
      data: PropTypes.arrayOf(
        PropTypes.shape({
          id: PropTypes.number,
          name: PropTypes.string.isRequired,
          image: PropTypes.string.isRequired,
          setRelique: PropTypes.number.isRequired,
        })
      ),
    }),
  }).isRequired,
  esper: PropTypes.number.isRequired,
  relique: PropTypes.number.isRequired,
  relique2: PropTypes.number.isRequired,
  handleSubmit: PropTypes.func.isRequired,
  handleChange: PropTypes.func.isRequired,
};
