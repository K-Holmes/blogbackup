//contain basic class info and navigation to other classes in more detail

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
                <div className="newgrid">
                    <div>
            <h1 className = "centerHeading">Classes</h1>
            <img src= {logo} alt="logo" width={350}/>
            <h2>What are they?</h2>
            <p>Every adventurer, no matter how small must 
                choose a class to be affiliated with. This 
                can be determined by free choice, skill, or
                 natural affinity. <Link to = "/members">About</Link></p>
                 <h3>Classes</h3>
            <p>The following classes are available to adventurers upon registration; <br/>
            Knight <br/> Bard <br/> Mage <br/> Rogue <br/> Barbarian <br/> Paladin <br/>
            Druid <br/> Archer</p>
            </div>


            {/*Maybe create logo sigils for classes
            <h3>RANK STATUS</h3>*/}
            {/* <div className='rankings'>
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
            <p>Starter Level- Common Level- Advanced Level- King's Guild</p> */}
            <div>
            <Sidebar
              title={sidebar.title}
              description={sidebar.description}
              archives={sidebar.archives}
              social={sidebar.social}
            />
            </div>
            </div>
        </div>
        </main>
      </Container>
      <Footer
        title="Footer"
        description="Something here to give the footer a purpose!"
      />
    </ThemeProvider>
  );
}