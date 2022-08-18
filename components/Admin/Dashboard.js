import { useState } from 'react';
import { Box, MenuItem, Button, Select, InputLabel, FormHelperText, Alert, Grid, Paper, Avatar, Card, CardHeader, CardMedia, CardContent, Typography, Table, TableBody, TableCell, TableHead, TableRow, Checkbox} from '@mui/material';

export default function Dashboard({ children, data, user }) {
    const [esper, setEsperValue] = useState(data.espers.espers[0].id)
    const [esperSet, setEsperSet] = useState({"espersSet": []})
    const [relique, setRelique] = useState(data.reliques.reliques[0].id)
    const [relique2, setRelique2] = useState(data.reliques.reliques[9].id)
    const [indexEspeer, setIndex] = useState(data.espers.espers[0])
    const [indexRelique2, setIndexRelique2] = useState(data.reliques.reliques[9])
    const [indexRelique4, setIndexRelique4] = useState(data.reliques.reliques[0])
    fetch('http://localhost:8080/api/set/esper/'+esper).then(response => response.json()).then(data => setEsperSet(data))
    const handleChange = (event) => {
        let name = event.target.name;
        if (name == "esper") {
            setEsperValue(event.target.value);
            setIndex(data.espers.espers[data.espers.espers.findIndex(obj => obj.id == event.target.value)])
        } else if (name == "relique4") {
            setRelique(event.target.value);
            setIndexRelique4(data.reliques.reliques[data.reliques.reliques.findIndex(obj => obj.id == event.target.value)])
        } else if (name == "relique2") {
            setRelique2(event.target.value)
            setIndexRelique2(data.reliques.reliques[data.reliques.reliques.findIndex(obj => obj.id == event.target.value)])
        }
    }
    const handleSubmit = async (event) => {
        event.preventDefault();
        const data = {
            esper: event.target.esper.value,
            relique4: event.target.relique4.value,
            relique2: event.target.relique2.value,
            isValid: 0,
        }
        const JSONdata = JSON.stringify(data);
        const options = {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSONdata,
        }
        fetch('http://localhost:8080/api/create/esper/possede', options);
        let contenu = "Validé l'esper ajoutée";
        fetch('http://localhost:8080/api/notification/create', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                contenu: contenu,
                user: user.sub.substring(user.sub.indexOf("|")+1)
            }),
        });
        fetch('http://localhost:8080/api/set/esper/'+ event.target.esper.value).then(response => response.json()).then(data => setEsperSet(data))
    }
    return (
        <Grid container spacing={3} alignItems="stretch">
            <Grid item xs>
                <Paper sx={{ p: 2, display: 'flex', flexDirection: 'column' }}>
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
                </Paper>
            </Grid>
            <Grid item xs>
                <Paper>
                    <Card>
                        <Box sx={{display: 'flex', justifyContent:'center'}}>
                            <CardHeader avatar={<Avatar alt={indexEspeer.esper} src={indexEspeer.picture} sx={{ width: 56, height: 56 }} />} title={<Typography variant='h2'>{indexEspeer.esper}</Typography>} />
                        </Box>
                        <Box sx={{display: 'flex', justifyContent:'center'}}>
                            <CardMedia component="img" alt={indexEspeer.esper} src={indexEspeer.icone} sx={{ width: '45%'}}/>
                        </Box>
                        <CardContent>
                            <Box sx={{ display: 'flex', flexDirection: 'row', flexWrap: 'wrap', justifyContent: 'space-around'}}>
                                <Box sx={{display: 'flex', alignItems:'center'}}>
                                    <Avatar alt={indexRelique4.name} src={indexRelique4.image} />
                                    <Typography variant='body1'>
                                        {indexRelique4.name}
                                    </Typography>
                                </Box>
                                <Box sx={{display: 'flex', alignItems:'center'}}>
                                    <Avatar alt={indexRelique2.name} src={indexRelique2.image} />
                                    <Typography variant='body1'>
                                        {indexRelique2.name}
                                    </Typography>
                                </Box>
                            </Box>
   
                        </CardContent>
                    </Card>
                </Paper>
            </Grid>
            <Grid item xs={12}>
                <Paper>
                    <Table size='medium'>
                        <TableHead>
                            <TableRow>
                                <TableCell>#</TableCell>
                                <TableCell>Nom</TableCell>
                                <TableCell>Relique set x4</TableCell>
                                <TableCell>Relique set x2</TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {esperSet.espersSet.map((esper, index) => (
                                // esper.isValid == 1 &&
                                <TableRow key={index}>
                                    <TableCell>{index + 1}</TableCell>
                                    <TableCell>{esper.esper}</TableCell>
                                    <TableCell>{esper.relique4}</TableCell>
                                    <TableCell>{esper.relique2}</TableCell>
                                    <TableCell>{esper.isValid ? "Validé" : "Pas encore Validé"}</TableCell>
                                </TableRow>
                            ))}
                        </TableBody>
                    </Table>
                </Paper>
            </Grid>
        </Grid>
    )
}
