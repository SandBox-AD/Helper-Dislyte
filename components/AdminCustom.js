import { Box, MenuItem, Button, Select, InputLabel, FormHelperText, Alert } from '@mui/material';
import { useState } from 'react'

export default function AdminCustom({ children, data }) {
    const [esper, setEsper] = useState(data.espers.espers[0].id)
    const [relique, setRelique] = useState(data.reliques.reliques[0].id)
    const [relique2, setRelique2] = useState(data.reliques.reliques[9].id)
    const [alert, setAlert] = useState(false);
    const [error, setError] = useState(false);
    const [alertContent, setAlertContent] = useState('');
    const handleChange = (event) => {
        let name = event.target.name;
        console.log(name);
        if (name == "esper") {
            setEsper(event.target.value);
        } else if (name == "relique4") {
            setRelique(event.target.value);
        } else if (name == "relique2") {
            setRelique2(event.target.value)
        }
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
        console.log(result)
        if (result.message === true){
            setAlertContent(result);
            setAlert(true);
        }
        else
        {
            setAlertContent(result);
            setError(true);
        }

     }
    return (
        <Box component="div">
            {alert ? <Alert severity="info">Esper enregistré</Alert> : <div></div> }
            {error ? <Alert severity="error">Esper enregistré</Alert> : <div></div> }
            <Box component="form" onSubmit={handleSubmit}>
                <InputLabel id="select-esper">Esper</InputLabel>
                <Select name='esper' value={esper} onChange={handleChange} label="Esper" labelId='select-esper'>
                    {data.espers.espers.map((option) => (
                        <MenuItem key={option.id} value={option.id}>{option.esper}</MenuItem>
                    ))}
                </Select>
                <InputLabel id="select-relique4">Relique set 4</InputLabel>
                <Select name='relique4' value={relique} onChange={handleChange} label="Relique set 4" labelId='relique4'>
                    {data.reliques.reliques.map((option) => (
                        option.type == 4 && <MenuItem key={option.id} value={option.id}>{option.name +" "+option.type}*</MenuItem>                        
                    ))}
                </Select>
                <InputLabel id="relique2">Relique set 2</InputLabel>
                <Select name='relique2' value={relique2} onChange={handleChange} label="Relique set 2" labelId='relique2'>
                    {data.reliques.reliques.map((option) => (
                        option.type == 2 && <MenuItem key={option.id} value={option.id}>{option.name +" "+option.type}*</MenuItem>
                    ))}
                </Select>
                <Button type="submit" noValidate fullWidth variant="contained" sx={{ mt: 3, mb: 2 }}>
                    Envoyer
                </Button>
            </Box>
        </Box>
    )
}