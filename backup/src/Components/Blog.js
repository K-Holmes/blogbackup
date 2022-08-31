import * as React from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import Grid from '@mui/material/Grid';
import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import logo from './SWLogo.png';
import MainFeaturedPost from './MainFeaturedPost';
import FeaturedPost from './FeaturedPost';
//import Main from './Main';
import Sidebar from './Sidebar';
import Footer from './Footer';
import './styles.css';
// import post1 from './blog-post.1.md';
// import post2 from './blog-post.2.md';
// import post3 from './blog-post.3.md';


const mainFeaturedPost = {
  title: 'About Us',
  description:
    "Whether you're a newcomer in search of a guild, or a frequent traveler brushing yourself up on our history, the Silenced Wolves' ideals remain.",
  image: 'https://murals-weblinc.netdna-ssl.com/product_images/wood-panels-used-as-wall-20534990/5ec82d94bd89dd0018f75968/product_large_image.jpg?c=1590177172',
  imageText: 'main image description',
  linkText: 'Click here to learn more',
};

const featuredPosts = [
  {
    title: 'Meet the Members!',
    date: 'Nov 12',
    description:
      'Come meet the guild members!',
    image: logo,
    imageLabel: 'Image Text',
    path: "/members",
  },
  {
    title: 'Adventuring Classes',
    date: 'Nov 11',
    description:
      'Learn the different types of class selections available to all adventurers.',
    image: logo,
    imageLabel: 'Image Text',
  },
];

//const posts = [post1, post2, post3];

const sidebar = {
  title: 'What are they?',
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
        <main>
          <MainFeaturedPost post={mainFeaturedPost} />
          <Grid container spacing={4}>
            {featuredPosts.map((post) => (
              <FeaturedPost key={post.title} post={post} />
            ))}
          </Grid>
          <Grid container spacing={5} sx={{ mt: 3 }}>
            <Sidebar
              title={sidebar.title}
              description={sidebar.description}
              archives={sidebar.archives}
              social={sidebar.social}
            />
          </Grid>
        </main>
      <Footer
        //title="Footer"
        //description="Something here to give the footer a purpose!"
      />
    </ThemeProvider>
  );
}