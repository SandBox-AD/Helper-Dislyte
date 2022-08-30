import { useState } from 'react'
import {
  Box,
  Grid,
  Paper,
  Avatar,
  Card,
  CardHeader,
  CardMedia,
  CardContent,
  Typography,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
} from '@mui/material'
import Image from 'next/image'
import { css } from '@emotion/react'
import Form from './Form'

export default function Dashboard({ children, data, user, set }) {
  console.log(data)
  const [esper, setEsperValue] = useState(data.espers.data[0].id)
  const [relique, setRelique] = useState(data.reliques.data[0].id)
  const [relique2, setRelique2] = useState(data.reliques.data[9].id)
  const [indexEspeer, setIndex] = useState(data.espers.data[0])
  const [indexRelique2, setIndexRelique2] = useState(data.reliques.data[9])
  const [indexRelique4, setIndexRelique4] = useState(data.reliques.data[0])
  const handleChange = (event) => {
    let name = event.target.name
    if (name == 'esper') {
      setEsperValue(event.target.value)
      setIndex(
        data.espers.data[
          data.espers.data.findIndex((obj) => obj.id == event.target.value)
        ]
      )
    } else if (name == 'relique4') {
      setRelique(event.target.value)
      setIndexRelique4(
        data.reliques.data[
          data.reliques.data.findIndex((obj) => obj.id == event.target.value)
        ]
      )
    } else if (name == 'relique2') {
      setRelique2(event.target.value)
      setIndexRelique2(
        data.reliques.data[
          data.reliques.data.findIndex((obj) => obj.id == event.target.value)
        ]
      )
    }
  }
  const handleSubmit = async (event) => {
    event.preventDefault()
    const data = {
      idCharacter: event.target.esper.value,
      Idrelique: event.target.relique4.value,
      idrelique2: event.target.relique2.value,
      isValid: 0,
      stat:1,
    }
    const JSONdata = JSON.stringify(data)
    const options = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSONdata,
    }
    fetch('http://localhost:8080/api/possede', options)
    // fetch('http://localhost:8080/api/notification/create', {
    //   method: 'POST',
    //   headers: {
    //     'Content-Type': 'application/json',
    //   },
    //   body: JSON.stringify({
    //     contenu: contenu,
    //     user: user.sub.substring(user.sub.indexOf('|') + 1),
    //   }),
    // })
  }
  return (
    <Grid container spacing={3} alignItems="stretch">
      <Grid item xs>
        <Form
          data={data}
          esper={esper}
          relique={relique}
          relique2={relique2}
          handleChange={handleChange}
          handleSubmit={handleSubmit}
        />
      </Grid>
      <Grid item xs>
        <Paper>
          <Card variant="bg-thistle">
            <Box sx={{ display: 'flex', justifyContent: 'center' }}>
              <CardHeader
                avatar={
                  <Avatar
                    alt={indexEspeer.esper}
                    src={indexEspeer.picture}
                    sx={{ width: 56, height: 56 }}
                  />
                }
                title={
                  <Typography variant="h2">{indexEspeer.esper}</Typography>
                }
              />
            </Box>
            <Box sx={{ display: 'flex', justifyContent: 'center' }}>
              <CardMedia
                component="img"
                alt={indexEspeer.esper}
                src={indexEspeer.icone}
                sx={{ width: '45%' }}
              />
            </Box>
            <CardContent>
              <Box
                sx={{
                  display: 'flex',
                  flexDirection: 'row',
                  flexWrap: 'wrap',
                  justifyContent: 'space-around',
                }}
              >
                <Box sx={{ display: 'flex', alignItems: 'center' }}>
                  <Avatar alt={indexRelique4.name} src={indexRelique4.image} />
                  <Typography variant="body1">{indexRelique4.name}</Typography>
                </Box>
                <Box sx={{ display: 'flex', alignItems: 'center' }}>
                  <Avatar alt={indexRelique2.name} src={indexRelique2.image} />
                  <Typography variant="body1">{indexRelique2.name}</Typography>
                </Box>
              </Box>
            </CardContent>
          </Card>
        </Paper>
      </Grid>
      <Grid item xs={12}>
        <Paper>
          <Table size="small" variant="test">
            <TableHead>
              <TableRow>
                <TableCell>#</TableCell>
                <TableCell>Nom</TableCell>
                <TableCell>Relique set x4</TableCell>
                <TableCell>Relique set x2</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {data.set.data.map(
                (data, index) =>
                  indexEspeer.esper == data.esper && (
                    <TableRow key={index}>
                      <TableCell>{index + 1}</TableCell>
                      <TableCell>{data.esper}</TableCell>
                      <TableCell>{data.relique4}</TableCell>
                      <TableCell>{data.relique2}</TableCell>
                      <TableCell>
                        {data.isValid ? 'Validé' : 'Pas encore Validé'}
                      </TableCell>
                    </TableRow>
                  )
              )}
            </TableBody>
          </Table>
        </Paper>
      </Grid>
    </Grid>
  )
}
