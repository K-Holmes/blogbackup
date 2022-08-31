//display basic 'about us' style article

import * as React from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import Grid from '@mui/material/Grid';
import Container from '@mui/material/Container';
import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import logo from '../SWLogo.png';
import Sidebar from '../Sidebar';
import Footer from '../Footer';
import '../styles.css';
import Avatar from '@mui/material/Avatar';
import Stack from '@mui/material/Stack';
import EastIcon from '@mui/icons-material/East';
import { Link } from 'react-router-dom'


const sidebar = {
  title: 'About/AN',
  description:
    'The Silenced Wolves are a guild of tight-knit members (whether they admit it or not) based entirely on the fictional world I have set up.',
  archives: [

    { title: 'About Us', url: '#' },
    { title: 'Qualifications and Achievements', url: '#' },
    { title: 'Important Persons', url: '#' },
    { title: 'Kingdoms and Territories', url: '#' },
    { title: 'Quest Board', url: '#' },
    { title: 'Guild Games Status', url: '#' },
    { title: 'Members Update', url: '#' },
    { title: 'Founders Date', url: '#' },
  ],
  social: [
    { name: 'Instagram', icon: InstagramIcon },
    { name: 'Twitter', icon: TwitterIcon },
    { name: 'Facebook', icon: FacebookIcon },
  ],
};

const theme = createTheme();

export default function Blog() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Container maxWidth="lg">
        <main>
            <div className = "centerHeading">
            <h1 className = "centerHeading">About Us</h1>
            <img src= {logo} alt="logo" width={350}/>
            <h2>Our Mission</h2>
            <p>The Silenced Wolves are a small guild located in the 
                kingdom of Lyvear. Dedicated to maintaining the peace, 
                they tackle any odd job thrown at them and are currently 
                ranked as a common-level guild. Their true mission is to
                acquire the greatest guild status available to Lyvereans;
                King's Guild. Only given to one guild at a time, this status
                grants for the highest level of respect and access to quests
                sanctioned by the King himself. To acquire this ranking,
                a guild must place first in the annual Guild Games
                hosted by the kingdom. <Link to = "/members">About</Link></p>

            <h3>RANK STATUS</h3>
            {/*Current status of the Silenced Wolves' ranking- Find a way to center */}
            <div className='rankings'>
            <Stack direction="row" spacing={2}>
                <Avatar alt="Starter" src="https://www.colorpsychology.org/wp-content/uploads/2021/05/neon-green-f.jpg" />
                <EastIcon/>
                <Avatar alt="Common level" src="https://www.colorpsychology.org/wp-content/uploads/2021/05/neon-green-f.jpg" />
                <EastIcon/>
                <Avatar alt="Advanced level" src="https://images.saatchiart.com/saatchi/782752/art/7094065/6163389-HSC00001-7.jpg" />
                <EastIcon/>
                <Avatar alt="King's Guild" src="https://images.saatchiart.com/saatchi/782752/art/7094065/6163389-HSC00001-7.jpg" />
            </Stack>
            </div>
            <p>Starter Level- Common Level- Advanced Level- King's Guild</p>
            </div>

          <Grid container spacing={5} sx={{ mt: 3 }}>
            <Sidebar
              title={sidebar.title}
              description={sidebar.description}
              archives={sidebar.archives}
              social={sidebar.social}
            />
          </Grid>
        </main>
      </Container>
      <Footer
        title="Footer"
        description="Something here to give the footer a purpose!"
      />
    </ThemeProvider>
  );
}