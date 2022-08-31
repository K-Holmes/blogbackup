//application page (wont actually really do much, just for show)

import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import SendIcon from '@mui/icons-material/Send';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Footer from '../Footer';
import HouseIcon from '@mui/icons-material/House';
import SchoolIcon from '@mui/icons-material/School';
import InputAdornment from '@mui/material/InputAdornment';
import MenuItem from '@mui/material/MenuItem';
// import "bootstrap/dist/css/bootstrap.min.css";
// import { Formik, Field, Form, ErrorMessage } from 'formik';
// import * as Yup from 'yup';

const theme = createTheme();

const classes = [
  {
    value: 'AR',
    label: 'Archer',
  },
  {
    value: 'BN',
    label: 'Barbarian',
  },
  {
    value: 'BD',
    label: 'Bard',
  },
  {
    value: 'DD',
    label: 'Druid',
  },
  {
    value: 'KT',
    label: 'Knight',
  },
  {
    value: 'ME',
    label: 'Mage',
  },
  {
    value: 'PN',
    label: 'Paladin',
  },
  {
    value: 'RE',
    label: 'Rogue',
  },
];

export default function SignUp() {
  const [advClass, setClass] = React.useState('US');

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setClass(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    console.log({
      email: data.get('email'),
      password: data.get('password'),
    });
  };

  return (
    <ThemeProvider theme={theme}>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <Box
          sx={{
            marginTop: 8,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          <Avatar sx={{ m: 1, bgcolor: 'grey' }}>
            <SendIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Guild Application
          </Typography>
          <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 3 }}>
            <Grid container spacing={2}>
              <Grid item xs={12} sm={6}>
                <TextField
                  autoComplete="given-name"
                  name="firstName"
                  required
                  fullWidth
                  id="firstName"
                  label="First Name"
                  autoFocus
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  required
                  fullWidth
                  id="lastName"
                  label="Last Name"
                  name="lastName"
                  autoComplete="family-name"
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  id="outlined-select-country"
                  select
                  required
                  label="Adventuring Class"
                  value={advClass}
                  onChange={handleChange}
                  fullWidth
                  InputProps={{
                    startAdornment: (
                      <InputAdornment position="start">
                        <SchoolIcon />
                      </InputAdornment>
                    ),
                  }}
                >
                  {classes.map((option) => (
            <MenuItem key={option.value} value={option.value}>
              {option.label}
            </MenuItem>
          ))}
        </TextField>
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  name="address"
                  label="Address"
                  id="address"
                  autoComplete="applicant-address"
                  InputProps={{
                    endAdornment: (
                      <InputAdornment position="end">
                        <HouseIcon />
                      </InputAdornment>
                    ),
                  }}
                />
              </Grid>
              <Grid item xs={12}>
                <FormControlLabel
                  control={<Checkbox value="allowExtraEmails" color="secondary" />}
                  label="I want to receive status updates and weekly newsletters via letter mail."
                />
              </Grid>
            </Grid>
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
              color= "secondary"
            >
              Send Application
            </Button>
            <Grid container justifyContent="flex-end">
              <Grid item>
                <Link href="#" variant="body2">
                  Already applied? Check application status
                </Link>
              </Grid>
            </Grid>
          </Box>
        </Box>
        <Footer
        //title="Footer"
        //description="Something here to give the footer a purpose!"
      />
      </Container>
    </ThemeProvider>
  );
}