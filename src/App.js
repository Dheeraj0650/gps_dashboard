import Navbar from './Navbar';
import Project from './Projects';
import './app.css';

function App() {
  return (
    <div className="App">
      <div className="" style={{position:"absolute",left:"0",right:"0"}}>
        <div class="navbar-container gps-dashboard">
            <Navbar />
        </div>
        <div class="navbar-container gps-navbar">

        </div>

        <div class="container-fluid information-part">
           <Project/>
        </div>

        <div class="container-fluid">

        </div>

        <div className="container-fluid" id = "login" style = {{marginTop:"7rem",display: "flex",justifyContent: "center",alignItems: "center"}}>

        </div>

        <div class="" id = "bottom-section">

        </div>
      </div>
    </div>
  );
}

export default App;
