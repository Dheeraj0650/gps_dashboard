import Navbar from './Navbar';
import Navbar_2 from './Navbar-2';
import Project from './Projects';
import ProjectDetails from './projectDetails';
import NewPage from './newPage';
import Login from './Login';
import {Route, BrowserRouter as Router, Switch} from 'react-router-dom';
import './App.css';

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <div className="" style={{position:"absolute",left:"0",right:"0"}}>
            <div class="navbar-container gps-dashboard">
                <Navbar />
            </div>
            <div class="navbar-container gps-navbar">
                <Navbar_2/>
            </div>
            <div class="projects-part">
              <Route path = '/main' exact>
                <Project />
              </Route>
              <Route path = '/project-details/:name/:country/:city'>
                <ProjectDetails />
              </Route>
              <Route path = "/newPage">
                <NewPage />
                <span style={{color:"#6a197d",position:"absolute",left:"37%",fontFamily: "'Noto Sans JP', sans-serif",fontSize:"2rem"}}>Page Under Development</span>
              </Route>
              <Route path = '/' exact>
                <Login />
              </Route>
            </div>
          </div>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
