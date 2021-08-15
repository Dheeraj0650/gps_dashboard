import React, {useState, useEffect,useContext} from 'react';
import ReactDOM from 'react-dom';
import Announcements from './Announcements';
import ProjectsCard from './projectsCard';
import SocialFeedCard from './socialFeedCard';
import './projects.css';
import { makeStyles } from '@material-ui/core/styles';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles((theme) => ({
  button: {
    display: 'block',
    marginTop: theme.spacing(2),
  },
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120,
  },
}));

const Project = () => {
  const [region, setRegion] = React.useState('');
  useEffect(() => {
    if(region === ""){
      fetch('https://pacific-tundra-98620.herokuapp.com/projects')
          .then((response) => {
            console.log(response.json());
            return response.json();
          })
          .then((data) => {
            console.log(data);
           });
    }
  }, [region]);
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);

  const handleChange = (event) => {
    setRegion(event.target.value);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleOpen = () => {
    setOpen(true);
  };

  let announcementsArray = [{
    'title':'hello',
    'message':'bye bye',
    'image':'https://placeimg.com/640/480/nature'
  },
  {
    'title':'hello',
    'message':'bye bye',
    'image':'https://upload.wikimedia.org/wikipedia/commons/a/a5/Virat_Kohli_in_New_Delhi_on_December_2018.jpg'
  },
  {
    'title':'hello',
    'message':'bye bye',
    'image':'https://upload.wikimedia.org/wikipedia/commons/a/a5/Virat_Kohli_in_New_Delhi_on_December_2018.jpg'
  }];

  let projectsArray = [{
    'name':'hello',
    'country':'india',
    'startDate':'10',
    'endDate':'20',
    'image':'https://placeimg.com/640/480/nature',
    'link1':'https://upload.wikimedia.org/wikipedia/commons/a/a5/Virat_Kohli_in_New_Delhi_on_December_2018.jpg',
    'link2':'https://upload.wikimedia.org/wikipedia/commons/a/a5/Virat_Kohli_in_New_Delhi_on_December_2018.jpg'
  },
  {
    'name':'hello',
    'country':'india',
    'startDate':'10',
    'endDate':'20',
    'image':'https://placeimg.com/640/480/nature',
    'link1':'https://upload.wikimedia.org/wikipedia/commons/a/a5/Virat_Kohli_in_New_Delhi_on_December_2018.jpg',
    'link2':'https://upload.wikimedia.org/wikipedia/commons/a/a5/Virat_Kohli_in_New_Delhi_on_December_2018.jpg'
  },
  {
    'name':'hello',
    'country':'india',
    'startDate':'10',
    'endDate':'20',
    'image':'https://placeimg.com/640/480/nature',
    'link1':'https://upload.wikimedia.org/wikipedia/commons/a/a5/Virat_Kohli_in_New_Delhi_on_December_2018.jpg',
    'link2':'https://upload.wikimedia.org/wikipedia/commons/a/a5/Virat_Kohli_in_New_Delhi_on_December_2018.jpg'
  }];

  return (<div class="container-fluid" style = {{paddingTop:"30px"}}>
  <div class="row">
    <div class="col-md-3" style={{textAlign:"center",marginTop:"30px"}}>
      {announcementsArray.map((info) => (
        <Announcements
          title = {info.title}
          message = {info.message}
          image = {info.image}/>
      ))}
    </div>
    <div class="col-md-6">
      <div class = "row">
        <div class = "col-lg-12" style={{textAlign:"center",paddingBottom:"20px"}}>
              <div>
                <FormControl className={classes.formControl} style={{minWidth: 250}} >
                  <InputLabel id="demo-controlled-open-select-label">Region</InputLabel>
                  <Select
                    labelId="demo-controlled-open-select-label"
                    id="demo-controlled-open-select"
                    open={open}
                    onClose={handleClose}
                    onOpen={handleOpen}
                    value={region}
                    onChange={handleChange}
                  >
                    <MenuItem value="">
                      <em>None</em>
                    </MenuItem>
                    <MenuItem value={'APAC'}>APAC</MenuItem>
                    <MenuItem value={'EUROPE'}>EUROPE</MenuItem>
                    <MenuItem value={'AMERICAS'}>AMERICAS</MenuItem>
                  </Select>
                </FormControl>
              </div>

        </div>
      </div>
      <div className = "row">
        <div className = "col-lg-12 projects">
          {projectsArray.map((info) => (
            <ProjectsCard
              name = {info.name}
              country = {info.country}
              startDate = {info.startDate}
              endDate = {info.endDate}
              image = {info.image}
              link1 = {info.link1}
              link2 = {info.link2}
            />
          ))}
        </div>
      </div>
    </div>
    <div class="col-md-3">
      <SocialFeedCard />
      <SocialFeedCard />
      <SocialFeedCard />
    </div>
  </div>
</div>);
}

export default Project;
