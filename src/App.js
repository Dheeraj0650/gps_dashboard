import Navbar from './Navbar';
import Navbar_2 from './Navbar-2';
import Project from './Projects';
import ProjectDetails from './projectDetails';
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
              <Route path = '/' exact>
                <Project />
              </Route>
              <Route path = '/project-details/:name/:country/:city'>
                <ProjectDetails />
              </Route>
            </div>
          </div>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
