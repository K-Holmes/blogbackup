import Container from '@mui/material/Container';
import './Components/styles.css';
import Header from './Components/Header';
//import Main from './Main';
import {Route, Routes} from 'react-router-dom';
import TemplatePage from './Components/SidePages/TemplatePage';
import Members from './Components/SidePages/Members';
import About from './Components/SidePages/About';
import Quest from './Components/SidePages/Quest';
import Navbar from './Components/Navbar';
import Register from './Components/SidePages/Register'
import Home from './Components/Blog';
import Classes from './Components/SidePages/Classes';
// import Template from './Components/TemplatePage'
// import {Route, Routes} from 'react-router-dom'
// import Members from './Components/Members'

function App() {
  return (
    <Container maxWidth="lg">
    <div className="App">
      <Header className ="mainheader" title="The Silenced Wolves" />
        <Navbar />
      <div className = "container">
        <Routes>
          <Route path = "/" element={<Home />} />
          <Route path = "/members" element={<Members />} />
          <Route path = "/template" element={<TemplatePage />} />
          <Route path = "/about" element={<About />} />
          <Route path = "/quest" element={<Quest />} />
          <Route path = "/register" element={<Register />} />
          <Route path = "/classes" element={<Classes />} />
        </Routes>
      </div>
    </div>
    </Container>
  );
}

export default App;
