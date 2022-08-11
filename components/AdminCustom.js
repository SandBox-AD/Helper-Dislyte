import { Box, MenuItem, Button, Select, InputLabel, FormHelperText } from '@mui/material';
import { useState } from 'react'

export default function AdminCustom({ children, data }) {
    const [esper, setEsper] = useState(data.espers.espers[0].id)
    const [relique, setRelique] = useState(data.reliques.reliques[0].id)
    const [relique2, setRelique2] = useState(data.reliques.reliques[0].id)
    const handleChange = (event) => {
        setEsper(event.target.value);
    }
    const handleChangeRelique = (event) => {
        setRelique(event.target.value);
    }
    const handleChangeRelique2 = (event) => {
        setRelique2(event.target.value);
    }
    const handleSubmit = async (event) => {
        event.preventDefault();
        const data = {
            esper: event.target.esper.value,
            relique4: event.target.relique4.value,
            relique2: event.target.relique2.value,
        }
        const JSONdata = JSON.stringify(data);
        const options = {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSONdata,
        }
        const response = await fetch('http://localhost:8080/create/esper/possede', options);
        const result = await response.json();
    };
    return (
        <Box component="form" onSubmit={handleSubmit}>
            <InputLabel id="select-esper">Esper</InputLabel>
            <Select name='esper' value={esper} onChange={handleChange} label="Esper" labelId='select-esper'>
                {data.espers.espers.map((option) => (
                    <MenuItem key={option.id} value={option.id}>{option.esper}</MenuItem>
                ))}
            </Select>
            <InputLabel id="select-relique4">Relique set 4</InputLabel>
            <Select name='relique4' value={relique} onChange={handleChangeRelique} label="Relique set 4" labelId='relique4'>
                {data.reliques.reliques.map((option) => (
                    <MenuItem key={option.id} value={option.id}>{option.name +" "+option.type}*</MenuItem>
                ))}
            </Select>
            <Select name='relique2' value={relique2} onChange={handleChangeRelique2} label="Relique set 2" labelId='relique2'>
                {data.reliques.reliques.map((option) => (
                    <MenuItem key={option.id} value={option.id}>{option.name +" "+option.type}*</MenuItem>
                ))}
            </Select>
            <Button type="submit" noValidate fullWidth variant="contained" sx={{ mt: 3, mb: 2 }}>
                Envoyer
            </Button>
        </Box>
    );
}