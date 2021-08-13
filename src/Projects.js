import React from 'react';
import ReactDOM from 'react-dom';
import Announcements from './Announcements';
import ProjectsCard from './projectsCard';
import SocialFeedCard from './socialFeedCard';
import './projects.css';

function project(){

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

  return (<div class="container-fluid" style = {{paddingTop:"50px"}}>
  <div class="row">
    <div class="col-md-3">
      {announcementsArray.map((info) => (
        <Announcements
          title = {info.title}
          message = {info.message}
          image = {info.image}/>
      ))}
    </div>
    <div class="col-md-6 projects">
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
    <div class="col-md-3">
      <SocialFeedCard />
    </div>
  </div>
</div>);
}

export default project;
