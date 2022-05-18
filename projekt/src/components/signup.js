
import React from 'react';
import TextField from '@mui/material/TextField';
import LoginIcon from '@mui/icons-material/Login';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';




export default function signup() {
  
  return (
    <div className='bgcolor'>
    <Stack direction="row" spacing={10} className="form">
      <Stack spacing={1}></Stack>
    <>
      <div>
        <h2 className="Title">Wasserstanderfassung</h2>
        <p className="description">
        Herzlich Willkommen! <br></br>
        Hier können Sie Ihren Wasserstand ganz simpel erfassen.
        </p>
      </div>

    <div className="form">
      <Card sx={{ minWidth: 275 }}>
        <CardContent>
          <Stack spacing={3}>
            <TextField required="true" id="standard-basic" label="Kundennnummer" variant="standard" />
            <Button variant="contained" disableElevation>
              Anmelden
            </Button>
          </Stack>
        </CardContent>
      </Card>
      <form>
      </form>
    </div></>
    </Stack>
    </div>
  )
}
